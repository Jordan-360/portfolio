import FileIcon from '../ui/FileIcon'
import { FILES } from '../../files'

export default function Sidebar({ activeFile, onFileClick }) {
  return (
    <nav className="sidebar" aria-label="Portfolio files">
      <div className="sidebar__label">Portfolio</div>
      {FILES.map(({ name }) => (
        <button
          key={name}
          type="button"
          className={`sidebar__file ${activeFile === name ? 'sidebar__file--active' : ''}`}
          onClick={() => onFileClick(name)}
        >
          <FileIcon filename={name} />
          {name}
        </button>
      ))}
    </nav>
  )
}
