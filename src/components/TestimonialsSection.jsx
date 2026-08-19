import React from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Priyanka Mohapatra',
    role: 'Bride (Grand Luxury Wedding)',
    rating: 5,
    quote: 'DS Events turned our wedding into an absolute fairytale. From the grand floral mandap to the flawless lighting and hospitality, everything was executed with perfection!',
    location: 'Bhubaneswar'
  },
  {
    id: 2,
    name: 'Rajesh Senapati',
    role: 'Managing Director (Corporate Summit)',
    rating: 5,
    quote: 'We partnered with DS Events for our Annual Stakeholders Conclave. The stage setup, audio-visual coordination, and VIP protocol handling were world-class. Highly recommended!',
    location: 'Cuttack'
  },
  {
    id: 3,
    name: 'Debashis Rout',
    role: 'Festival Director (Live Music Concert)',
    rating: 5,
    quote: 'Managing a crowd of 5,000+ people with high-power stage sound & lighting is no small feat. DS Events handled security, logistics, and production effortlessly.',
    location: 'Bhubaneswar'
  }
];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-tag">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real stories and heartfelt reviews from clients whose special moments we have transformed into extraordinary memories.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(item => (
            <div key={item.id} className="testimonial-card">
              <div className="quote-icon">“</div>
              <div className="stars-row">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {item.name.charAt(0)}
                </div>
                <div className="author-info">
                  <h4 className="author-name">{item.name}</h4>
                  <p className="author-role">{item.role} &bull; {item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
