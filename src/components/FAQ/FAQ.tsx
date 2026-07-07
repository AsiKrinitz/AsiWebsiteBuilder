import { useState } from 'react';
import { TechComparison } from '../TechComparison/TechComparison';
import './FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "מה זה בכלל \"דומיין\" (Domain)?",
      answer: "דומיין הוא למעשה הכתובת הדיגיטלית של האתר שלכם ברשת (למשל: asikdesign.com). בדיוק כמו שלבית יש כתובת פיזית כדי שאנשים יוכלו למצוא אותו, הדומיין מאפשר לגולשים להגיע ישירות לאתר שלכם בקלות. ללא דומיין, הגולשים היו צריכים להקיש סדרה ארוכה של מספרים (כתובת IP) כדי להגיע לאתר."
    },
    {
      question: "האם אתה רוכש עבורי את הדומיין? ואיך זה עובד?",
      answer: "חשוב להבין: רכישת דומיין אישי היא לא חובה! האתר יכול לעלות לאוויר גם על כתובת חינמית שאני מספק. עם זאת, אם תרצו דומיין ממותג (כמו asikdesign.com), אני מלווה אתכם בתהליך הרכישה והחיבור. דומיין הוא בשכירות שנתית והעלות היא עליכם, אבל אני יכול לרכוש אותו עבורכם ולבצע את כל ההגדרות, ואתם פשוט תחזירו לי את העלות מדי שנה. זו אפשרות נהדרת לשדרוג המקצועיות של העסק, אך היא לגמרי לבחירתכם."
    },
    {
      question: "האם האתר יהיה מותאם לטלפונים ניידים?",
      answer: "בוודאי! היום רוב הגלישה מתבצעת מהסמארטפון. כל אתר שאני בונה הוא רספונסיבי לחלוטין, מה שאומר שהוא מתאים את עצמו בצורה מושלמת לכל גודל מסך - טלפונים, טאבלטים ומחשבים."
    },
    // {
    //   question: "מה קורה אם אני רוצה לעדכן תוכן באתר בעתיד?",
    //   answer: "כל מה שצריך זה לשלוח לי הודעה! אני מנהל עבורכם את כל העדכונים והשינויים באתר. אתם לא צריכים להסתבך עם מערכות ניהול תוכן מורכבות - אני כאן כדי לוודא שהאתר שלכם תמיד נראה מעולה ומעודכן."
    // },
    {
      question: "מה ההבדל בין מסלולי התשלום?",
      answer: "אני מציע שני מסלולים גמישים: מסלול רכישה חד-פעמית (₪700) שבו משלמים פעם אחת על הבנייה והאתר שלכם לתמיד, ומסלול חודשי (₪300 לחודש ) בהתחייבות לחצי שנה, המאפשר לכם להקים אתר ללא עלות הקמה גדולה וליהנות מניהול ועדכונים שוטפים הכלולים במחיר."
    },
    {
      question: "האם יש עלויות נוספות מעבר לבניית האתר?",
      answer: "החדשות הטובות הן שאין עלויות אחסון (Hosting) חודשיות! אני דואג לאחסן את האתר בשרתים מקצועיים ומאובטחים ללא עלות נוספת מצדכם. העלות הנוספת היחידה שיכולה להיות (והיא אופציונלית לגמרי) היא עלות השכרת דומיין אישי במידה ותחליטו שאתם מעוניינים בכך."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="section-title">שאלות <span className="gradient-text">ותשובות</span></h1>
        <p className="faq-subtitle">יש לכם שאלות? כאן תמצאו את כל התשובות לדברים שחשוב לדעת לפני שיוצאים לדרך.</p>
        
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item glass-panel ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-tech-promo glass-panel">
          <div className="promo-content">
            <h3>שימו לב להבדל!</h3>
            <p>
              שימו לב כמה המעבר בין הדפים פה באתר הוא נקי ומהיר - בלי ריענון מעצבן של הדף. 
              אני מזמין אתכם להיכנס לאתרים אחרים ולבדוק בעצמכם: האם הדף נטען מחדש בכל לחיצה, או שהמעבר חלק ומהיר כמו פה? 
              זה ההבדל הקטן שעושה חוויית משתמש מעולה.
            </p>
          </div>
        </div>

        <div id="tech-comparison-faq">
          <TechComparison />
        </div>
      </div>
    </section>
  );
}
