import './Pricing.css';

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            הצעה <span className="gradient-text">מנצחת</span>
          </h2>
          <p className="pricing-subtitle">כל מה שהעסק שלך צריך כדי לפרוץ קדימה, בחבילה אחת מושלמת.</p>
        </div>
        
        <div className="single-pricing-container">
          <div className="glass-panel pricing-card featured single-card">
            <div className="card-badge">מבצע השקה!</div>
            <h3 className="service-title">אתר תדמית פרימיום</h3>
            
            <div className="price-container">
              <span className="original-price">₪1,000</span>
              <div className="price">₪700</div>
              <span className="price-label">חד פעמי</span>
            </div>

            <ul className="service-description">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>עיצוב אישי וייחודי</strong>
                  <p>עיצוב מותאם אישית לבחירתכם, המדגיש את הזהות העסקית שלכם.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>טכנולוגיה חדישה ומהירה</strong>
                  <p>פיתוח בקוד נקי (React) לביצועים מקסימליים וחוויית משתמש חלקה.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>אופטימיזציית SEO</strong>
                  <p>בנייה נכונה לקידום בגוגל – מהיר וחזק יותר מאתרי וורדפרס כבדים.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>ליווי ברכישת דומיין</strong>
                  <p>עזרה מלאה בבחירה ורכישת דומיין מותאם אישית לעסק.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>תשלום חד-פעמי</strong>
                  <p>ללא דמי מנוי חודשיים. משלמים פעם אחת – והאתר שלכם לתמיד.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>ליווי אישי ומסור</strong>
                  <p>ליווי אישי צמוד לאורך כל התהליך, עד שתהיו מרוצים ב-100% מהתוצאה הסופית.</p>
                </div>
              </li>
            </ul>

            <a href="/contact" className="btn-primary contact-btn">אני רוצה להתחיל</a>
          </div>
        </div>
      </div>
    </section>
  );
}
