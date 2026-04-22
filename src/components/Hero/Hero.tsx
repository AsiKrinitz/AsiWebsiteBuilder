import './Hero.css';

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
            בניית אתרי תדמית <br />
            <span className="gradient-text">שמביאים תוצאות</span>
          </h1>
          <p className="hero-subtitle">
            אנחנו מעצבים ובונים אתרים מותאמים אישית בדיוק לפי החזון שלך. 
            עם אופטימיזציית SEO מלאה וביצועים ללא פשרות, האתר שלך יעבוד הכי טוב עבור העסק שלך וימשוך לקוחות חדשים.
          </p>
          <div className="hero-buttons">
            <a href="projects" className="btn-primary btn-large">צפו בפרויקטים</a>
            <a href="contact" className="btn-outline btn-large">התייעצות חינם</a>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="image-presentation">
            <img 
              src="/asiNiceOffice.jpeg" 
              alt="Professional Web Development" 
              className="hero-avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
