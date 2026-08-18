import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Navbar.css';

export default function Navbar() {
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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="DS Events Logo" className="logo-img" />
          <div className="logo-text-group">
            <span className="logo-title">DS Events</span>
            <span className="logo-subtitle">A UNIT OF DIVERSE SOLUTIONS</span>
          </div>
        </Link>

        {/* Hamburger Menu Toggle */}
        <button 
          className={`navbar-toggle ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`navbar-item ${location.pathname === '/services' ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link 
            to="/gallery" 
            className={`navbar-item ${location.pathname === '/gallery' ? 'active' : ''}`}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={`navbar-item ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            Contact Us
          </Link>

          <Link to="/contact" className="navbar-btn-mobile">
            Book Appointment &rarr;
          </Link>
        </div>

        {/* Appointment CTA */}
        <Link to="/contact" className="navbar-btn">
          Book Appointment <span>&rarr;</span>
        </Link>
      </div>
    </nav>
  );
}
