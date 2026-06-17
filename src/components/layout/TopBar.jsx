import { useState } from 'react'

export default function TopBar({ onSearchClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="titlebar">
      <div
        className="titlebar__dots"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="titlebar__dot titlebar__dot--red" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', color: '#000', fontWeight: 700, lineHeight: 2 }}>
          {hovered ? '✕' : ''}
        </div>
        <div className="titlebar__dot titlebar__dot--yellow" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#000', fontWeight: 700, lineHeight: 1 }}>
          {hovered ? '−' : ''}
        </div>
        <div className="titlebar__dot titlebar__dot--green" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#000', fontWeight: 700, lineHeight: 1 }}>
          {hovered ? '+' : ''}
        </div>
      </div>

      <div
        onClick={onSearchClick}
        style={{
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
          cursor: 'pointer',
        }}
      >
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