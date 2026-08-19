import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Footer.css';

export default function Footer({ onOpenQuote }) {
  const currentYear = new Date().getFullYear();

  const handleFooterNav = (sectionId) => {
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Col 1: Brand Bio */}
        <div className="footer-col footer-brand">
          <Link to="/" className="footer-logo" onClick={() => handleFooterNav(null)}>
            <div className="footer-logo-badge">
              <img src={logo} alt="DS Events Logo" className="logo-img" />
            </div>
            <div className="logo-text-group">
              <span className="logo-title">DS Events</span>
              <span className="logo-subtitle">A UNIT OF DIVERSE SOLUTIONS</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Crafting premium, flawless, and unforgettable event experiences for corporate, social, and community celebrations across Odisha.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com/profile.php?id=100085845540438" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://wa.me/918260054398" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.58C9.33 7.58 9.04 7.65 8.79 7.93C8.54 8.2 7.84 8.86 7.84 10.2C7.84 11.54 8.82 12.83 8.95 13.01C9.09 13.2 10.87 15.93 13.58 17.1C14.22 17.38 14.73 17.54 15.12 17.67C15.77 17.87 16.35 17.84 16.82 17.77C17.34 17.69 18.42 17.12 18.64 16.48C18.87 15.84 18.87 15.3 18.8 15.18C18.73 15.07 18.55 15 18.28 14.86C18.01 14.72 16.68 14.07 16.43 13.98C16.19 13.89 16.01 13.84 15.83 14.12C15.65 14.4 15.12 15.02 14.96 15.21C14.8 15.39 14.64 15.42 14.37 15.28C14.1 15.14 13.23 14.86 12.19 13.94C11.38 13.22 10.84 12.33 10.68 12.05C10.52 11.78 10.66 11.63 10.8 11.5C10.92 11.37 11.08 11.17 11.22 11.01C11.36 10.85 11.4 10.73 11.49 10.55C11.58 10.37 11.54 10.21 11.47 10.07C11.4 9.93 10.84 8.58 10.61 8.04C10.39 7.5 10.16 7.58 9.99 7.57C9.83 7.57 9.68 7.58 9.53 7.58Z"/></svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" onClick={() => handleFooterNav(null)}>Home</Link></li>
            <li><Link to="/about" onClick={() => handleFooterNav('about-intro')}>About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/testimonials" onClick={() => handleFooterNav('testimonials')}>Testimonials</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="/contact">Contact & Booking</Link></li>
          </ul>
        </div>

        {/* Col 3: Event Specialties */}
        <div className="footer-col">
          <h3 className="footer-heading">Event Specialties</h3>
          <ul className="footer-links">
            <li><Link to="/services">Corporate Conferences</Link></li>
            <li><Link to="/services">Award Ceremonies</Link></li>
            <li><Link to="/services">Luxury Weddings</Link></li>
            <li><Link to="/services">Live Stage & Concerts</Link></li>
            <li><Link to="/services">Brand Promotions</Link></li>
            <li><Link to="/services">Fashion Shows</Link></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col footer-contact-col">
          <h3 className="footer-heading">Contact Details</h3>
          <div className="footer-contact-item">
            <span className="contact-icon">📍</span>
            <p>3521/8716, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751025</p>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">📞</span>
            <p><a href="tel:+918260054398">+91 82600 54398</a></p>
          </div>
          <div className="footer-contact-item">
            <span className="contact-icon">✉️</span>
            <p><a href="mailto:diversesolutionsevents@gmail.com">diversesolutionsevents@gmail.com</a></p>
          </div>

          <button 
            type="button" 
            className="footer-quote-btn"
            onClick={() => onOpenQuote && onOpenQuote('quote')}
          >
            Request A Quote &rarr;
          </button>
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <p>&copy; {currentYear} DS Events (A Unit of Diverse Solutions). All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

