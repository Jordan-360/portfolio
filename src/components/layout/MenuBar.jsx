const MENU_ITEMS = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help']

export default function MenuBar() {
  return (
    <div className="menubar">
      {MENU_ITEMS.map(item => (
        <div key={item} className="menubar__item">{item}</div>
      ))}
    </div>
  )
}