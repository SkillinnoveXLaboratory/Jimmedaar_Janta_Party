import { useEffect, useState, useCallback } from 'react';
import { adminApi, clearAdminToken, getAdminToken } from './membersApi';
import MembersTable from './MembersTable';
import MemberDetail from './MemberDetail';
import MemberEdit from './MemberEdit';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'members', label: 'Members' }
];

export default function AdminDashboard() {
  const [ready, setReady] = useState(false);
  const [adminName, setAdminName] = useState('Admin');
  const [view, setView] = useState('members');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listError, setListError] = useState('');

  const [selectedMember, setSelectedMember] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [toast, setToast] = useState('');
  const [logoutBusy, setLogoutBusy] = useState(false);

  const loadMembers = useCallback(async () => {
    setLoading(true);
    setListError('');
    try {
      const data = await adminApi.listMembers();
      setMembers(data);
    } catch (err) {
      if (err.status === 401) {
        handleUnauthorized();
        return;
      }
      setListError(err.message || 'Failed to load members.');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const token = getAdminToken();
    if (!token) {
      window.location.hash = '#/admin/login';
      return;
    }
    adminApi
      .me()
      .then((data) => {
        setAdminName(data.username);
        setReady(true);
      })
      .catch((err) => {
        if (err.status === 401) {
          handleUnauthorized();
        } else {
          setAdminName('Admin');
          setReady(true);
        }
      });
  }, []);

  useEffect(() => {
    if (ready) loadMembers();
  }, [ready, loadMembers]);

  function handleUnauthorized() {
    clearAdminToken();
    window.location.hash = '#/admin/login';
  }

  const handleView = (member) => {
    setSelectedMember(member);
    setEditingMember(null);
    setSidebarOpen(false);
  };

  const handleEdit = (member) => {
    setEditingMember(member);
    setSelectedMember(null);
    setSidebarOpen(false);
  };

  const handleBackToList = () => {
    setSelectedMember(null);
    setEditingMember(null);
  };

  const confirmDelete = async () => {
    if (!deleting) return;
    try {
      await adminApi.deleteMember(deleting._id);
      setMembers((prev) => prev.filter((m) => m._id !== deleting._id));
      if (selectedMember?._id === deleting._id) setSelectedMember(null);
      if (editingMember?._id === deleting._id) setEditingMember(null);
      setToast(`Member "${deleting.name}" deleted.`);
      setTimeout(() => setToast(''), 3000);
    } catch (err) {
      if (err.status === 401) {
        handleUnauthorized();
        return;
      }
      setListError(err.message || 'Failed to delete member.');
    } finally {
      setDeleting(null);
    }
  };

  const handleSaved = (updated) => {
    setMembers((prev) => prev.map((m) => (m._id === updated._id ? updated : m)));
    setEditingMember(null);
    setToast(`Member "${updated.name}" updated.`);
    setTimeout(() => setToast(''), 3000);
  };

  const handleLogout = async () => {
    setLogoutBusy(true);
    try {
      await adminApi.logout();
    } catch {
      /* ignore — still clear local token */
    }
    clearAdminToken();
    window.location.hash = '#/admin/login';
  };

  const joinedThisWeek = members.filter((m) => {
    if (!m.createdAt) return false;
    const then = new Date(m.createdAt).getTime();
    return Date.now() - then <= 7 * 24 * 60 * 60 * 1000;
  }).length;

  const latest = members.slice(0, 5);
  const pageTitle =
    view === 'dashboard' ? 'Dashboard' : editingMember ? 'Edit Member' : selectedMember ? 'Member Details' : 'Members';

  if (!ready) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center p-4">
        <p className="text-ink/60">Checking session…</p>
      </div>
    );
  }
return (
    <div className="jjp-admin-shell">
      {sidebarOpen && (
        <div className="jjp-admin-backdrop" onClick={() => setSidebarOpen(false)} aria-hidden="true" />
      )}

      {/* Sidebar */}
      <aside className={`jjp-admin-sidebar${sidebarOpen ? ' open' : ''}`}>
        <div className="jjp-admin-sidebar-brand">
          <img src="/images/iconv1.jpeg" alt="JJP" width={40} height={40} className="jjp-admin-logo" />
          <div>
            <div className="condensed font-semibold tracking-wider leading-none">JJP</div>
            <div className="jjp-admin-sidebar-sub">Admin Panel</div>
          </div>
        </div>

        <nav className="jjp-admin-nav" aria-label="Admin">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`jjp-admin-nav-btn${view === item.id ? ' jjp-admin-nav-btn-active' : ''}`}
              onClick={() => {
                setView(item.id);
                setSelectedMember(null);
                setEditingMember(null);
                setSidebarOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="jjp-admin-sidebar-foot">
          <button
            type="button"
            className="jjp-admin-nav-btn jjp-admin-nav-logout"
            onClick={handleLogout}
            disabled={logoutBusy}
          >
            {logoutBusy ? 'Signing out…' : 'Log out'}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="jjp-admin-main">
        <header className="jjp-admin-topbar">
          <button
            type="button"
            className="jjp-admin-hamburger"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {sidebarOpen ? (
                <>
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </>
              ) : (
                <>
                  <path d="M4 6h16"></path>
                  <path d="M4 12h16"></path>
                  <path d="M4 18h16"></path>
                </>
              )}
            </svg>
          </button>
          <h1 className="jjp-admin-topbar-title">{pageTitle}</h1>
          <div className="jjp-admin-topbar-user">
            <span className="condensed text-xs font-semibold tracking-wider">
              {adminName}
            </span>
            <button
              type="button"
              className="jjp-admin-btn jjp-admin-btn-sm jjp-admin-btn-ghost"
              onClick={handleLogout}
              disabled={logoutBusy}
            >
              Log out
            </button>
          </div>
        </header>

        <main className="jjp-admin-content">
          {toast && (
            <div className="jjp-admin-toast" role="status">
              {toast}
            </div>
          )}
{view === 'dashboard' && (
            <div>
              <div className="jjp-admin-stats">
                <div className="jjp-admin-stat">
                  <span className="jjp-admin-stat-num">{members.length}</span>
                  <span className="jjp-admin-stat-label">Total Members</span>
                </div>
                <div className="jjp-admin-stat">
                  <span className="jjp-admin-stat-num">{joinedThisWeek}</span>
                  <span className="jjp-admin-stat-label">Joined This Week</span>
                </div>
                <div className="jjp-admin-stat">
                  <span className="jjp-admin-stat-num">{loading ? '…' : members.filter((m) => !!m.voterId).length}</span>
                  <span className="jjp-admin-stat-label">With Voter ID</span>
                </div>
              </div>

              <div className="jjp-admin-card">
                <div className="jjp-admin-card-header">
                  <h2 className="jjp-admin-card-title">Recent Members</h2>
                  <button
                    type="button"
                    className="jjp-admin-btn jjp-admin-btn-primary jjp-admin-btn-sm"
                    onClick={() => {
                      setView('members');
                      setSelectedMember(null);
                      setEditingMember(null);
                    }}
                  >
                    View All
                  </button>
                </div>
                {latest.length === 0 ? (
                  <p className="text-ink/60 text-sm">No members yet.</p>
                ) : (
                  <div className="jjp-admin-table-wrap">
                    <table className="jjp-admin-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Member ID</th>
                          <th>State</th>
                          <th>Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {latest.map((m) => (
                          <tr key={m._id} onClick={() => handleView(m)} className="jjp-admin-row-click">
                            <td className="font-semibold">{m.name}</td>
                            <td className="font-display text-gold-ink whitespace-nowrap">{m.memberId}</td>
                            <td className="whitespace-nowrap">{m.state}</td>
                            <td className="whitespace-nowrap">
                              {m.createdAt
                                ? new Date(m.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
                                : '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}

          {view === 'members' && editingMember && (
            <MemberEdit member={editingMember} onCancel={handleBackToList} onSaved={handleSaved} />
          )}

          {view === 'members' && !editingMember && selectedMember && (
            <MemberDetail member={selectedMember} onBack={handleBackToList} onEdit={handleEdit} />
          )}

          {view === 'members' && !editingMember && !selectedMember && (
            <div>
              <div className="jjp-admin-section-head">
                <div>
                  <h2 className="jjp-admin-card-title">All Members</h2>
                  <p className="jjp-admin-card-sub">
                    {loading ? 'Loading…' : `${members.length} registered member${members.length === 1 ? '' : 's'}`}
                  </p>
                </div>
                <button type="button" className="jjp-admin-btn jjp-admin-btn-ghost jjp-admin-btn-sm" onClick={loadMembers}>
                  Refresh
                </button>
              </div>

              <MembersTable
                members={members}
                loading={loading}
                error={listError}
                onView={handleView}
                onEdit={handleEdit}
                onDelete={setDeleting}
                onRefresh={loadMembers}
              />
            </div>
          )}
        </main>
      </div>

      {/* Delete confirmation */}
      {deleting && (
        <div className="jjp-admin-modal-overlay">
          <div className="jjp-admin-modal" role="dialog" aria-modal="true" aria-label="Confirm delete">
            <h3 className="jjp-admin-card-title">Delete Member?</h3>
            <p className="jjp-admin-card-sub">
              You are about to permanently delete <strong className="text-ink">{deleting.name}</strong> ({deleting.memberId}). This cannot be undone.
            </p>
            <div className="jjp-admin-row-actions jjp-admin-modal-actions">
              <button type="button" className="jjp-admin-btn jjp-admin-btn-ghost" onClick={() => setDeleting(null)}>
                Cancel
              </button>
              <button type="button" className="jjp-admin-btn jjp-admin-btn-danger" onClick={confirmDelete}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}