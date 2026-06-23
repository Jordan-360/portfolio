import { useEffect, useRef } from 'react'

export default function MenuDropdown({ items, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [onClose])

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        minWidth: '220px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
        zIndex: 200,
        padding: '4px 0',
        fontFamily: 'var(--font-sans)',
      }}
    >
      {items.map((item, i) => {
        if (item.divider) {
          return <div key={i} style={{ height: '1px', background: 'var(--border)', margin: '4px 0' }} />
        }
        if (item.section) {
          return (
            <div key={i} style={{
              fontSize: '10px',
              color: 'var(--text-tertiary)',
              padding: '6px 16px 2px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              {item.section}
            </div>
          )
        }
        return (
          <div
            key={i}
            onClick={() => {
              if (!item.disabled) {
                item.onClick?.()
                onClose()
              }
            }}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
              padding: '6px 16px',
              fontSize: '13px',
              color: item.disabled ? 'var(--text-tertiary)' : 'var(--text-primary)',
              cursor: item.disabled ? 'default' : 'pointer',
              opacity: item.disabled ? 0.5 : 1,
            }}
            onMouseEnter={e => { if (!item.disabled) e.currentTarget.style.background = 'var(--bg-hover)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            <span>{item.label}</span>
            {item.shortcut && (
              <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>{item.shortcut}</span>
            )}
          </div>
        )
      })}
    </div>
  )
}