export function TechComparison() {
  return (
    <section
      className="tech-comparison"
      id="tech-comparison"
      style={{ padding: '10rem 0', background: 'rgba(2, 6, 23, 0.4)' }}
    >
      <div className="container">
        <h2 className="section-title">
          למה <span className="gradient-text">React</span> ולא וורדפרס?
        </h2>
        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            marginBottom: '5rem',
            fontSize: '1.25rem',
            maxWidth: '800px',
            marginInline: 'auto',
          }}
        >
          בעולם המודרני, העסק שלך צריך אתר מהיר, מאובטח ומותאם אישית. הנה השוואה קצרה שתעשה לך סדר:
        </p>

        <div className="glass-panel" style={{ overflow: 'hidden', padding: '1px' }}>
          <div className="comparison-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <div
              className="table-header"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div style={{ fontWeight: '900', color: 'var(--text-main)', fontSize: '1.2rem' }}>
                תכונה
              </div>
              <div
                style={{
                  fontWeight: '900',
                  color: 'var(--primary)',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                }}
              >
                React (אצלנו)
              </div>
              <div
                style={{
                  fontWeight: '900',
                  color: 'var(--text-muted)',
                  fontSize: '1.2rem',
                  textAlign: 'center',
                }}
              >
                WordPress
              </div>
            </div>

            <div
              className="table-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                padding: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>מהירות טעינה</div>
              <div style={{ color: 'var(--primary)', textAlign: 'center', fontWeight: '700' }}>
                מהיר בטירוף (ביצועי שיא)
              </div>
              <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                איטי (תלוי בתוספים)
              </div>
            </div>

            <div
              className="table-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                padding: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>אבטחה</div>
              <div style={{ color: 'var(--primary)', textAlign: 'center', fontWeight: '700' }}>
                מקסימלית (קוד סגור ומודרני)
              </div>
              <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                פריץ (פגיע לפרצות בתוספים)
              </div>
            </div>

            <div
              className="table-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                padding: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>גמישות ועיצוב</div>
              <div style={{ color: 'var(--primary)', textAlign: 'center', fontWeight: '700' }}>
                אינסופית (הכל אפשרי בקוד)
              </div>
              <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                מוגבלת לתבניות ותוספים
              </div>
            </div>

            <div
              className="table-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                padding: '2rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>קידום בגוגל (SEO)</div>
              <div style={{ color: 'var(--primary)', textAlign: 'center', fontWeight: '700' }}>
                מעולה (קוד נקי וקל לסריקה)
              </div>
              <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                בינוני (קוד עמוס ומסורבל)
              </div>
            </div>

            <div
              className="table-row"
              style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '2rem' }}
            >
              <div style={{ color: 'var(--text-main)', fontWeight: '600' }}>חווית משתמש</div>
              <div style={{ color: 'var(--primary)', textAlign: 'center', fontWeight: '700' }}>
                מעבר דפים חלק ומהיר
              </div>
              <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>
                ריענון דף מלא בכל לחיצה
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
