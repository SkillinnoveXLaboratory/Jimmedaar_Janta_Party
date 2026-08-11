import { useState } from 'react';
import { adminApi, setAdminToken } from './membersApi';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password) {
      setError('Please enter your username and password.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const data = await adminApi.login(form.username.trim(), form.password);
      setAdminToken(data.token);
      window.location.hash = '#/admin/dashboard';
    } catch (err) {
      setError(
        err.status === 401
          ? 'Invalid username or password.'
          : err.message || 'Login failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="/images/iconv1.jpeg"
            alt="Jimmedaar Janata Party"
            width={72}
            height={72}
            className="mx-auto mb-4 rounded-sm border-2 border-ink w-[72px] h-[72px] object-cover"
          />
          <p className="eyebrow text-ink/60 mb-2">Jimmedaar Janata Party</p>
          <h1 className="jjp-admin-login-title">Admin Login</h1>
        </div>

        <div className="bg-paper border-2 border-ink rounded-sm shadow-[8px_8px_0_0_var(--gold)] p-6 sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-5">
              <label htmlFor="admin-username" className="jjp-admin-label">
                Username
              </label>
              <input
                type="text"
                id="admin-username"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="jjp-admin-input"
                placeholder="Admin username"
                autoComplete="username"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="admin-password" className="jjp-admin-label">
                Password
              </label>
              <input
                type="password"
                id="admin-password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="jjp-admin-input"
                placeholder="Admin password"
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mb-6 text-sm" role="alert">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full condensed text-sm font-semibold tracking-wider bg-ink text-paper px-8 py-3 rounded-sm hover:bg-gold hover:text-ink transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-xs text-ink/50 mt-5 text-center">
            For authorized administrators only.
          </p>
        </div>
      </div>
    </div>
  );
}