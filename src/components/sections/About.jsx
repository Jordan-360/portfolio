export default function About() {
  return (
    <div style={{ maxWidth: '860px', padding: '48px 0' }}>

      {/* HTML comment header */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--syntax-comment)',
        fontStyle: 'italic',
        marginBottom: '32px',
      }}>
        <span className="token-comment">{'// '}</span>
        about.html - Jordan Wood
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
        About Me
      </h1>

      {/* Subtitle */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--text-secondary)',
        marginBottom: '32px',
      }}>
        <span className="token-comment">{'// '}</span>
        Who I am · What I do · What I build
      </div>

      {/* Bio box */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
        fontFamily: 'var(--font-mono)',
        fontSize: '14px',
        lineHeight: '1.8',
        color: 'var(--text-secondary)',
      }}>
        Hello! I'm{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Jordan Wood</span>
        , a software engineer based in Puyallup, WA. I build modern web applications that are{' '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>clean, scalable, and built to last</span>
        . Currently working as a{' '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>Software Engineer Intern at Pierce County IT</span>
        , modernizing enterprise AngularJS applications to Angular 13 on the{' '}
        <span style={{ color: 'var(--syntax-orange)' }}>LINX justice platform</span>
        . I thrive in structured, collaborative environments and love turning complex requirements into maintainable, reliable software.
      </div>

      {/* Current Focus */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '40px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Current Focus
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px 32px',
        }}>
          {[
            { icon: '🔧', text: 'Converting AngularJS to modern Angular at Pierce County IT' },
            { icon: '🤖', text: 'Exploring LLMs and AI-powered web applications' },
            { icon: '⚡', text: 'Building full-stack projects with React and Spring Boot' },
            { icon: '📘', text: 'Deepening TypeScript and component architecture skills' },
            { icon: '🚀', text: 'Actively pursuing full-time SWE and frontend roles' },
            { icon: '✨', text: 'Always learning, always shipping' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
            }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <h2 style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        fontWeight: 600,
        color: 'var(--accent)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        marginBottom: '20px',
      }}>
        Education
      </h2>

      {[
        {
          icon: '🎓',
          school: 'Grand Canyon University',
          location: 'Phoenix, AZ',
          years: 'Sep 2021 – Mar 2025',
          degree: "Bachelor's of Science (B.S.), Software Development",
          details: 'Coursework: Data Structures & Algorithms, Object-Oriented Programming · Web Development Fundamentals · Cloud Deployment & DevOps',
          highlight: null,
        },
        {
          icon: '🏫',
          school: 'Pierce Community College - Puyallup',
          location: 'Puyallup, WA',
          years: 'Sep 2019 – Jun 2021',
          degree: "Associate's of Arts (A.A.), Computer Science",
          details: 'Coursework: Software Engineering Principles · Computer Architecture · Operating Systems · Discrete Mathematics',
          highlight: null,
        },
      ].map((edu, i) => (
        <div key={i} style={{
          border: '1px solid var(--border)',
          borderRadius: '8px',
          padding: '20px 24px',
          marginBottom: '16px',
          fontFamily: 'var(--font-mono)',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{edu.icon}</span>
              <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-white)' }}>{edu.school}</span>
            </div>
            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{edu.years}</span>
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '4px', paddingLeft: '28px' }}>{edu.location}</div>
          <div style={{ fontSize: '13px', color: 'var(--accent)', paddingLeft: '28px', marginBottom: edu.details ? '4px' : '0' }}>{edu.degree}</div>
          {edu.details && (
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)', paddingLeft: '28px' }}>{edu.details}</div>
          )}
        </div>
      ))}

    </div>
  )
}