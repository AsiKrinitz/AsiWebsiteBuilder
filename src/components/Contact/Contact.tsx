import { useState } from 'react';
import { RequestForm } from '../RequestForm/RequestForm';
import './Contact.css';

export function Contact() {
  const [name, setName] = useState('');

  const handleWhatsAppClick = () => {
    const phoneNumber = '972527458800';
    const message = `שלום, אני ${name || 'מעוניין/ת'}, הגעתי אלייך דרך האתר בקשר לבניית אתר.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box glass-panel">
          <h2 className="section-title">
            בואו <span className="gradient-text">נדבר</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            בואו נהפוך את הרעיון שלכם לאתר מנצח - שלחו לי הודעה ונתחיל!
          </p>

          <RequestForm />

          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <div className="form-group" style={{ width: '100%', marginBottom: '1.5rem' }}>
                <label htmlFor="contact-name" className="form-label">שם מלא (לוואטסאפ)</label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="ישראל ישראלי"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="btn-whatsapp"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  justifyContent: 'center',
                  width: '100%',
                  padding: '1.25rem'
                }}
              >
                <span>שלחו לי וואטסאפ</span>
                <svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: '24px', height: '24px', fill: 'currentColor' }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </button>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '0.5rem', fontSize: '1rem' }}>
                מעדיפים שיחה טלפונית? מוזמנים להתקשר:
              </p>
              <a href="tel:0527458800" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                direction: 'ltr',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" style={{ width: '28px', height: '28px', fill: 'currentColor', color: 'var(--primary)' }}>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                052-7458800
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
