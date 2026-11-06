import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import TopBar from './components/layout/TopBar'
import MenuBar from './components/layout/MenuBar'
import ActivityBar from './components/layout/ActivityBar'
import Sidebar from './components/layout/Sidebar'
import TabBar from './components/layout/TabBar'
import StatusBar from './components/layout/StatusBar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import ReadMe from './components/sections/ReadMe'
import CommandPalette from './components/ui/CommandPalette'
import HomeRunAnimation from './components/ui/HomeRunAnimation'
import MockTerminal from './components/ui/MockTerminal'
import resumePDF from './assets/resume.pdf'
import { HOME_FILE } from './files'

// react-pdf + pdf.js are large; only load them when the resume tab is opened.
const Resume = lazy(() => import('./components/sections/Resume'))

const MOBILE_QUERY = '(max-width: 768px)'
const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

function useIsMobile(onEnterMobile) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY)
    const onChange = (e) => {
      setIsMobile(e.matches)
      if (e.matches) onEnterMobile?.()
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [onEnterMobile])

  return isMobile
}

function downloadResume() {
  const link = document.createElement('a')
  link.href = resumePDF
  link.download = 'Jordan_Wood_Resume.pdf'
  link.click()
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(() => !window.matchMedia(MOBILE_QUERY).matches)
  // Collapse the sidebar when the viewport shrinks to mobile size
  const collapseSidebar = useCallback(() => setSidebarOpen(false), [])
  const isMobile = useIsMobile(collapseSidebar)
  const [activeFile, setActiveFile] = useState(HOME_FILE)
  const [openTabs, setOpenTabs] = useState([HOME_FILE])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [konamiActivated, setKonamiActivated] = useState(false)
  const [terminalRunning, setTerminalRunning] = useState(false)

  const openFile = useCallback((file) => {
    setOpenTabs(tabs => (tabs.includes(file) ? tabs : [...tabs, file]))
    setActiveFile(file)
  }, [])

  // On mobile the sidebar is an overlay, so get it out of the way after a pick
  const openFileFromSidebar = useCallback((file) => {
    openFile(file)
    if (isMobile) setSidebarOpen(false)
  }, [openFile, isMobile])

  function closeTab(file) {
    if (file === HOME_FILE) return
    const remaining = openTabs.filter(t => t !== file)
    setOpenTabs(remaining)
    if (activeFile === file) setActiveFile(remaining[remaining.length - 1] || HOME_FILE)
  }

  const closeAllTabs = useCallback(() => {
    setOpenTabs([HOME_FILE])
    setActiveFile(HOME_FILE)
  }, [])

  const toggleSidebar = useCallback(() => setSidebarOpen(open => !open), [])
  const openPalette = useCallback(() => setPaletteOpen(true), [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])
  const endKonami = useCallback(() => setKonamiActivated(false), [])
  const endTerminal = useCallback(() => setTerminalRunning(false), [])

  // Global keyboard shortcuts + Konami code easter egg
  useEffect(() => {
    let inputSequence = []

    function handleKeyDown(e) {
      const mod = e.ctrlKey || e.metaKey
      if (mod && e.key.toLowerCase() === 'p') {
        e.preventDefault()
        setPaletteOpen(true)
        return
      }
      if (mod && e.key.toLowerCase() === 'b') {
        e.preventDefault()
        toggleSidebar()
        return
      }

      inputSequence = [...inputSequence, e.key].slice(-KONAMI_CODE.length)
      if (inputSequence.join(',') === KONAMI_CODE.join(',')) {
        setKonamiActivated(true)
        inputSequence = []
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  const SECTIONS = {
    'home.tsx': <Home onFileOpen={openFile} />,
    'about.html': <About />,
    'projects.js': <Projects />,
    'contact.css': <Contact />,
    'resume.pdf': <Resume />,
    'README.md': <ReadMe />,
  }

  return (
    <div className="ide-container">
      <TopBar onSearchClick={openPalette} />
      <MenuBar
        activeFile={activeFile}
        onFileOpen={openFile}
        onTabClose={closeTab}
        onCloseAllTabs={closeAllTabs}
        onPaletteOpen={openPalette}
        onToggleSidebar={toggleSidebar}
        onRunTerminal={() => setTerminalRunning(true)}
        onResumeDownload={downloadResume}
      />
      <div className="ide-body">
        <ActivityBar
          onExplorerClick={toggleSidebar}
          onSearchClick={openPalette}
          onFileOpen={openFile}
          onEasterEgg={() => setKonamiActivated(true)}
          onRunDebug={() => setTerminalRunning(true)}
        />
        {sidebarOpen && isMobile && (
          <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />
        )}
        {sidebarOpen && (
          <Sidebar activeFile={activeFile} onFileClick={openFileFromSidebar} />
        )}
        <main className="editor-area">
          <TabBar
            tabs={openTabs}
            activeTab={activeFile}
            onTabClick={openFile}
            onTabClose={closeTab}
          />
          <div className="breadcrumb">
            <span>jordan-wood</span>
            <span className="breadcrumb__sep">›</span>
            <span>src</span>
            <span className="breadcrumb__sep">›</span>
            <span style={{ color: 'var(--accent)' }}>{activeFile}</span>
          </div>
          <div className="editor-content" key={activeFile}>
            <Suspense fallback={<div className="page-comment" style={{ padding: '48px 0' }}>{'// loading…'}</div>}>
              {SECTIONS[activeFile] ?? SECTIONS[HOME_FILE]}
            </Suspense>
          </div>
        </main>
      </div>
      <StatusBar activeFile={activeFile} />
      {paletteOpen && (
        <CommandPalette onFileOpen={openFile} onClose={closePalette} />
      )}
      {konamiActivated && (
        <HomeRunAnimation onComplete={endKonami} />
      )}
      {terminalRunning && (
        <MockTerminal onComplete={endTerminal} />
      )}
    </div>
  )
}
