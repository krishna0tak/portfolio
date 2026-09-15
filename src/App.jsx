import React from 'react';
import Navbar from './components/Navbar';
import ProductUnboxingScroll from './components/ProductUnboxingScroll';
import ProductSpotlight from './components/ProductSpotlight';
import PortfolioGallery from './components/PortfolioGallery';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--canvas-base)', color: 'var(--charcoal-body)' }}>
      <Navbar />
      <main id="main-content">
        <ProductUnboxingScroll />
        <ProductSpotlight />
        <PortfolioGallery />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
