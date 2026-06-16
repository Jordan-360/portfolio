import FileIcon from '../ui/FileIcon'

export default function TabBar({ tabs, activeTab, onTabClick, onTabClose }) {
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
            style={{ marginLeft: '6px', opacity: 0.6, fontSize: '16px' }}
            onClick={(e) => onTabClose(tab, e)}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  )
}