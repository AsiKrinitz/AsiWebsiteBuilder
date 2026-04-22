import './Pricing.css';

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="section-title">
          חבילות <span className="gradient-text">ומחירים</span>
        </h2>
        <div className="pricing-grid">
          <div className="glass-panel pricing-card">
            <h3 className="service-title">דף נחיתה</h3>
            <div className="price">₪1,490<span>/חד פעמי</span></div>
            <ul className="service-description" style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ עיצוב מותאם אישית</li>
              <li>✓ רספונסיביות מלאה</li>
              <li>✓ חיבור ל-WhatsApp</li>
              <li>✓ טופס לידים</li>
              <li>✓ אופטימיזציית מהירות</li>
            </ul>
            <a href="#contact" className="btn-outline" style={{ marginTop: 'auto' }}>לבחירה</a>
          </div>

          <div className="glass-panel pricing-card featured">
            <h3 className="service-title">אתר תדמית (5 דפים)</h3>
            <div className="price">₪3,490<span>/חד פעמי</span></div>
            <ul className="service-description" style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ עד 5 דפי תוכן</li>
              <li>✓ עיצוב פרימיום</li>
              <li>✓ קידום SEO בסיסי</li>
              <li>✓ גלריית פרויקטים</li>
              <li>✓ אבטחת SSL</li>
            </ul>
            <a href="#contact" className="btn-primary" style={{ marginTop: 'auto' }}>הכי פופולרי</a>
          </div>

          <div className="glass-panel pricing-card">
            <h3 className="service-title">אתר Custom / חנות</h3>
            <div className="price">החל מ-₪5,990</div>
            <ul className="service-description" style={{ listStyle: 'none', padding: 0 }}>
              <li>✓ פיתוח קוד מלא (React)</li>
              <li>✓ מערכת ניהול תוכן</li>
              <li>✓ חנות איקומרס מלאה</li>
              <li>✓ אינטגרציות מורכבות</li>
              <li>✓ ליווי ותמיכה שוטפת</li>
            </ul>
            <a href="#contact" className="btn-outline" style={{ marginTop: 'auto' }}>דברו איתי</a>
          </div>
        </div>
      </div>
    </section>
  );
}
