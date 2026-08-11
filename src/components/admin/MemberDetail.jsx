export default function MemberDetail({ member, onBack, onEdit }) {
  const formatDate = (value) => {
    if (!value) return '—';
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return '—';
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const rows = [
    ['Name', member.name],
    ['Member ID', member.memberId],
    ['Mobile Number', member.phone],
    ['Email', member.email],
    ['Voter ID (EPIC)', member.voterId || '—'],
    ['State', member.state],
    ['District', member.district],
    ['Block', member.block],
    ['Panchayet / Paurasobha', member.panchayet],
    ['Booth', member.booth],
    ['Joined On', formatDate(member.createdAt)],
    ['Record ID', member._id]
  ];

  return (
    <div className="jjp-admin-card">
      <div className="jjp-admin-card-header">
        <div>
          <h2 className="jjp-admin-card-title">Member Details</h2>
          <p className="jjp-admin-card-sub">{member.memberId}</p>
        </div>
        <div className="jjp-admin-row-actions">
          <button type="button" className="jjp-admin-btn jjp-admin-btn-ghost" onClick={onBack}>
            ← Back
          </button>
          <button
            type="button"
            className="jjp-admin-btn jjp-admin-btn-primary"
            onClick={() => onEdit(member)}
          >
            Edit Member
          </button>
        </div>
      </div>

      <div className="jjp-admin-detail-grid">
        {rows.map(([label, value]) => (
          <div key={label} className="jjp-admin-detail-row">
            <dt className="jjp-admin-detail-label">{label}</dt>
            <dd className="jjp-admin-detail-value">{value ?? '—'}</dd>
          </div>
        ))}
      </div>

      <div className="jjp-admin-card-footer">
        <span className="jjp-admin-badge">Member</span>
        <span className="jjp-admin-badge">{member.state}</span>
        <span className="jjp-admin-badge">✓ Verified</span>
      </div>
    </div>
  );
}