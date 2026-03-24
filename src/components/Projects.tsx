export function Projects() {
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          תיק <span className="gradient-text">עבודות</span>
        </h2>
        <div className="projects-grid">
          <div className="glass-panel project-card">
            <div
              className="project-content"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <h3 className="service-title" style={{ color: 'var(--primary)' }}>
                Asi Krinitz Fix PC
              </h3>
              <p className="service-description">
                פלטפורמה המציגה שירותי טכנאות מחשבים בחיפה עם חיבור ישיר ל-WhatsApp ותמיכה מרחוק.
              </p>
              <div
                className="tech-stack"
                style={{ margin: '1.5rem 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
              >
                <span className="tag">React</span>
                <span className="tag">TypeScript</span>
                <span className="tag">Vite</span>
              </div>
              <div
                className="project-actions"
                style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}
              >
                <a
                  href="https://AsiKrinitz.github.io/AsiKrinitzPcFix/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  לאתר
                </a>
                <a
                  href="https://github.com/AsiKrinitz/AsiKrinitzPcFix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1 }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="glass-panel project-card">
            <div
              className="project-content"
              style={{
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <h3 className="service-title" style={{ color: 'var(--primary)' }}>
                אתר תדמית אישי
              </h3>
              <p className="service-description">
                אתר רספונסיבי מודרני המציג שירותי בניית אתרים ופרויקטים נבחרים ברמה הגבוהה ביותר.
              </p>
              <div
                className="tech-stack"
                style={{ margin: '1.5rem 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}
              >
                <span className="tag">React</span>
                <span className="tag">Vite</span>
   
              </div>
              <div
                className="project-actions"
                style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}
              >
                <a
                  href="https://AsiKrinitz.github.io/ReactProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ flex: 1 }}
                >
                  לאתר
                </a>
                <a
                  href="https://github.com/AsiKrinitz/ReactProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ flex: 1 }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
