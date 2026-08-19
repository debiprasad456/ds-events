import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Navigation click handler
  const handleNavClick = (sectionId) => {
    setIsOpen(false);
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
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <nav className="navbar container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" onClick={() => handleNavClick(null)}>
          <div className="logo-badge">
            <img src={logo} alt="DS Events Logo" className="logo-img" />
          </div>
          <div className="logo-text-group">
            <span className="logo-title">DS Events</span>
            <span className="logo-subtitle">A UNIT OF DIVERSE SOLUTIONS</span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => handleNavClick(null)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`navbar-item ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about-intro')}
          >
            About
          </Link>
          <Link 
            to="/services" 
            className={`navbar-item ${location.pathname === '/services' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/testimonials" 
            className={`navbar-item ${location.pathname === '/testimonials' ? 'active' : ''}`}
            onClick={() => handleNavClick('testimonials')}
          >
            Testimonials
          </Link>
          <Link 
            to="/gallery" 
            className={`navbar-item ${location.pathname === '/gallery' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile Quick Phone & CTA */}
          <div className="navbar-mobile-actions">
            <a href="tel:+918260054398" className="mobile-phone-link">
              📞 Have Question? <strong>+91 82600 54398</strong>
            </a>
            <button 
              type="button" 
              className="navbar-btn-mobile"
              onClick={() => {
                setIsOpen(false);
                if (onOpenQuote) onOpenQuote('quote');
              }}
            >
              Get A Quote &rarr;
            </button>
          </div>
        </div>

        {/* Right Side: Phone Callout & CTA Button */}
        <div className="navbar-right">
          <a href="tel:+918260054398" className="navbar-phone-widget">
            <div className="phone-icon-circle">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.02l-2.23 2.09z"/>
              </svg>
            </div>
            <div className="phone-text">
              <span className="phone-label">Have Question?</span>
              <span className="phone-number">8260054398</span>
            </div>
          </a>

          <button 
            type="button" 
            className="navbar-cta-btn"
            onClick={() => onOpenQuote && onOpenQuote('quote')}
          >
            Book Appointment <span>&rarr;</span>
          </button>

          {/* Hamburger Menu Toggle for Mobile */}
          <button 
            className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

