import { useState, useEffect } from 'react'
import { VscFolder, VscPerson, VscMail, VscFile } from 'react-icons/vsc'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import profilePhoto from '../../assets/profile-photo.jpeg'
import resumePDF from '../../assets/resume.pdf'

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
    } else {
      timeout = setTimeout(() => {
        setDeleting(false)
        setRoleIndex(r => (r + 1) % ROLES.length)
        setCharIndex(0)
      }, 300)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <div className="page">

      {/* Comment header */}
      <div className="comment-block" style={{ marginBottom: '32px', fontSize: '13px' }}>
        <div>{'// Hello world!'}</div>
        <div>{'// Welcome to my portfolio — feel free to look around'}</div>
      </div>

      {/* Name + Photo row */}
      <div className="home-hero" style={{ display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '24px' }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 600,
            lineHeight: 1.05,
            color: 'var(--text-white)',
            letterSpacing: '-0.02em',
          }}>
            Jordan
          </h1>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
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
          className="home-hero__photo"
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
        fontSize: '14px',
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
        <button className="btn-outline" onClick={() => onFileOpen('projects.js')}>
          <VscFolder style={{ color: '#fffb01f1' }} /> Projects
        </button>
        <button className="btn-outline" onClick={() => onFileOpen('about.html')}>
          <VscPerson style={{ color: 'var(--syntax-purple)' }} /> About Me
        </button>
        <button className="btn-outline" onClick={() => onFileOpen('contact.css')}>
          <VscMail style={{ color: 'var(--text-secondary)' }} /> Contact
        </button>
      </div>

      {/* Social links */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {[
          { label: 'GitHub',   href: 'https://github.com/Jordan-360',         icon: <SiGithub />,  color: '#ffffff' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/jordanwood526', icon: <FaLinkedin />,  color: '#0a66c2' },
          { label: 'Resume',   href: resumePDF,                               icon: <VscFile />,   color: '#4fc3f7' },
          { label: 'Gmail',    href: 'mailto:jordanwood159@gmail.com',        icon: <SiGmail />,   color: '#EA4335' },
        ].map(link => (
          <a
            key={link.label}
            className="social-pill"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            style={{ '--link-color': link.color }}
          >
            <span className="social-pill__icon">{link.icon}</span>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}