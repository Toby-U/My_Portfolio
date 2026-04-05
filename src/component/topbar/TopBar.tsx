import { useEffect, useState } from 'react'
import '../topbar/Topbar.css'

type SectionId = 'about' | 'skills' | 'projects' | 'contact'
type ThemeMode = 'light' | 'dark'

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function TopBar() {
  const [activeSection, setActiveSection] = useState<SectionId>('about')
  const [theme, setTheme] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme') as ThemeMode | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme: ThemeMode = savedTheme ?? (prefersDark ? 'dark' : 'light')

    setTheme(initialTheme)
    document.documentElement.setAttribute('data-theme', initialTheme)
  }, [])

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.setAttribute('data-theme', nextTheme)
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  useEffect(() => {
    const observedSections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-15% 0px -40% 0px',
      },
    )

    observedSections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <header>
      <nav className="topbar" aria-label="Primary">
        <div className="nav-wrapper">
          <a href="#about" className="brand" aria-label="Go to top">
            TU
          </a>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'is-active' : ''}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
            title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
          >
            <img src={theme === 'light' ? '/darkmode.svg' : '/light_mode.svg'} alt="" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default TopBar