export default function About() {
  const skills = {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    'Frameworks/Tools': ['Spring Boot', 'React.js', 'Angular 13', 'AngularJS', 'RxJS', 'REST APIs', 'MySQL', 'Node.js', 'Git/GitHub', 'Bitbucket', 'Vite'],
    Concepts: ['OOP', 'SDLC', 'Agile/Scrum', 'Component-Based Architecture', 'API Integration', 'MVC', 'Unit Testing', 'Data Structures & Algorithms', 'System Integration'],
    'CI/CD & DevOps': ['Jenkins', 'CI/CD Pipelines', 'Git Branching', 'Automated Build Verification', 'Bash/PowerShell'],
  }

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
        {'<!-- about.html - Jordan Wood -->'}
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
                    {"// who I am · what I know · where I've been"}
                </div>
            </div>
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
        {"Hello! I'm "}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Jordan Wood</span>
        {'. '}
        {'I got into software engineering the way a lot of people do: through '}
        <span style={{ color: 'var(--syntax-green)' }}>gaming</span>
        {'. As a gamer, I became fascinated by how games were built, and that curiosity eventually pulled me into coding. What started as an interest in '}
        <span style={{ color: 'var(--syntax-orange)' }}>game development</span>
        {' grew into a genuine passion for software—the challenges it presents, the creativity it demands, and the fact that there\'s rarely just one right answer. That last part still excites me. The same problem can often be solved a dozen different ways, and I find that endlessly interesting.'}
        <br /><br />
        {'What excites me most is '}
        <span style={{ color: 'var(--accent)' }}>frontend development</span>
        {': building interfaces that people interact with every day and making those experiences intuitive, efficient, and enjoyable. I\'m currently interning at '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>Pierce County</span>
         {', where I\'m migrating legacy '}
        <span style={{ color: 'var(--syntax-orange)' }}>AngularJS</span>
        {' applications to modern '}
        <span style={{ color: 'var(--syntax-orange)' }}>Angular 13</span>
        {' on the '}
        <span style={{ color: 'var(--accent)' }}>LINX justice platform</span>
        {' — a production system used across Washington State\'s justice system. Contributing to a project with real-world impact has been my proudest professional achievement so far.'}
        <br /><br />
        {'I\'m looking for a team where I can continue growing, make meaningful contributions, and eventually become someone other developers look to—not just for technical expertise, but as a person worth learning from. Here\'s what I bring to that team:'}
      </div>

      {/* Skills */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
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
          Technical Skills
        </h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '16px' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--syntax-yellow)',
              marginBottom: '8px',
            }}>
              {category}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {items.map(skill => (
                <span key={skill} style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-primary)',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                  padding: '3px 10px',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Education */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Education
        </h2>

        {[
          {
            years: 'Sep 2021 – Mar 2025',
            degree: 'B.S. Software Development',
            school: 'Grand Canyon University',
            location: 'Phoenix, AZ',
            details: 'Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Computer Architecture',
            tags: ['Java', 'OOP', 'Data Structures', 'Software Engineering'],
          },
          {
            years: 'Sep 2019 – Jun 2021',
            degree: 'A.A. Computer Science',
            school: 'Pierce College',
            location: 'Puyallup, WA',
            details: 'Coursework: Object-Oriented Programming, Web Development, Database Management, Computer Architecture',
            tags: ['OOP', 'Web Development', 'Database Management', 'Computer Architecture'],
          },
        ].map((edu, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {/* Timeline dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                background: 'var(--bg-primary)',
                flexShrink: 0,
              }} />
              {i < 1 && (
                <div style={{
                  width: '1px',
                  flex: 1,
                  background: 'var(--border)',
                  marginTop: '4px',
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                marginBottom: '6px',
              }}>
                {edu.years}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-white)',
                marginBottom: '4px',
              }}>
                {edu.degree}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--accent)',
                marginBottom: '8px',
              }}>
                @ {edu.school} — {edu.location}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '12px',
              }}>
                {edu.details}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {edu.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    borderRadius: '4px',
                    padding: '2px 10px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Work Experience */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          Work Experience
        </h2>

       {[
  {
    years: 'Feb 2026 – Present',
    role: 'Software Engineer Intern',
    company: 'Pierce County',
    bullets: [
      'Translated stakeholder requirements into a component-based architecture and migrated production AngularJS applications to Angular 13 using TypeScript and Angular CLI, delivering a more maintainable codebase and reducing future development effort.',
      'Refactored asynchronous service logic and parallel data-fetching with RxJS, reducing API response time and increasing system reliability while improving integration with backend REST APIs.',
      'Debugged and resolved UI component and service-layer issues using Chrome DevTools and unit tests; collaborated with senior engineers through structured Bitbucket code reviews to consistently meet enterprise development standards.',
      'Developed and maintained software documentation and architectural patterns per established playbook conventions, supporting long-term maintainability and reducing onboarding friction for future developers.',
    ],
    tags: ['Angular 13', 'TypeScript', 'JavaScript', 'RxJS', 'AngularJS', 'Bitbucket', 'Version Control', 'CI/CD Pipelines'],
  },
  {
    years: 'Jun 2024 – Sep 2024',
    role: 'IT Support Intern',
    company: 'FusionTek',
    bullets: [
      'Diagnosed and resolved hardware, software, and network issues across a multi-client MSP environment, applying structured troubleshooting methodologies to identify root causes and implement reliable solutions.',
      'Managed and tracked incident tickets in Jira through defined escalation workflows, ensuring consistent process compliance and accurate documentation of resolutions to support team knowledge sharing.',
      'Provisioned and imaged devices for onboarding and refresh cycles, verifying consistent system configuration against established standards and minimizing operational downtime across client environments.',
    ],
    tags: ['Jira', 'IT Support', 'Troubleshooting', 'Networking', 'Active Directory', 'Network Configuration', 'Device Imaging']
  },
        ].map((job, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {/* Timeline dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: '2px solid var(--accent)',
                background: 'var(--bg-primary)',
                flexShrink: 0,
              }} />
              {i < 1 && (
                <div style={{
                  width: '1px',
                  flex: 1,
                  background: 'var(--border)',
                  marginTop: '4px',
                }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: 'var(--text-tertiary)',
                marginBottom: '6px',
              }}>
                {job.years}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '16px',
                fontWeight: 700,
                color: 'var(--text-white)',
                marginBottom: '4px',
              }}>
                {job.role}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '13px',
                color: 'var(--accent)',
                marginBottom: '8px',
              }}>
                @ {job.company}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' }}>
                {job.bullets.map((bullet, j) => (
                  <div key={j} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>▸</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {job.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--accent)',
                    border: '1px solid var(--accent)',
                    borderRadius: '4px',
                    padding: '2px 10px',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}