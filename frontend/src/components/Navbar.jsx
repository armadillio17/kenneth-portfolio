import { useEffect, useState } from 'react'
import { profile } from '../data.js'

const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact']

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
  } catch {
    // storage unavailable
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable
    }
  }, [theme])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo">
          {profile.name}
          <span>.</span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((id) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {id[0].toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="icon-btn menu-btn"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
