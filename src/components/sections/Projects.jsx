import { SiGithub } from 'react-icons/si'

const PROJECTS = [
    {
        emoji: '🏈',
        categories: ['WEB APP', 'REACT', 'FANTASY FOOTBALL', 'POKÉMON', 'NODE.JS'],
        title: 'Fantasy Pokémon',
        description:
        'A fantasy football game where all 704 NFL starters are paired with a Pokémon. Draft against 9 CPU managers in a snake draft, set your lineup on a football field, work the waiver wire, and play a full season scored from real NFL stats, with Pokémon twists like type matchups and evolutions. The CPU drafts using value over replacement, a Node data pipeline pulls weekly stats from public sources, and a simulator plays an entire league to check the rules hold up.',
        tags: ['React', 'JavaScript', 'Responsive Design', 'Game Logic', 'Data Pipeline', 'Vercel'],
        github: 'https://github.com/Jordan-360/FantasyPokemonV2',
        live: 'https://fantasy-pokemon-v2.vercel.app/',
        color: '#ffff09',
    },
    {
        emoji: '🧠',
        categories: ['AI / ML', 'PYTHON', 'PYTORCH'],
        title: 'TinyGPT',
        description: 'A small GPT-style language model trained from scratch on Tiny Shakespeare. Following the nanoGPT approach, I set up the training pipeline in PyTorch and ran it locally on my own GPU, so I could see firsthand how a model goes from random characters to generating Shakespeare-style text.',
        tags: ['Python', 'PyTorch', 'Transformers', 'LLM', 'Local GPU Training'],
        github: 'https://github.com/Jordan-360/tinygpt',
        live: null,
        color: '#f44747',
    },
    {
        emoji: '📋',
        categories: ['AI / RAG', 'TYPESCRIPT', 'NODE.JS'],
        title: 'RAG-Powered Patch Notes Assistant',
        description: 'Built because I hate reading patch notes. This patch notes assistant takes long Overwatch patch notes and turns them into quick, easy-to-read answers, using retrieval-augmented generation (RAG) so every answer cites the exact part of the patch notes it came from.',
        tags: ['TypeScript', 'Node.js', 'RAG', 'LLM', 'Citations'],
        github: 'https://github.com/Jordan-360/patch-notes-assistant',
        live: null,
        color: '#00f815',
    },
    {
        emoji: '🎮',
        categories: ['WEB APP', 'JAVASCRIPT', 'HTML', 'CSS', 'VERCEL'],
        title: 'Mobile Web Games Application',
        description: 'Three touch-friendly games (Tic-Tac-Toe, Hangman, and Memory Match) designed for playing on a phone at the table. Written in vanilla JavaScript with no frameworks, with light and dark themes and a shared stylesheet across games.',
        tags: ['JavaScript', 'HTML', 'CSS', 'Vercel'],
        github: 'https://github.com/Jordan-360/restaurant-games',
        live: 'https://restaurant-games.vercel.app/',
        color: '#7100f3',
    },
    {
        emoji: '📋',
        categories: ['WEB APP', 'REACT', 'TYPESCRIPT'],
        title: 'Job Tracker',
        description: 'A React and TypeScript app for organizing a job search: add, edit, and track applications in one place. Data is saved in the browser with a custom useLocalStorage hook and can be exported or imported as JSON, so nothing is lost when switching devices.',
        tags: ['React', 'TypeScript', 'Vite', 'localStorage'],
        github: 'https://github.com/Jordan-360/JobTracker',
        live: 'https://jw-jobtracker.vercel.app',
        color: '#eefcb4',
    },
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
        color: '#fdfdfd',
    },
    {
        emoji: '💻',
        categories: ['REACT', 'VITE', 'PORTFOLIO'],
        title: 'VS Code Portfolio',
        description: 'This portfolio — built from scratch as a fully interactive VS Code IDE experience. Features a command palette, tab switching, sidebar navigation, activity bar, and status bar, all built in React with Vite and deployed on Vercel.',
        tags: ['React', 'Vite', 'JavaScript', 'CSS'],
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
        <div className="page page--wide">
            <div className="page-comment">{'// projects.js - things I\'ve built'}</div>
            <h1 className="page-title">Projects</h1>
            <div className="page-subtitle">{"// what I've built · what I've learned · what I'm proud of"}</div>

            <div className="projects-grid">
                {PROJECTS.map(project => (
                    <div
                        key={project.title}
                        className="project-card"
                        style={{ '--project-color': project.color }}
                    >
                        <div className="project-card__bar" />

                        <div className="project-card__body">
                            <div className="project-card__top">
                                <div className="project-card__meta">
                                    <span style={{ fontSize: '24px' }}>{project.emoji}</span>
                                    <div className="project-card__categories">
                                        {project.categories.join(' · ')}
                                    </div>
                                </div>
                                <div className="project-card__links">
                                    <a className="project-card__link" href={project.github} target="_blank" rel="noreferrer">
                                        <SiGithub /> GitHub
                                    </a>
                                    {project.live && (
                                        <a className="project-card__link" href={project.live} target="_blank" rel="noreferrer">
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-card__title">{project.title}</div>
                            <div className="project-card__desc">{project.description}</div>

                            <div className="tag-list" style={{ gap: '6px', marginTop: 'auto' }}>
                                {project.tags.map(tag => (
                                    <span key={tag} className="chip chip--small">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
