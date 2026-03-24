
export function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div
          className="logo"
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src="./ak_logo2.png" alt="ASI Design Logo" style={{ height: '100px', objectFit: 'contain' }} />
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
