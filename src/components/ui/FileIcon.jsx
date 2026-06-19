import reactIcon from '../../assets/icons/file_type_reactts.svg'
import tsIcon from '../../assets/icons/file_type_typescript.svg'
import jsIcon from '../../assets/icons/file_type_js.svg'
import jsonIcon from '../../assets/icons/file_type_json.svg'
import mdIcon from '../../assets/icons/file_type_markdown.svg'
import htmlIcon from '../../assets/icons/file_type_html.svg'
import cssIcon from '../../assets/icons/file_type_css.svg'
import pdfIcon from '../../assets/icons/file_type_pdf2.svg'

const ICON_MAP = {
  'tsx':  reactIcon,
  'ts':   tsIcon,
  'js':   jsIcon,
  'json': jsonIcon,
  'md':   mdIcon,
  'html': htmlIcon,
  'css': cssIcon,
  'pdf':  pdfIcon
}

export default function FileIcon({ filename }) {
  const ext = filename.split('.').pop()
  const icon = ICON_MAP[ext]

  if (!icon) return (
    <span style={{ width: '16px', height: '16px', display: 'inline-block' }} />
  )

  return (
    <img
      src={icon}
      alt={ext}
      style={{
        width: '16px',
        height: '16px',
        flexShrink: 0,
        display: 'block',
      }}
    />
  )
}