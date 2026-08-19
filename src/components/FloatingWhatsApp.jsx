import React, { useState } from 'react';
import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="floating-whatsapp-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
        <span className="tooltip-sub">Have Questions?</span>
        <span className="tooltip-main">Chat with us on WhatsApp</span>
      </div>

      <a
        href="https://wa.me/918260054398?text=Hello%20DS%20Events%2C%20I%20would%20like%20to%20inquire%20about%20event%20planning%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat on WhatsApp with DS Events"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.58C9.33 7.58 9.04 7.65 8.79 7.93C8.54 8.2 7.84 8.86 7.84 10.2C7.84 11.54 8.82 12.83 8.95 13.01C9.09 13.2 10.87 15.93 13.58 17.1C14.22 17.38 14.73 17.54 15.12 17.67C15.77 17.87 16.35 17.84 16.82 17.77C17.34 17.69 18.42 17.12 18.64 16.48C18.87 15.84 18.87 15.3 18.8 15.18C18.73 15.07 18.55 15 18.28 14.86C18.01 14.72 16.68 14.07 16.43 13.98C16.19 13.89 16.01 13.84 15.83 14.12C15.65 14.4 15.12 15.02 14.96 15.21C14.8 15.39 14.64 15.42 14.37 15.28C14.1 15.14 13.23 14.86 12.19 13.94C11.38 13.22 10.84 12.33 10.68 12.05C10.52 11.78 10.66 11.63 10.8 11.5C10.92 11.37 11.08 11.17 11.22 11.01C11.36 10.85 11.4 10.73 11.49 10.55C11.58 10.37 11.54 10.21 11.47 10.07C11.4 9.93 10.84 8.58 10.61 8.04C10.39 7.5 10.16 7.58 9.99 7.57C9.83 7.57 9.68 7.58 9.53 7.58Z"/>
        </svg>
      </a>
    </div>
  );
}
