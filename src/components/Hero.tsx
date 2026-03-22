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
            בניית אתרים מנצחים<br />
            <span className="gradient-text">לעסק שלך</span>
          </h1>
          <p className="hero-subtitle">
            אני אסי קריניץ, מפתח אתרים. מתמחה בבניית אתרי תדמית ודפי נחיתה מתקדמים, מעוצבים ומהירים שבולטים ומושכים לקוחות חדשים.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary btn-large">צרו קשר</a>
            <a href="#services" className="btn-outline btn-large">השירותים שלי</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="image-presentation">
            <div className="image-ring"></div>
            <img src="./Asi17.jpeg" alt="אסי קריניץ" className="hero-avatar" />
          </div>
        </div>
      </div>
    </section>
  )
}
