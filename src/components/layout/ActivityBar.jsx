import { 
  VscFiles, 
  VscSearch, 
  VscSourceControl, 
  VscDebugAlt, 
  VscExtensions, 
  VscSettingsGear, 
  VscAccount 
} from 'react-icons/vsc'

const TOP_ICONS = [
  { icon: <VscFiles />,         label: 'Explorer'       },
  { icon: <VscSearch />,        label: 'Search'         },
  { icon: <VscSourceControl />, label: 'Source Control' },
  { icon: <VscDebugAlt />,      label: 'Run & Debug'    },
  { icon: <VscExtensions />,    label: 'Extensions'     },
]

const BOTTOM_ICONS = [
  { icon: <VscSettingsGear />, label: 'Settings' },
  { icon: <VscAccount />,      label: 'Account'  },
]

export default function ActivityBar({ onExplorerClick }) {
  return (
    <div className="activitybar">
      {TOP_ICONS.map((item, i) => (
        <div
          key={i}
          className={`activitybar__icon ${i === 0 ? 'activitybar__icon--active' : ''}`}
          title={item.label}
          style={{ fontSize: '24px', lineHeight: 1 }}
          onClick={i === 0 ? onExplorerClick : undefined}
        >
          {item.icon}
        </div>
      ))}
      <div className="activitybar__bottom">
        {BOTTOM_ICONS.map((item, i) => (
          <div
            key={i}
            className="activitybar__icon"
            title={item.label}
            style={{ fontSize: '24px', lineHeight: 1 }}
          >
            {item.icon}
          </div>
        ))}
      </div>
    </div>
  )
}