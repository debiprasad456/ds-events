import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [quoteModalState, setQuoteModalState] = useState({
    isOpen: false,
    defaultType: 'quote'
  });

  const handleOpenQuote = (type = 'quote') => {
    setQuoteModalState({
      isOpen: true,
      defaultType: type
    });
  };

  const handleCloseQuote = () => {
    setQuoteModalState(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return (
    <Router>
      <ScrollToTop />
      <TopBar onOpenQuote={handleOpenQuote} />
      <Navbar onOpenQuote={handleOpenQuote} />
      
      <main style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<AboutUs onOpenQuote={handleOpenQuote} />} />
          <Route path="/about" element={<AboutUs onOpenQuote={handleOpenQuote} />} />
          <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<AboutUs onOpenQuote={handleOpenQuote} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer onOpenQuote={handleOpenQuote} />
      <FloatingWhatsApp />
      
      {/* Interactive Global Quote & Venue Modal */}
      <QuoteModal 
        isOpen={quoteModalState.isOpen} 
        onClose={handleCloseQuote}
        defaultType={quoteModalState.defaultType}
      />
    </Router>
  );
}

