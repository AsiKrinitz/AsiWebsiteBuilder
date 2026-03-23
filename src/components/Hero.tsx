export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            בניית אתרי <span className="gradient-text">React</span> <br />
            שמוכרים בשבילך
          </h1>
          <p className="hero-subtitle">
            אני אסי קריניץ, מתכנת בעל מעל **3 שנות ניסיון** בפיתוח מערכות. מתמחה בבניית דפי נחיתה
            ואתרי תדמית בטכנולוגיית React המתמרצת את הביצועים של העסק שלך לשיא.
          </p>
          <div className="hero-buttons">
            <a href="#tech-comparison" className="btn-primary btn-large">
              למה React?
            </a>
            <a href="#projects" className="btn-outline btn-large">
              תיק עבודות
            </a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="image-presentation">
            <img src="./hero-wow.png" alt="Futuristic Web Agency" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  )
}
