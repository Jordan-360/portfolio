export default function About() {
  const skills = {
    Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    'Frameworks/Tools': ['Spring Boot', 'React.js', 'Angular 13', 'AngularJS','PyTorch', 'Ollama', 'RxJS', 'REST APIs', 'MySQL', 'Node.js', 'Git/GitHub', 'Bitbucket', 'Vite', 'Jira', 'Confluence', 'VS Code', 'Chrome DevTools'],
    'Concepts': ['OOP', 'SDLC', 'Agile/Scrum', 'API Integration', 'Unit Testing', 'Data Structures & Algorithms', 'System Integration', 'LLMs', 'Generative AI', 'Machine Learning'],
    'CI/CD & DevOps': ['Jenkins', 'CI/CD Pipelines', 'GitHub Actions', 'Linux', 'Bash/PowerShell'],
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
        <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'var(--syntax-comment)',
                    fontStyle: 'italic',
                    marginBottom: '32px',
                }}>
                    {"// about.html - Jordan Wood"}
                </div>
      </div>

      {/* Heading */}
      <h1 style={{
        fontFamily: 'var(--font-heading)',
          fontSize: '36px',
          letterSpacing: '0.1em',
          fontWeight: 800,
          color: 'var(--text-white)',
          marginBottom: '8px',
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
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Jordan</span>
        {'. '}
        {'Like a lot of developers, I got my start through '}
        <span style={{ color: 'var(--syntax-green)' }}>gaming</span>
        {'. I became curious about how the things I played were actually built, and that curiosity pulled me into coding. What began as an interest in '}
        <span style={{ color: 'var(--syntax-orange)' }}>game development</span>
        {' grew into a genuine passion for software: the challenges it presents, the creativity it demands, and the fact that there\'s rarely just one right answer. That last part still excites me. The same problem can often be solved a dozen different ways, and I find that endlessly interesting.'}
        <br /><br />
        {'What excites me most is '}
        <span style={{ color: 'var(--accent)' }}>frontend development</span>
        {': building interfaces that people interact with every day and making those experiences intuitive, efficient, and enjoyable. Most recently, I interned at '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>Pierce County</span>
        {', where I migrated legacy '}
        <span style={{ color: 'var(--syntax-orange)' }}>AngularJS</span>
        {' applications to modern '}
        <span style={{ color: 'var(--syntax-orange)' }}>Angular 13</span>
        {' on the '}
        <span style={{ color: 'var(--accent)' }}>LINX justice platform</span>
        {', a production system used across Washington State\'s justice system. Contributing to a project with real-world impact is still my proudest professional achievement so far. Since then, I\'ve kept building, including projects that explore how '}
        <span style={{ color: 'var(--syntax-green)' }}>AI and language models</span>
        {' work under the hood.'}
        <br /><br />
        {'I\'m now looking for a '}
        <span style={{ color: 'var(--accent)', fontWeight: 600 }}>full-time role</span>
        {' on a team where I can keep growing, make meaningful contributions, and eventually become someone other developers look to, not just for technical expertise, but as a person worth learning from. Here\'s what I bring to that team:'}
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
            details: [
              'GPA: 3.15',
              'Coursework: Data Structures & Algorithms, Operating Systems, Computer Networks, Computer Architecture',
            ],            tags: ['Java', 'OOP', 'Data Structures', 'Software Engineering'],
          },
          {
            years: 'Sep 2019 – Jun 2021',
            degree: 'A.A. Computer Science',
            school: 'Pierce College',
            location: 'Puyallup, WA',
            details: [
              'GPA: 3.50',
              'Coursework: Object-Oriented Programming, Web Development, Database Management, Computer Architecture',
            ],
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
                {edu.details.map((detail, i) => (
                  <div key={i}>{detail}</div>
                ))}
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
    years: 'July 2026 – Present',
    role: 'AI Trainer - Software Development',
    company: 'Handshake AI',
    bullets: [
      'Evaluate large language model responses for factual accuracy, reasoning, and instruction-following against detailed project guidelines, flagging failures that feed back into model training.',
      'Audited and corrected model-generated responses, including Java and JavaScript code, writing detailed justifications that turned flawed outputs into high-quality training data.',
      'Independently manage deadline-driven tasks across multiple AI training projects, consistently delivering accurate, high-quality work on schedule.',
    ],
    tags: ['AI Model Training', 'LLM Evaluation', 'RLHF', 'RxJS', 'Prompt Engineering', 'Response Rating & Ranking', 'Data Annotation', 'Quality Assurance'],
  },
  {
    years: 'Feb 2026 – July 2026',
    role: 'Software Engineer Intern',
    company: 'Pierce County',
    bullets: [
      'Migrated 3 production pages from end-of-life AngularJS to Angular 13 and TypeScript on LINX, the county\'s internal justice platform that tracks individuals from arrest through booking for law enforcement and court users.',
      'Rebuilt the inmate Release workflow, a multi-tab screen opened from an inmate\'s record, as Angular components with RxJS data services integrated with backend REST APIs.',
      'Converted the Journal Entry Checkout page, which tracks logged-in sessions across admin, supervisor, and judicial roles; converted a Word document-merge feature used to generate case documents.',
      'Debugged UI and service-layer issues with Chrome DevTools and unit tests, and shipped all changes through Bitbucket code reviews with senior engineers.',
    ],
    tags: ['Angular 13', 'TypeScript', 'JavaScript', 'RxJS', 'AngularJS', 'Bitbucket', 'Version Control', 'CI/CD Pipelines'],
  },
  {
    years: 'April 2021 – December 2023',
    role: 'Store Manager',
    company: 'Timberline Development, LLC',
    bullets: [
      'Built a JavaScript tool that processed hourly JSON sales reports and automatically deducted sold quantities from the store\'s Excel inventory manifest, covering 100+ products tracked by multiple Washington State compliance barcodes.',
      'Replaced manual hourly inventory reconciliation with an automated process, reducing discrepancies by more than 75% and saving approximately 40 staff hours per week.',
      'Supervised a team of up to 10 and led financial reconciliations, ensuring accurate, compliant reporting in a state-regulated industry.',
      'Diagnosed and resolved POS, network, printer, and hardware issues, restoring operations quickly and preventing prolonged business disruptions.'
    ],
    tags: ['JavaScript', 'JSON', 'Excel', 'Process Automation', 'Data Reconciliation', 'Inventory Management', 'Team Leadership', 'POS Troubleshooting', 'Network Troubleshooting']
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