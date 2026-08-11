const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://sarif2rx:JDNfiZaHnYSge35v@cluster0.4utgxra.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    return seedAdmin();
  })
  .catch((err) => console.error('MongoDB connection error:', err));

// Member Schema
const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  block: { type: String, required: true },
  panchayet: { type: String, required: true },
  booth: { type: String, required: true },
  voterId: { type: String, required: true },
  memberId: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Member = mongoose.model('Member', memberSchema);

// ---------- Admin ----------

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Admin = mongoose.model('Admin', adminSchema);

// Store password as salt:hash using Node's built-in scrypt (no extra dependencies)
function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(String(password), salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password, stored) {
  if (!stored || !stored.includes(':')) return false;
  const [salt, hash] = stored.split(':');
  try {
    const calc = crypto.scryptSync(String(password), salt, 64).toString('hex');
    return crypto.timingSafeEqual(Buffer.from(calc, 'hex'), Buffer.from(hash, 'hex'));
  } catch {
    return false;
  }
}

// Seed a default admin on first run (idempotent)
async function seedAdmin() {
  try {
    const existing = await Admin.findOne({});
    if (existing) {
      console.log('Admin user already exists:', existing.username);
      return;
    }
    const username = (process.env.ADMIN_USERNAME || 'admin').trim();
    const password = process.env.ADMIN_PASSWORD || 'admin123';
    await Admin.create({ username, passwordHash: hashPassword(password) });
    console.log('Admin seeded -> username:', username, '| password:', password);
    console.log('!! Change the admin password after first login.');
  } catch (err) {
    console.error('Admin seed error:', err);
  }
}

// In-memory admin sessions: token -> { username, expiresAt }
const adminSessions = new Map();
const SESSION_TTL = 12 * 60 * 60 * 1000; // 12 hours

function requireAdmin(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  const session = adminSessions.get(token);
  if (!session || session.expiresAt < Date.now()) {
    if (session) adminSessions.delete(token);
    return res.status(401).json({ error: 'Unauthorized. Please log in again.' });
  }
  req.admin = { username: session.username };
  next();
}

// Generate unique Member ID
function generateMemberId() {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `JJP-${timestamp}-${random}`;
}

// POST route - Create new member
app.post('/api/members', async (req, res) => {
  try {
    const { name, phone, email, voterId, state, district, block, panchayet, booth } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !voterId || !state || !district || !block || !panchayet || !booth) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Generate unique Member ID
    const memberId = generateMemberId();

    // Create new member
    const newMember = new Member({
      name,
      phone,
      email,
      voterId: String(voterId).trim().toUpperCase(),
      state,
      district,
      block,
      panchayet,
      booth,
      memberId
    });

    await newMember.save();

    res.status(201).json({
      message: 'Member registered successfully',
      memberId: newMember.memberId,
      member: newMember
    });
  } catch (error) {
    console.error('Error creating member:', error);
    res.status(500).json({ error: 'Failed to register member' });
  }
});

// GET route - Verify member by Member ID or registered mobile number
app.get('/api/members/verify', async (req, res) => {
  try {
    const { query } = req.query;
    if (!query || !String(query).trim()) {
      return res.status(400).json({ error: 'Query is required' });
    }
    const q = String(query).trim();
    // Match Member ID (stored uppercase) or the registered mobile number
    const member = await Member.findOne({
      $or: [{ memberId: q.toUpperCase() }, { phone: q }]
    });
    if (!member) {
      return res.status(404).json({ error: 'Member not found. Please check your Member ID or mobile number.' });
    }
    res.status(200).json(member);
  } catch (error) {
    console.error('Error verifying member:', error);
    res.status(500).json({ error: 'Failed to verify member' });
  }
});

// GET route - Get member by ID
app.get('/api/members/:memberId', async (req, res) => {
  try {
    const { memberId } = req.params;
    const member = await Member.findOne({ memberId });

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.status(200).json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

// GET route - Get all members (for admin purposes)
app.get('/api/members', async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

// ---------- Admin: auth ----------

app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
    const admin = await Admin.findOne({ username: String(username).trim() });
    if (!admin || !verifyPassword(password, admin.passwordHash)) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }
    const token = crypto.randomBytes(32).toString('hex');
    adminSessions.set(token, { username: admin.username, expiresAt: Date.now() + SESSION_TTL });
    res.status(200).json({ token, username: admin.username, message: 'Login successful' });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Login failed. Please try again.' });
  }
});

app.get('/api/admin/me', requireAdmin, (req, res) => {
  res.status(200).json({ username: req.admin.username });
});

app.post('/api/admin/logout', requireAdmin, (req, res) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  adminSessions.delete(token);
  res.status(200).json({ message: 'Logged out' });
});

// ---------- Admin: member management ----------

app.get('/api/admin/members', requireAdmin, async (req, res) => {
  try {
    const members = await Member.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
});

app.get('/api/admin/members/:id', requireAdmin, async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.status(200).json(member);
  } catch (error) {
    console.error('Error fetching member:', error);
    res.status(500).json({ error: 'Failed to fetch member' });
  }
});

app.put('/api/admin/members/:id', requireAdmin, async (req, res) => {
  try {
    const { name, phone, email, voterId, state, district, block, panchayet, booth } = req.body;
    const updates = {};
    if (name !== undefined) updates.name = String(name).trim();
    if (phone !== undefined) updates.phone = String(phone).trim();
    if (email !== undefined) updates.email = String(email).trim();
    if (voterId !== undefined) updates.voterId = String(voterId).trim().toUpperCase();
    if (state !== undefined) updates.state = String(state).trim();
    if (district !== undefined) updates.district = String(district).trim();
    if (block !== undefined) updates.block = String(block).trim();
    if (panchayet !== undefined) updates.panchayet = String(panchayet).trim();
    if (booth !== undefined) updates.booth = String(booth).trim();

    const member = await Member.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true
    });
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.status(200).json(member);
  } catch (error) {
    console.error('Error updating member:', error);
    res.status(500).json({ error: 'Failed to update member' });
  }
});

app.delete('/api/admin/members/:id', requireAdmin, async (req, res) => {
  try {
    const member = await Member.findByIdAndDelete(req.params.id);
    if (!member) return res.status(404).json({ error: 'Member not found' });
    res.status(200).json({ message: 'Member deleted', memberId: member.memberId });
  } catch (error) {
    console.error('Error deleting member:', error);
    res.status(500).json({ error: 'Failed to delete member' });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
