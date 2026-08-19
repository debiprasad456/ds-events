import React, { useState, useEffect } from 'react';
import './QuoteModal.css';

export default function QuoteModal({ isOpen, onClose, defaultType = 'quote' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Weddings',
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

    const title = defaultType === 'venue' ? 'Nearest Venue Inquiry' : 'Quick Event Quote Request';
    const message = `*${title} - DS Events*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email || 'N/A'}\n` +
      `🎉 *Event Type:* ${formData.eventType}\n` +
      `📅 *Date:* ${formData.eventDate || 'Flexible'}\n` +
      `👥 *Guests:* ${formData.guestCount || 'Not specified'}\n` +
      `📍 *Location:* ${formData.location || 'Bhubaneswar / Odisha'}\n` +
      `📝 *Notes:* ${formData.notes || 'None'}`;

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
                  <label>Event Type</label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}>
                    <option value="Weddings">Luxury Wedding / Reception</option>
                    <option value="Corporate Events">Corporate Event / Conference</option>
                    <option value="Stage Shows">Live Concert / Stage Show</option>
                    <option value="Brand Promotions">Brand Launch / Activation</option>
                    <option value="Award Nights">Award Ceremony</option>
                    <option value="Fashion Shows">Fashion Runway Show</option>
                    <option value="Birthdays & Parties">Birthday / Private Party</option>
                    <option value="Cultural / Religious">Cultural / Community Event</option>
                  </select>
                </div>
                <div className="modal-field">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    name="eventDate" 
                    value={formData.eventDate}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="modal-row">
                <div className="modal-field">
                  <label>Estimated Guests</label>
                  <input 
                    type="text" 
                    name="guestCount" 
                    placeholder="e.g. 200 - 500"
                    value={formData.guestCount}
                    onChange={handleChange}
                  />
                </div>
                <div className="modal-field">
                  <label>City / Location</label>
                  <input 
                    type="text" 
                    name="location" 
                    placeholder="e.g. Bhubaneswar / Cuttack"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
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
