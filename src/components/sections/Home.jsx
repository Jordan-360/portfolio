import { useState, useEffect } from 'react'

const ROLES = [ 
  'Building scalable frontend experiences 🖥️',
  'Exploring LLMs and modern frameworks 🤖',
  'Passionate about AI and web development 🚀',
  'Always learning, always shipping. ✨'
]

export default function Home() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c + 1)
      }, 60)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(c => c - 1)
      }, 30)
    } else if (deleting && charIndex < 0) {
      setDeleting(false)
      setRoleIndex(r => (r + 1) % ROLES.length)
      setCharIndex(0)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <div style={{ maxWidth: '860px', padding: '48px 0' }}>

      {/* Comment header */}
      <div className="comment-block" style={{ marginBottom: '32px', fontSize: '13px' }}>
        <div>{'// Hello world!'}</div>
        <div>{'// Welcome to my portfolio — feel free to look around'}</div>
      </div>

      {/* Name */}
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(48px, 8vw, 80px)',
          fontWeight: 600,
          lineHeight: 1.05,
          color: 'var(--text-white)',
          letterSpacing: '-0.02em',
        }}>
          Jordan
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(48px, 8vw, 80px)',
          fontWeight: 600,
          lineHeight: 1.05,
          color: 'var(--accent)',
          letterSpacing: '-0.02em',
        }}>
          Wood
        </h1>
      </div>

         {/* Role badges */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {[
          { label: 'Software Engineer',   color: 'var(--accent)' },
          { label: 'Web Developer',  color: 'var(--syntax-green)' },
          { label: 'Full Stack Engineer', color: 'var(--syntax-purple)' },
          { label: 'Open to Work',        color: 'var(--syntax-yellow)' },
        ].map(badge => (
          <span
            key={badge.label}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: badge.color,
              border: `1px solid ${badge.color}`,
              borderRadius: '4px',
              padding: '4px 10px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span style={{ fontSize: '8px' }}>●</span>
            {badge.label}
          </span>
        ))}
      </div>

      {/* Typewriter role */}
        <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--text-secondary)',
        marginBottom: '32px',
        minHeight: '28px',
      }}>
        {displayed}
        <span className="cursor" />
      </div>

      {/* Bio */}
        {/* Bio */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '15px',
        lineHeight: '1.8',
        marginBottom: '40px',
        maxWidth: '560px',
        color: 'var(--text-secondary)',
      }}>
        I build modern web applications that are clean, scalable, and built to last. From migrating legacy enterprise systems to crafting full-stack solutions from scratch —{' '}
        <span style={{ color: 'var(--accent)' }}>I turn requirements into reality.</span>
      </div>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
        <button
          onClick={() => {}}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            padding: '10px 20px',
            background: 'var(--accent)',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {'>'} projects.tsx
        </button>
        <button
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            padding: '10px 20px',
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {'>'} about.tsx
        </button>
        <button
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            padding: '10px 20px',
            background: 'transparent',
            color: 'var(--text-primary)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {'>'} contact.tsx
        </button>
      </div>

       {/* Social links */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          { label: 'GitHub',   href: 'https://github.com/Jordan-360' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/Jordan526' },
          { label: 'Resume',   href: '#' },
        ].map(link => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              border: '1px solid var(--border)',
              padding: '6px 14px',
              borderRadius: '4px',
              transition: 'color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.target.style.color = 'var(--accent)'
              e.target.style.borderColor = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.target.style.color = 'var(--text-secondary)'
              e.target.style.borderColor = 'var(--border)'
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}