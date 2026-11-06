import { useCallback, useState } from 'react'
import MenuDropdown from '../ui/MenuDropdown'
import { FILES } from '../../files'

function changeZoom(delta) {
  const current = parseFloat(document.body.style.zoom || 1)
  document.body.style.zoom = Math.min(2, Math.max(0.5, current + delta))
}

export default function MenuBar({
  activeFile,
  onFileOpen,
  onTabClose,
  onCloseAllTabs,
  onPaletteOpen,
  onToggleSidebar,
  onRunTerminal,
  onResumeDownload,
}) {
  // { name, anchorEl } of the open menu, or null
  const [openMenu, setOpenMenu] = useState(null)
  const closeMenu = useCallback(() => setOpenMenu(null), [])

  function toggleMenu(name, anchorEl) {
    setOpenMenu(prev => (prev?.name === name ? null : { name, anchorEl }))
  }

  const recentFiles = ['home.tsx', 'about.html', 'projects.js', 'README.md']
    .filter(f => f !== activeFile)

  const MENUS = {
    File: [
      { label: 'New Tab', shortcut: 'Ctrl+T', onClick: () => onFileOpen('home.tsx') },
      { label: 'Open File…', shortcut: 'Ctrl+P', onClick: onPaletteOpen },
      { divider: true },
      { label: 'Close Tab', shortcut: 'Ctrl+W', onClick: () => onTabClose(activeFile) },
      { label: 'Close All Tabs', onClick: onCloseAllTabs },
      { divider: true },
      { section: 'Open Recent' },
      ...recentFiles.map(f => ({ label: f, onClick: () => onFileOpen(f) })),
      { divider: true },
      { label: 'Download Resume', onClick: onResumeDownload },
    ],
    Edit: [
      { label: 'Find…', shortcut: 'Ctrl+P', onClick: onPaletteOpen },
      { divider: true },
      { label: 'Select All', shortcut: 'Ctrl+A', onClick: () => document.execCommand('selectAll') },
      { label: 'Copy', shortcut: 'Ctrl+C', onClick: () => document.execCommand('copy') },
    ],
    View: [
      { label: 'Command Palette', shortcut: 'Ctrl+P', onClick: onPaletteOpen },
      { label: 'Toggle Sidebar', shortcut: 'Ctrl+B', onClick: onToggleSidebar },
      { label: 'Toggle Terminal', shortcut: 'Ctrl+`', disabled: true },
      { divider: true },
      { label: 'Enter Full Screen', shortcut: 'F11', onClick: () => document.documentElement.requestFullscreen?.() },
      { label: 'Zoom In', shortcut: 'Ctrl++', onClick: () => changeZoom(0.1) },
      { label: 'Zoom Out', shortcut: 'Ctrl+-', onClick: () => changeZoom(-0.1) },
      { label: 'Reset Zoom', onClick: () => { document.body.style.zoom = 1 } },
    ],
    Go: [
      { section: 'Files' },
      ...FILES.map(({ name }) => ({ label: name, onClick: () => onFileOpen(name) })),
    ],
    Run: [
      { label: 'Start Terminal', shortcut: 'Ctrl+`', onClick: onRunTerminal },
      { label: 'Run Last Command', disabled: true },
    ],
    Terminal: [
      { label: 'New Terminal', shortcut: 'Ctrl+`', onClick: onRunTerminal },
      { label: 'Toggle Terminal', shortcut: 'Ctrl+`', disabled: true },
      { label: 'Clear Terminal', disabled: true },
    ],
    Help: [
      { label: 'GitHub', onClick: () => window.open('https://github.com/Jordan-360', '_blank', 'noopener') },
      { label: 'About', onClick: () => onFileOpen('README.md') },
    ],
  }

  return (
    <div className="menubar" onScroll={closeMenu}>
      {Object.keys(MENUS).map(name => (
        <button
          key={name}
          type="button"
          className={`menubar__item ${openMenu?.name === name ? 'menubar__item--open' : ''}`}
          aria-haspopup="menu"
          aria-expanded={openMenu?.name === name}
          onClick={e => toggleMenu(name, e.currentTarget)}
        >
          {name}
        </button>
      ))}
      {openMenu && (
        <MenuDropdown
          key={openMenu.name}
          items={MENUS[openMenu.name]}
          anchorEl={openMenu.anchorEl}
          onClose={closeMenu}
        />
      )}
    </div>
  )
}
