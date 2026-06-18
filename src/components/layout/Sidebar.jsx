import FileIcon from '../ui/FileIcon'

const FILES = [
  'home.tsx',
  'about.html',
  'projects.js',
  'contact.css',
  'README.md',
]

export default function Sidebar({ activeFile, onFileClick, isOpen }) {
  if (!isOpen) return null

  return (
    <div className="sidebar">
      <div className="sidebar__label">Portfolio</div>
      {FILES.map(file => (
        <div
          key={file}
          className={`sidebar__file ${activeFile === file ? 'sidebar__file--active' : ''}`}
          onClick={() => onFileClick(file)}
        >
          <FileIcon filename={file} />
          {file}
        </div>
      ))}
    </div>
  )
}