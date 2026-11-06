import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const VIEWPORT_MARGIN = 8

/**
 * Dropdown anchored to a menubar item. Uses fixed positioning so it isn't
 * clipped by the menubar (which scrolls horizontally on mobile), and is
 * nudged left when it would run off the right edge of the screen.
 */
export default function MenuDropdown({ items, anchorEl, onClose }) {
  const ref = useRef(null)
  const [pos, setPos] = useState(null)

  useLayoutEffect(() => {
    if (!anchorEl || !ref.current) return
    const anchor = anchorEl.getBoundingClientRect()
    const width = ref.current.offsetWidth
    const maxLeft = window.innerWidth - width - VIEWPORT_MARGIN
    setPos({ top: anchor.bottom, left: Math.max(VIEWPORT_MARGIN, Math.min(anchor.left, maxLeft)) })
  }, [anchorEl])

  useEffect(() => {
    function handlePointerDown(e) {
      if (ref.current?.contains(e.target) || anchorEl?.contains(e.target)) return
      onClose()
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', onClose)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', onClose)
    }
  }, [anchorEl, onClose])

  return (
    <div
      ref={ref}
      className="menu-dropdown"
      role="menu"
      style={pos ? { top: pos.top, left: pos.left } : { visibility: 'hidden' }}
    >
      {items.map((item, i) => {
        if (item.divider) {
          return <div key={i} className="menu-dropdown__divider" />
        }
        if (item.section) {
          return <div key={i} className="menu-dropdown__section">{item.section}</div>
        }
        return (
          <button
            key={i}
            type="button"
            role="menuitem"
            className="menu-dropdown__item"
            disabled={item.disabled}
            onClick={() => {
              item.onClick?.()
              onClose()
            }}
          >
            <span>{item.label}</span>
            {item.shortcut && <span className="menu-dropdown__shortcut">{item.shortcut}</span>}
          </button>
        )
      })}
    </div>
  )
}
