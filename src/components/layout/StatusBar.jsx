import { useEffect, useState } from 'react'

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export default function StatusBar({ activeFile }) {
  const [time, setTime] = useState(() => formatTime(new Date()))

  // Previously the clock was only computed on render, so it froze between tab switches
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(new Date())), 15_000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="statusbar">
      <div className="statusbar__left">
        <span className="statusbar__item">⑂ main</span>
        <span className="statusbar__item statusbar__item--hide-xs">⚠ 0  ⊘ 0</span>
      </div>
      <div className="statusbar__right">
        <span className="statusbar__item">{activeFile}</span>
        <span className="statusbar__item statusbar__item--hide-mobile">TypeScript React</span>
        <span className="statusbar__item statusbar__item--hide-mobile">UTF-8</span>
        <span className="statusbar__item statusbar__item--hide-mobile">Prettier</span>
        <span className="statusbar__item statusbar__item--hide-mobile">Aahana Dark</span>
        <span className="statusbar__item">{time}</span>
      </div>
    </footer>
  )
}
