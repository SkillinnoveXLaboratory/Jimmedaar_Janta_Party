// Admin API client — talks to the Express backend (URL from src/config.js)
import { apiUrl } from '../../config';

const TOKEN_KEY = 'jjp_admin_token';

export class ApiError extends Error {
  constructor(message, status = 0, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export function getAdminToken() {
  return localStorage.getItem(TOKEN_KEY) || '';
}

export function setAdminToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request(path, { method = 'GET', body } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getAdminToken();
  if (token) headers.Authorization = `Bearer ${token}`;

  let res;
  try {
    res = await fetch(apiUrl(path), {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined
    });
  } catch {
    throw new ApiError('Network error. Could not reach the server.');
  }

  let data = {};
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }

  if (!res.ok) {
    throw new ApiError(data.error || 'Request failed', res.status, data);
  }
  return data;
}

export const adminApi = {
  login: (username, password) =>
    request('/api/admin/login', { method: 'POST', body: { username, password } }),
  me: () => request('/api/admin/me'),
  logout: () => request('/api/admin/logout', { method: 'POST' }),
  listMembers: () => request('/api/admin/members'),
  getMember: (id) => request(`/api/admin/members/${id}`),
  updateMember: (id, data) => request(`/api/admin/members/${id}`, { method: 'PUT', body: data }),
  deleteMember: (id) => request(`/api/admin/members/${id}`, { method: 'DELETE' })
};