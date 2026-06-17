import { useState } from 'react'
import TopBar from './components/layout/TopBar'
import MenuBar from './components/layout/MenuBar'
import ActivityBar from './components/layout/ActivityBar'
import Sidebar from './components/layout/Sidebar'
import TabBar from './components/layout/TabBar'
import StatusBar from './components/layout/StatusBar'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import ReadMe from './components/sections/ReadMe'
import CommandPalette from './components/ui/CommandPalette'

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
    if(file === 'home.tsx') return
    const newTabs = openTabs.filter(t => t !== file)
    setOpenTabs(newTabs)
    if (activeFile === file) {
      setActiveFile(newTabs[newTabs.length - 1] || 'home.tsx')
    }
  }

  const SECTIONS = {
  'home.tsx': <Home onFileOpen={openFile} />,
  'about.html': <About />,
  'projects.js': <Projects />,
  'skills.json': <Skills />,
  'experience.ts': <Experience />,
  'contact.css': <Contact />,
  'README.md': <ReadMe />,
}


  return (
    <div className="ide-container">
      <TopBar onSearchClick={() => setPaletteOpen(true)}/>
      <MenuBar />
      <div className="ide-body">
        <ActivityBar 
          onExplorerClick={(isActive) => { 
            if(isActive) {
              setSidebarOpen(s => !s)
            } else { 
               setSidebarOpen(true)
             }
          }}
          onSearchClick={() => setPaletteOpen(true)}
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
    </div>
  )
}