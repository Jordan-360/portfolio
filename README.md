# Jordan Wood — Portfolio

A fully interactive developer portfolio built to look and feel like a real VS Code window — complete with a working sidebar, tab system, command palette, and menu bar.

**Live site:** [jordanwood.vercel.app](https://jordanwood.vercel.app)

![Built with React](https://img.shields.io/badge/Built%20with-React-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white)

---

## ✨ Features

- **Full VS Code shell** — macOS-style title bar, menu bar, activity bar, sidebar, tab system, and status bar
- **Functional command palette** — `Ctrl/Cmd+P` style file switcher with keyboard navigation
- **Working menu bar** — File, Edit, View, Go, Run, Terminal, and Help menus with real functionality (close tabs, download resume, toggle fullscreen, zoom, and more)
- **Mock terminal** — a fake build/startup sequence triggered from the Run & Debug icon
- **Live data integration** — pulls real-time Seattle Mariners standings from the MLB Stats API
- **Hidden Konami code easter egg** — `↑ ↑ ↓ ↓ ← → ← → b a` triggers a retro 8-bit home run animation
- **Inline PDF resume viewer** with one-click download
- **Fully responsive sections** — Home, About, Projects, Contact, Resume, and an extended "Beyond the Resume" README page

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| Framework | React, Vite |
| Styling | Custom CSS variables (no framework) |
| Icons | react-icons (VS Code Icons + Simple Icons) |
| PDF Rendering | react-pdf |
| Hosting | Vercel |
| Data | MLB Stats API |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/       # TopBar, MenuBar, ActivityBar, Sidebar, TabBar, StatusBar
│   ├── sections/      # Home, About, Projects, Contact, Resume, ReadMe
│   └── ui/            # CommandPalette, MenuDropdown, FileIcon, HomeRunAnimation, MockTerminal
├── styles/            # globals.css, ide.css, syntax.css
└── assets/            # icons, resume PDF, profile photo
```

## 🚀 Running Locally

```bash
git clone https://github.com/Jordan-360/portfolio.git
cd portfolio
npm install
npm run dev
```

The site will be available at `http://localhost:5173`.

## 🥚 Easter Egg

Try typing the Konami code anywhere on the site:

```
↑ ↑ ↓ ↓ ← → ← → b a
```

## 📬 Contact

- **Portfolio:** [jordanwood.vercel.app](https://jordanwood.vercel.app)
- **GitHub:** [github.com/Jordan-360](https://github.com/Jordan-360)
- **LinkedIn:** [linkedin.com/in/jordanwood526](https://linkedin.com/in/jordanwood526)
- **Email:** jordanwood159@gmail.com

---

<p align="center">
  Built with React + Vite, styled like an IDE, shipped like a product.
</p>