import { SiGithub } from 'react-icons/si'

const PROJECTS = [
    {
        emoji: '🏦',
        categories: ['FULL STACK', 'JAVA', 'REACT'],
        title: 'Full-Stack Banking Application',
        description: 'A layered Java Spring Boot application with RESTful service logic and a React frontend. Features deposits, withdrawals, transfers, real-time account balances, and transaction history backed by a relational MySQL schema with server-side validation.',
        tags: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'JUnit'],
        github: 'https://github.com/Jordan-360/Full-StackBankingApplication',
        live: null,
        color: '#4fc3f7',
    },
    {
        emoji: '⚾',
        categories: ['VANILLA JS', 'API', 'DATA'],
        title: 'MLB Analytics Dashboard',
        description: 'A multi-page vanilla JavaScript application consuming the MLB Stats API with dynamic UI rendering, live baseball news via NewsAPI with pagination, and supporting Python scripts for data aggregation across multiple external API sources.',
        tags: ['JavaScript', 'MLB Stats API', 'NewsAPI', 'Python', 'HTML', 'CSS'],
        github: 'https://github.com/Jordan-360/MLBAPI',
        live: null,
        color: '#dcdcaa',
    },
    {
        emoji: '💻',
        categories: ['REACT', 'VITE', 'PORTFOLIO'],
        title: 'VS Code Portfolio',
        description: 'This portfolio — built from scratch as a fully interactive VS Code IDE experience. Features a command palette, tab switching, sidebar navigation, activity bar, and status bar, all built in React with Vite and deployed on Vercel.',
        tags: ['React', 'Vite', 'JavaScript', 'CSS', 'Framer Motion'],
        github: 'https://github.com/Jordan-360/portfolio',
        live: null,
        color: '#4ec9b0',
    },
    {
        emoji: '🌤️',
        categories: ['JAVA', 'API', 'CLI'],
        title: 'Real-Time Weather Application',
        description: 'A CLI application in Java that retrieves live weather data using the Open-Meteo REST API. Includes city name disambiguation, structured error handling, and formatted console output — demonstrating clean Java architecture and REST API integration.',
        tags: ['Java', 'REST APIs', 'Open-Meteo API', 'CLI', 'OOP'],
        github: 'https://github.com/Jordan-360/WeatherApp',
        live: null,
        color: '#ce9178',
    },
    {
        emoji: '🐦',
        categories: ['GAME DEV', 'JAVA', 'JAVAFX'],
        title: 'Flappy Bird Clone',
        description: 'The project that started it all. A fully playable 2D arcade game built in Java using JavaFX with a custom game loop, procedural obstacle generation, physics-based movement, and collision detection — all built from scratch without a game engine.',
        tags: ['Java', 'JavaFX', 'OOP', 'Game Loop', 'Collision Detection'],
        github: 'https://github.com/Jordan-360/FlappyBirdMockUp',
        live: null,
        color: '#c586c0',
    },
]

export default function Projects() {
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
                {'// projects.js - things I\'ve built'}
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
                Projects
            </h1>


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
                    {"// what I've built · what I've learned · what I'm proud of"}
                </div>
            </div>

            {/* Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
            }}>
                {PROJECTS.map((project, i) => (
                    <div
                        key={i}
                        style={{
                            border: '1px solid var(--border)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'var(--bg-secondary)',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            cursor: 'default',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            e.currentTarget.style.boxShadow = `0 8px 24px ${project.color}30`
                            e.currentTarget.querySelector('.top-bar').style.width = '100%'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                            e.currentTarget.querySelector('.top-bar').style.width = '0%'
                        }}
                    >
                        {/* Animated top border */}
                        <div
                            className="top-bar"
                            style={{
                                height: '2px',
                                width: '0%',
                                background: project.color,
                                transition: 'width 0.3s ease',
                                flexShrink: 0,
                            }}
                        />

                        {/* Card content */}
                        <div style={{
                            padding: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px',
                            flex: 1,
                        }}>
                            {/* Top row — emoji + categories + github */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{ fontSize: '24px' }}>{project.emoji}</span>
                                    <div style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        color: project.color,
                                        letterSpacing: '0.1em',
                                    }}>
                                        {project.categories.join(' · ')}
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                            color: 'var(--text-secondary)',
                                            textDecoration: 'none',
                                            border: '1px solid var(--border)',
                                            borderRadius: '4px',
                                            padding: '3px 10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'color 0.15s, border-color 0.15s',
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.color = project.color
                                            e.currentTarget.style.borderColor = project.color
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.color = 'var(--text-secondary)'
                                            e.currentTarget.style.borderColor = 'var(--border)'
                                        }}
                                    >
                                        <SiGithub /> GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '12px',
                                                color: 'var(--text-secondary)',
                                                textDecoration: 'none',
                                                border: '1px solid var(--border)',
                                                borderRadius: '4px',
                                                padding: '3px 10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                            }}
                                        >
                                            Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '16px',
                                fontWeight: 700,
                                color: 'var(--text-white)',
                                lineHeight: '1.3',
                            }}>
                                {project.title}
                            </div>

                            {/* Description */}
                            <div style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                color: 'var(--text-secondary)',
                                lineHeight: '1.7',
                                flex: 1,
                            }}>
                                {project.description}
                            </div>

                            {/* Tags */}
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '11px',
                                        color: 'var(--text-secondary)',
                                        background: 'var(--bg-tertiary)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '4px',
                                        padding: '2px 8px',
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