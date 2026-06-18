import { useState, useEffect } from 'react'
import { VscFolder, VscPerson, VscMail, VscFile, VscGlobe } from 'react-icons/vsc'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import profilePhoto from '../../assets/cropped phot.jpeg'


const ROLES = [
  'Building scalable frontend experiences 🖥️',
  'Exploring LLMs and modern frameworks 🤖',
  'Passionate about AI and web development 🚀',
  'Always learning, always shipping. ✨'
]

export default function Home({ onFileOpen }) {
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

      {/* Name + Photo row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '24px' }}>
        <div>
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

        {/* Photo */}
        <img
          src={profilePhoto}
          alt="Jordan Wood"
          style={{
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'center top',
            border: '3px solid var(--accent)',
            boxShadow: '0 0 20px var(--accent-glow), 0 0 40px var(--accent-glow)',
            filter: 'grayscale(10%)',
            flexShrink: 0,
          }}
        />
      </div>

      {/* Role badges */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
        {[
          { label: 'Software Engineer',   color: 'var(--accent)' },
          { label: 'Web Developer',       color: 'var(--syntax-green)' },
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
        <button onClick={() => onFileOpen('projects.js')} style={{
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
          <VscFolder style={{ color: '#fffb01f1' }} /> Projects
        </button>
        <button onClick={() => onFileOpen('about.html')} style={{
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
          <VscPerson style={{ color: 'var(--syntax-purple)' }} /> About Me
        </button>
        <button onClick={() => onFileOpen('contact.css')} style={{
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
          <VscMail style={{ color: 'var(--text-secondary)' }} /> Contact
        </button>
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          { label: 'GitHub',   href: 'https://github.com/Jordan-360',         icon: <SiGithub />,  color: '#ffffff' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/jordanwood526', icon: <FaLinkedin />,  color: '#0a66c2' },
          { label: 'Resume',   href: '#',                                       icon: <VscFile />,   color: '#4fc3f7' },
          { label: 'Gmail',    href: 'mailto:jordanwood159@gmail.com',          icon: <SiGmail />,   color: '#EA4335' },
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
              lineHeight: 1
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