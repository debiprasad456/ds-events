import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSlider.css';

// Import high-impact images for the slider
import slideWedding from '../assets/images/wedding2.webp';
import slideStage from '../assets/images/stage-show1.webp';
import slideCorp from '../assets/images/corporate.webp';
import slideFashion from '../assets/images/fashion-shows5.webp';

const slides = [
  {
    id: 1,
    image: slideWedding,
    subtitle: 'WELCOME TO DS EVENTS',
    title: 'BEST EVENT & HOSPITALITY SERVICES PROVIDER IN ODISHA',
    description: 'We turn your milestone celebrations, luxury weddings, and grand stages into extraordinary realities.',
    primaryBtn: { text: 'Explore Services', link: '/services' },
    secondaryBtn: { text: 'Get A Quote', link: '/contact' }
  },
  {
    id: 2,
    image: slideStage,
    subtitle: 'DS EVENTS — WHERE EVERY CELEBRATION COMES ALIVE',
    title: 'CRAFTING MOMENTS THAT MATTER WITH FLAWLESS EXECUTION',
    description: 'From mega concerts & stage productions to corporate galas, we deliver unforgettable high-energy spectacles.',
    primaryBtn: { text: 'View Gallery', link: '/gallery' },
    secondaryBtn: { text: 'Book Appointment', link: '/contact' }
  },
  {
    id: 3,
    image: slideCorp,
    subtitle: 'PREMIER CORPORATE & COMMERCIAL EVENT PLANNERS',
    title: 'ELEVATING BRANDS WITH IMPACTFUL CONFERENCES & GALAS',
    description: 'Strategic planning, immersive brand activations, and state-of-the-art stage and lighting design.',
    primaryBtn: { text: 'Our Services', link: '/services' },
    secondaryBtn: { text: 'Contact Us', link: '/contact' }
  },
  {
    id: 4,
    image: slideFashion,
    subtitle: 'EXPERIENTIAL DESIGNS & STAGING',
    title: 'CHIC RUNWAYS, CULTURAL FESTIVALS & EXCLUSIVE CELEBRATIONS',
    description: 'Transforming creative ideas into breathtaking environments with attention to every fine detail.',
    primaryBtn: { text: 'Our Work', link: '/gallery' },
    secondaryBtn: { text: 'Plan Your Event', link: '/contact' }
  }
];

export default function HeroSlider({ onOpenQuote }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = slides.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [current, isPaused, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section 
      className="hero-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured Event Services Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${length}: ${slide.title}`}
            aria-hidden={!isActive}
          >
            <div className="hero-overlay"></div>
            <div className="hero-container container">
              <div className="hero-content">
                <span className="hero-badge">{slide.subtitle}</span>
                {index === 0 ? (
                  <h1 className="hero-title">{slide.title}</h1>
                ) : (
                  <h2 className="hero-title">{slide.title}</h2>
                )}
                <p className="hero-desc">{slide.description}</p>

                <div className="hero-actions">
                  <Link to={slide.primaryBtn.link} className="hero-btn primary" tabIndex={isActive ? 0 : -1}>
                    {slide.primaryBtn.text} &rarr;
                  </Link>
                  <button 
                    type="button" 
                    className="hero-btn secondary"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => onOpenQuote ? onOpenQuote('quote') : null}
                  >
                    {slide.secondaryBtn.text}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button 
        className="slider-arrow prev" 
        onClick={prevSlide} 
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button 
        className="slider-arrow next" 
        onClick={nextSlide} 
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Pagination Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
