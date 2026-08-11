import { useState } from 'react';
import { adminApi } from './membersApi';

const FIELDS = [
  { key: 'name', label: 'Name', required: true, placeholder: 'Full name' },
  { key: 'phone', label: 'Mobile Number', required: true, placeholder: '10-digit mobile number' },
  { key: 'email', label: 'Email Address', required: true, placeholder: 'you@example.in' },
  { key: 'voterId', label: 'Voter ID (EPIC)', required: true, placeholder: 'e.g., ABC1234567' },
  { key: 'state', label: 'State', required: true, placeholder: 'State' },
  { key: 'district', label: 'District', required: true, placeholder: 'District' },
  { key: 'block', label: 'Block', required: true, placeholder: 'Block' },
  { key: 'panchayet', label: 'Panchayet / Paurasobha', required: true, placeholder: 'Panchayet / Paurasobha' },
  { key: 'booth', label: 'Booth', required: true, placeholder: 'Booth number' }
];

export default function MemberEdit({ member, onCancel, onSaved }) {
  const [form, setForm] = useState(() => {
    const initial = {};
    FIELDS.forEach((f) => {
      initial[f.key] = member[f.key] !== undefined && member[f.key] !== null ? String(member[f.key]) : '';
    });
    return initial;
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const missing = FIELDS.filter((f) => f.required && !form[f.key].trim());
    if (missing.length > 0) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[A-Za-z]{3}[0-9]{7}$/.test(form.voterId.trim())) {
      setError('Voter ID should be 3 letters followed by 7 digits (e.g., ABC1234567).');
      return;
    }

    setError('');
    setLoading(true);
    try {
      const updated = await adminApi.updateMember(member._id, form);
      onSaved(updated);
    } catch (err) {
      setError(err.status === 401 ? 'Session expired. Please log in again.' : err.message || 'Failed to update member.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="jjp-admin-card" onSubmit={handleSubmit} noValidate>
      <div className="jjp-admin-card-header">
        <div>
          <h2 className="jjp-admin-card-title">Edit Member</h2>
          <p className="jjp-admin-card-sub">
            {member.name} · <span className="font-display text-gold-ink">{member.memberId}</span>
          </p>
        </div>
        <button
          type="button"
          className="jjp-admin-btn jjp-admin-btn-ghost"
          onClick={onCancel}
          disabled={loading}
        >
          ← Cancel
        </button>
      </div>

      <div className="jjp-admin-form-grid">
        {FIELDS.map((field) => (
          <div key={field.key}>
            <label htmlFor={`edit-${field.key}`} className="jjp-admin-label">
              {field.label} {field.required && '*'}
            </label>
            <input
              type="text"
              id={`edit-${field.key}`}
              name={field.key}
              value={form[field.key]}
              onChange={handleChange}
              className="jjp-admin-input"
              placeholder={field.placeholder}
              required
            />
          </div>
        ))}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mt-5 text-sm" role="alert">
          {error}
        </div>
      )}

      <div className="jjp-admin-card-footer">
        <button
          type="button"
          className="jjp-admin-btn jjp-admin-btn-ghost"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="jjp-admin-btn jjp-admin-btn-primary"
          disabled={loading}
        >
          {loading ? 'Saving…' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}