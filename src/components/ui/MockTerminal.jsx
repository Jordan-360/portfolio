import { useEffect, useState } from 'react'

const LINES = [
    '$ npm run build',
    '> vite build',
    '✓ 142 modules transformed.',
    '✓ built in 1.84s',
    '',
    '$ npm run start',
    '> Local:   http://localhost:5173/',
    '> ready in 312ms',
    '',
    'Status: Jordan Wood — compiling experience since 2021',
    '🟢 Build passed — 0 errors, 0 warnings'
]

export default function MockTerminal({ onComplete }) {
    const [visibleLines, setVisibleLines] = useState([])

    useEffect(() => {
        let i = 0
        const interval = setInterval(() => {
            if (i < LINES.length) {
                setVisibleLines(prev => [...prev, LINES[i]])
                i++
            } else {
                clearInterval(interval)
                setTimeout(() => onComplete?.(), 1500)
            }
        }, 280)
        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div style={{
                width: '520px',
                background: '#0c0c0c',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '16px 20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: '#4fc3f7',
                minHeight: '220px',
            }}>
                {visibleLines.map((line, i) => {
                    const safeLine = line || ''
                    return (
                        <div key={i} style={{ color: safeLine.startsWith('✓') ? 'var(--syntax-green)' : safeLine.startsWith('$') ? 'var(--text-white)' : 'var(--text-secondary)' }}>
                            {safeLine || '\u00A0'}
                        </div>
                    )
                })}
                <span className="cursor" />
            </div>
        </div>
    )
}