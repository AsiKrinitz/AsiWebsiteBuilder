import './TechComparison.css';

export function TechComparison() {
  return (
    <section className="tech-comparison" id="tech-comparison">
      <div className="container">
        <h2 className="section-title">
          למה <span className="gradient-text">React</span> ולא וורדפרס?
        </h2>
        <p className="tech-comparison-subtitle">
          בעולם המודרני, העסק שלך צריך אתר מהיר, מאובטח ומותאם אישית. הנה השוואה קצרה שתעשה לך סדר:
        </p>

        <div className="glass-panel comparison-table-wrapper">
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-header-cell feature">תכונה</div>
              <div className="table-header-cell primary">React (אצלנו)</div>
              <div className="table-header-cell muted">WordPress</div>
            </div>

            <div className="table-row">
              <div className="table-cell-feature">מהירות טעינה</div>
              <div className="table-cell-primary">מהיר בטירוף (ביצועי שיא)</div>
              <div className="table-cell-muted">איטי (תלוי בתוספים)</div>
            </div>

            <div className="table-row">
              <div className="table-cell-feature">אבטחה</div>
              <div className="table-cell-primary">מקסימלית (קוד סגור ומודרני)</div>
              <div className="table-cell-muted">פריץ (פגיע לפרצות בתוספים)</div>
            </div>

            <div className="table-row">
              <div className="table-cell-feature">גמישות ועיצוב</div>
              <div className="table-cell-primary">אינסופית (הכל אפשרי בקוד)</div>
              <div className="table-cell-muted">מוגבלת לתבניות ותוספים</div>
            </div>

            <div className="table-row">
              <div className="table-cell-feature">קידום בגוגל (SEO)</div>
              <div className="table-cell-primary">מעולה (קוד נקי וקל לסריקה)</div>
              <div className="table-cell-muted">בינוני (קוד עמוס ומסורבל)</div>
            </div>

            <div className="table-row">
              <div className="table-cell-feature">חווית משתמש</div>
              <div className="table-cell-primary">מעבר דפים חלק ומהיר</div>
              <div className="table-cell-muted">ריענון דף מלא בכל לחיצה</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
