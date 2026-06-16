export default function StatusBar({ activeFile }) {
  const now = new Date()
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="statusbar">
      <div className="statusbar__left">
        <span className="statusbar__item">⑂ main</span>
        <span className="statusbar__item">⚠ 0  ⊘ 0</span>
      </div>
      <div className="statusbar__right">
        <span className="statusbar__item">{activeFile}</span>
        <span className="statusbar__item">TypeScript React</span>
        <span className="statusbar__item">UTF-8</span>
        <span className="statusbar__item">Prettier</span>
        <span className="statusbar__item">Aahana Dark</span>
        <span className="statusbar__item">{time}</span>
      </div>
    </div>
  )
}