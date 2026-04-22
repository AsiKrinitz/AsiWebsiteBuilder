import './Reviews.css';

interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
  initials: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "שיראל לוי",
    role: "בעלת מותג אופנה",
    content: "אסי בנה לי אתר מדהים שעלה על כל הציפיות שלי. העיצוב נקי, מודרני והחוויה של הלקוחות שלי השתפרה פלאים. מומלץ בחום!",
    initials: "של"
  },
  {
    id: 2,
    name: "איתי בן דוד",
    role: "מנכ\"ל סטארטאפ",
    content: "העבודה עם אסי הייתה מקצועית ביותר. הוא הבין את הצרכים הטכנולוגיים המורכבים שלנו ותרגם אותם לממשק משתמש פשוט ונוח.",
    initials: "אב"
  },
  {
    id: 3,
    name: "דנה כהן",
    role: "יוצרת תוכן",
    content: "חיפשתי מישהו שיבנה לי פורטפוליו שישדר יוקרה ויצירתיות, ואסי פשוט קלע בול. התהליך היה מהיר, נעים והתוצאה מושלמת.",
    initials: "דכ"
  },
  {
    id: 4,
    name: "יוסי מזרחי",
    role: "בעל עסק בתחום הנדל\"ן",
    content: "האתר שאסי בנה לנו הפך להיות כלי המכירות העיקרי שלנו. המהירות של האתר והנראות שלו בטלפון הם פשוט ברמה אחרת.",
    initials: "ימ"
  }
];

export function Reviews() {
  return (
    <section className="reviews-section container">
      <h2 className="section-title">
        <span className="gradient-text">מה הלקוחות אומרים</span>
      </h2>
      
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card glass-panel">
            <div className="review-header">
              <div className="review-avatar">
                {review.initials}
              </div>
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
