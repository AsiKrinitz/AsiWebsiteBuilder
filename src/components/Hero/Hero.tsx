import { Link } from 'react-router-dom';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-video-wrapper">
          <div className="video-presentation">
            <video
              src="/welcomeVideo.mp4"
              className="hero-video"
              muted
              loop
              playsInline
              controls
            />
          </div>
        </div>
        <div className="hero-text">
          <h1 className="hero-title">
            בניית אתרי תדמית <br />
            <span className="gradient-text">שמביאים תוצאות</span>
          </h1>
          <p className="hero-subtitle">
            אני מעצב ובונה אתרים מותאמים אישית בדיוק לפי החזון שלך.
            עם אופטימיזציית SEO מלאה וביצועים ללא פשרות, האתר שלך יעבוד הכי טוב עבור העסק שלך וימשוך לקוחות חדשים.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn-primary btn-large">צפו בפרויקטים</Link>
            <Link to="/contact" className="btn-outline btn-large">התייעצות חינם</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
