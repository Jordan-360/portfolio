import { useEffect, useRef } from 'react'
import FileIcon from '../ui/FileIcon'
import { HOME_FILE } from '../../files'

export default function TabBar({ tabs, activeTab, onTabClick, onTabClose }) {
  const barRef = useRef(null)

  // Keep the active tab visible when the tab bar overflows (common on mobile)
  useEffect(() => {
    barRef.current
      ?.querySelector('.tabbar__tab--active')
      ?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [activeTab, tabs])

  return (
    <div className="tabbar" ref={barRef} role="tablist">
      {tabs.map(tab => (
        <div
          key={tab}
          role="tab"
          aria-selected={activeTab === tab}
          className={`tabbar__tab ${activeTab === tab ? 'tabbar__tab--active' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          <FileIcon filename={tab} />
          {tab}
          {tab !== HOME_FILE && (
            <button
              type="button"
              className="tabbar__close"
              aria-label={`Close ${tab}`}
              onClick={e => {
                e.stopPropagation()
                onTabClose(tab)
              }}
            >
              ×
            </button>
          )}
        </div>
      ))}
    </div>
  )
}
