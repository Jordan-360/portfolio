import { useState, useEffect } from 'react'

export default function ReadMe() {
    const [mariners, setMariners] = useState(null)

  useEffect(() => {
    fetch('https://statsapi.mlb.com/api/v1/teams/136?hydrate=standings')
      .then(res => res.json())
      .then(data => {
        const team = data.teams?.[0]
        if (team) {
          fetch(`https://statsapi.mlb.com/api/v1/standings?leagueId=103&season=2026`)
            .then(res => res.json())
            .then(standingsData => {
              const allTeams = standingsData.records.flatMap(r => r.teamRecords)
              const marinersRecord = allTeams.find(t => t.team.id === 136)
              setMariners(marinersRecord)
            })
        }
      })
      .catch(err => console.error('MLB API error:', err))
  }, [])
  return (
    <div style={{ maxWidth: '860px', padding: '48px 0' }}>

      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '36px',
          fontWeight: 800,
          color: 'var(--text-white)',
          marginBottom: '8px',
        }}>
          A Little More About Me 👋
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
                    {"// hobbies · passions · interests"}
                </div>
            </div>
      </div>

      {/* Extended Story */}
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
        <h2 style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: 600,
          color: 'var(--accent)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          ## My Story
        </h2>

        {'I grew up in '}
        <span style={{ color: 'var(--syntax-orange)' }}>Centralia, Washington</span>
        {' — a small town you could drive through in a few minutes. Raised by my dad alongside my three siblings, '}
        <span style={{ color: 'var(--syntax-green)', fontWeight: 600 }}>baseball</span>
        {' was the glue that held our family together. I started playing tee-ball at five and stuck with it through high school, learning teamwork, leadership, and perseverance along the way. One of my proudest moments was earning the '}
        <span style={{ color: 'var(--syntax-yellow)' }}>2014 Babe Ruth Baseball Gold Glove Award</span>
        {' and helping my team take third place at the World Series.'}
        <br /><br />
        {'After high school, college felt out of reach without a scholarship, so I spent a few years working full-time, trying to figure out my path. I\'d always been fascinated by '}
        <span style={{ color: 'var(--accent)' }}>computers and video games</span>
        {', and that curiosity eventually led me to community college for an Associate\'s in Computer Science. It wasn\'t easy at first, but I stuck with it and graduated on the Dean\'s List every semester.'}
        <br /><br />
        {'From there I continued at Grand Canyon University for Software Development, picked up some cybersecurity certifications along the way, and took on an IT Support internship that taught me one important thing: I loved coding, not the help desk. After graduating I dove back into Java, grinding through CodingBat, CodeStepByStep, and LeetCode to rebuild my skills and confidence.'}
        <br /><br />
        {'Today I\'m driven by a passion for building software that makes a real impact, and by wanting to show my family that with enough dedication, you can build the future you want.'}
      </div>

     {/* Mariners Card */}
      <div style={{
        border: '2px solid #0C2C56',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
        background: 'linear-gradient(135deg, #0C2C56 0%, #1a1a1a 100%)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: '#C4CED4',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            ⚾ Seattle Mariners — My Home Team
          </h2>
          <span style={{ fontSize: '11px', color: '#0C2C56', background: '#C4CED4', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
            RIDE OR DIE
          </span>
        </div>

        {mariners ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                {mariners.wins}-{mariners.losses}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#C4CED4' }}>RECORD</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                {mariners.divisionRank}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#C4CED4' }}>AL WEST RANK</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                {mariners.gamesBack === '-' ? '0' : mariners.gamesBack}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#C4CED4' }}>GAMES BACK</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '20px', fontWeight: 700, color: '#fff' }}>
                {mariners.winningPercentage}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#C4CED4' }}>WIN %</div>
            </div>
          </div>
        ) : (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: '#C4CED4' }}>
            Loading live stats...
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
          color: 'var(--syntax-purple)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          🎮 Current Loadout
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { game: 'Overwatch 2', role: 'Support / Flex', color: '#f99e1a' },
            { game: 'Valorant', role: 'Duelist / Initiator', color: '#ff4655' },
            { game: 'CS2', role: 'Rifler', color: '#de9b35' },
          ].map((g, i) => (
            <div key={i} style={{
              border: `1px solid ${g.color}`,
              borderRadius: '6px',
              padding: '14px',
              textAlign: 'center',
              background: `${g.color}11`,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, color: g.color, marginBottom: '4px' }}>
                {g.game}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)' }}>
                {g.role}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
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
          ## Fun Facts
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[
            { icon: '🎮', text: 'Tactical FPS enthusiast — Overwatch is my main, but you\'ll catch me in Valorant, CS, or COD too. This is genuinely where my love for software started.' },
            { icon: '🧱', text: 'I love tinkering and building things by hand. Right now that means LEGO sets, but I\'ve always been into taking apart and rebuilding electronics.' },
            { icon: '⚾', text: 'Baseball shaped a huge part of who I am — the discipline and teamwork I learned on the field still show up in how I approach engineering today.' },
            { icon: '🤖', text: 'Currently deep diving into AI and how LLMs actually work under the hood, while sharpening my frontend skills with new frameworks and libraries.' },
          ].map((fact, i) => (
            <div key={i} style={{
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

      {/* What I'm Playing / Learning */}
      <div style={{
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '32px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '24px',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--syntax-purple)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            🎮 Currently Playing
          </h2>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
          }}>
            Overwatch 2 — main support/flex<br />
            Occasionally: Valorant, CS2
          </div>
        </div>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--syntax-green)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}>
            📚 Currently Learning
          </h2>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
          }}>
            How LLMs work under the hood<br />
            New frontend frameworks & libraries
          </div>
        </div>
      </div>

      {/* Coding Philosophy */}
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
          ## What I Value In Code
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            'Clean, readable code over clever code',
            'Asking questions early instead of guessing late',
            'Code that someone else can maintain without me',
            'Solving the right problem, not just any problem',
          ].map((value, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: '10px',
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: 'var(--text-secondary)',
            }}>
              <span style={{ color: 'var(--accent)' }}>▸</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* How this site was built */}
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
          ## How This Site Was Built
        </h2>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          lineHeight: '1.8',
        }}>
          This entire portfolio is built to look and feel like a real VS Code window, right down to the activity bar, tab switching, command palette, and status bar. Built with{' '}
          <span style={{ color: 'var(--accent)' }}>React</span> and{' '}
          <span style={{ color: 'var(--accent)' }}>Vite</span>, deployed on{' '}
          <span style={{ color: 'var(--accent)' }}>Vercel</span>. No backend, no database — just a love for clean UI and a slightly excessive attention to detail.
        </div>
      </div>

      {/* Footer */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '13px',
        color: 'var(--syntax-comment)',
        fontStyle: 'italic',
        textAlign: 'center',
        marginTop: '48px',
      }}>
        {'// thanks for reading — you found the secret file 🕵️'}
        <br/>
        {"// try typing (↑ ↑ ↓ ↓ ← → ← → b a) or the Konami Code on your keyboard for a cool easter egg 🥚"}
      </div>

    </div>
  )
}