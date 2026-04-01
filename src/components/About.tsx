export function About() {
  return (
    <section id="about" className="about">
      <div className="container about-content">
        <div className="image-presentation">
          <img src="./asiNiceOffice.jpeg" alt="אסי קריניץ" className="hero-avatar" />
        </div>
        <div className="about-text-container">
          <h2 className="section-title" style={{ textAlign: 'right' }}>
            קצת <span className="gradient-text">עליי</span>
          </h2>
          <p className="about-text">
            היי, אני אסי. **מתכנת בנשמה עם מעל ל-3 שנות ניסיון טכנולוגי** מגוון. <br />
            <br />
            בניגוד לפתרונות של "גרור-ושחרר" (כמו וורדפרס או וויקס), אני מפתח את האתרים שלכם **בקוד
            נקי (React)**. זה אומר שהאתר שלכם יהיה הרבה יותר מהיר, מאובטח, וגמיש לכל שינוי או עיצוב
            דמיוני שעולה לכם לראש.
            <br />
            <br />
            אני משלב ידע הנדסי יחד עם חוש עיצובי חד, כדי לתת לכם את הכלי הכי חזק לעסק שלכם באינטרנט.
          </p>
        </div>
      </div>
    </section>
  )
}
