import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src="/ak_logo2.png" alt="ASI Design Logo" style={{ height: '100px', objectFit: 'contain' }} />
        </Link>
        <nav className="nav">
        <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>פרויקטים</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>שירותים</Link>
        
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>מי אני?</Link>
          <Link to="/contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
            דברו איתי
          </Link>
        </nav>
      </div>
    </header>
  );
}
