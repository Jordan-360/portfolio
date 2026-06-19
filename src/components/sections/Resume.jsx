import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import resumePDF from '../../assets/resume.pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function Resume() {
  const [numPages, setNumPages] = useState(null)
  const [error, setError] = useState(null)

  return (
    <div style={{ maxWidth: '960px', padding: '48px 0' }}>

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--syntax-comment)',
        fontStyle: 'italic',
        marginBottom: '24px',
      }}>
        {'// resume.pdf - Jordan Wood'}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '32px',
          fontWeight: 800,
          color: 'var(--text-white)',
        }}>
          Resume
        </h1>

        <a
          href={resumePDF}
          download="resume.pdf"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            padding: '10px 20px',
            background: 'var(--accent)',
            color: '#000',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          ↓ Download PDF
        </a>
      </div>

      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        background: '#1a1a1a',
      }}>
        {error ? (
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: '#f44747',
            padding: '32px',
          }}>
            Error loading PDF: {error}
          </div>
        ) : (
          <Document
            file={resumePDF}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            onLoadError={(err) => setError(err.message)}
            loading={
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--syntax-comment)',
                padding: '32px',
              }}>
                Loading resume...
              </div>
            }
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={index}
                pageNumber={index + 1}
                width={800}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            ))}
          </Document>
        )}
      </div>

    </div>
  )
}
