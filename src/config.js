// ============ Central backend (API) configuration ============
//
// All frontend API calls go through API_BASE, so this is the ONE
// place you change when switching between local and deployed backends.
//
// CURRENT BACKEND: https://server-jimmedar.onrender.com  (Render)
//
// To override without editing code, create a file named `.env` in the
// project root with, e.g.:
//       VITE_API_URL=http://localhost:5000   (use your local server)
//       VITE_API_URL=https://another-backend.onrender.com
// Vite reads it automatically — restart `npm run dev` or rebuild.
export const API_BASE = import.meta.env.VITE_API_URL || 'https://server-jimmedar.onrender.com';

/** Build an absolute API URL from a path like "/api/members". */
export function apiUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE}${normalized}`;
}