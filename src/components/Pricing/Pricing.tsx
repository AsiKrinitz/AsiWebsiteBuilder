import './Pricing.css';

export function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-title">
            בחרו את <span className="gradient-text">המסלול</span> שלכם
          </h2>
          <p className="pricing-subtitle">אותו מוצר איכותי, שני מסלולי תשלום גמישים - בחרו את מה שמתאים לעסק שלכם.</p>
        </div>
        
        <div className="pricing-grid">
          {/* Plan 1: One-time */}
          <div className="glass-panel pricing-card featured">
            <div className="card-badge">מסלול רכישה</div>
            <h3 className="service-title" style={{ marginTop: '1.5rem' }}>אתר תדמית / דף נחיתה</h3>
            
            <div className="price-container">
              <span className="original-price">₪1,000</span>
              <div className="price">₪700</div>
              <span className="price-label">תשלום חד פעמי</span>
            </div>

            <div className="maintenance-highlight">
              <strong>תחזוקה ושינויים:</strong>
              <p>חודש ראשון של שינויים בחינם. לאחר מכן, העבודה תתומחר לפי שעות במידת הצורך.</p>
            </div>

            <ul className="service-description">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>עיצוב אישי וייחודי</strong>
                  <p>עיצוב מותאם אישית המדגיש את הזהות העסקית שלכם.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">⚡</span>
                <div>
                  <strong>טכנולוגיה חדישה ומהירה</strong>
                  <p>ביצועים ללא פשרות - אתר מהיר ויעיל שחוסך זמן לגולשים ומקדם אתכם בגוגל.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">🛡️</span>
                <div>
                  <strong>אחסון + אבטחה + גיבויים</strong>
                  <p>ראש שקט עם אחסון מאובטח וגיבויים שוטפים, ללא עלות חודשית.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>אופטימיזציית SEO</strong>
                  <p>בנייה נכונה לקידום מקסימלי במנועי החיפוש.</p>
                </div>
              </li>
            </ul>

            <a href="/contact" className="btn-primary contact-btn">אני רוצה להתחיל!</a>
          </div>

          {/* Plan 2: Monthly */}
          <div className="glass-panel pricing-card featured">
            <div className="card-badge">מסלול צמיחה</div>
            <h3 className="service-title" style={{ marginTop: '1.5rem' }}>אתר תדמית / דף נחיתה</h3>
            
            <div className="price-container">
              <span className="original-price">₪550</span>
              <div className="price">₪300</div>
              <span className="price-label">לחודש (בהתחייבות לחצי שנה)</span>
            </div>

            <div className="maintenance-highlight">
              <strong>תחזוקה ושינויים:</strong>
              <p>שינויים ועדכונים כלולים במסלול ללא הגבלה וללא עלות נוספת!</p>
            </div>

            <ul className="service-description">
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>עיצוב אישי וייחודי</strong>
                  <p>עיצוב מותאם אישית המדגיש את הזהות העסקית שלכם.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">⚡</span>
                <div>
                  <strong>טכנולוגיה חדישה ומהירה</strong>
                  <p>ביצועים ללא פשרות - אתר מהיר ויעיל שחוסך זמן לגולשים ומקדם אתכם בגוגל.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">🛡️</span>
                <div>
                  <strong>אחסון + אבטחה + גיבויים</strong>
                  <p>ראש שקט עם אחסון מאובטח וגיבויים שוטפים, הכל כלול במסלול.</p>
                </div>
              </li>
              <li>
                <span className="check-icon">✓</span>
                <div>
                  <strong>אופטימיזציית SEO</strong>
                  <p>בנייה נכונה לקידום מקסימלי במנועי החיפוש.</p>
                </div>
              </li>
            </ul>

            <a href="/contact" className="btn-primary contact-btn">אני רוצה להתחיל!</a>
          </div>
        </div>
      </div>
    </section>
  );
}
