import { useState } from 'react'
import MenuDropdown from '../ui/MenuDropdown'

export default function MenuBar({ openTabs, activeFile, onFileOpen, onTabClose, onCloseAllTabs, onPaletteOpen, onResumeDownload }) {
  console.log('onCloseAllTabs:', onCloseAllTabs)
  const [openMenu, setOpenMenu] = useState(null)

  function toggleMenu(name) {
    setOpenMenu(prev => (prev === name ? null : name))
  }

  const recentFiles = ['home.tsx', 'about.html', 'projects.js', 'skills.json']
    .filter(f => f !== activeFile)

  const MENUS = {
    File: [
      { label: 'New Tab', shortcut: 'Ctrl+T', onClick: () => onFileOpen('home.tsx') },
      { label: 'Open File…', shortcut: 'Ctrl+P', onClick: onPaletteOpen },
      { divider: true },
      { label: 'Close Tab', shortcut: 'Ctrl+W', onClick: () => onTabClose(activeFile, { stopPropagation: () => { } }) },
      { label: 'Close All Tabs', onClick: () => { console.log('close all clicked'); onCloseAllTabs() } },
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
      { label: 'Toggle Sidebar', shortcut: 'Ctrl+B', disabled: true },
      { label: 'Toggle Terminal', shortcut: 'Ctrl+`', disabled: true },
      { divider: true },
      { label: 'Enter Full Screen', shortcut: 'F11', onClick: () => document.documentElement.requestFullscreen?.() },
      { label: 'Zoom In', shortcut: 'Ctrl++', onClick: () => { document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) + 0.1) } },
      { label: 'Zoom Out', shortcut: 'Ctrl+-', onClick: () => { document.body.style.zoom = (parseFloat(document.body.style.zoom || 1) - 0.1) } },
      { label: 'Reset Zoom', onClick: () => { document.body.style.zoom = 1 } },
    ],
    Go: [
      { section: 'Files' },
      { label: 'home.tsx', onClick: () => onFileOpen('home.tsx') },
      { label: 'about.html', onClick: () => onFileOpen('about.html') },
      { label: 'projects.js', onClick: () => onFileOpen('projects.js') },
      { label: 'contact.css', onClick: () => onFileOpen('contact.css') },
      { label: 'resume.pdf', onClick: () => onFileOpen('resume.pdf') },
      { label: 'README.md', onClick: () => onFileOpen('README.md') },
    ],
    Run: [
      { label: 'Start Terminal', shortcut: 'Ctrl+`', disabled: true },
      { label: 'Run Last Command', disabled: true },
    ],
    Terminal: [
      { label: 'New Terminal', shortcut: 'Ctrl+`', disabled: true },
      { label: 'Toggle Terminal', shortcut: 'Ctrl+`', disabled: true },
      { label: 'Clear Terminal', disabled: true },
    ],
    Help: [
      { label: 'GitHub', onClick: () => window.open('https://github.com/Jordan-360', '_blank') },
      { label: 'About', onClick: () => onFileOpen('README.md') },
    ],
  }

  return (
    <div className="menubar">
      {Object.keys(MENUS).map(name => (
        <div key={name} style={{ position: 'relative' }}>
          <div
            className="menubar__item"
            onMouseDown={(e) => {
              e.stopPropagation()
              toggleMenu(name)
            }}
            style={{
              background: openMenu === name ? 'var(--bg-hover)' : 'transparent',
            }}
            onMouseEnter={e => {
              if (openMenu !== name) e.currentTarget.style.background = 'var(--bg-hover)'
            }}
            onMouseLeave={e => {
              if (openMenu !== name) e.currentTarget.style.background = 'transparent'
            }}
          >
            {name}
          </div>
          {openMenu === name && (
            <MenuDropdown items={MENUS[name]} onClose={() => setOpenMenu(null)} />
          )}
        </div>
      ))}
    </div>
  )
}