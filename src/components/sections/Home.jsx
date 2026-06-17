import { useState, useEffect } from 'react'
import { VscFolder, VscPerson, VscMail, VscFile, VscGlobe } from 'react-icons/vsc'
import { SiGithub, SiGmail } from 'react-icons/si'


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
        <button style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          padding: '10px 20px',
          background: 'var(--accent)',
          color: '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <VscFolder /> projects.tsx
        </button>
        <button style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          padding: '10px 20px',
          background: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <VscPerson /> about.tsx
        </button>
        <button style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          padding: '10px 20px',
          background: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <VscMail /> contact.tsx
        </button>
      </div>

     {/* Social links */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
         {[
          { label: 'GitHub',   href: 'https://github.com/Jordan-360',        icon: <SiGithub />,   color: '#ffffff' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/Jordan526',    icon: <VscGlobe />,   color: '#0a66c2' },
          { label: 'Resume',   href: '#',                                     icon: <VscFile />,    color: '#4fc3f7' },
          { label: 'Gmail',    href: 'mailto:jordanwood159@gmail.com',        icon: <SiGmail />,    color: '#EA4335' },
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
              border: `1px solid ${link.color}`,
              padding: '6px 14px',
              borderRadius: '4px',
              transition: 'color 0.15s, border-color 0.15s, background 0.15s',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = link.color
              e.currentTarget.style.background = `${link.color}22`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'var(--text-secondary)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <span style={{ color: link.color }}>{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>

    </div>
  )
}