import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import aboutUsImg from '../assets/images/about-us.png';

export default function AboutUs() {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <header className="about-hero">
        <div className="about-hero-content container">
          <p className="hero-subtitle">DS Events- where every celebration comes Alive</p>
          <h1 className="hero-title">Crafting Moments That Matter</h1>
          <p className="hero-description">
            We are premier event planners specializing in transforming your corporate visions, milestone celebrations, and grand stages into extraordinary realities.
          </p>
          <div className="hero-ctas">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
        {/* Placeholder for Hero Image/Video */}
        <div className="hero-image-placeholder">
          <div className="placeholder-overlay"></div>
        </div>
      </header>
      
      {/* Introduction Section */}
      <section className="about-intro container section-padding">
        <div className="intro-grid">
          <div className="intro-text">
            <h2 className="section-title">Who We Are</h2>
            <p className="intro-lead">
              We create experiences that inspire, connect, and leave lasting impressions.
            </p>
            <p>
              At <strong>DS Events</strong> we are passionate about transforming ideas into extraordinary events. As a full-service event management company, we specialize in planning, designing, and executing memorable experiences for corporate events, weddings, social celebrations, product launches, exhibitions, conferences, and more.
            </p>
            <p>
              With a blend of creativity, strategic planning, and flawless execution, our team works closely with clients to bring their vision to life. Every event is unique, and we believe in delivering customized solutions that reflect your brand, personality, and objectives.
            </p>
            <p>
              From concept development and venue selection to production, logistics, and on-site management, we handle every detail with precision and professionalism. Our extensive network of trusted vendors, innovative approach, and commitment to excellence ensure that every event exceeds expectations.
            </p>
            <p>
              Over the years, we have built a reputation for creating seamless, impactful, and unforgettable experiences that engage audiences and achieve results.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>150+</h3>
                <p>Events Managed</p>
              </div>
              <div className="stat-card">
                <h3>13+</h3>
                <p>Event Categories</p>
              </div>
              <div className="stat-card">
                <h3>99%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="intro-image-container">
            <img src={aboutUsImg} alt="About DS Events" className="intro-image" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why section-padding">
        <div className="container">
          <h2 className="section-title text-center">Why Work With Us</h2>
          <p className="section-subtitle text-center">
            Our mission is simple: to turn moments into memories and ideas into remarkable experiences.<br/>
            Whether you're planning an intimate celebration or a large-scale corporate event, we're here to make it exceptional.
          </p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Innovative Concepts</h3>
              <p>Creative and innovative event concepts</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Comprehensive Planning</h3>
              <p>End-to-end event planning and management</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Expert Team</h3>
              <p>Experienced and dedicated professionals</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Strong Partnerships</h3>
              <p>Strong vendor and venue partnerships</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Flawless Execution</h3>
              <p>Attention to detail and flawless execution</p>
            </div>
            <div className="why-card">
              <div className="why-icon">✦</div>
              <h3>Tailored Solutions</h3>
              <p>Customized solutions tailored to your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta container section-padding">
        <div className="cta-banner">
          <h2>Ready to bring your dream event to life?</h2>
          <p>Let's collaborate to make your next project a resounding success.</p>
          <Link to="/contact" className="btn btn-accent">Plan Your Event &rarr;</Link>
        </div>
      </section>
    </div>
  );
}
