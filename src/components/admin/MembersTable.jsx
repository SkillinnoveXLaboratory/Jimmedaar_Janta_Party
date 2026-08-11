export default function MembersTable({ members, loading, error, onView, onEdit, onDelete, onRefresh }) {
  const formatDate = (value) => {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  if (loading && members.length === 0) {
    return (
      <div className="jjp-admin-note">
        <p>Loading members…</p>
      </div>
    );
  }

  if (error && members.length === 0) {
    return (
      <div className="jjp-admin-note jjp-admin-note-error">
        <p>{error.message || error}</p>
        <button type="button" className="jjp-admin-btn jjp-admin-btn-primary jjp-admin-btn-sm" onClick={onRefresh}>
          Try Again
        </button>
      </div>
    );
  }

  if (!loading && !error && members.length === 0) {
    return (
      <div className="jjp-admin-note">
        <p>No members registered yet.</p>
      </div>
    );
  }

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm mb-4 text-sm" role="alert">
          {error.message || error}
        </div>
      )}

      <div className="jjp-admin-table-wrap">
        <table className="jjp-admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Member ID</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Voter ID</th>
              <th>State</th>
              <th>District</th>
              <th>Joined</th>
              <th className="jjp-admin-table-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member._id}>
                <td className="font-semibold text-ink">{member.name}</td>
                <td className="font-display text-gold-ink whitespace-nowrap">{member.memberId}</td>
                <td className="whitespace-nowrap">{member.phone}</td>
                <td className="text-ink/75 break-words max-w-[220px]">{member.email}</td>
                <td className="whitespace-nowrap">{member.voterId || '—'}</td>
                <td className="whitespace-nowrap">{member.state}</td>
                <td className="whitespace-nowrap">{member.district}</td>
                <td className="whitespace-nowrap">{formatDate(member.createdAt)}</td>
                <td className="jjp-admin-table-actions">
                  <div className="jjp-admin-row-actions">
                    <button type="button" className="jjp-admin-btn jjp-admin-btn-sm jjp-admin-btn-ghost" onClick={() => onView(member)}>
                      View
                    </button>
                    <button type="button" className="jjp-admin-btn jjp-admin-btn-sm jjp-admin-btn-edit" onClick={() => onEdit(member)}>
                      Edit
                    </button>
                    <button type="button" className="jjp-admin-btn jjp-admin-btn-sm jjp-admin-btn-danger" onClick={() => onDelete(member)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}