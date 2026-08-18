import React, { useState } from 'react';
import './Contact.css';

const EVENT_TYPE_LABELS = {
  corporate: 'Corporate Events',
  promotion: 'Brand Promotions',
  parties: 'Parties',
  awards: 'Award Nights',
  stage: 'Stage Shows',
  fashion: 'Fashion Shows',
  educational: 'Educational Events',
  cultural: 'Cultural Events',
  political: 'Political Events',
  religious: 'Religious Events',
  birthday: 'Birthdays',
  wedding: 'Weddings',
  anniversary: 'Anniversaries'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'corporate',
    eventDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedEventType = EVENT_TYPE_LABELS[formData.eventType] || formData.eventType;
    
    const messageText = `*New Event Inquiry - DS Events*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🎉 *Event Type:* ${selectedEventType}\n` +
      `📅 *Preferred Date:* ${formData.eventDate || 'Not specified'}\n\n` +
      `📝 *Event Details:*\n${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/918260054398?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page fade-in">
      <div className="contact-container container">
        
        {/* Info Column */}
        <div className="contact-info-col">
          <h1 className="contact-title">Let's Create Together</h1>
          <p className="contact-desc">
            Have an upcoming event? Contact us today for a free consultation. Our team is ready to design and execute your vision down to the finest detail.
          </p>

          <div className="info-items">
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div>
                <h3>Our Office</h3>
                <p>3521/8716, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751025</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <div>
                <h3>Phone & Whatsapp</h3>
                <p><a href="tel:+918260054398">+91 82600 54398</a></p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <div>
                <h3>Email Inquiries</h3>
                <p><a href="mailto:diversesolutionsevents@gmail.com">diversesolutionsevents@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="whatsapp-help-box">
            <span className="whatsapp-logo">💬</span>
            <div>
              <h3>Need a quick quote?</h3>
              <p>Chat directly with our planning lead on WhatsApp for instant assistance.</p>
              <a 
                href="https://wa.me/918260054398" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-chat-btn"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Book a Consultation</h2>
              <p>Fill out the form below and we will get back to you within 24 hours.</p>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    placeholder="your name" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange}
                    placeholder="+91 82600-XXXXX" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="yourname@example.com" 
                />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="eventType">Event Type *</label>
                  <select 
                    id="eventType" 
                    name="eventType" 
                    value={formData.eventType} 
                    onChange={handleChange}
                  >
                    <option value="corporate">Corporate Events</option>
                    <option value="promotion">Brand Promotions</option>
                    <option value="parties">Parties</option>
                    <option value="awards">Award Nights</option>
                    <option value="stage">Stage Shows</option>
                    <option value="fashion">Fashion Shows</option>
                    <option value="educational">Educational Events</option>
                    <option value="cultural">Cultural Events</option>
                    <option value="political">Political Events</option>
                    <option value="religious">Religious Events</option>
                    <option value="birthday">Birthdays</option>
                    <option value="wedding">Weddings</option>
                    <option value="anniversary">Anniversaries</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="eventDate">Preferred Date *</label>
                  <input 
                    type="date" 
                    id="eventDate" 
                    name="eventDate" 
                    required
                    value={formData.eventDate} 
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Us About Your Event *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows="4" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Provide details such as guest count, location, themes, or specific requirements..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="form-submit-btn"
              >
                Send Inquiry →
              </button>
            </form>
          ) : (
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2>Inquiry Received!</h2>
              <p>Thank you for reaching out, <strong>{formData.name}</strong>.</p>
              <p>We have received your request for a <strong>{formData.eventType}</strong> event on <strong>{formData.eventDate || 'a flexible date'}</strong>.</p>
              <p className="success-note">One of our senior event coordinators will contact you via email ({formData.email}) or phone shortly.</p>
              <button className="reset-btn" onClick={() => setIsSubmitted(false)}>
                Submit Another Inquiry
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
