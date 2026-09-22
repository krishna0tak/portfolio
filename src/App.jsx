import React from 'react';
import Navbar from './components/Navbar';
import ScrollUnboxing from './components/ScrollUnboxing';
import HeroSection from './components/HeroSection';
import BrainstormSection from './components/BrainstormSection';
import WorkshopGallerySection from './components/WorkshopGallerySection';
import PackagingSuiteSection from './components/PackagingSuiteSection';
import FeatureBentoGrid from './components/FeatureBentoGrid';
import TechSpecsSection from './components/TechSpecsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#4A152E] selection:text-white antialiased font-sans">
      <Navbar />
      <main>
        {/* 01. Preserved Hero: 3D Scroll Unboxing Animation */}
        <ScrollUnboxing />
        
        {/* 02. Designer Case Study Overview Statement */}
        <HeroSection />
        
        {/* 03. Ideation Theory, Keywords & 5-Page PDF Deck */}
        <BrainstormSection />
        
        {/* 04. Studio & Workshop Process (12 Physical Photos) */}
        <WorkshopGallerySection />
        
        {/* 05. The 11-SKU Vector Packaging Dieline Suite */}
        <PackagingSuiteSection />
        
        {/* 06. Packaging Design System Highlights */}
        <FeatureBentoGrid />
        
        {/* 07. Project Deliverables & Print Matrix */}
        <TechSpecsSection />
      </main>
      <Footer />
    </div>
  );
}
