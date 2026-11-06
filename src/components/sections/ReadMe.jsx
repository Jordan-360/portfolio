import { useState, useEffect } from 'react'
import marinersLogo from '../../assets/mariners-logo.svg'

const MARINERS_ID = 136
const AL_LEAGUE_ID = 103

const GAMES = [
  { game: 'Overwatch 2', color: '#f99e1a' },
  { game: 'Valorant', color: '#ff4655' },
  { game: 'Call of Duty', color: '#00bd00' },
  { game: 'Counter-Strike 2', color: '#06acf8' },
  { game: 'Halo', color: '#d3eb00' },
  { game: 'ARC Raiders', color: '#b406f8' },
]

const FUN_FACTS = [
  { icon: '🎮', text: 'FPS gaming enthusiast — Overwatch is my main, but can catch me in Valorant, Counter-Strike, or Call of Duty as well. This is genuinely where my love for software started.' },
  { icon: '🧱', text: 'I love tinkering and building things by hand. Right now that means LEGO sets, but I\'ve always been into taking apart and rebuilding anything I can get my hands on.' },
  { icon: '⚾', text: 'Baseball shaped a huge part of who I am — the discipline and teamwork I learned on the field still show up in how I approach engineering today.' },
  { icon: '🤖', text: 'Currently deep diving into AI and how LLMs actually work under the hood, while sharpening my frontend skills with new frameworks and libraries.' },
]

const CODE_VALUES = [
  'Clean, readable code over clever code',
  'Asking questions early instead of guessing late',
  'Code that someone else can maintain without me',
  'Solving the right problem, not just any problem',
]

async function fetchMarinersRecord(season) {
  const res = await fetch(`https://statsapi.mlb.com/api/v1/standings?leagueId=${AL_LEAGUE_ID}&season=${season}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const data = await res.json()
  return data.records?.flatMap(r => r.teamRecords).find(t => t.team.id === MARINERS_ID) ?? null
}

function useMarinersRecord() {
  const [state, setState] = useState({ record: null, season: null, error: false })

  useEffect(() => {
    let cancelled = false
    const year = new Date().getFullYear()

    // Before Opening Day the current season has no standings yet,
    // so fall back to last season's final record.
    fetchMarinersRecord(year)
      .then(record => record ? { record, season: year } : fetchMarinersRecord(year - 1).then(r => ({ record: r, season: year - 1 })))
      .then(({ record, season }) => {
        if (!cancelled) setState({ record, season, error: !record })
      })
      .catch(() => {
        if (!cancelled) setState({ record: null, season: null, error: true })
      })

    return () => { cancelled = true }
  }, [])

  return state
}

function Stat({ value, label }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#C4CED4' }}>{label}</div>
    </div>
  )
}

export default function ReadMe() {
  const { record: mariners, season, error } = useMarinersRecord()

  return (
    <div className="page">
      <div className="page-comment">{"// README.md - the rest of the story"}</div>
      <h1 className="page-title">Beyond the Resume</h1>
      <div className="page-subtitle">{"// hobbies · passions · interests"}</div>

      {/* Extended Story */}
      <div className="card prose">
        <h2 className="card__heading">## My Story</h2>
        {'I grew up in '}
        <span style={{ color: 'var(--syntax-orange)' }}>Centralia, Washington</span>
        {' — a small town you could drive through in a few minutes. Raised by my dad alongside my three siblings, '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>baseball</span>
        {' was the glue that held our family together. I started playing tee-ball at five and stuck with it through high school, learning teamwork, leadership, and perseverance along the way. One of my proudest moments was earning the '}
        <span style={{ color: 'var(--syntax-yellow)' }}>2014 Babe Ruth Baseball Gold Glove Award</span>
        {' and helping my team take third place at the World Series.'}
        <br /><br />
        {'Outside the field, I was the kid who took things apart just to see how they worked, and '}
        <span style={{ color: 'var(--accent)' }}>gaming</span>
        {' played just as big a role in shaping me as baseball did. I grew up fascinated by video games, not just playing them but wondering how they were actually built. That curiosity quietly planted the seed for everything that came later, even before I knew it.'}
        <br /><br />
        {'After high school, college felt out of reach without a scholarship, so I spent a few years working full-time, trying to figure out my path. That same fascination with '}
        <span style={{ color: 'var(--accent)' }}>computers and video games</span>
        {' eventually led me to community college for an Associate\'s in Computer Science. It wasn\'t easy at first, but I stuck with it and graduated on the Dean\'s List every semester.'}
        <br /><br />
        {'From there I continued at Grand Canyon University for Software Development, picked up some cybersecurity certifications along the way, and took on an IT Support internship that taught me one important thing: I loved coding, not the help desk. After graduating I dove back into Java, grinding through CodingBat, CodeStepByStep, and LeetCode to rebuild my skills and confidence.'}
        <br /><br />
        {'These days, when I\'m not coding, you\'ll probably find me building '}
        <span style={{ color: 'var(--syntax-purple)' }}>LEGO sets</span>
        {', tinkering with electronics just to understand how they tick, or queued up in a competitive match of '}
        <span style={{ color: 'var(--accent)' }}>Overwatch, Valorant, or CS</span>
        {'. Baseball is still a big part of my life too, I bleed '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>Mariners</span>
        {' blue and green, win or lose (mostly lose, but I show up anyway).'}
        <br /><br />
        {'Today I\'m driven by a passion for building software that makes a real impact, and by wanting to show my family that with enough dedication, you can build the future you want.'}
      </div>

      {/* Mariners Card */}
      <div className="page-comment">{"// who I root for"}</div>
      <div className="card" style={{
        border: '2px solid #0C2C56',
        background: 'linear-gradient(135deg, #0C2C56 0%, #1a1a1a 100%)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src={marinersLogo} alt="Seattle Mariners logo" style={{ width: '23px', height: '23px' }} />
            <h2 className="card__heading" style={{ color: '#C4CED4', margin: 0 }}>Seattle Mariners</h2>
          </div>
          <span style={{ fontSize: '11px', color: '#016cf8', fontWeight: 700 }}>
            #TRIDENTS UP🔱
          </span>
        </div>

        {mariners ? (
          <div className="mariners-stats">
            <Stat value={`${mariners.wins}-${mariners.losses}`} label={`${season} RECORD`} />
            <Stat value={mariners.divisionRank} label="AL WEST RANK" />
            <Stat value={mariners.gamesBack === '-' ? '0' : mariners.gamesBack} label="GAMES BACK" />
            <Stat value={mariners.winningPercentage} label="WIN %" />
          </div>
        ) : (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#C4CED4' }}>
            {error ? 'Live stats are unavailable right now, check back later.' : 'Loading live stats...'}
          </div>
        )}

        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          color: '#C4CED4',
          marginTop: '16px',
          fontStyle: 'italic',
        }}>
          Live data pulled straight from the MLB Stats API — same one I used in my MLB Analytics Dashboard project.
        </div>
      </div>

      {/* Gaming Loadout */}
      <div className="page-comment">{"// how I unwind"}</div>
      <div className="card">
        <h2 className="card__heading" style={{ color: 'var(--syntax-purple)' }}>🎮 Games I Enjoy</h2>
        <div className="games-grid">
          {GAMES.map(g => (
            <div key={g.game} style={{
              border: `1px solid ${g.color}`,
              borderRadius: '6px',
              padding: '14px',
              textAlign: 'center',
              background: `${g.color}11`,
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              fontWeight: 700,
              color: g.color,
            }}>
              {g.game}
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="page-comment">{"// interesting facts"}</div>
      <div className="card">
        <h2 className="card__heading">## Fun Facts</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FUN_FACTS.map(fact => (
            <div key={fact.icon} style={{
              display: 'flex',
              gap: '12px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
            }}>
              <span style={{ fontSize: '18px', flexShrink: 0 }}>{fact.icon}</span>
              <span>{fact.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What keeps me busy */}
      <div className="page-comment">{"// what keeps me busy"}</div>
      <div className="card two-col">
        <div>
          <h2 className="card__heading" style={{ color: 'var(--syntax-purple)', marginBottom: '12px' }}>🛠️ Hobbies</h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Building LEGO sets<br />
            Tinkering with electronics<br />
            FPS Games
          </div>
        </div>
        <div>
          <h2 className="card__heading" style={{ color: 'var(--syntax-green)', marginBottom: '12px' }}>📚 Currently Learning</h2>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            How LLMs work under the hood<br />
            New frontend frameworks & libraries
          </div>
        </div>
      </div>

      {/* Coding Philosophy */}
      <div className="page-comment">{"// how I think about writing code"}</div>
      <div className="card">
        <h2 className="card__heading">## What I Value In Code</h2>
        <div className="bullet-list" style={{ gap: '10px', marginBottom: 0 }}>
          {CODE_VALUES.map(value => (
            <div key={value} className="bullet">
              <span className="bullet__marker">▸</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How this site was built */}
      <div className="page-comment">{"// peeking behind the curtain"}</div>
      <div className="card">
        <h2 className="card__heading">## How This Site Was Built</h2>
        <div className="prose" style={{ fontSize: '13px' }}>
          This entire portfolio is built to look and feel like a real VS Code window, right down to the activity bar, tab switching, command palette, and status bar. Built with{' '}
          <span style={{ color: 'var(--accent)' }}>React</span> and{' '}
          <span style={{ color: 'var(--accent)' }}>Vite</span>, deployed on{' '}
          <span style={{ color: 'var(--accent)' }}>Vercel</span>. No backend, no database — just a love for clean UI and a slightly excessive attention to detail.
        </div>
      </div>

      {/* Footer */}
      <div className="page-comment" style={{ textAlign: 'center', marginTop: '48px', marginBottom: 0 }}>
        {'// thanks for reading — you found the secret file 🕵️'}
        <br />
        {"// try typing (↑ ↑ ↓ ↓ ← → ← → b a) or the Konami Code on your keyboard for a cool easter egg 🥚"}
      </div>
    </div>
  )
}
