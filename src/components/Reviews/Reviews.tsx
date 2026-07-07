import { useEffect, useRef, useState } from 'react';
import './Reviews.css';

const SHIRA_VIDEO_URL = '/shiraVideo.mp4';

function formatTime(seconds: number) {
  if (!isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${m}:${s}`;
}

function ShiraVideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let objectUrl: string | null = null;

    fetch(SHIRA_VIDEO_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.blob();
      })
      .then((blob) => {
        if (cancelled) return;
        objectUrl = URL.createObjectURL(blob);
        setVideoUrl(objectUrl);
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });

    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  if (failed) {
    return (
      <p style={{ color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
        לא ניתן לטעון את הסרטון כרגע, נסו לרענן את הדף.
      </p>
    );
  }

  if (!videoUrl) {
    return (
      <p style={{ color: 'var(--text-muted)', textAlign: 'center', margin: 0 }}>
        טוען סרטון...
      </p>
    );
  }

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) v.play();
    else v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const seekTo = (clientX: number, track: HTMLDivElement) => {
    const v = videoRef.current;
    if (!v || !duration) return;
    const rect = track.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    v.currentTime = ratio * duration;
  };

  return (
    <div dir="ltr" style={{ width: '100%' }}>
      <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        <video
          ref={videoRef}
          src={videoUrl}
          playsInline
          preload="auto"
          onClick={togglePlay}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          onError={() => setFailed(true)}
          style={{
            width: '100%',
            borderRadius: '12px',
            display: 'block',
            maxHeight: '600px',
            background: '#000',
            cursor: 'pointer',
          }}
        >
          הדפדפן שלך אינו תומך בנגן הוידאו.
        </video>

        {!isPlaying && (
          <button
            onClick={togglePlay}
            aria-label="הפעל וידאו"
            style={{
              position: 'absolute',
              inset: 0,
              margin: 'auto',
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: 'none',
              background: 'rgba(0,0,0,0.55)',
              color: '#fff',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ▶
          </button>
        )}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginTop: '0.75rem',
        }}
      >
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'השהה' : 'הפעל'}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--text-main)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>

        <div
          onClick={(e) => seekTo(e.clientX, e.currentTarget)}
          style={{
            flex: 1,
            height: '6px',
            borderRadius: '3px',
            background: 'rgba(255,255,255,0.15)',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: duration ? `${(currentTime / duration) * 100}%` : '0%',
              background: 'var(--primary)',
              borderRadius: '3px',
            }}
          />
        </div>

        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', minWidth: '4.5rem', textAlign: 'center' }}>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>

        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'בטל השתקה' : 'השתק'}
          style={{
            border: 'none',
            background: 'transparent',
            color: 'var(--text-main)',
            fontSize: '1.1rem',
            cursor: 'pointer',
            padding: '0.25rem',
          }}
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>
    </div>
  );
}

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;

}

const reviews: Review[] = [
  {
    id: 1,
    name: "שגיא מלך הבלונים",
    role: "הפקות ואירועים",
    content: "רציתי אתר לעסק שלי שאוכל להציג ללקחות את העיצובים שלי במגוון מסלולים ואסי בנה לי אתר מעולה בדיוק כמו שרציתי, ממליץ בחוםםם",
  },

];

export function Reviews() {
  return (
    <section className="reviews-section container">
      <h2 className="section-title">
        <span className="gradient-text">המלצות</span> מלקוחות מרוצים
      </h2>
      
      {/* Video Recommendation Section */}
      <div style={{ 
        marginBottom: '4rem', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-muted)', fontSize: '1.2rem', textAlign: 'center' }}>
         ההמלצה של שירה על בניית האתר
        </h3>
        <div className="glass-panel" style={{ 
          padding: '1.5rem', 
          borderRadius: '24px', 
          maxWidth: '500px', 
          width: '100%',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <ShiraVideoPlayer />
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card glass-panel">
            <div className="review-header">
           
              <div className="review-info">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>
            
            <div className="review-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            
            <p className="review-content">
              {review.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
