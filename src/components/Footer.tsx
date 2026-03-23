export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="logo">
            <span className="logo-accent">ASI</span> DESIGN
          </div>
          <p>בניית אתרים שבאמת עובדים בשבילך.</p>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} ASI DESIGN | אסי קריניץ. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
