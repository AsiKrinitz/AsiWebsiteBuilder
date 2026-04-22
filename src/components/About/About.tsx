import './About.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title" style={{ textAlign: 'right' }}>
              נעים להכיר, <span className="gradient-text">אסי</span>
            </h2>
            <p>
              אני הנדסאי תוכנה מוסמך עם ניסיון של מעל 3 שנים בעולם הפיתוח. במהלך השנים צברתי מומחיות כפיתוח פול-סטאק תוך התמקדות ביצירת חוויות דיגיטליות יוצאות דופן, מהירות ומעוצבות.
            </p>
            <br />
            <p>
              אני מתמחה בבניית אתרים מודרניים תוך שימוש בטכנולוגיות המתקדמות ביותר בשוק, במטרה לעזור לעסקים לצמוח בעזרת נוכחות דיגיטלית חזקה, עיצוב יוקרתי וקוד נקי שגוגל אוהב.
            </p>
          </div>
          <div className="image-presentation" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <img src="/asiNiceOffice.jpeg" alt="Asi Krinitz - Professional Web Development" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  );
}
