import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="DS Events Logo" className="logo-img" />
            <div className="logo-text-group">
              <span className="logo-title">DS Events</span>
              <span className="logo-subtitle">A UNIT OF DIVERSE SOLUTIONS</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Crafting premium, flawless, and unforgettable event experiences for corporate, social, and community celebrations.
          </p>
        </div>

        <div className="footer-links-group">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/gallery">Photo Gallery</Link></li>
            <li><Link to="/contact">Contact & Booking</Link></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h3>Event Specialties</h3>
          <ul className="footer-links">
            <li><Link to="/services">Corporate Conferences</Link></li>
            <li><Link to="/services">Award Ceremonies</Link></li>
            <li><Link to="/services">Luxury Weddings</Link></li>
            <li><Link to="/services">Brand Promotions</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Email: <a href="mailto:diversesolutionsevents@gmail.com">diversesolutionsevents@gmail.com</a></p>
          <p>Phone: <a href="tel:+918260054398">+91 82600 54398</a></p>
          <p>Address: 3521/8716, Palasuni, Rasulgarh, Bhubaneswar, Odisha 751025</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container container">
          <p>&copy; {currentYear} Diverse Solutions. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=100085845540438" target="_blank">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
