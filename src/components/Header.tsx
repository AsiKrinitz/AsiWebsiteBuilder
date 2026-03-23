import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div
          className="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="logo-accent">ASI</span> DESIGN
        </div>
        <nav className="nav">
          <button
            onClick={() =>
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            שירותים
          </button>
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            פרויקטים
          </button>
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            עליי
          </button>
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
            דברו איתי
          </a>
        </nav>
      </div>
    </header>
  )
}
