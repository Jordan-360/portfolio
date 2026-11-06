import {
  VscFiles,
  VscSearch,
  VscDebugAlt,
  VscExtensions,
  VscSettingsGear,
  VscAccount,
  VscFilePdf,
} from 'react-icons/vsc'

export default function ActivityBar({ onExplorerClick, onSearchClick, onFileOpen, onEasterEgg, onRunDebug }) {
  const topIcons = [
    { icon: <VscFiles />,      label: 'Explorer',    onClick: onExplorerClick },
    { icon: <VscSearch />,     label: 'Search',      onClick: onSearchClick },
    { icon: <VscFilePdf />,    label: 'Resume',      onClick: () => onFileOpen('resume.pdf') },
    { icon: <VscDebugAlt />,   label: 'Run & Debug', onClick: onRunDebug },
    { icon: <VscExtensions />, label: 'Easter Egg',  onClick: onEasterEgg },
  ]

  const bottomIcons = [
    { icon: <VscSettingsGear />, label: 'Settings' },
    { icon: <VscAccount />,      label: 'Account' },
  ]

  return (
    <div className="activitybar">
      {topIcons.map(item => (
        <button
          key={item.label}
          type="button"
          className="activitybar__icon"
          title={item.label}
          aria-label={item.label}
          onClick={item.onClick}
        >
          {item.icon}
        </button>
      ))}
      <div className="activitybar__bottom">
        {bottomIcons.map(item => (
          <span key={item.label} className="activitybar__icon activitybar__icon--static" title={item.label}>
            {item.icon}
          </span>
        ))}
      </div>
    </div>
  )
}
