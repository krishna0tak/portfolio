import React from 'react';
import Navbar from './components/Navbar';
import ScrollUnboxing from './components/ScrollUnboxing';
import HeroSection from './components/HeroSection';
import BrainstormSection from './components/BrainstormSection';
import PackagingSuiteSection from './components/PackagingSuiteSection';
import DesignerSkillsSection from './components/DesignerSkillsSection';
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
        
        {/* 03. Brandmark & Brand Mood Board */}
        <BrainstormSection />
        
        {/* 04. Unified 11-SKU Packaging & Product Capture Showcase */}
        <PackagingSuiteSection />
        
        {/* 05. Designer Tools & Implemented Skills */}
        <DesignerSkillsSection />
      </main>
      <Footer />
    </div>
  );
}
