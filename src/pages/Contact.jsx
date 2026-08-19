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
  anniversary: 'Anniversaries',
  other: 'Other'
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'corporate',
    otherEventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
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

    const baseEventType = EVENT_TYPE_LABELS[formData.eventType] || formData.eventType;
    const selectedEventType = formData.eventType === 'other'
      ? `Other: ${formData.otherEventType || 'Custom Event'}`
      : baseEventType;
    
    const messageText = `*New Event Inquiry - DS Events*\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email}\n` +
      `• *Event Type:* ${selectedEventType}\n` +
      `• *Preferred Date:* ${formData.eventDate}\n` +
      `• *Guests:* ${formData.guestCount}\n` +
      `• *Location:* ${formData.location}\n` +
      `• *Notes:* ${formData.message || 'None'}`;

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
          <span className="section-tag">GET IN TOUCH</span>
          <h1 className="contact-title">Let's Create Together</h1>
          <p className="contact-desc">
            Have an upcoming event? Contact us today for a free consultation. Our team is ready to design and execute your vision down to the finest detail.
          </p>

          <div className="info-items">
            <div className="info-item-card">
              <div className="info-icon-badge">📍</div>
              <div className="info-text">
                <h3>Our Office</h3>
                <p>3521/8716, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751025</p>
              </div>
            </div>

            <div className="info-item-card">
              <div className="info-icon-badge">📞</div>
              <div className="info-text">
                <h3>Phone & WhatsApp</h3>
                <p><a href="tel:+918260054398">+91 82600 54398</a></p>
              </div>
            </div>

            <div className="info-item-card">
              <div className="info-icon-badge">✉️</div>
              <div className="info-text">
                <h3>Email Inquiries</h3>
                <p><a href="mailto:diversesolutionsevents@gmail.com">diversesolutionsevents@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="whatsapp-help-box">
            <div className="whatsapp-help-icon">💬</div>
            <div className="whatsapp-help-content">
              <h3>Need a quick quote?</h3>
              <p>Chat directly with our planning lead on WhatsApp for instant assistance.</p>
              <a 
                href="https://wa.me/918260054398" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-chat-btn"
              >
                Chat on WhatsApp &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-col">
          {!isSubmitted ? (
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="form-card-header">
                <h2>Book a Consultation</h2>
                <p>Fill out the form below and we will get back to you within 24 hours.</p>
              </div>

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
                    placeholder="e.g. Rahul Sharma" 
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

              <div className="form-group-row">
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
                    <option value="other">Other (Specify in message)</option>
                  </select>
                </div>
              </div>

              {formData.eventType === 'other' && (
                <div className="form-group form-group-highlighted animate-fade-in">
                  <label htmlFor="otherEventType">Specify Your Event Type / Requirements *</label>
                  <textarea 
                    id="otherEventType"
                    name="otherEventType" 
                    rows="2" 
                    required
                    placeholder="Describe your custom event type (e.g. Product Launch & Expo, College Fest, Golden Jubilee, Sports Meet, etc.)..."
                    value={formData.otherEventType}
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}

              <div className="form-group-row">
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
                <div className="form-group">
                  <label htmlFor="guestCount">Estimated Guests *</label>
                  <input 
                    type="text" 
                    id="guestCount" 
                    name="guestCount" 
                    required
                    placeholder="e.g. 200 - 500"
                    value={formData.guestCount} 
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="location">City / Location *</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  required
                  placeholder="e.g. Bhubaneswar / Cuttack / Puri"
                  value={formData.location} 
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Requirements (Optional)</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3" 
                  value={formData.message} 
                  onChange={handleChange}
                  placeholder="Stage size, catering, floral decor, lighting..."
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
              <p>We have received your request for a <strong>{EVENT_TYPE_LABELS[formData.eventType] || formData.eventType}</strong> event in <strong>{formData.location}</strong>.</p>
              <p className="success-note">One of our senior event coordinators will connect with you right away on WhatsApp and email ({formData.email}).</p>
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
