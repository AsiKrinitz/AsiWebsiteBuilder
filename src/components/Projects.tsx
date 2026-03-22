export function Projects() {
  return (
    <section id="projects" className="services" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">תיקי <span className="gradient-text">עבודות</span></h2>
        <div className="services-grid" style={{ alignItems: 'stretch' }}>
          
          <div className="service-card glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="service-title" style={{color: 'var(--accent)'}}>JobFinder</h3>
            <p className="service-description">
              אתר חיפוש עבודה חכם שנבנה כפרויקט פולסטאק מקיף. מחבר בין מחפשי עבודה למעסיקים עם מערכת ניהול משרות, הרשמה מאובטחת, ויצירת קורות חיים אוטומטית.
            </p>
            <div style={{margin: '1.5rem 0', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Angular 15</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Node.js</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>MongoDB</span>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem'}}>
              <a href="https://github.com/AsiKrinitz/WorkFind" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{flex: 1, textAlign: 'center'}}>
                צפייה ב-GitHub
              </a>
            </div>
          </div>

          <div className="service-card glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="service-title" style={{color: 'var(--accent)'}}>Asi Krinitz Fix PC</h3>
            <p className="service-description">
              פלטפורמה המציגה שירותי טכנאות מחשבים בחיפה. כולל מחירון מותאם, אפשרויות תמיכה מרחוק (AnyDesk), וחיבור אוטומטי ליצירת קשר מהירה ב-WhatsApp.
            </p>
            <div style={{margin: '1.5rem 0', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>React</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>TypeScript</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Vite</span>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem'}}>
              <a href="https://AsiKrinitz.github.io/AsiKrinitzPcFix/" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{flex: 1, textAlign: 'center'}}>
                לאתר החי
              </a>
              <a href="https://github.com/AsiKrinitz/AsiKrinitzPcFix" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{flex: 1, textAlign: 'center'}}>
                צפייה ב-GitHub
              </a>
            </div>
          </div>

          <div className="service-card glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 className="service-title" style={{color: 'var(--accent)'}}>אתר תדמית אישי</h3>
            <p className="service-description">
              אתר רספונסיבי מודרני שבניתי מראשיתו. מציג פירוט מלא של השירותים שיש לי להציע ללקוחות בניית אתרים, פרויקטים נבחרים שביצעתי, ותקשורת חכמה בטופס מחובר ישירות ל-WhatsApp.
            </p>
            <div style={{margin: '1.5rem 0', display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-start'}}>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>React</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>Vite</span>
              <span style={{fontSize: '0.8rem', background: 'rgba(239, 68, 68, 0.2)', padding: '4px 8px', borderRadius: '4px'}}>GH Pages</span>
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1rem'}}>
              <a href="https://AsiKrinitz.github.io/ReactProject" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{flex: 1, textAlign: 'center'}}>
                לאתר החי
              </a>
              <a href="https://github.com/AsiKrinitz/ReactProject" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{flex: 1, textAlign: 'center'}}>
                צפייה ב-GitHub
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
