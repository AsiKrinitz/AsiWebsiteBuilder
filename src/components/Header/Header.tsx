import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo" onClick={scrollToTop}>
          <img src="/ak_logo2.png" alt="ASI Design Logo" style={{ height: '100px', objectFit: 'contain' }} />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav">
          <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''}>פרויקטים</Link>
          <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''}>שירותים</Link>
          <Link to="/pricing" className={location.pathname === '/pricing' ? 'active-link' : ''}>מחירים</Link>
        
          <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>מי אני?</Link>
          <Link to="/contact" className="btn-primary" style={{ padding: '0.5rem 1.25rem' }}>
            דברו איתי
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Mobile Nav Menu */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <Link to="/" className="logo mobile-logo" onClick={scrollToTop}>
              <img src="/ak_logo2.png" alt="ASI Design Logo" style={{ height: '70px', objectFit: 'contain' }} />
            </Link>
          </div>
          <div className="mobile-nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>בית</Link>
            <Link to="/projects" className={location.pathname === '/projects' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>פרויקטים</Link>
            <Link to="/services" className={location.pathname === '/services' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>שירותים</Link>
            <Link to="/pricing" className={location.pathname === '/pricing' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>מחירים</Link>
            <Link to="/reviews" className={location.pathname === '/reviews' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>המלצות</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''} onClick={() => setIsMenuOpen(false)}>מי אני?</Link>
            <Link to="/contact" className="btn-primary mobile-contact-btn" onClick={() => setIsMenuOpen(false)}>
              דברו איתי
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
