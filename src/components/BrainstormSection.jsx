import React, { useState } from 'react';
import { Eye, Maximize2, Sparkles, BookOpen, Layers, CheckCircle2, Compass, Lightbulb } from 'lucide-react';

import page1 from '../assets/ideation_extracted/page_1.png';
import page2 from '../assets/ideation_extracted/page_2.png';
import page3 from '../assets/ideation_extracted/page_3.png';
import page4 from '../assets/ideation_extracted/page_4.png';
import page5 from '../assets/ideation_extracted/page_5.png';

const IDEATION_SLIDES = [
  {
    id: 1,
    title: 'Brand Archetypes & Creative Direction',
    subtitle: 'Chapter 01: Cultural Context & Positioning',
    src: page1,
    desc: 'Vidushi Mewara established the foundational identity vectors: pairing classic French cosmetic heritage with contemporary gender-neutral restraint. The visual language bridges architectural precision with organic softness.',
    designerInsight: 'The challenge was avoiding clichéd apothecary or clinical tropes. By combining Baby Sky Blue with tactile Plum and Soft Blush, we created a distinct aesthetic territory for fragrance-free luxury.',
    highlights: ['French Cosmetic Heritage Mapping', 'Baby Sky & Soft Blush Color Architecture', 'Camellia Petal Geometry', 'Gender-Neutral Ergonomics'],
  },
  {
    id: 2,
    title: 'Diacritic Typographic Architecture',
    subtitle: 'Chapter 02: Wordmark & Accent Geometry',
    src: page2,
    desc: 'Rigorous exploration of serif stroke contrast and diacritic placement. The custom acute accent on CAMEÓLA was calibrated to ensure optical weight balance across micro-print bottle wraps (30ml) and large outer secondary cartons.',
    designerInsight: 'Diacritics frequently get clipped or distorted in compact cosmetic printing. The acute accent was custom drawn with negative-space compensation for flawless letterpress and hot-foil stamping.',
    highlights: ['Custom Serif Contrast & Proportion', 'Negative-Space Diacritic Compensation', 'Micro-Print Legibility Grid', 'Bilingual French/English Hierarchy'],
  },
  {
    id: 3,
    title: 'Volumetric Form & Tactile Studies',
    subtitle: 'Chapter 03: Industrial Form Exploration',
    src: page3,
    desc: 'Sketches, material swatches, and volumetric CAD explorations. Analyzing the tactile kinematics of opening a skincare vessel—evaluating bottle shoulder radiuses, plunger depression angles, and outer carton proportions.',
    designerInsight: 'A luxury experience is defined in the hands. We iterated bottle curvatures to ensure weight distribution felt balanced during single-handed bathroom vanity use.',
    highlights: ['Organic Camellia Petal Contours', 'Ergonomic Pump & Dropper Angles', 'Tactile Shoulder Radius Studies', 'Weight-Distribution Calibration'],
  },
  {
    id: 4,
    title: 'Substrate Chemistry & Pigment Matching',
    subtitle: 'Chapter 04: CMF & Material Formulation',
    src: page4,
    desc: 'Translating digital color theory to physical substrates: testing pigment absorptivity on virgin FSC unbleached cardstock vs PETG resin containers. Formulating non-toxic soy-based inks and hot-foil stamping tolerances.',
    designerInsight: 'Uncoated virgin cardstock absorbs ink differently than coated gloss paper. We formulated custom pigment ratios so the Baby Sky Blue remained crisp and luminous without muddy undertones.',
    highlights: ['FSC Virgin Cardstock Compatibility', 'Non-Toxic Soy Ink Formulations', 'Spot Soft-Touch Varnish Swatches', 'Micro-Foil Stamping Registration'],
  },
  {
    id: 5,
    title: 'The Fragrance-Free Manifesto',
    subtitle: 'Chapter 05: Brand Philosophy & Statement',
    src: page5,
    desc: 'The ideological thesis: "Cameola is not about fragrances or synthetic flavours — just healthy, timeless beauty that speaks for itself." Packaging had to communicate sensory luxury visually and tactically without perfume cues.',
    designerInsight: 'When a product has zero fragrance, the packaging must carry the entire emotional resonance. The zero-glue opening ritual provides the sensory delight traditionally delivered by perfume.',
    highlights: ['Tactile Sensation as Fragrance Alternative', 'Clean Beauty Ingredient Transparency', 'Zero-Synthetic Aesthetic Purity', 'Subtle Structural Sophistication'],
  },
];

const KEYWORDS = [
  'STRUCTURAL DESIGN', 'PACKAGING SYSTEM', 'PARIS HERITAGE', 'BABY SKY & BLUSH',
  'DIACRITIC TYPOGRAPHY', 'ZERO-GLUE ORIGAMI', 'GENDER NEUTRAL', 'FSC PAPERBOARD',
  'CAMELLIA GEOMETRY', 'TACTILE LUXURY', 'MATERIAL PURITY', 'ZERO SYNTHETIC FRAGRANCE'
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
                03. IDEATION DOSSIER & CREATIVE DIRECTION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Translating Botanical Purity <br />
              <span className="italic font-serif text-[#4A152E]">Into Structural Form & Typography</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Extracted directly from Vidushi Mewara's 5-page concept development deck. The research traces French cosmetic diacritics, petal geometry, and gender-neutral aesthetic balance.
          </p>
        </div>

        {/* Foundational Design Keywords */}
        <div className="mb-14 p-6 bg-white border border-[#E2DFD7] shadow-xs">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2DFD7]">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#4A152E]" />
              DESIGN TAXONOMY & STRATEGIC PILLARS
            </span>
            <span className="font-mono text-[11px] text-stone-400">RESEARCH DOSSIER // CHAPTER 01</span>
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
                5-Chapter Ideation Process Deck
              </h3>
            </div>
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest">
              CHAPTER {activeSlideIndex + 1} OF 5
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
                  CHAPTER 0{slide.id}
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
                  <span>Inspect High-Res Sheet</span>
                </div>
              </div>
            </div>

            {/* Slide Details */}
            <div className="lg:col-span-5 space-y-5">
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block">
                {activeSlide.subtitle}
              </span>
              <h4 className="font-serif text-2xl md:text-3xl text-stone-950 font-normal leading-tight">
                {activeSlide.title}
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {activeSlide.desc}
              </p>

              {/* Designer Insight Callout */}
              <div className="p-4 bg-pink-50/60 border-l-2 border-[#4A152E] space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#4A152E] uppercase font-semibold">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Designer's Rationale — Vidushi Mewara</span>
                </div>
                <p className="text-xs text-stone-700 italic font-sans leading-relaxed">
                  "{activeSlide.designerInsight}"
                </p>
              </div>

              <div className="space-y-2.5 pt-2 border-t border-[#E2DFD7]">
                <span className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold block">
                  Methodology & Deliverables
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
                <span>Expand Full Resolution Sheet</span>
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
