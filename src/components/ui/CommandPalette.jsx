import { useState, useEffect, useRef } from 'react'
import FileIcon from './FileIcon'

const FILES = [
    { name: 'home.tsx', path: 'src/home.tsx' },
    { name: 'about.html', path: 'src/about.html' },
    { name: 'projects.js', path: 'src/projects.js' },
    { name: 'contact.css', path: 'src/contact.css' },
    { name: 'README.md', path: './README.md' }
]

export default function CommandPalette({ onFileOpen, onClose }) {
    const [query, setQuery] = useState('')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const inputRef = useRef(null)

    const filtered = FILES.filter(f =>
        f.name.toLowerCase().includes(query.toLowerCase())
    )

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    useEffect(() => {
        setSelectedIndex(0)
    }, [query])

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.key === 'Escape') onClose()
            if (e.key === 'ArrowDown') setSelectedIndex(i => Math.min(i + 1, filtered.length - 1))
            if (e.key === 'ArrowUp') setSelectedIndex(i => Math.max(i - 1, 0))
            if (e.key === 'Enter' && filtered[selectedIndex]) {
                onFileOpen(filtered[selectedIndex].name)
                onClose()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [filtered, selectedIndex, onClose, onFileOpen])


    return (
        <>
            {/* Overlay */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 100,
                }}
            />

            {/* Palette */}
            <div style={{
                position: 'fixed',
                top: '80px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '560px',
                background: '#252526',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                zIndex: 101,
                boxShadow: '0 8px 32px rgba(0,0,0,0.6)',
                overflow: 'hidden',
            }}>

                {/* Search input */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 16px',
                    borderBottom: '1px solid var(--border)',
                }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>{'>'}</span>
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Go to file..."
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '14px',
                        }}
                    />
                    <span style={{
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                        background: 'var(--bg-tertiary)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                    }}>Esc</span>
                </div>

                {/* Files section */}
                <div style={{ padding: '6px 0' }}>
                    <div style={{
                        fontSize: '11px',
                        color: 'var(--text-tertiary)',
                        padding: '4px 16px',
                        letterSpacing: '0.08em',
                        fontFamily: 'var(--font-sans)',
                        textTransform: 'uppercase',
                    }}>
                        Files
                    </div>

                    {filtered.map((file, i) => (
                        <div
                            key={file.name}
                            onClick={() => { onFileOpen(file.name); onClose() }}
                            onMouseEnter={() => setSelectedIndex(i)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '10px',
                                padding: '6px 16px',
                                cursor: 'pointer',
                                background: i === selectedIndex ? 'var(--accent-dim)' : 'transparent',
                                borderLeft: i === selectedIndex ? '2px solid var(--accent)' : '2px solid transparent',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <FileIcon filename={file.name} />
                                <span style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '13px',
                                    color: i === selectedIndex ? 'var(--text-white)' : 'var(--text-primary)',
                                }}>
                                    {file.name}
                                </span>
                            </div>
                            <span style={{
                                fontSize: '11px',
                                color: 'var(--text-tertiary)',
                                fontFamily: 'var(--font-sans)',
                            }}>
                                {file.path}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '6px 16px',
                    borderTop: '1px solid var(--border)',
                    fontSize: '11px',
                    color: 'var(--text-tertiary)',
                    fontFamily: 'var(--font-sans)',
                }}>
                    <span>↑↓ navigate</span>
                    <span>↵ open</span>
                    <span>Esc close</span>
                </div>
            </div>
        </>
    )
}