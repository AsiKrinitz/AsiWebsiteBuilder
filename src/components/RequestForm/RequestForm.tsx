import { useEffect, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import './RequestForm.css';

type Status = 'idle' | 'sending' | 'success' | 'error';

type FieldErrors = {
  name?: string;
  phone?: string;
  message?: string;
};

function isValidIsraeliPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return /^0\d{8,9}$/.test(digits);
}

function validate(name: string, phone: string, message: string): FieldErrors {
  const errors: FieldErrors = {};

  if (!name.trim()) {
    errors.name = 'נא להזין שם מלא';
  }

  if (!phone.trim()) {
    errors.phone = 'נא להזין מספר טלפון';
  } else if (!isValidIsraeliPhone(phone)) {
    errors.phone = 'מספר טלפון לא תקין (לדוגמה: 0521234567)';
  }

  if (!message.trim()) {
    errors.message = 'נא להזין הודעה';
  }

  return errors;
}

export function RequestForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status !== 'success' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const fieldErrors = validate(name, phone, message);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    setStatus('sending');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name, phone, message },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setName('');
      setPhone('');
      setMessage('');
      setErrors({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <form className="request-form" onSubmit={handleSubmit} noValidate>
      <p className="request-form-note form-group full-width">
        הפרטים שתמלאו כאן יישלחו ישירות למייל שלי, ואחזור אליכם בהקדם האפשרי.
      </p>

      {(status === 'success' || status === 'error') && (
        <div
          className={`request-alert ${status === 'success' ? 'request-alert-success' : 'request-alert-error'}`}
          role="alert"
        >
          {status === 'success' ? (
            <>
              <span className="request-alert-icon" aria-hidden="true">✓</span>
              ההודעה נשלחה בהצלחה! אחזור אליכם בקרוב.
            </>
          ) : (
            <>
              <span className="request-alert-icon" aria-hidden="true">✕</span>
              שגיאה בשליחת ההודעה. אפשר לנסות שוב או ליצור קשר בוואטסאפ.
            </>
          )}
        </div>
      )}

      <div className="form-group full-width">
        <label htmlFor="request-name" className="form-label">שם מלא</label>
        <input
          id="request-name"
          type="text"
          className="form-input"
          placeholder="ישראל ישראלי"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'request-name-error' : undefined}
        />
        {errors.name && <span id="request-name-error" className="field-error">{errors.name}</span>}
      </div>

      <div className="form-group full-width">
        <label htmlFor="request-phone" className="form-label">טלפון</label>
        <input
          id="request-phone"
          type="tel"
          className="form-input"
          placeholder="050-1234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'request-phone-error' : undefined}
        />
        {errors.phone && <span id="request-phone-error" className="field-error">{errors.phone}</span>}
      </div>

      <div className="form-group full-width">
        <label htmlFor="request-message" className="form-label">הודעה</label>
        <textarea
          id="request-message"
          className="form-input"
          placeholder="ספרו לי קצת על הפרויקט שלכם..."
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'request-message-error' : undefined}
        />
        {errors.message && <span id="request-message-error" className="field-error">{errors.message}</span>}
      </div>

      <div className="form-group full-width">
        <button type="submit" className="btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: '1.25rem' }}>
          {status === 'sending' ? 'שולח...' : 'שליחה'}
        </button>
      </div>
    </form>
  );
}
