import React, { useState } from 'react';
import { Eye, Maximize2, Sparkles, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

import page1 from '../assets/ideation_extracted/page_1.png';
import page2 from '../assets/ideation_extracted/page_2.png';
import page3 from '../assets/ideation_extracted/page_3.png';
import page4 from '../assets/ideation_extracted/page_4.png';
import page5 from '../assets/ideation_extracted/page_5.png';

const IDEATION_SLIDES = [
  {
    id: 1,
    title: 'Brand Identity Keywords & Core Pillars',
    subtitle: 'Keyword Mapping & Aesthetic Direction',
    src: page1,
    desc: 'Core brand values establishing French luxury heritage, Baby Sky & Soft Pink color system, italic typography, and gender-neutral clean beauty positioning.',
    highlights: ['France / Paris Brand Origin', 'Baby Sky & Pink Palette', 'Camellia Elegance Motif', 'Gender-Neutral Architecture'],
  },
  {
    id: 2,
    title: 'Brandmark & Logotype Typography',
    subtitle: 'CAMEÓLA Paris Wordmark Iterations',
    src: page2,
    desc: 'Custom serif and italic font pairing exploring accent marks (CAMEÓLA) and timeless French haute-cosmétique proportions.',
    highlights: ['Custom Serif & Accent Design', 'High-Contrast Diacritics', 'Minimalist Alignment Grid'],
  },
  {
    id: 3,
    title: 'Visual Moodboard & Form Exploration',
    subtitle: 'Sculptural & Architectural Inspiration',
    src: page3,
    desc: 'Sketches, material swatches, and organic curvature research balancing tactile softness with architectural precision.',
    highlights: ['Organic Camellia Petal Curves', 'Ergonomic Plunger Contours', 'Monochromatic Contrast'],
  },
  {
    id: 4,
    title: 'Color Theory & Material Substrates',
    subtitle: 'Baby Sky, Soft Pink & Deep Plum Harmonization',
    src: page4,
    desc: 'Formulating pigment ratios for soft-touch PETG resin, FSC paperboard box stock, and metallic rose-gold foil accents.',
    highlights: ['Baby Sky & Soft Pink Tones', 'FSC Cardstock Compatibility', 'UV Varnish & Hot Foil Specs'],
  },
  {
    id: 5,
    title: 'Design Philosophy & Brand Manifesto',
    subtitle: 'Beauty That Speaks Without Scent',
    src: page5,
    desc: 'Core formulation ethos: "Cameola is not about fragrances or synthetic flavours — just healthy, timeless beauty that speaks for itself."',
    highlights: ['Pure Unscented Formulation', 'Natural Skin Health Focus', 'Subtle Nod to Timeless Elegance'],
  },
];

const KEYWORDS = [
  'PREMIUM', 'SKIN CARE', 'PARIS / FRANCE', 'BABY SKY & PINK',
  'ITALIC FONTS', 'ELEGANCE', 'FLAWLESS', 'GENDER NEUTRAL',
  'CAMELLIA MOTIF', 'LUXURY', 'GENTLE PURITY', 'ZERO SYNTHETIC FRAGRANCE'
];

export default function BrainstormSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  const activeSlide = IDEATION_SLIDES[activeSlideIndex];

  return (
    <section id="theory" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                03. IDEATION THEORY & BRAND PHILOSOPHY
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Design Philosophy: <br />
              <span className="italic font-serif text-[#4A152E]">Beauty That Speaks Without Scent</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Extracted directly from the designer's 5-page ideation story deck. CAMEÓLA Paris rejects artificial perfumes in favor of healthy, timeless skin purity.
          </p>
        </div>

        {/* Brand Keywords Pill Cloud */}
        <div className="mb-14 p-6 bg-white border border-[#E2DFD7] shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2DFD7]">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4A152E]" />
              FOUNDATIONAL DESIGN KEYWORDS & PILLARS
            </span>
            <span className="font-mono text-[11px] text-stone-400">IDEATION STORY DECK // PAGE 01</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {KEYWORDS.map((kw, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 bg-[#EFECE6] border border-[#E2DFD7] font-mono text-xs text-stone-800 uppercase tracking-wider hover:bg-[#4A152E] hover:text-white transition-colors"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* 5-Page Ideation Story Deck Showcase */}
        <div className="bg-white border border-[#E2DFD7] shadow-xs p-6 md:p-10 mb-16">
          <div className="flex items-center justify-between pb-6 border-b border-[#E2DFD7] mb-8">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-[#4A152E]" />
              <h3 className="font-serif text-2xl text-stone-950 font-normal">
                5-Page Ideation Story Deck
              </h3>
            </div>
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest">
              SLIDE {activeSlideIndex + 1} OF 5
            </span>
          </div>

          {/* Slide Tab Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {IDEATION_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlideIndex(idx)}
                className={`p-3 text-left transition-all duration-200 border cursor-pointer ${
                  activeSlideIndex === idx
                    ? 'bg-[#4A152E] text-white border-[#4A152E] shadow-sm'
                    : 'bg-[#EFECE6] text-stone-700 border-[#E2DFD7] hover:border-[#4A152E]'
                }`}
              >
                <div className="font-mono text-[10px] tracking-widest opacity-80 mb-1">
                  PAGE 0{slide.id}
                </div>
                <div className="font-serif text-xs line-clamp-1 font-medium">
                  {slide.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Slide Display Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F7F6F3] p-6 md:p-8 border border-[#E2DFD7]">
            {/* Slide Preview Image */}
            <div
              className="lg:col-span-7 relative group cursor-pointer overflow-hidden border border-[#E2DFD7] bg-white p-3 shadow-xs"
              onClick={() => setLightboxImage(activeSlide.src)}
            >
              <img
                src={activeSlide.src}
                alt={activeSlide.title}
                className="w-full h-auto max-h-[480px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
                  <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                  <span>Inspect Full Slide</span>
                </div>
              </div>
            </div>

            {/* Slide Details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block">
                {activeSlide.subtitle}
              </span>
              <h4 className="font-serif text-2xl md:text-3xl text-stone-950 font-normal leading-tight">
                {activeSlide.title}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {activeSlide.desc}
              </p>

              <div className="space-y-3 pt-4 border-t border-[#E2DFD7]">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold block">
                  Design Rationale & Highlights
                </span>
                {activeSlide.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs md:text-sm text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setLightboxImage(activeSlide.src)}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#4A152E] text-white font-mono text-xs uppercase tracking-wider hover:bg-[#381023] transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Expand High-Res Slide</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                IDEATION STORY DECK // FULL RESOLUTION INSPECTOR
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1 bg-stone-800 cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center p-4 bg-stone-950 border border-stone-800">
              <img
                src={lightboxImage}
                alt="Full resolution slide"
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
