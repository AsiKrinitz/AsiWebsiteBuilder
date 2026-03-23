export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <h2 className="section-title">
          מבצע <span className="gradient-text">פתיחה חגיגי</span>
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
          לרגל "השקת העסק" - אני מציע חבילה אחת מנצחת במחיר שלא יחזור, כדי לתפור לך נוכחות מושלמת
          ברשת ברמה הכי גבוהה שיש.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            className="glass-panel pricing-card featured"
            style={{ maxWidth: '600px', width: '100%', padding: '5rem 4rem' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary)',
                color: '#000',
                padding: '0.25rem 1.5rem',
                borderRadius: '99px',
                fontSize: '1rem',
                fontWeight: '900',
                boxShadow: '0 0 20px var(--primary-glow)',
              }}
            >
              מבצע השקה לזמן מוגבל!
            </div>

            <h3
              className="service-title"
              style={{
                fontSize: '2.5rem',
                color: '#fff',
                textAlign: 'center',
                marginBottom: '1.5rem',
              }}
            >
              דף נחיתה / אתר תדמית (React)
            </h3>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '15px',
                marginBottom: '3rem',
              }}
            >
              <span
                style={{
                  fontSize: '2.5rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through',
                }}
              >
                ₪1,000
              </span>
              <div className="price" style={{ margin: 0, fontSize: '5rem' }}>
                ₪700<span style={{ fontSize: '1.5rem' }}> / פרויקט</span>
              </div>
            </div>

            <ul
              style={{
                listStyleType: 'none',
                padding: 0,
                margin: '0 0 4rem 0',
                textAlign: 'right',
                color: 'var(--text-main)',
                fontSize: '1.3rem',
              }}
            >
              <li
                style={{
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                ✓ פיתוח בקוד מלא (React) - ביצועי שיא
              </li>
              <li
                style={{
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                ✓ עיצוב פרימיום מותאם אישית לעסק
              </li>
              <li
                style={{
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                ✓ התאמה מושלמת לכל סוגי המכשירים
              </li>
              <li
                style={{
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                ✓ חיבור לכפתורי יצירת קשר מהירים
              </li>
              <li
                style={{
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                }}
              >
                ✓ הקמה מהירה ותמיכה אישית
              </li>
            </ul>

            <a
              href="#contact"
              className="btn-primary"
              style={{ fontSize: '1.5rem', width: '100%', borderRadius: '20px' }}
            >
              תפסו לי מקום במחיר המבצע
            </a>

            <p
              style={{
                textAlign: 'center',
                color: 'var(--text-muted)',
                marginTop: '2rem',
                fontSize: '0.9rem',
              }}
            >
              * המחיר תקף ל-10 הפרויקטים הראשונים בלבד!
            </p>
          </div>
        </div>

        <div
          className="glass-panel"
          style={{ marginTop: '4rem', padding: '3rem', maxWidth: '800px', marginInline: 'auto' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 0 10px var(--primary-glow))' }}>
              🌐
            </div>
            <div style={{ flex: 1 }}>
              <h3 className="service-title" style={{ marginBottom: '0.5rem' }}>
                מה לגבי דומיין?
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                הדומיין הוא "הכתובת" של האתר שלכם (למשל: yourbusiness.co.il). <br />
                אני דואג לכם לכל התהליך של רישום והשכרת הדומיין מול הספקים השונים, כך שאתם לא צריכים
                להסתבך. התשלום עבור הדומיין מתבצע בנפרד, **בהתאם לעלות המדויקת של הדומיין** שייבחר
                (ללא עמלת תיווך!).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
