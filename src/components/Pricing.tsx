export function Pricing() {
  return (
    <section id="pricing" className="services" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container">
        <h2 className="section-title">שקיפות <span className="gradient-text">במחירים</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.2rem' }}>
          מחירים ברורים, הוגנים, וללא הפתעות להקמת הנוכחות הדיגיטלית שלכם.
        </p>
        
        <div className="services-grid">
          
          {/* Tier 1 - Basic Landing Page */}
          <div className="service-card glass-panel" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <h3 className="service-title" style={{ color: 'var(--text-main)' }}>דף נחיתה אישי</h3>
            <div style={{ margin: '1rem 0 2rem 0' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>₪1000</span>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'center', flex: 1, color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.8rem' }}>✓ עמוד נחיתה ממוקד (One-Pager)</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ עיצוב חדשני ומדויק מבוסס React</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ התאמה מושלמת למכשירים ניידים</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ כפתורי ווצאפ להגדלת פניות</li>
            </ul>
            <a href="#contact" className="btn-outline" style={{width: '100%'}}>לפרטים נוספים</a>
          </div>

          {/* Tier 2 - Business Site */}
          <div className="service-card glass-panel" style={{ border: '2px solid var(--accent)', position: 'relative', display: 'flex', flexDirection: 'column', textAlign: 'center', transform: 'scale(1.05)', zIndex: 1 }}>
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--accent)', color: 'white', padding: '6px 20px', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(220, 38, 38, 0.4)' }}>
              הבחירה המובילה לעסקים
            </div>
            <h3 className="service-title" style={{ color: 'var(--primary)', marginTop: '1rem' }}>אתר תדמית מקצועי</h3>
            <div style={{ margin: '1rem 0 2rem 0' }}>
              <span style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary)' }}>₪1500</span>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'center', flex: 1, color: 'var(--text-main)' }}>
              <li style={{ marginBottom: '0.8rem', fontWeight: '500' }}>✓ הקמת עמוד ארוך ועשיר בתוכן</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ הוספת גלריית פרויקטים ולקוחות</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ הכנה ראשונית לייעול חיפוש בגוגל</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ הדרכה מלאה ותמיכה טכנית</li>
            </ul>
            <a href="#contact" className="btn-primary" style={{width: '100%', fontSize: '1.2rem'}}>התחל פרויקט מקיף</a>
          </div>

          {/* Tier 3 - Maintenance */}
          <div className="service-card glass-panel" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
            <h3 className="service-title" style={{ color: 'var(--text-main)' }}>שירות ואחסון</h3>
            <div style={{ margin: '1rem 0 2rem 0' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>מותאם אישית</span>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0, margin: '0 0 2rem 0', textAlign: 'center', flex: 1, color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '0.8rem' }}>✓ אחסון האתר והדומיין באוויר</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ עדכוני טקסטים ותמונות לאחר העלייה</li>
              <li style={{ marginBottom: '0.8rem' }}>✓ דיווח תעבורה (בקרוב)</li>
            </ul>
            <a href="#contact" className="btn-outline" style={{width: '100%'}}>צור קשר לתחזוקה</a>
          </div>

        </div>
      </div>
    </section>
  )
}
