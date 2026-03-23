import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '' })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // מספר הטלפון שלך בוואטסאפ
    const myPhone = '972527458800'
    const text = `היי אסי, הגיעה פנייה חדשה מהאתר!
שם: ${formData.name}
טלפון: ${formData.phone}
אשמח אם תחזור אליי בהקדם.`

    // פתיחת חלון לוואטסאפ עם ההודעה מוכנה לשליחה
    window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box glass-panel">
          <h2 className="section-title">
            בואו נדבר על <span className="gradient-text">הפרויקט שלכם</span>
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            מוכנים להזניק את העסק שלכם קדימה? השאירו פרטים ואני כבר אחזור אליכם.
          </p>

          <form
            className="contact-form"
            onSubmit={handleFormSubmit}
            style={{ maxWidth: '500px', margin: '3rem auto 0' }}
          >
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">שם מלא</label>
              <input
                type="text"
                placeholder="מה השם שלך?"
                className="form-input"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
              <label className="form-label">טלפון</label>
              <input
                type="tel"
                placeholder="איך נחזור אליך?"
                className="form-input"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
            <div className="form-group full-width" style={{ marginTop: '1rem' }}>
              <button type="submit" className="btn-primary btn-large" style={{ width: '100%' }}>
                שלחו לי הודעה ל-WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
