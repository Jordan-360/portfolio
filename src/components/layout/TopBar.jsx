export default function TopBar() {
  return (
    <div className="titlebar">
      <div className="titlebar__dots">
        <div className="titlebar__dot titlebar__dot--red" />
        <div className="titlebar__dot titlebar__dot--yellow" />
        <div className="titlebar__dot titlebar__dot--green" />
      </div>

      <div style={{
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--bg-primary)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        padding: '3px 12px',
        minWidth: '300px',
        justifyContent: 'space-between',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '12px',
          color: 'var(--text-secondary)',
          fontFamily: 'var(--font-sans)',
        }}>
          <span>🔍</span>
          <span>jordan-wood</span>
          <span style={{ color: 'var(--text-tertiary)' }}>:</span>
          <span style={{ color: 'var(--text-primary)' }}>portfolio</span>
        </div>
        <div style={{
          fontSize: '11px',
          color: 'var(--text-tertiary)',
          fontFamily: 'var(--font-sans)',
          background: 'var(--bg-tertiary)',
          padding: '1px 6px',
          borderRadius: '3px',
        }}>
          Ctrl C
        </div>
      </div>
    </div>
  )
}