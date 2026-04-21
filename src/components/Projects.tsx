export function Projects() {
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          תיק <span className="gradient-text">עבודות</span>
        </h2>
        <div className="projects-grid">
          {/* Project 1: Sagi King Of Balloons */}
          <div className="glass-panel project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="project-header" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="service-title" style={{ color: 'var(--primary)', margin: 0, fontSize: '1.4rem' }}>
                שגיא מלך הבלונים - הפקות ואירועים
              </h3>
            </div>
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
              <img src="/SagiScreen.png" alt="Sagi King Of Balloons" className="project-image" />
              <div className="project-overlay">
                <p className="project-desc">
                  אתר קטלוג מרהיב לעיצובי בלונים לכל אירוע, הכולל גלריות תמונות מגוונות וחלוקה לקטגוריות.
                </p>
                <div
                  className="tech-stack"
                  style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                >
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Vite</span>
                </div>
                <div className="project-actions" style={{ display: 'flex' }}>
                  <a
                    href="https://AsiKrinitz.github.io/SagiKingOfBalloons"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: ShiraSocial */}
          <div className="glass-panel project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="project-header" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="service-title" style={{ color: 'var(--primary)', margin: 0, fontSize: '1.4rem' }}>
                שירה קידום עסקים בסושיאל
              </h3>
            </div>
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
              <img src="/shiraScreen.png" alt="ShiraSocial" className="project-image" />
              <div className="project-overlay">
                <p className="project-desc">
                  פורטפוליו מקצועי ליצירת תוכן, UGC וניהול מדיה חברתית עם עיצוב מודרני.
                </p>
                <div
                  className="tech-stack"
                  style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                >
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                  <span className="tag">CSS3</span>
                </div>
                <div className="project-actions" style={{ display: 'flex' }}>
                  <a
                    href="https://AsiKrinitz.github.io/ShiraSocial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: Asi Krinitz Fix PC */}
          <div className="glass-panel project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="project-header" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="service-title" style={{ color: 'var(--primary)', margin: 0, fontSize: '1.4rem' }}>
                אסי טכנאי מחשבים - אתר לדוגמה
              </h3>
            </div>
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
              <img src="/AsiPcScreen.png" alt="Asi Krinitz Fix PC" className="project-image" />
              <div className="project-overlay">
                <p className="project-desc">
                  פלטפורמה המציגה שירותי טכנאות מחשבים בחיפה עם חיבור ישיר ל-WhatsApp ותמיכה מרחוק.
                </p>
                <div
                  className="tech-stack"
                  style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                >
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Vite</span>
                </div>
                <div className="project-actions" style={{ display: 'flex' }}>
                  <a
                    href="https://AsiKrinitz.github.io/AsiKrinitzPcFix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4: אתר תדמית אישי */}
          <div className="glass-panel project-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="project-header" style={{ padding: '1.5rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <h3 className="service-title" style={{ color: 'var(--primary)', margin: 0, fontSize: '1.4rem' }}>
                אתר תדמית אישי
              </h3>
            </div>
            <div style={{ position: 'relative', flex: 1, overflow: 'hidden' }}>
              <img src="/AsiWebsiteScreen.png" alt="אתר תדמית אישי" className="project-image" />
              <div className="project-overlay">
                <p className="project-desc">
                  אתר רספונסיבי מודרני המציג שירותי בניית אתרים ופרויקטים נבחרים ברמה הגבוהה ביותר.
                </p>
                <div
                  className="tech-stack"
                  style={{ marginBottom: '1.5rem', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
                >
                  <span className="tag">React</span>
                  <span className="tag">Vite</span>
                </div>
                <div className="project-actions" style={{ display: 'flex' }}>
                  <a
                    href="https://AsiKrinitz.github.io/ReactProject"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ width: '100%' }}
                  >
                    לאתר
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
