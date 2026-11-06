import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import resumePDF from '../../assets/resume.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

const pdfOptions = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts/`,
}

const MAX_PAGE_WIDTH = 800

// Tracks the inner width of an element so the PDF can scale to fit it.
function useElementWidth() {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setWidth(Math.floor(entry.contentRect.width))
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, width]
}

const messageStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '13px',
  color: 'var(--syntax-comment)',
  padding: '32px',
}

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [error, setError] = useState(null)
  const [viewerRef, viewerWidth] = useElementWidth()
  const pageWidth = Math.min(viewerWidth, MAX_PAGE_WIDTH)

  return (
    <div className="page page--wide">
      <div className="page-comment" style={{ marginBottom: '24px' }}>{'// resume.pdf - Jordan Wood'}</div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '24px',
      }}>
        <h1 className="page-title" style={{ marginBottom: 0 }}>Resume</h1>
        <a href={resumePDF} download="Jordan_Wood_Resume.pdf" className="btn-primary">
          ↓ Download PDF
        </a>
      </div>

      <div className="page-comment" style={{ marginBottom: '24px' }}>{'// the official record'}</div>

      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        padding: '16px',
        background: '#1a1a1a',
      }}>
        <div ref={viewerRef} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          {error ? (
            <div style={{ ...messageStyle, color: 'var(--syntax-red)' }}>
              Error loading PDF: {error}
            </div>
          ) : (
            <Document
              file={resumePDF}
              options={pdfOptions}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              onLoadError={(err) => setError(err.message)}
              loading={<div style={messageStyle}>Loading resume...</div>}
            >
              {pageWidth > 0 && Array.from({ length: numPages ?? 0 }, (_, index) => (
                <Page
                  key={index}
                  pageNumber={index + 1}
                  width={pageWidth}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              ))}
            </Document>
          )}
        </div>
      </div>
    </div>
  )
}
