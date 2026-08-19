import React, { useState } from 'react';
import './Services.css';
import corporateImg from '../assets/images/corporate.webp';
import politicalImg from '../assets/images/political.webp';
import birthdayImg from '../assets/images/birthday.webp';
import weddingImg from '../assets/images/wedding.webp';
import culturalImg from '../assets/images/cultural.webp';
import awardNightImg from '../assets/images/award-night.webp';
import stageShowImg from '../assets/images/stage-show.webp';
import religiousImg from '../assets/images/religious.webp';
import educationalImg from '../assets/images/educational.webp';
import partiesImg from '../assets/images/parties.webp';
import brandPromotionImg from '../assets/images/brand promotion.webp';
import anniversaryImg from '../assets/images/anniversary.webp';
import fashionImg from '../assets/images/fashion-shows1.webp';

const servicesData = [
  // Corporate & Commercial
  {
    id: 'corp',
    title: 'Corporate Events',
    category: 'corporate',
    categoryLabel: 'Corporate & Commercial',
    description: 'Professional conferences, seminars, stakeholder meetings, team-building retreats, and gala dinners tailored to represent your corporate identity.',
    image: corporateImg
  },
  {
    id: 'promo',
    title: 'Brand Promotions',
    category: 'corporate',
    categoryLabel: 'Corporate & Commercial',
    description: 'Immersive brand activations, product launches, experiential pop-ups, and marketing campaigns designed to engage audiences and create buzz.',
    image: brandPromotionImg
  },
  {
    id: 'awards',
    title: 'Award Nights',
    category: 'corporate',
    categoryLabel: 'Corporate & Commercial',
    description: 'Glamorous and high-profile award ceremonies featuring state-of-the-art stage setups, dynamic lighting, and precise live production management.',
    image: awardNightImg
  },
  {
    id: 'stage',
    title: 'Stage Shows',
    category: 'corporate',
    categoryLabel: 'Entertainment & Stage',
    description: 'Large-scale theatrical stage designs, concert setups, live audio engineering, and complete talent orchestration for high-energy public spectacles.',
    image: stageShowImg
  },
  {
    id: 'fashion',
    title: 'Fashion Shows',
    category: 'corporate',
    categoryLabel: 'Fashion & Runway',
    description: 'Chic runway events with professional ramp configurations, lighting design, designer backstage coordination, and sleek media coverage setups.',
    image: fashionImg
  },
  // Social & Celebrations
  {
    id: 'parties',
    title: 'Parties',
    category: 'social',
    categoryLabel: 'Social & Private',
    description: 'Theme parties, cocktail mixers, reunions, and customized social gatherings with excellent catering, design, and entertainment curation.',
    image: partiesImg
  },
  {
    id: 'birthday',
    title: 'Birthdays',
    category: 'social',
    categoryLabel: 'Social & Private',
    description: 'Creative and personalized birthday celebrations from whimsical kids parties with fun elements to elegant adult milestone events.',
    image: birthdayImg
  },
  {
    id: 'wedding',
    title: 'Weddings',
    category: 'social',
    categoryLabel: 'Weddings & Social',
    description: 'Fairytale wedding planning from engagement to reception. We design stunning setups, coordinate vendors, and manage all rituals flawlessly.',
    image: weddingImg
  },
  {
    id: 'anniversary',
    title: 'Anniversaries',
    category: 'social',
    categoryLabel: 'Social & Private',
    description: 'Heartwarming milestone anniversary celebrations with personalized themes, tribute presentations, and elegant dining arrangements.',
    image: anniversaryImg
  },
  // Community & Public
  {
    id: 'edu',
    title: 'Educational Events',
    category: 'community',
    categoryLabel: 'Community & Academic',
    description: 'Academic symposiums, campus orientations, university placement drives, science exhibitions, and guest lecture coordination.',
    image: educationalImg
  },
  {
    id: 'cultural',
    title: 'Cultural Events',
    category: 'community',
    categoryLabel: 'Community & Cultural',
    description: 'Spectacular community festivals, traditional dance showcases, multi-cultural fairs, and art exhibitions celebrating regional heritage.',
    image: culturalImg
  },
  {
    id: 'political',
    title: 'Political Events',
    category: 'community',
    categoryLabel: 'Community & Protocol',
    description: 'High-security press conferences, political rallies, town halls, speech venues, and leader hospitality with strict protocol adherence.',
    image: politicalImg
  },
  {
    id: 'religious',
    title: 'Religious Events',
    category: 'community',
    categoryLabel: 'Community & Traditional',
    description: 'Spiritual gatherings, temple festivals, community prayer halls, and traditional celebrations managed with appropriate decorum and respect.',
    image: religiousImg
  }
];

export default function Services({ onOpenQuote }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <div className="services-page fade-in">
      <div className="services-header container">
        <span className="section-tag">OUR EXPERTISE</span>
        <h1 className="services-title">Event Planning & Hospitality Services</h1>
        <p className="services-subtitle">
          We bring organization, beauty, and operational excellence to 13 distinct types of gatherings across Odisha. Use the filters below to explore our comprehensive service offerings.
        </p>

        {/* Filter Tabs */}
        <div className="services-filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Events ({servicesData.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
            onClick={() => setActiveFilter('corporate')}
          >
            Corporate & Commercial
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'social' ? 'active' : ''}`}
            onClick={() => setActiveFilter('social')}
          >
            Social & Private
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'community' ? 'active' : ''}`}
            onClick={() => setActiveFilter('community')}
          >
            Community & Public
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <section className="services-grid-section container">
        <div className="services-grid">
          {filteredServices.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-card-image-wrap">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="service-card-image-placeholder">
                    <span className="placeholder-text">{service.title}</span>
                  </div>
                )}
                <span className="service-category-badge">{service.categoryLabel}</span>
              </div>
              
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-card-footer">
                  <button 
                    type="button" 
                    className="service-inquire-btn"
                    onClick={() => onOpenQuote && onOpenQuote(service.title)}
                  >
                    Inquire Service <span>&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="services-bottom-cta container">
        <div className="cta-box">
          <div className="cta-box-text">
            <h3>Need a Custom Event Solution?</h3>
            <p>From custom stage engineering to bespoke hospitality arrangements, we build tailored packages.</p>
          </div>
          <button 
            type="button" 
            className="cta-btn primary"
            onClick={() => onOpenQuote && onOpenQuote('quote')}
          >
            Request Custom Proposal &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}

