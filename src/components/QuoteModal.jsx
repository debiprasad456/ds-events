import React, { useState, useEffect } from 'react';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, defaultType = 'quote' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Corporate Events',
    otherEventType: '',
    eventDate: '',
    guestCount: '',
    location: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedEventType = formData.eventType === 'Other'
      ? `Other: ${formData.otherEventType || 'Custom Event'}`
      : formData.eventType;

    const title = defaultType === 'venue' ? 'Nearest Venue Inquiry' : 'Quick Event Quote Request';
    const message = `*${title} - DS Events*\n\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Phone:* ${formData.phone}\n` +
      `• *Email:* ${formData.email || 'Not provided'}\n` +
      `• *Event Type:* ${selectedEventType}\n` +
      `• *Date:* ${formData.eventDate || 'Flexible'}\n` +
      `• *Guests:* ${formData.guestCount || 'Not specified'}\n` +
      `• *Location:* ${formData.location || 'Bhubaneswar / Odisha'}\n` +
      `• *Notes:* ${formData.notes || 'None'}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918260054398?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <span className="modal-badge">
                {defaultType === 'venue' ? 'Venue Discovery' : 'Instant Estimate'}
              </span>
              <h2>{defaultType === 'venue' ? 'Find Nearest Event Venue' : 'Get A Free Event Quote'}</h2>
              <p>Tell us about your upcoming event and our team will get back with options within 2 hours.</p>
            </div>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="modal-row">
                <div className="modal-field">
                  <label>Your Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-field">
                  <label>Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    placeholder="+91 82600-XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal-row">
                <div className="modal-field">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-field">
                  <label>Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="Corporate Events">Corporate Events</option>
                    <option value="Brand Promotions">Brand Promotions</option>
                    <option value="Parties">Parties</option>
                    <option value="Award Nights">Award Nights</option>
                    <option value="Stage Shows">Stage Shows</option>
                    <option value="Fashion Shows">Fashion Shows</option>
                    <option value="Educational Events">Educational Events</option>
                    <option value="Cultural Events">Cultural Events</option>
                    <option value="Political Events">Political Events</option>
                    <option value="Religious Events">Religious Events</option>
                    <option value="Birthdays">Birthdays</option>
                    <option value="Weddings">Weddings</option>
                    <option value="Anniversaries">Anniversaries</option>
                    <option value="Other">Other (Specify in message)</option>
                  </select>
                </div>
              </div>

              {formData.eventType === 'Other' && (
                <div className="modal-field modal-field-highlighted animate-fade-in">
                  <label>Specify Your Event Type / Requirements *</label>
                  <textarea 
                    name="otherEventType" 
                    rows="2" 
                    required
                    placeholder="Describe your custom event type (e.g. Product Launch & Expo, College Fest, Golden Jubilee, Sports Meet, etc.)..."
                    value={formData.otherEventType}
                    onChange={handleChange}
                  ></textarea>
                </div>
              )}

              <div className="modal-row">
                <div className="modal-field">
                  <label>Preferred Date *</label>
                  <input 
                    type="date" 
                    name="eventDate" 
                    required
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-field">
                  <label>Estimated Guests *</label>
                  <input 
                    type="text" 
                    name="guestCount" 
                    required
                    placeholder="e.g. 200 - 500"
                    value={formData.guestCount}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal-field">
                <label>City / Location *</label>
                <input 
                  type="text" 
                  name="location" 
                  required
                  placeholder="e.g. Bhubaneswar / Cuttack / Puri"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-field">
                <label>Additional Requirements (Optional)</label>
                <textarea 
                  name="notes" 
                  rows="2" 
                  placeholder="Stage size, catering, floral decor, lighting..."
                  value={formData.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="modal-submit-btn">
                Submit & Chat on WhatsApp &rarr;
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-icon-badge">✓</div>
            <h3>Thank You, {formData.name}!</h3>
            <p>Your inquiry has been sent directly to our planning team on WhatsApp. We will connect with you right away.</p>
            <button className="modal-close-action" onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
