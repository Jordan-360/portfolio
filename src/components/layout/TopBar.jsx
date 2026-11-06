const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

export default function TopBar({ onSearchClick }) {
  return (
    <div className="titlebar">
      <div className="titlebar__dots" aria-hidden="true">
        <div className="titlebar__dot titlebar__dot--red"><span>✕</span></div>
        <div className="titlebar__dot titlebar__dot--yellow"><span>−</span></div>
        <div className="titlebar__dot titlebar__dot--green"><span>+</span></div>
      </div>

      <button type="button" className="titlebar__search" onClick={onSearchClick} aria-label="Search files">
        <span className="titlebar__search-label">
          <span>🔍</span>
          <span className="titlebar__search-owner">jordan-wood</span>
          <span className="titlebar__search-owner" style={{ color: 'var(--text-tertiary)' }}>:</span>
          <span style={{ color: 'var(--text-primary)' }}>portfolio</span>
        </span>
        <span className="titlebar__shortcut">{isMac ? '⌘ P' : 'Ctrl P'}</span>
      </button>
    </div>
  )
}
