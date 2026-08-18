import React, { useState } from 'react';
import './Services.css';
import corporateImg from '../assets/images/corporate.jpg';
import politicalImg from '../assets/images/political.jpg';
import birthdayImg from '../assets/images/birthday.jpg';
import weddingImg from '../assets/images/wedding.jpg';
import culturalImg from '../assets/images/cultural.jpg';
import awardNightImg from '../assets/images/award-night.jpg';
import stageShowImg from '../assets/images/stage-show.jpg';
import religiousImg from '../assets/images/religious.jpg';
import educationalImg from '../assets/images/educational.jpg';
import partiesImg from '../assets/images/parties.webp';
import brandPromotionImg from '../assets/images/brand promotion.jpg';
import anniversaryImg from '../assets/images/anniversary.jpg';
import fashionImg from '../assets/images/fashion-shows1.jpeg';

const servicesData = [
  // Corporate & Commercial
  {
    id: 'corp',
    title: 'Corporate Events',
    category: 'corporate',
    description: 'Professional conferences, seminars, stakeholder meetings, team-building retreats, and gala dinners tailored to represent your corporate identity.',
    image: corporateImg
  },
  {
    id: 'promo',
    title: 'Brand Promotions',
    category: 'corporate',
    description: 'Immersive brand activations, product launches, experiential pop-ups, and marketing campaigns designed to engage audiences and create buzz.',
    image: brandPromotionImg
  },
  {
    id: 'awards',
    title: 'Award Nights',
    category: 'corporate',
    description: 'Glamorous and high-profile award ceremonies featuring state-of-the-art stage setups, dynamic lighting, and precise live production management.',
    image: awardNightImg
  },
  {
    id: 'stage',
    title: 'Stage Shows',
    category: 'corporate',
    description: 'Large-scale theatrical stage designs, concert setups, live audio engineering, and complete talent orchestration for high-energy public spectacles.',
    image: stageShowImg
  },
  {
    id: 'fashion',
    title: 'Fashion Shows',
    category: 'corporate',
    description: 'Chic runway events with professional ramp configurations, lighting design, designer backstage coordination, and sleek media coverage setups.',
    image: fashionImg
  },
  // Social & Celebrations
  {
    id: 'parties',
    title: 'Parties',
    category: 'social',
    description: 'Theme parties, cocktail mixers, reunions, and customized social gatherings with excellent catering, design, and entertainment curation.',
    image: partiesImg
  },
  {
    id: 'birthday',
    title: 'Birthdays',
    category: 'social',
    description: 'Creative and personalized birthday celebrations from whimsical kids parties with fun elements to elegant adult milestone events.',
    image: birthdayImg
  },
  {
    id: 'wedding',
    title: 'Weddings',
    category: 'social',
    description: 'Fairytale wedding planning from engagement to reception. We design stunning setups, coordinate vendors, and manage all rituals flawlessly.',
    image: weddingImg
  },
  {
    id: 'anniversary',
    title: 'Anniversaries',
    category: 'social',
    description: 'Heartwarming milestone anniversary celebrations with personalized themes, tribute presentations, and elegant dining arrangements.',
    image: anniversaryImg
  },
  // Community & Public
  {
    id: 'edu',
    title: 'Educational Events',
    category: 'community',
    description: 'Academic symposiums, campus orientations, university placement drives, science exhibitions, and guest lecture coordination.',
    image: educationalImg
  },
  {
    id: 'cultural',
    title: 'Cultural Events',
    category: 'community',
    description: 'Spectacular community festivals, traditional dance showcases, multi-cultural fairs, and art exhibitions celebrating regional heritage.',
    image: culturalImg
  },
  {
    id: 'political',
    title: 'Political Events',
    category: 'community',
    description: 'High-security press conferences, political rallies, town halls, speech venues, and leader hospitality with strict protocol adherence.',
    image: politicalImg
  },
  {
    id: 'religious',
    title: 'Religious Events',
    category: 'community',
    description: 'Spritual gatherings, temple festivals, community prayer halls, and traditional celebrations managed with appropriate decorum and respect.',
    image: religiousImg
  }
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeFilter);

  return (
    <div className="services-page fade-in">
      <div className="services-header container">
        <h1 className="services-title">Our Event Services</h1>
        <p className="services-subtitle">
          We bring organization, beauty, and operational excellence to 13 distinct types of gatherings. 
          Use the filters below to explore our services.
        </p>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Events
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
              {service.image ? (
                <div className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </div>
              ) : (
                <div className="service-card-image-placeholder">
                  <span className="placeholder-text">{service.title} Image</span>
                </div>
              )}
              <div className="service-card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card-footer">
                  <span className="service-tag">{service.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
