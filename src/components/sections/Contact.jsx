import { useState } from 'react'
import { SiGithub, SiGmail, SiLeetcode } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

const EMAIL = 'jordanwood159@gmail.com'

// Set VITE_FORMSPREE_ID (e.g. in Vercel env vars) to deliver messages through
// Formspree. Without it, the form falls back to opening the visitor's email app.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

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
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!FORMSPREE_ID) {
      const subject = form.subject || `Portfolio message from ${form.name}`
      const body = `${form.message}\n\n— ${form.name} (${form.email})`
      window.location.href =
        `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const statusMessage = {
    idle: FORMSPREE_ID ? '// lands directly in my inbox' : '// opens your email app with the message ready to send',
    sending: '// sending…',
    sent: '// message sent, thanks! I\'ll get back to you soon',
    error: `// something went wrong, email me directly at ${EMAIL}`,
  }[status]

  return (
    <div className="page page--wide">
      <div className="page-comment">{'// contact.css — let\'s build something'}</div>
      <h1 className="page-title">Contact</h1>
      <div className="page-subtitle">{'// open to opportunities, ideas, & collaborations'}</div>

      <div className="contact-layout">

        {/* Left — Find Me On */}
        <div>
          <h2 className="card__heading">Find Me On</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {SOCIALS.map(social => (
              <a
                key={social.label}
                className="social-card"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                style={{ '--link-color': social.color }}
              >
                <span style={{
                  color: social.color,
                  fontSize: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  width: '36px',
                  height: '36px',
                  background: 'var(--bg-tertiary)',
                  borderRadius: '6px',
                }}>
                  {social.icon}
                </span>
                <div className="social-card__text">
                  <div style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: social.color,
                    letterSpacing: '0.1em',
                    marginBottom: '2px',
                  }}>
                    {social.label}
                  </div>
                  <div className="social-card__value">{social.value}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--text-tertiary)', fontSize: '16px' }}>
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right — Send A Message */}
        <div>
          <h2 className="card__heading">Send A Message</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="form-field">
              <label htmlFor="contact-name">
                {'// YOUR_NAME '}<span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <input id="contact-name" className="form-input" type="text" name="name" placeholder="name"
                autoComplete="name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">
                {'// YOUR_EMAIL '}<span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <input id="contact-email" className="form-input" type="email" name="email" placeholder="email"
                autoComplete="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">{'// SUBJECT'}</label>
              <input id="contact-subject" className="form-input" type="text" name="subject" placeholder="subject"
                value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">
                {'// MESSAGE '}<span style={{ color: 'var(--syntax-red)' }}>*</span>
              </label>
              <textarea id="contact-message" className="form-input" name="message" placeholder="your message"
                rows={6} value={form.message} onChange={handleChange} required style={{ resize: 'vertical' }} />
            </div>
            <button type="submit" className="btn-primary" disabled={status === 'sending'}
              style={{ fontSize: '14px', padding: '12px 24px' }}>
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              color: status === 'error' ? 'var(--syntax-red)' : 'var(--text-tertiary)',
            }}>
              {statusMessage}
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
