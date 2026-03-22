export function Projects() {
  return (
    <section id="projects" className="services" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">תיקי <span className="gradient-text">עבודות</span></h2>
        <div className="services-grid">
          
          <div className="service-card glass-panel">
            <h3 className="service-title" style={{color: 'var(--accent)'}}>JobFinder</h3>
            <p className="service-description">
              אתר חיפוש עבודה חכם שנבנה כפרויקט פולסטאק מקיף. מחבר בין מחפשי עבודה למעסיקים עם מערכת ניהול משרות, הרשמה מאובטחת, ויצירת קורות חיים אוטומטית.
            </p>
            <div style={{marginTop: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Angular 15</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Node.js</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>MongoDB</span>
            </div>
            <a href="https://github.com/AsiKrinitz/WorkFind" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{marginTop: '1.5rem', width: '100%'}}>
              צפייה בפרויקט ב-GitHub
            </a>
          </div>

          <div className="service-card glass-panel">
            <h3 className="service-title" style={{color: 'var(--accent)'}}>Asi Krinitz Fix PC</h3>
            <p className="service-description">
              פלטפורמה המציגה שירותי טכנאות מחשבים בחיפה. כולל מחירון מותאם, אפשרויות תמיכה מרחוק (AnyDesk), וחיבור אוטומטי ליצירת קשר מהירה ב-WhatsApp.
            </p>
            <div style={{marginTop: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>React</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>TypeScript</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Vite</span>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
              <a href="https://AsiKrinitz.github.io/AsiKrinitzPcFix/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{flex: 1}}>
                לאתר החי
              </a>
              <a href="https://github.com/AsiKrinitz/AsiKrinitzPcFix" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{flex: 1}}>
                קוד מקור
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
