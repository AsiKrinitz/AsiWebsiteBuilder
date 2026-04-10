import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '' })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // מספר הטלפון שלך בוואטסאפ
    const myPhone = '972527458800'
    const text = `היי אסי, אני ${formData.name}, הגעתי דרך האתר שלך ואני מתעניין בבניית אתר.`

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
            <div className="form-group full-width" style={{ marginTop: '1rem' }}>
              <button type="submit" className="btn-whatsapp btn-large" style={{ width: '100%', gap: '12px' }}>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.81 9.81 0 017.008 2.895 9.81 9.81 0 012.891 7.005c-.002 5.452-4.437 9.888-9.89 9.888m7.712-17.592A11.044 11.044 0 0012.055 1C5.978 1 1.03 5.949 1.028 12.026c0 1.943.506 3.84 1.467 5.532L1 23l5.602-1.47a11.014 11.014 0 005.449 1.439h.005c6.077 0 11.026-4.95 11.028-11.027a11.006 11.006 0 00-3.327-7.802"/>
                </svg>
                שלחו לי הודעה ל-WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
