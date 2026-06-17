import { useState } from 'react'
import FileIcon from '../ui/FileIcon'

export default function TabBar({ tabs, activeTab, onTabClick, onTabClose }) {
  const [hoveredClose, setHoveredClose] = useState(null)

  return (
    <div className="tabbar">
      {tabs.map(tab => (
        <div
          key={tab}
          className={`tabbar__tab ${activeTab === tab ? 'tabbar__tab--active' : ''}`}
          onClick={() => onTabClick(tab)}
        >
          <FileIcon filename={tab} />
          {tab}
          <span
            onMouseEnter={() => setHoveredClose(tab)}
            onMouseLeave={() => setHoveredClose(null)}
            onClick={(e) => onTabClose(tab, e)}
            style={{
              marginLeft: '6px',
              fontSize: '16px',
              opacity: hoveredClose === tab ? 1 : 0.3,
              color: hoveredClose === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
              borderRadius: '3px',
              padding: '0 2px',
              border: hoveredClose === tab ? '1px solid var(--text-tertiary)' : '1px solid transparent',
              background: hoveredClose === tab ? 'rgba(255,255,255,0.1)' : 'transparent',
              transition: 'all 0.15s',
              cursor: tab === 'home.tsx' ? 'default' : 'pointer',
              width: '16px',
              height: '16px',
              lineHeight: .9
            }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  )
}