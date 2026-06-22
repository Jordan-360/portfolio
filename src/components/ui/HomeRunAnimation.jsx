import { useEffect, useState } from 'react'

const C = {
  crowd:    '#111122',
  grass:    '#1a6b1a',
  grass2:   '#156015',
  dirt:     '#b87428',
  warning:  '#c08030',
  wall:     '#1a3a8a',
  wallTop:  '#3355cc',
  white:    '#fcfcfc',
  red:      '#cc0000',
  skin:     '#f0a050',
  navy:     '#000060',
  yellow:   '#f8b800',
  black:    '#000000',
  gray:     '#606060',
  brown:    '#885522',
  darkgray: '#333333',
}

const CROWD_COLORS = [
  '#5566bb','#7788dd','#4455aa','#cc8844','#88bb44',
  '#bb4488','#dd6622','#44aacc','#cc4444','#88cc44',
  '#fcfcfc','#cc8800','#4488ff','#aabb44','#ff8844',
]

function makeCrowdBlocks() {
  const out = []
  let id = 0
  const push = (x, y, w, h) =>
    out.push({ id: id++, x, y, w, h, c: CROWD_COLORS[((x * 7 + y * 13) >>> 0) % CROWD_COLORS.length] })
  // CF bleachers (above wall)
  for (let x = 64; x < 376; x += 9)  for (let y = 1;  y < 41;  y += 8) push(x, y, 7, 6)
  // Left corner stands
  for (let x = 0;  x < 64;  x += 9)  for (let y = 1;  y < 125; y += 8) push(x, y, 7, 6)
  // Right corner stands
  for (let x = 378; x < 440; x += 9) for (let y = 1;  y < 125; y += 8) push(x, y, 7, 6)
  return out
}

const CROWD_BLOCKS = makeCrowdBlocks()

function generateFireworks() {
  const colors = ['#ff3333','#ffff33','#33ffff','#ff33ff','#33ff33','#ff8833','#ffffff','#ff6600']
  return Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 8 + ((i * 19 + 11) % 82),
    y: 2 + ((i * 13 + 7)  % 38),
    color: colors[i % colors.length],
    delay: (i * 0.16).toFixed(2),
    size:  12 + (i % 4) * 5,
  }))
}

// Diamond (overhead, slight perspective tilt — home near bottom, CF at top)
// Home:(220,258)  3rd:(132,197)  2nd:(220,136)  1st:(308,197)  Mound:(220,197)
// Outfield wall arc: (44,115)→(118,60)→(220,42)→(322,60)→(396,115)
// Field polygon: 0,290→0,175→44,115→118,60→220,42→322,60→396,115→440,175→440,290

export default function HomeRunAnimation({ onComplete }) {
  const [phase, setPhase]       = useState(0)
  const [fireworks, setFireworks] = useState([])

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 650),
      setTimeout(() => setPhase(2), 1380),
      setTimeout(() => setPhase(3), 1560),
      setTimeout(() => setPhase(4), 1760),
      setTimeout(() => { setPhase(5); setFireworks(generateFireworks()) }, 2800),
      setTimeout(() => onComplete?.(), 6500),
    ]
    return () => t.forEach(clearTimeout)
  }, [onComplete])

  // Pitch: mound(222,190) → plate(222,254)
  // Homer: arcs to left-center field over the wall(115,62)
  const ballX = phase === 0 ? 222 : phase <= 3 ? 222 : 115
  const ballY = phase === 0 ? 190 : phase <= 3 ? 254 : 62
  const ballTr =
    phase === 1 ? 'left 0.72s linear, top 0.73s linear' :
    phase === 4 ? 'left 1.05s ease-out, top 0.9s ease-out' : 'none'

  return (
    <div style={{
      position: 'fixed', inset: 0, background: C.black,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', fontFamily: 'monospace',
      zIndex: 9999, overflow: 'hidden',
    }}>

      {/* Top scoreboard strip */}
      <div style={{
        width: 440, background: C.black, color: C.white, fontSize: 10,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '4px 12px', border: '2px solid #444', borderBottom: 'none',
        letterSpacing: '0.08em',
      }}>
        <span>DEV&nbsp;&nbsp;0</span>
        <span style={{ color: C.yellow }}>TOP 1ST</span>
        <span>OPP&nbsp;&nbsp;0</span>
      </div>

      <div style={{ position: 'relative', width: 440, border: '2px solid #444', overflow: 'hidden' }}>
        <svg viewBox="0 0 440 290" width="440" height="290" style={{ display: 'block' }}>
          <defs>
            {/* Clip mow stripes to the field polygon */}
            <clipPath id="fieldClip">
              <polygon points="0,290 0,175 44,115 118,60 220,42 322,60 396,115 440,175 440,290" />
            </clipPath>
          </defs>

          {/* ── STANDS / CROWD ── */}
          <rect width="440" height="290" fill={C.crowd} />
          {CROWD_BLOCKS.map(b => (
            <rect key={b.id} x={b.x} y={b.y} width={b.w} height={b.h} fill={b.c} />
          ))}

          {/* Center-field scoreboard */}
          <rect x="152" y="2"  width="136" height="36" fill="#111122" />
          <rect x="152" y="2"  width="136" height="36" fill="none" stroke="#334488" strokeWidth="2" />
          <text x="160" y="14" fill={C.yellow} fontSize="8" fontFamily="monospace" fontWeight="bold">BASEBALL PARK</text>
          <rect x="160" y="18" width="32"  height="14" fill="#222233" />
          <rect x="228" y="18" width="32"  height="14" fill="#222233" />
          <text x="162" y="28" fill={C.white}  fontSize="8" fontFamily="monospace">DEV 0</text>
          <text x="230" y="28" fill={C.white}  fontSize="8" fontFamily="monospace">OPP 0</text>
          <text x="200" y="29" fill={C.yellow} fontSize="8" fontFamily="monospace">1ST</text>

          {/* ── PLAYING FIELD ── */}
          <polygon
            points="0,290 0,175 44,115 118,60 220,42 322,60 396,115 440,175 440,290"
            fill={C.grass}
          />
          {/* Mow stripes — alternating dark bands, clipped to field */}
          {Array.from({ length: 15 }, (_, i) =>
            i % 2 === 1 && (
              <rect key={i} x="0" y={42 + i * 17} width="440" height="17"
                fill={C.grass2} clipPath="url(#fieldClip)" opacity="0.55" />
            )
          )}

          {/* ── OUTFIELD WALL ── */}
          <polyline points="44,115 118,60 220,42 322,60 396,115"
            fill="none" stroke={C.warning} strokeWidth="14" strokeLinejoin="round" />
          <polyline points="44,115 118,60 220,42 322,60 396,115"
            fill="none" stroke={C.wall}    strokeWidth="6"  strokeLinejoin="round" />
          <polyline points="44,115 118,60 220,42 322,60 396,115"
            fill="none" stroke={C.wallTop} strokeWidth="2"  strokeLinejoin="round" />

          {/* ── FOUL LINES ── */}
          <line x1="220" y1="258" x2="44"  y2="115" stroke={C.white} strokeWidth="1.5" opacity="0.9" />
          <line x1="220" y1="258" x2="396" y2="115" stroke={C.white} strokeWidth="1.5" opacity="0.9" />

          {/* ── INFIELD DIRT DIAMOND ── */}
          <polygon points="132,197 220,136 308,197 220,258" fill={C.dirt} />
          <polygon points="176,217 220,136 264,217 220,258" fill="#a06820" opacity="0.35" />

          {/* ── BASELINES ── */}
          <line x1="132" y1="197" x2="220" y2="136" stroke={C.white} strokeWidth="1.5" opacity="0.8" />
          <line x1="220" y1="136" x2="308" y2="197" stroke={C.white} strokeWidth="1.5" opacity="0.8" />
          <line x1="308" y1="197" x2="220" y2="258" stroke={C.white} strokeWidth="1.5" opacity="0.8" />
          <line x1="220" y1="258" x2="132" y2="197" stroke={C.white} strokeWidth="1.5" opacity="0.8" />

          {/* ── BASES ── */}
          <rect x="214" y="131" width="12" height="8" fill={C.white} />  {/* 2nd */}
          <rect x="303" y="193" width="10" height="8" fill={C.white} />  {/* 1st */}
          <rect x="127" y="193" width="10" height="8" fill={C.white} />  {/* 3rd */}

          {/* ── PITCHER'S MOUND ── */}
          <ellipse cx="220" cy="197" rx="14" ry="8" fill="#c08030" />

          {/* ── BATTER'S BOXES — two separate MLB chalk rectangles flanking home plate ── */}
          {/* Plate: x=207–233, y=258–272. Boxes extend above (toward pitcher) and below (catcher side). */}
          {/* Left box: x=162–205, y=243–276 */}
          <rect x="162" y="243" width="2"  height="33" fill={C.white} opacity="0.85" />
          <rect x="204" y="243" width="2"  height="33" fill={C.white} opacity="0.85" />
          <rect x="162" y="243" width="44" height="2"  fill={C.white} opacity="0.85" />
          <rect x="162" y="274" width="44" height="2"  fill={C.white} opacity="0.85" />
          {/* Right box: x=234–277, y=243–276 */}
          <rect x="234" y="243" width="2"  height="33" fill={C.white} opacity="0.85" />
          <rect x="276" y="243" width="2"  height="33" fill={C.white} opacity="0.85" />
          <rect x="234" y="243" width="44" height="2"  fill={C.white} opacity="0.85" />
          <rect x="234" y="274" width="44" height="2"  fill={C.white} opacity="0.85" />

          {/* ── PITCHER SPRITE (front-facing, small — far away) ── */}
          <g transform="translate(208, 163)">
            <rect x="3"  y="0"  width="10" height="3" fill={C.red}   rx="1" />
            <rect x="1"  y="2"  width="14" height="2" fill={C.red}   />
            <rect x="3"  y="4"  width="10" height="8" fill={C.skin}  />
            <rect x="4"  y="7"  width="2"  height="2" fill={C.black} />
            <rect x="10" y="7"  width="2"  height="2" fill={C.black} />
            <rect x="1"  y="12" width="14" height="10" fill={C.white} />
            <rect x="6"  y="12" width="4"  height="10" fill={C.navy} />
            <rect x="1"  y="17" width="14" height="3"  fill={C.navy} />
            {phase === 0 ? (
              <g>
                <rect x="15" y="8"  width="5" height="8" fill={C.skin} />
                <rect x="18" y="5"  width="6" height="5" fill={C.red}  />
                <rect x="-4" y="13" width="5" height="6" fill={C.skin} />
              </g>
            ) : (
              <g>
                <rect x="15" y="13" width="9" height="4" fill={C.skin} />
                <rect x="22" y="11" width="6" height="5" fill={C.red}  />
                <rect x="-4" y="13" width="5" height="6" fill={C.skin} />
              </g>
            )}
            <rect x="2"  y="22" width="5" height="9" fill={C.white} />
            <rect x="9"  y="22" width="5" height="9" fill={C.white} />
            <rect x="3"  y="23" width="2" height="7" fill={C.navy}  />
            <rect x="10" y="23" width="2" height="7" fill={C.navy}  />
            <rect x="1"  y="29" width="7" height="2" fill={C.black} />
            <rect x="9"  y="29" width="7" height="2" fill={C.black} />
          </g>

          {/* ── CATCHER — behind home plate, body visible below plate bottom y=272 ── */}
          <g transform="translate(210, 280)">
            <rect x="1"  y="-9"  width="12" height="10" fill={C.darkgray} rx="1" />
            <rect x="-2" y="1"   width="18" height="9"  fill={C.gray}  />
            <rect x="-2" y="10"  width="7"  height="7"  fill={C.gray}  />
            <rect x="9"  y="10"  width="7"  height="7"  fill={C.gray}  />
            <rect x="-3" y="10"  width="3"  height="15" fill="#909090" />
            <rect x="14" y="10"  width="3"  height="15" fill="#909090" />
            <rect x="-10" y="1"  width="9"  height="8"  fill={C.brown} />
          </g>

          {/* ── BATTER SPRITE (back view, left batter's box — bigger, closer) ── */}
          <g transform="translate(162, 216)">
            {/* Helmet */}
            <rect x="2"  y="0"  width="16" height="3"  fill={C.red} rx="1" />
            <rect x="0"  y="3"  width="20" height="8"  fill={C.red} />
            <rect x="20" y="5"  width="4"  height="6"  fill={C.red} />
            {/* Neck */}
            <rect x="6"  y="11" width="7"  height="3"  fill={C.skin} />
            {/* Jersey */}
            <rect x="0"  y="14" width="20" height="12" fill={C.white} />
            <rect x="2"  y="14" width="2"  height="12" fill={C.navy} />
            <rect x="16" y="14" width="2"  height="12" fill={C.navy} />
            <rect x="6"  y="15" width="7"  height="9"  fill={C.navy} />
            <rect x="0"  y="22" width="20" height="3"  fill={C.navy} />
            {/* Arms + bat */}
            {phase <= 1 ? (
              <g>
                <rect x="20" y="11" width="7"  height="12" fill={C.skin} />
                <rect x="-6" y="15" width="7"  height="8"  fill={C.skin} />
                <g transform="translate(23, 18) rotate(52)">
                  <rect x="0"  y="-33" width="2" height="33" fill="#c88030" />
                  <rect x="-1" y="-40" width="4" height="8"  fill="#c88030" />
                  <rect x="-3" y="-52" width="8" height="13" fill="#c88030" />
                  <rect x="-3" y="-54" width="8" height="3"  fill="#e0a040" />
                </g>
              </g>
            ) : (
              <g>
                <rect x="7"  y="9"  width="14" height="9"  fill={C.skin} />
                <rect x="-5" y="9"  width="10" height="9"  fill={C.skin} />
                <g transform="translate(-3, 12) rotate(-52)">
                  <rect x="0"  y="-33" width="2" height="33" fill="#c88030" />
                  <rect x="-1" y="-40" width="4" height="8"  fill="#c88030" />
                  <rect x="-3" y="-52" width="8" height="13" fill="#c88030" />
                  <rect x="-3" y="-54" width="8" height="3"  fill="#e0a040" />
                </g>
              </g>
            )}
            {/* Hip + legs */}
            <rect x="0"  y="25" width="20" height="5"  fill={C.white} />
            <rect x="-2" y="30" width="9"  height="14" fill={C.white} />
            <rect x="13" y="30" width="9"  height="14" fill={C.white} />
            <rect x="-1" y="31" width="2"  height="12" fill={C.navy} />
            <rect x="14" y="31" width="2"  height="12" fill={C.navy} />
            <rect x="-4" y="42" width="13" height="3"  fill={C.black} />
            <rect x="11" y="42" width="13" height="3"  fill={C.black} />
          </g>

          {/* ── HOME PLATE (drawn last so it's in front) ── */}
          <polygon points="207,258 233,258 233,266 220,272 207,266" fill={C.white} />

          {/* ── HIT FLASH ── */}
          {phase === 3 && (
            <g transform="translate(216, 253)">
              <polygon
                points="0,-16 4,-6 14,-9 6,0 14,9 4,6 0,16 -4,6 -14,9 -6,0 -14,-9 -4,-6"
                fill={C.yellow}
              />
              <polygon
                points="0,-9 2,-3 8,-6 4,0 8,6 2,3 0,9 -2,3 -8,6 -4,0 -8,-6 -2,-3"
                fill={C.white}
              />
              <text x="-24" y="-21" fontSize="11" fontWeight="bold" fontFamily="monospace" fill={C.yellow}>
                CRACK!
              </text>
            </g>
          )}

          {/* ── HUD SIDE BOXES ── */}
          <rect x="2"   y="178" width="76" height="90" fill={C.black} />
          <rect x="2"   y="178" width="76" height="90" fill="none" stroke={C.white} strokeWidth="2" />
          <text x="8"   y="193" fill={C.white}  fontSize="9" fontFamily="monospace">TOP 1</text>
          <text x="8"   y="207" fill={C.white}  fontSize="9" fontFamily="monospace">DEV  0</text>
          <text x="8"   y="221" fill={C.white}  fontSize="9" fontFamily="monospace">OPP  0</text>
          <text x="8"   y="240" fill={C.white}  fontSize="8" fontFamily="monospace">B 0 S 0 O 0</text>
          <text x="8"   y="256" fill={C.white}  fontSize="8" fontFamily="monospace">SECRET:ON</text>

          <rect x="362" y="192" width="76" height="76" fill={C.black} />
          <rect x="362" y="192" width="76" height="76" fill="none" stroke={C.white} strokeWidth="2" />
          <text x="368" y="207" fill={C.white}  fontSize="9" fontFamily="monospace">J.WOOD</text>
          <text x="368" y="221" fill={C.white}  fontSize="9" fontFamily="monospace">AVG.999</text>
          <text x="368" y="235" fill={C.yellow} fontSize="9" fontFamily="monospace">HR   1</text>
          <text x="368" y="254" fill={C.white}  fontSize="8" fontFamily="monospace">+1</text>

        </svg>

        {/* Ball */}
        <div style={{
          position: 'absolute',
          width: 7, height: 7,
          borderRadius: '50%',
          background: C.white,
          left: `${(ballX / 440) * 100}%`,
          top:  `${(ballY / 290) * 100}%`,
          transform: 'translate(-50%, -50%)',
          transition: ballTr,
          opacity: phase >= 5 ? 0 : 1,
          zIndex: 5,
          pointerEvents: 'none',
          boxShadow: phase >= 4 ? '0 0 6px #fff, 0 0 12px #fff' : 'none',
        }} />

        {/* Fireworks — appear in the outfield/stands area */}
        {phase >= 5 && fireworks.map(fw => (
          <div key={fw.id} style={{
            position: 'absolute',
            left: `${fw.x}%`,
            top:  `${fw.y}%`,
            width: 0, height: 0,
            animation: `nesFirework 0.9s steps(4) ${fw.delay}s infinite`,
            zIndex: 20,
            pointerEvents: 'none',
          }}>
            {Array.from({ length: 8 }).map((_, j) => (
              <div key={j} style={{
                position: 'absolute',
                width: 5, height: 5,
                background: fw.color,
                transform: `rotate(${j * 45}deg) translateY(-${fw.size}px)`,
                transformOrigin: 'center center',
              }} />
            ))}
            <div style={{
              position: 'absolute', width: 6, height: 6,
              background: C.white, top: -3, left: -3,
            }} />
          </div>
        ))}
      </div>

      {phase >= 5 && (
        <>
          <div style={{
            marginTop: 10,
            padding: '8px 26px',
            background: C.black,
            border: `3px solid ${C.yellow}`,
            color: C.yellow,
            fontSize: 24,
            fontWeight: 900,
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            animation: 'nesFlash 0.45s steps(2) infinite',
            textShadow: `3px 3px 0 ${C.red}`,
          }}>
            ★ HOME RUN! ★
          </div>
          <div style={{
            marginTop: 6, color: C.white, fontSize: 9,
            fontFamily: 'monospace', letterSpacing: '0.12em',
          }}>
            J. WOOD — BAT .999
          </div>
        </>
      )}

      <style>{`
        @keyframes nesFlash {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.6; }
        }
        @keyframes nesFirework {
          0%   { opacity: 0;   transform: scale(0.1); }
          25%  { opacity: 1;   transform: scale(1);   }
          75%  { opacity: 0.5; transform: scale(1.5); }
          100% { opacity: 0;   transform: scale(2);   }
        }
      `}</style>
    </div>
  )
}
