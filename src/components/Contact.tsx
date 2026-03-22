import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', message: '' })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // מספר הטלפון שלך בוואטסאפ
    const myPhone = "972527458800" 
    const text = `היי אסי, הגיעה פנייה חדשה מהאתר!
שם: ${formData.name}
הודעה: ${formData.message}`
    
    // פתיחת חלון לוואטסאפ עם ההודעה מוכנה לשליחה
    window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-box glass-panel">
          <h2 className="section-title">מוכנים לצאת לדרך?</h2>
          <p>השאירו פרטים ואחזור אליכם בהקדם, לפרויקט הבא שלכם.</p>
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input 
              type="text" 
              placeholder="שם מלא" 
              className="form-input" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
            <textarea 
              placeholder="איך אוכל לעזור?" 
              className="form-input" 
              rows={4} 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
            ></textarea>
            <button type="submit" className="btn-primary btn-submit">שלח אליי ל-WhatsApp!</button>
          </form>
        </div>
      </div>
    </section>
  )
}
