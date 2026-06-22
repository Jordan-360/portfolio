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
import Resume from './components/sections/Resume'
import { useState, useEffect } from 'react'
import HomeRunAnimation from './components/ui/HomeRunAnimation'

export default function App() {
  const [activeFile, setActiveFile] = useState('home.tsx')
  const [openTabs, setOpenTabs] = useState(['home.tsx'])
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [paletteOpen, setPaletteOpen] = useState(false)

  function openFile(file) {
    if (!openTabs.includes(file)) {
      setOpenTabs([...openTabs, file])
    }
    setActiveFile(file)
  }

  function closeTab(file, e) {
    e.stopPropagation()
    if (file === 'home.tsx') return
    const newTabs = openTabs.filter(t => t !== file)
    setOpenTabs(newTabs)
    if (activeFile === file) {
      setActiveFile(newTabs[newTabs.length - 1] || 'home.tsx')
    }
  }

  const [konamiActivated, setKonamiActivated] = useState(false)

 useEffect(() => {
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let inputSequence = []

  function handleKeyDown(e) {
    inputSequence.push(e.key)
    inputSequence = inputSequence.slice(-konamiCode.length)
    if (inputSequence.join(',') === konamiCode.join(',')) {
      setKonamiActivated(true)
    }
  }

  window.addEventListener('keydown', handleKeyDown)
  return () => window.removeEventListener('keydown', handleKeyDown)
}, [])

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
      <TopBar onSearchClick={() => setPaletteOpen(true)} />
      <MenuBar />
      <div className="ide-body">
        <ActivityBar
          onExplorerClick={(isActive) => {
            if (activeFile !== 'home.tsx') {
              openFile('home.tsx')
              setSidebarOpen(true)
            } else if (isActive) {
              setSidebarOpen(s => !s)
            } else {
              setSidebarOpen(true)
            }
          }}
          onSearchClick={() => setPaletteOpen(true)}
          onFileOpen={openFile}
        />
        <Sidebar
          activeFile={activeFile}
          onFileClick={openFile}
          isOpen={sidebarOpen}
        />
        <div className="editor-area">
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
          <div className="editor-content">
            {SECTIONS[activeFile]}
          </div>
        </div>
      </div>
      <StatusBar activeFile={activeFile} />
      {paletteOpen && (
        <CommandPalette
          onFileOpen={openFile}
          onClose={() => setPaletteOpen(false)}
        />
      )}
        {konamiActivated && (
        <HomeRunAnimation onComplete={() => setKonamiActivated(false)} />
      )}
    </div>
  )
}