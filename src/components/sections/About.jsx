const SKILLS = {
  Languages: ['Java', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
  'Frameworks & Libraries': ['React', 'Angular', 'AngularJS', 'Node.js', 'Spring Boot', 'RxJS', 'PyTorch'],
  'Tools & Platforms': ['Git/GitHub', 'Bitbucket', 'Jenkins', 'REST APIs', 'MySQL', 'Jira', 'Confluence', 'Vite', 'Vercel', 'Chrome DevTools', 'Linux'],
  'Concepts': ['OOP', 'Agile/Scrum', 'SDLC', 'CI/CD', 'Unit Testing', 'Data Structures & Algorithms', 'Machine Learning', 'Generative AI (RAG)'],
}

const EDUCATION = [
  {
    years: 'Sep 2021 – Mar 2025',
    degree: 'B.S. Software Development',
    school: 'Grand Canyon University',
    location: 'Phoenix, AZ',
    details: [
      'GPA: 3.15',
      'Coursework: Algorithms & Data Structures, Operating Systems Fundamentals, Database Design & Development, JavaScript Web Application Development, Cloud Computing, Application Security Foundations, Programming in Java I–III, Programming in C# I–III, Senior Project I & II',
    ],
    tags: ['Java', 'C#', 'Algorithms', 'Systems Fundamentals'],
  },
  {
    years: 'Sep 2019 – Jun 2021',
    degree: 'A.A. Computer Science',
    school: 'Pierce College',
    location: 'Puyallup, WA',
    details: [
      'GPA: 3.50',
      'Coursework: Computer Science I & II, Introduction to Computer Information Systems, Calculus I & II, Introduction to Statistics',
    ],
    tags: ['OOP', 'Web Development', 'Databases'],
  },
]

const EXPERIENCE = [
  {
    years: 'July 2026 – Present',
    role: 'AI Trainer - Software Development',
    company: 'Handshake AI',
    bullets: [
      'Evaluate and correct large language model outputs for accuracy, reasoning, and instruction-following, identifying failure cases that are used to retrain and improve the models.',
      'Create original video and prompt data for multimodal AI training, producing submissions that meet strict quality and formatting standards for acceptance.',
      'Selected for multiple AI training projects through competitive screening, applying a software development background to catch technical and logic errors in AI responses.',
    ],
    tags: ['AI Model Training', 'LLM Evaluation', 'RLHF', 'Prompt Engineering', 'Response Rating & Ranking', 'Data Annotation', 'Quality Assurance'],
  },
  {
    years: 'Feb 2026 – July 2026',
    role: 'Software Engineer Intern',
    company: 'Pierce County',
    bullets: [
      'Migrated 3 production pages from end-of-life AngularJS to Angular 13 and TypeScript on LINX, the county\'s internal justice platform used by Pierce County Superior Court and law enforcement to manage records from arrest through booking and beyond.',
      'Rebuilt the inmate Release workflow, a multi-tab screen opened from an inmate\'s record, as Angular components with RxJS data services connected to backend REST APIs.',
      'Converted the Journal Entry Checkout page, which tracks logged-in sessions across admin, supervisor, and judicial roles, and a Word document-merge feature used to generate case documents.',
      'Debugged UI and service-layer issues with Chrome DevTools and unit tests, shipping all changes through Bitbucket code reviews with senior engineers.',
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
      'Diagnosed and resolved POS, network, printer, and hardware issues, restoring operations quickly and preventing prolonged business disruptions.',
    ],
    tags: ['JavaScript', 'JSON', 'Excel', 'Process Automation', 'Data Reconciliation', 'Inventory Management', 'Team Leadership', 'POS Troubleshooting', 'Network Troubleshooting'],
  },
]

function TimelineItem({ date, title, org, isLast, children, tags }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__rail">
        <div className="timeline-item__dot" />
        {!isLast && <div className="timeline-item__line" />}
      </div>
      <div className="timeline-item__body">
        <div className="timeline-item__date">{date}</div>
        <div className="timeline-item__title">{title}</div>
        <div className="timeline-item__org">@ {org}</div>
        {children}
        <div className="tag-list">
          {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="page">
      <div className="page-comment">{'// about.html - Jordan Wood'}</div>
      <h1 className="page-title">About Me</h1>
      <div className="page-subtitle">{"// who I am · what I know · where I've been"}</div>

      {/* Bio */}
      <div className="card prose">
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
      <div className="card">
        <h2 className="card__heading">Technical Skills</h2>
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category} style={{ marginBottom: '16px' }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              color: 'var(--syntax-yellow)',
              marginBottom: '8px',
            }}>
              {category}
            </div>
            <div className="tag-list">
              {items.map(skill => <span key={skill} className="chip">{skill}</span>)}
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="card">
        <h2 className="card__heading" style={{ marginBottom: '24px' }}>Education</h2>
        {EDUCATION.map((edu, i) => (
          <TimelineItem
            key={edu.degree}
            date={edu.years}
            title={edu.degree}
            org={`${edu.school} — ${edu.location}`}
            tags={edu.tags}
            isLast={i === EDUCATION.length - 1}
          >
            <div className="timeline-item__details">
              {edu.details.map(detail => <div key={detail}>{detail}</div>)}
            </div>
          </TimelineItem>
        ))}
      </div>

      {/* Work Experience */}
      <div className="card">
        <h2 className="card__heading" style={{ marginBottom: '24px' }}>Work Experience</h2>
        {EXPERIENCE.map((job, i) => (
          <TimelineItem
            key={`${job.company}-${job.role}`}
            date={job.years}
            title={job.role}
            org={job.company}
            tags={job.tags}
            isLast={i === EXPERIENCE.length - 1}
          >
            <div className="bullet-list">
              {job.bullets.map(bullet => (
                <div key={bullet} className="bullet">
                  <span className="bullet__marker">▸</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </TimelineItem>
        ))}
      </div>
    </div>
  )
}
