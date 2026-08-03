import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const file = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/components/generated/ViralVideos.jsx');
let text = fs.readFileSync(file, 'utf8');

const titles = [
  'JJP Agenda 01: Kisanon Ko Facility Denge',
  'JJP Agenda 02: Contract Coal Khatm Karenge',
  'JJP Agenda 03: Garibon Ke Liye Rojgar Laayenge',
  'JJP Agenda 04: Food Items Par Tax Kam Karenge',
  'JJP Agenda 05: Jahrile Fruit Bechne Nahi Denge',
  'JJP Agenda 06: Sarkari Schoolon Mein Acchi Shiksha',
  'JJP Agenda 07: Sarkari Hospital Mein Acchi Treatment',
  'JJP Agenda 08: Badhti Hui Mahangai Rokengen',
];

const bodies = [
  'Jimmedaar Janata Party farmers ke liye MSP, irrigation, cold storage aur easy credit ensure karegi.',
  'Illegal coal contracts aur opaque deals khatm — transparent policy for workers and land.',
  'Local skill training, fair-wage work aur block-level rojgar desks for poor families.',
  'Atta, dal, oil, sabzi, doodh — basic food par tax burden ghatayenge.',
  'Toxic fruit aur adulteration par strict check — safe food ek haq hai.',
  'Trained teachers, books, toilets, digital tools — har bachche ko barabar mauka.',
  'Doctors duty par, medicines stock mein, saaf wards — sarkari hospital healing ka jagah.',
  'Fuel, food, rent aur daily essentials par control — mahangai rokna hai.',
];

// Collect unique visible title-like lines that are not structural keywords
const skip = /Source:|Advertisement|Agenda videos|The agendas on|More from|camera\.|Clips on|Jimmedaar Janata Party isi|#GenZ|#Youth|#Jimmedaar|JJP Agenda/;

const titleMatches = [...text.matchAll(/\n\s{6}([^\n{<][^\n]{20,220})\n/g)]
  .map((m) => m[1].trim())
  .filter((t) => !skip.test(t) && !t.startsWith('<') && !t.startsWith('{') && !t.includes('className') && !t.includes('href='));

const unique = [...new Set(titleMatches)];
console.log('Found title-like strings:', unique.length);

let i = 0;
for (const old of unique) {
  const title = titles[i % titles.length];
  const body = bodies[i % bodies.length];
  // Only replace exact text nodes that match old string as full line content
  const escaped = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(\\n\\s{6})${escaped}(\\n)`, 'g');
  const count = (text.match(re) || []).length;
  if (count > 0) {
    text = text.replace(re, `$1${title}$2`);
    console.log(`→ ${title} (${count}x)`);
    i++;
  }
}

// Fix typo in agenda 08
text = text.split('Mahangai Rokengen').join('Mahangai Rokenge');

// Soft-replace remaining long Hindi/English protest blurbs with cycling bodies
const longBlurbs = [...text.matchAll(/\n\s{6}([A-Za-z\u0900-\u097F][^\n]{80,400})\n/g)].map((m) => m[1]);
let b = 0;
for (const old of [...new Set(longBlurbs)]) {
  if (skip.test(old) || titles.includes(old) || old.includes('Jimmedaar Janata Party isi')) continue;
  if (bodies.includes(old)) continue;
  text = text.split(old).join(bodies[b % bodies.length]);
  b++;
}

fs.writeFileSync(file, text, 'utf8');
console.log('\nViralVideos.jsx updated.');
