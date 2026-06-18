import { SiGithub, SiGmail, SiLeetcode } from 'react-icons/si'
import { VscMail, VscGlobe } from 'react-icons/vsc'
import { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'

const SOCIALS = [
  {
    icon: <SiGmail />,
    label: 'EMAIL',
    value: 'jordanwood159@gmail.com',
    href: 'mailto:jordanwood159@gmail.com',
    color: '#EA4335',
  },
  {
    icon: <FaLinkedin />,
    label: 'LINKEDIN',
    value: 'linkedin.com/in/jordanwood526',
    href: 'https://linkedin.com/in/jordanwood526',
    color: '#0a66c2',
  },
  {
    icon: <SiLeetcode />,
    label: 'LEETCODE',
    value: 'leetcode.com/u/Jordan-360',
    href: 'https://leetcode.com/u/Jordan-360',
    color: '#FFA116',
  },
  {
    icon: <SiGithub />,
    label: 'GITHUB',
    value: 'github.com/Jordan-360',
    href: 'https://github.com/Jordan-360',
    color: '#ffffff',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-tertiary)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    padding: '10px 14px',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: '13px',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '12px',
    color: 'var(--text-secondary)',
    marginBottom: '6px',
    display: 'block',
    letterSpacing: '0.08em',
  }

  return (
    <div style={{ maxWidth: '960px', padding: '48px 0' }}>

      {/* Comment header */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--syntax-comment)',
        fontStyle: 'italic',
        marginBottom: '32px',
      }}>
        {'// contact.css — let\'s build something '}
      </div>

      {/* Heading */}
      <h1 style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '48px',
        fontWeight: 800,
        color: 'var(--text-white)',
        marginBottom: '12px',
        letterSpacing: '-0.02em',
      }}>
        Contact
      </h1>

      {/* Subtitle */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        marginBottom: '40px',
      }}>
        <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--syntax-comment)',
        fontStyle: 'italic',
        marginBottom: '32px',
      }}>
        {'// open to opportunities, ideas, & collaborations'}
      </div>
      </div>

      {/* Two column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>

        {/* Left — Find Me On */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Find Me On
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SOCIALS.map(social => (
                <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '16px',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  background: 'var(--bg-secondary)',
                  transition: 'border-color 0.15s, background 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = social.color
                  e.currentTarget.style.background = `${social.color}11`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-secondary)'
                }}
              >
                <span style={{
                  color: social.color,
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  width: '36px',
                  height: '36px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '6px',
                  justifyContent: 'center',
                }}>
                  {social.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: social.color,
                    letterSpacing: '0.1em',
                    marginBottom: '2px',
                  }}>
                    {social.label}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                  }}>
                    {social.value}
                  </div>
                </div>
                <span style={{
                  marginLeft: 'auto',
                  color: 'var(--text-tertiary)',
                  fontSize: '16px',
                }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Send A Message */}
        <div>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--accent)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            Send A Message
          </h2>

          <form
            action="https://formspree.io/f/YOUR_FORM_ID"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div>
              <label style={labelStyle}>{'// YOUR_NAME '}
              <span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{'// YOUR_EMAIL '}
              <span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={form.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{'// SUBJECT '}</label>
              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={form.subject}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>{'// MESSAGE '}
              <span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <textarea
                name="message"
                placeholder="your message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
            <button
              type="submit"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '14px',
                fontWeight: 600,
                padding: '12px 24px',
                background: 'var(--accent)',
                color: '#000',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Send Message 
            </button>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: 'var(--text-tertiary)',
            }}>
              {'// lands directly in my inbox'}
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}