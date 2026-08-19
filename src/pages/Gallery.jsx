import React, { useState } from 'react';
import './Gallery.css';

import imgCorporate from '../assets/images/corporate.webp';
import imgCorporate1 from '../assets/images/corporate 1.webp';
import imgCorporate2 from '../assets/images/corporate 2.webp';
import imgCorporate3 from '../assets/images/corporate 3.webp';
import imgCorporate4 from '../assets/images/corporate 4.webp';
import imgWedding from '../assets/images/wedding.webp';
import imgWedding1 from '../assets/images/wedding1.webp';
import imgWedding2 from '../assets/images/wedding2.webp';
import imgWedding3 from '../assets/images/wedding3.webp';
import imgWedding4 from '../assets/images/wedding4.webp';
import imgBrand from '../assets/images/brand promotion.webp';
import imgAward from '../assets/images/award-night.webp';
import imgEducational from '../assets/images/educational.webp';
import imgStageShow from '../assets/images/stage-show.webp';
import imgCultural from '../assets/images/cultural.webp';
import imgBirthday from '../assets/images/birthday.webp';
import imgFashion1 from '../assets/images/fashion-shows1.webp';
import imgFashion2 from '../assets/images/fashion-shows2.webp';
import imgFashion3 from '../assets/images/fashion-shows3.webp';
import imgFashion4 from '../assets/images/fashion-shows4.webp';
import imgFashion5 from '../assets/images/fashion-shows5.webp';
import imgStageShow1 from '../assets/images/stage-show1.webp';
import imgStageShow2 from '../assets/images/stage-show2.webp';
import imgStageShow3 from '../assets/images/stage-show3.webp';
import imgStageShow4 from '../assets/images/stage-show4.webp';

const galleryData = [
  { id: 1, title: 'Corporate Conference 2026', category: 'corporate', tag: 'Conference', span: 'tall', imageUrl: imgCorporate },
  { id: 2, title: 'Summer Fashion Show', category: 'fashion', tag: 'Runway', span: 'wide', imageUrl: imgFashion1 },
  { id: 3, title: 'Elegant Wedding Setup', category: 'weddings', tag: 'Stage & Floral', span: 'normal', imageUrl: imgWedding },
  { id: 4, title: 'Brand Launch Activation', category: 'promotions', tag: 'Experiential', span: 'normal', imageUrl: imgBrand },
  { id: 5, title: 'Annual Award Gala', category: 'awards', tag: 'Awards Night', span: 'tall', imageUrl: imgAward },
  { id: 6, title: 'Campus Placement Drive', category: 'educational', tag: 'Educational', span: 'normal', imageUrl: imgEducational },
  { id: 7, title: 'Grand Concert Stage', category: 'stage', tag: 'Concert', span: 'wide', imageUrl: imgStageShow },
  { id: 8, title: 'Cultural Dance Festival', category: 'cultural', tag: 'Festival', span: 'normal', imageUrl: imgCultural },
  { id: 9, title: 'Birthday Anniversary Bash', category: 'birthdays', tag: 'Celebration', span: 'normal', imageUrl: imgBirthday },
  { id: 10, title: 'Corporate Event Setup 1', category: 'corporate', tag: 'Conference', span: 'normal', imageUrl: imgCorporate1 },
  { id: 11, title: 'Corporate Event Setup 2', category: 'corporate', tag: 'Conference', span: 'wide', imageUrl: imgCorporate2 },
  { id: 12, title: 'Corporate Event Setup 3', category: 'corporate', tag: 'Conference', span: 'tall', imageUrl: imgCorporate3 },
  { id: 13, title: 'Corporate Event Setup 4', category: 'corporate', tag: 'Conference', span: 'normal', imageUrl: imgCorporate4 },
  { id: 14, title: 'Wedding Ceremony 1', category: 'weddings', tag: 'Stage & Floral', span: 'wide', imageUrl: imgWedding1 },
  { id: 15, title: 'Wedding Ceremony 2', category: 'weddings', tag: 'Stage & Floral', span: 'tall', imageUrl: imgWedding2 },
  { id: 16, title: 'Wedding Ceremony 3', category: 'weddings', tag: 'Stage & Floral', span: 'normal', imageUrl: imgWedding3 },
  { id: 17, title: 'Wedding Ceremony 4', category: 'weddings', tag: 'Stage & Floral', span: 'wide', imageUrl: imgWedding4 },
  { id: 18, title: 'Fashion Show Runway 1', category: 'fashion', tag: 'Runway', span: 'normal', imageUrl: imgFashion2 },
  { id: 19, title: 'Fashion Show Runway 2', category: 'fashion', tag: 'Runway', span: 'wide', imageUrl: imgFashion3 },
  { id: 20, title: 'Fashion Show Runway 3', category: 'fashion', tag: 'Runway', span: 'tall', imageUrl: imgFashion4 },
  { id: 21, title: 'Fashion Show Runway 4', category: 'fashion', tag: 'Runway', span: 'normal', imageUrl: imgFashion5 },
  { id: 22, title: 'Live Stage Show 1', category: 'stage', tag: 'Concert', span: 'normal', imageUrl: imgStageShow1 },
  { id: 23, title: 'Live Stage Show 2', category: 'stage', tag: 'Concert', span: 'wide', imageUrl: imgStageShow2 },
  { id: 24, title: 'Live Stage Show 3', category: 'stage', tag: 'Concert', span: 'tall', imageUrl: imgStageShow3 },
  { id: 25, title: 'Live Stage Show 4', category: 'stage', tag: 'Concert', span: 'normal', imageUrl: imgStageShow4 },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="gallery-page fade-in">
      <div className="gallery-header container">
        <span className="section-tag">PORTFOLIO</span>
        <h1 className="gallery-title">Our Work Gallery</h1>
        <p className="gallery-subtitle">
          A glimpse into the stunning setups, stages, and moments we have captured across different events in Odisha.
        </p>

        {/* Filter Toolbar */}
        <div className="gallery-filters">
          <button className={`filter-tab ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All ({galleryData.length})</button>
          <button className={`filter-tab ${filter === 'corporate' ? 'active' : ''}`} onClick={() => setFilter('corporate')}>Corporate</button>
          <button className={`filter-tab ${filter === 'weddings' ? 'active' : ''}`} onClick={() => setFilter('weddings')}>Weddings</button>
          <button className={`filter-tab ${filter === 'stage' ? 'active' : ''}`} onClick={() => setFilter('stage')}>Stage Shows</button>
          <button className={`filter-tab ${filter === 'fashion' ? 'active' : ''}`} onClick={() => setFilter('fashion')}>Fashion</button>
        </div>
      </div>

      {/* Masonry / Grid Layout */}
      <section className="gallery-grid-container container">
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className={`gallery-item ${item.span}`}
              onClick={() => setSelectedItem(item)}
            >
              {item.imageUrl ? (
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="gallery-image" 
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="gallery-card-placeholder">
                  <div className="placeholder-inner">
                    <span className="camera-icon">📷</span>
                    <p className="placeholder-note">{item.title} Photo Placeholder</p>
                  </div>
                </div>
              )}
              <div className="gallery-item-overlay">
                <div className="overlay-content">
                  <span className="overlay-tag">{item.tag}</span>
                  <h3>{item.title}</h3>
                  <span className="view-more">View Photo &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="lightbox-backdrop" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedItem(null)} aria-label="Close Lightbox">
              &times;
            </button>
            <div className="lightbox-img-wrapper">
              <img src={selectedItem.imageUrl} alt={selectedItem.title} className="lightbox-image" />
            </div>
            <div className="lightbox-caption">
              <span className="lightbox-tag">{selectedItem.tag}</span>
              <h3>{selectedItem.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

