import { useState } from 'react';
import { apiUrl } from '../config';

export default function VerifyMember({ onClose }) {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [member, setMember] = useState(null);

  const handleChange = (e) => {
    setQuery(e.target.value);
    setError('');
    setMember(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      setError('Please enter your Member ID or registered mobile number.');
      setMember(null);
      return;
    }
    setError('');
    setMember(null);
    setLoading(true);

    try {
      const response = await fetch(
        apiUrl(`/api/members/verify?query=${encodeURIComponent(query.trim())}`)
      );
      const data = await response.json();

      if (response.ok) {
        setMember(data);
      } else {
        setError(data.error || 'Member not found. Please check your Member ID or mobile number.');
      }
    } catch {
      setError('Network error. Could not reach the server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-ink/80 flex items-center justify-center z-50 p-4">
      <div className="bg-paper border-2 border-ink rounded-sm shadow-[8px_8px_0_0_var(--gold)] max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-paper border-b border-ink/10 px-6 py-4 flex items-center justify-between">
          <h3 className="font-display text-xl text-ink">Verify Membership</h3>
          <button
            onClick={onClose}
            className="text-ink/60 hover:text-ink transition"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-sm text-ink/70 mb-6">
            Enter your Member ID or the mobile number you registered with to check your membership status.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="verify-query" className="block text-sm font-medium text-ink mb-2">
              Member ID or Mobile Number *
            </label>
            <input
              type="text"
              id="verify-query"
              name="query"
              value={query}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-ink rounded-sm bg-paper-soft focus:outline-none focus:border-gold transition"
              placeholder="e.g., JJP-K3X9M-AB12CD or 98765xxxxx"
              autoComplete="off"
              required
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mt-4 text-sm">
                {error}
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="condensed text-sm font-semibold tracking-wider border-2 border-ink text-ink px-6 py-3 rounded-sm hover:bg-ink/10 transition"
              >
                Close
              </button>
              <button
                type="submit"
                disabled={loading}
                className="condensed text-sm font-semibold tracking-wider bg-ink text-paper px-6 py-3 rounded-sm hover:bg-gold hover:text-ink transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify Member'}
              </button>
            </div>
          </form>

          {member && (
            <div className="mt-6 bg-paper-soft border-2 border-gold rounded-sm p-5">
              <p className="text-sm text-ink/60 mb-4 condensed uppercase tracking-wider">Member Found</p>
              <dl className="space-y-2.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">Name</dt>
                  <dd className="font-semibold text-ink text-right break-words">{member.name}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">Member ID</dt>
                  <dd className="font-display text-gold-ink text-right break-words">{member.memberId}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">State</dt>
                  <dd className="text-ink text-right">{member.state}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">District</dt>
                  <dd className="text-ink text-right">{member.district}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">Block</dt>
                  <dd className="text-ink text-right">{member.block}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink/60 shrink-0">Joined</dt>
                  <dd className="text-ink text-right">
                    {member.createdAt
                      ? new Date(member.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                      : '—'}
                  </dd>
                </div>
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}