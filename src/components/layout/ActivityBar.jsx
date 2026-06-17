import { 
  VscFiles, 
  VscSearch, 
  VscDebugAlt, 
  VscExtensions, 
  VscSettingsGear, 
  VscAccount,
  VscFilePdf 
} from 'react-icons/vsc'
import { useState } from 'react'

const TOP_ICONS = [
  { icon: <VscFiles />,         label: 'Explorer'       },
  { icon: <VscSearch />,        label: 'Search'         },
  { icon: <VscFilePdf />,       label: 'Resume'         },
  { icon: <VscDebugAlt />,      label: 'Run & Debug'    },
  { icon: <VscExtensions />,    label: 'Extensions'     },
]

const BOTTOM_ICONS = [
  { icon: <VscSettingsGear />, label: 'Settings' },
  { icon: <VscAccount />,      label: 'Account'  },
]

export default function ActivityBar({ onExplorerClick, onSearchClick }) {
  const [activeIndex, setActiveIndex] = useState(0)

  function handleClick(i) { 
    const isActive = activeIndex === i
    setActiveIndex(i)
    if(i === 0) onExplorerClick(isActive)
    if(i === 1) onSearchClick()
    if(i === 2) alert('Resume coming soon!')
  }
  return (
    <div className="activitybar">
      {TOP_ICONS.map((item, i) => (
        <div
          key={i}
          className={`activitybar__icon ${activeIndex === i ? 'activitybar__icon--active' : ''}`}
          title={item.label}
          style={{ fontSize: '24px', lineHeight: 1 }}
          onClick={() => handleClick(i)}
        >
           <span style={{ pointerEvents: 'none' }}>
            {item.icon}
          </span>
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
           <span style={{ pointerEvents: 'none' }}>
              {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}