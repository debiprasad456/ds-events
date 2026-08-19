import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import TestimonialsSection from '../components/TestimonialsSection';
import './AboutUs.css';
import aboutUsImg from '../assets/images/about-us.png';

export default function AboutUs({ onOpenQuote }) {
  return (
    <div className="about-page fade-in">
      {/* Full-bleed Kyato-Style Hero Banner Slider */}
      <HeroSlider onOpenQuote={onOpenQuote} />

      {/* Introduction Section / Who We Are */}
      <section className="about-intro container section-padding" id="about-intro">
        <div className="intro-grid">
          <div className="intro-text">
            <span className="section-tag">WHO WE ARE</span>
            <h2 className="section-title">Transforming Ideas Into Extraordinary Events</h2>
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

            {/* Statistics Counters */}
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">150+</span>
                <span className="stat-label">Events Managed</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">13+</span>
                <span className="stat-label">Event Categories</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">99%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="intro-image-container">
            <div className="intro-image-frame">
              <img 
                src={aboutUsImg} 
                alt="About DS Events Setup" 
                className="intro-image" 
                loading="lazy"
                decoding="async"
              />
              <div className="experience-badge">
                <span className="exp-count">#1</span>
                <span className="exp-text">Event Planners in Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why section-padding">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">WHY CHOOSE US</span>
            <h2 className="section-title">Why Work With Us</h2>
            <p className="section-subtitle">
              Our mission is simple: to turn moments into memories and ideas into remarkable experiences.<br/>
              Whether you're planning an intimate celebration or a large-scale corporate event, we're here to make it exceptional.
            </p>
          </div>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Innovative Concepts</h3>
              <p>Creative and innovative event concepts tailored to your personal aesthetic or corporate brand.</p>
            </div>
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Comprehensive Planning</h3>
              <p>End-to-end event planning, scheduling, vendor coordination, and turnkey management.</p>
            </div>
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Expert Team</h3>
              <p>Experienced and dedicated event professionals orchestrating lighting, sound, decor, and hospitality.</p>
            </div>
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Strong Partnerships</h3>
              <p>Direct partnerships with premium venues, caterers, artists, and production suppliers in Odisha.</p>
            </div>
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Flawless Execution</h3>
              <p>Rigorous attention to detail, timeline precision, and on-ground crisis management.</p>
            </div>
            <div className="why-card">
              <div className="why-icon-circle">
                <span>✦</span>
              </div>
              <h3>Tailored Solutions</h3>
              <p>Customized packages and flexible solutions built around your exact budget and vision.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Call to Action Banner */}
      <section className="about-cta container section-padding">
        <div className="cta-banner">
          <div className="cta-content">
            <span className="cta-sub">LET'S COLLABORATE</span>
            <h2>Ready to bring your dream event to life?</h2>
            <p>Let's collaborate to make your next project a resounding success.</p>
          </div>
          <div className="cta-actions">
            <Link to="/contact" className="cta-btn primary">
              Plan Your Event &rarr;
            </Link>
            <button 
              type="button" 
              className="cta-btn secondary"
              onClick={() => onOpenQuote && onOpenQuote('quote')}
            >
              Get Quick Estimate
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

