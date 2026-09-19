import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScrollUnboxing from './components/ScrollUnboxing';
import BrainstormSection from './components/BrainstormSection';
import FeatureBentoGrid from './components/FeatureBentoGrid';
import ProjectGallery from './components/ProjectGallery';
import TechSpecsSection from './components/TechSpecsSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-stone-900 selection:text-white antialiased font-sans">
      <Navbar />
      <main>
        {/* Landing Section: Clean 3D Scroll Unboxing Opens First */}
        <ScrollUnboxing />
        {/* Project Overview Statement */}
        <HeroSection />
        {/* Ideation & Brainstorming Process */}
        <BrainstormSection />
        {/* Bento Grid Features */}
        <FeatureBentoGrid />
        {/* Extended Visual Gallery */}
        <ProjectGallery />
        {/* Technical Engineering Matrix */}
        <TechSpecsSection />
      </main>
      <Footer />
    </div>
  );
}
