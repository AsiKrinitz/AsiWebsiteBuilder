import './About.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title about-title">
              נעים להכיר, <span className="gradient-text">אסי</span>
            </h2>
            <p>
              אני מתכנת במקצועי כבר יותר מ-4 שנים, ומתעסק כל יום בפיתוח אתרים ומערכות. במהלך השנים צברתי ניסיון עשיר בפיתוח אתרים ומערכות מקצה לקצה, תוך התמקדות ביצירת חוויות דיגיטליות יוצאות דופן, מהירות ומעוצבות.
            </p>
            <br />
            <p>
              לאחרונה החלטתי ללכת אחרי החלום שלי, והקמתי עסק עצמאי המתמחה בבניית אתרי תדמית לעסקים - עם עיצוב אישי ומותאם אישית, ושימוש בטכנולוגיה הטובה ביותר שקיימת כיום בשוק.
            </p>
            <br />
            <p>
              המטרה שלי היא לעזור לעסקים לצמוח בעזרת נוכחות דיגיטלית חזקה, עיצוב יוקרתי וקוד נקי שגוגל אוהב.
            </p>
          </div>
          <div className="about-image-wrapper">
            <img
              src="/asiNiceOffice.jpeg"
              alt="Asi Krinitz - Professional Web Development"
              className="about-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
