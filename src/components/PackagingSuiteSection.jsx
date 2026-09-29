import React, { useState } from 'react';
import { Layers, Eye, Maximize2, Filter, Package, FileText, CheckCircle2 } from 'lucide-react';

// Imports for 11 SKUs
import celestialP1 from '../assets/packaging_extracted_png/Celestial glow brightening serum_page_1.png';
import celestialP2 from '../assets/packaging_extracted_png/Celestial glow brightening serum_page_2.png';

import waterPearlP1 from '../assets/packaging_extracted_png/Water pearl hydrating serum_page_1.png';
import waterPearlP2 from '../assets/packaging_extracted_png/Water pearl hydrating serum_page_2.png';

import crystalDewP1 from '../assets/packaging_extracted_png/crystel dew scrub_page_1.png';
import crystalDewP2 from '../assets/packaging_extracted_png/crystel dew scrub_page_2.png';

import lustreScrubP1 from '../assets/packaging_extracted_png/Lustre Hydration  Scrub_page_1.png';
import lustreScrubP2 from '../assets/packaging_extracted_png/Lustre Hydration  Scrub_page_2.png';

import sebumScrubP1 from '../assets/packaging_extracted_png/Sebum control scrub_page_1.png';
import sebumScrubP2 from '../assets/packaging_extracted_png/Sebum control scrub_page_2.png';

import hydrationDivineP1 from '../assets/packaging_extracted_png/Hydration divine face moisture_page_1.png';
import hydrationDivineP2 from '../assets/packaging_extracted_png/Hydration divine face moisture_page_2.png';

import sublimeCreamP1 from '../assets/packaging_extracted_png/sublime cream face moisturiser_page_1.png';
import sublimeCreamP2 from '../assets/packaging_extracted_png/sublime cream face moisturiser_page_2.png';

import persianGlowP1 from '../assets/packaging_extracted_png/Persian glow facewash_page_1.png';
import persianGlowP2 from '../assets/packaging_extracted_png/Persian glow facewash_page_2.png';

import radianceRevealedP1 from '../assets/packaging_extracted_png/Radiance Revealed  facewash_page_1.png';
import radianceRevealedP2 from '../assets/packaging_extracted_png/Radiance Revealed  facewash_page_2.png';

import luminousMistP1 from '../assets/packaging_extracted_png/Luminous hydrating mist_page_1.png';
import luminousMistP2 from '../assets/packaging_extracted_png/Luminous hydrating mist_page_2.png';

import luxeSolaireP1 from '../assets/packaging_extracted_png/luxe solaire Sunscreen_page_1.png';
import luxeSolaireP2 from '../assets/packaging_extracted_png/luxe solaire Sunscreen_page_2.png';

const PACKAGING_SKUS = [
  {
    id: 1,
    title: 'Celestial Glow Brightening Serum',
    category: 'Serums & Treatments',
    volume: '30ml Dropper Bottle + Outer Box',
    frontImage: celestialP1,
    backImage: celestialP2,
    desc: 'Brightening vitamin C & camellia peptide formulation packaging. Soft Pink & Rose Gold foil deboss on FSC cardstock.',
    highlights: ['30ml Dropper Bottle Dieline', 'Soft Blush Color System', 'Spot UV Varnish Logo'],
  },
  {
    id: 2,
    title: 'Water Pearl Hydrating Serum',
    category: 'Serums & Treatments',
    volume: '30ml Dropper Bottle + Outer Box',
    frontImage: waterPearlP1,
    backImage: waterPearlP2,
    desc: 'Deep hyaluronic moisture serum packaging. Baby Sky Blue gradient grid with blind embossed diacritics.',
    highlights: ['30ml Bottle & Box Dieline', 'Baby Sky Accent Band', 'Zero-Plastic Outer Sleeve'],
  },
  {
    id: 3,
    title: 'Crystal Dew Micro-Exfoliating Scrub',
    category: 'Scrubs & Exfoliants',
    volume: '100gm Jar Label + Outer Box',
    frontImage: crystalDewP1,
    backImage: crystalDewP2,
    desc: 'Gentle volcanic quartz mineral scrub packaging. Matte tactile finish jar wrap with tuck-end dieline box architecture.',
    highlights: ['100gm Jar Wrap Label', 'Tuck-End Box Dieline', 'Clear Alignment Grid'],
  },
  {
    id: 4,
    title: 'Lustre Hydration Exfoliating Scrub',
    category: 'Scrubs & Exfoliants',
    volume: '100gm Jar Label + Outer Box',
    frontImage: lustreScrubP1,
    backImage: lustreScrubP2,
    desc: 'Nourishing rosehip micro-polished scrub packaging. Deep plum accents paired with soft pink panel hierarchy.',
    highlights: ['100gm Jar & Carton Dieline', 'Deep Plum Palette Accent', '100% Recyclable Paperboard'],
  },
  {
    id: 5,
    title: 'Sebum Control Clarity Scrub',
    category: 'Scrubs & Exfoliants',
    volume: '100gm Jar Label + Outer Box',
    frontImage: sebumScrubP1,
    backImage: sebumScrubP2,
    desc: 'Willow bark & green tea purifying scrub packaging. Minimalist monochrome typographic layout with clear dieline folds.',
    highlights: ['100gm Jar Graphic Layout', 'Matte Grey Tinted Panel', 'FSC Unbleached Paperboard'],
  },
  {
    id: 6,
    title: 'Hydration Divine Face Moisture Cream',
    category: 'Moisturisers & Creams',
    volume: '50ml Bottle Label + Outer Box',
    frontImage: hydrationDivineP1,
    backImage: hydrationDivineP2,
    desc: 'Rich barrier repair moisturizer. Clean typographic hierarchy with Baby Sky Blue and Soft Pink accent stripes.',
    highlights: ['50ml Bottle Label Dieline', 'Folding Carton Blueprint', 'Soft Touch Matte Varnish'],
  },
  {
    id: 7,
    title: 'Sublime Cream Face Moisturiser',
    category: 'Moisturisers & Creams',
    volume: '50ml Bottle Label + Outer Box',
    frontImage: sublimeCreamP1,
    backImage: sublimeCreamP2,
    desc: 'Lightweight day emulsion packaging with soft blush pink dieline layout and clean label alignment.',
    highlights: ['50ml Bottle & Box Dieline', 'Zero-Glue Interlocking Carton', 'Universal Recycling Symbol'],
  },
  {
    id: 8,
    title: 'Persian Glow Radiance Facewash',
    category: 'Cleansers & Facewashes',
    volume: '100ml Bottle Label + Outer Box',
    frontImage: persianGlowP1,
    backImage: persianGlowP2,
    desc: 'Gentle micellar foaming cleanser packaging. Warm golden accents paired with French-origin typography.',
    highlights: ['100ml Bottle Label Wrap', 'Dual-Panel Carton Dieline', 'Minimal French Typographic Grid'],
  },
  {
    id: 9,
    title: 'Radiance Revealed Clarifying Facewash',
    category: 'Cleansers & Facewashes',
    volume: '100ml Bottle Label + Outer Box',
    frontImage: radianceRevealedP1,
    backImage: radianceRevealedP2,
    desc: 'Enzyme clarifying cleanser packaging with water-resistant label wrap and high-contrast branding.',
    highlights: ['100ml Label & Box Layout', 'Water-Resistant Label Spec', 'Crisp Margin Registration'],
  },
  {
    id: 10,
    title: 'Luminous Hydrating Facial Mist',
    category: 'Mists & Sun Care',
    volume: '100ml Spray Bottle Label + Outer Box',
    frontImage: luminousMistP1,
    backImage: luminousMistP2,
    desc: 'Fine hydration mist packaging. Baby Sky Blue bottle wrap with soft blush pink folding carton.',
    highlights: ['100ml Mist Bottle Wrap Dieline', 'Tall Folding Carton Blueprint', 'Baby Sky Gradient Palette'],
  },
  {
    id: 11,
    title: 'Luxe Solaire Invisible Sunscreen SPF50+',
    category: 'Mists & Sun Care',
    volume: '50ml Bottle Label + Outer Box',
    frontImage: luxeSolaireP1,
    backImage: luxeSolaireP2,
    desc: 'Broad-spectrum UV protection emulsion packaging with gold foil accent and warm sunset tone dieline.',
    highlights: ['50ml Bottle Label & Box', 'SPF50+ Typography Layout', 'Foil Stamping Registration'],
  },
];

const CATEGORIES = ['All SKUs', 'Serums & Treatments', 'Scrubs & Exfoliants', 'Moisturisers & Creams', 'Cleansers & Facewashes', 'Mists & Sun Care'];

export default function PackagingSuiteSection() {
  const [activeCategory, setActiveCategory] = useState('All SKUs');
  const [selectedSku, setSelectedSku] = useState(null);
  const [modalPage, setModalPage] = useState('front');

  const filteredSkus =
    activeCategory === 'All SKUs'
      ? PACKAGING_SKUS
      : PACKAGING_SKUS.filter((sku) => sku.category === activeCategory);

  return (
    <section id="packaging-suite" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                05. STRUCTURAL ENGINEERING & 11-SKU DIELINE ARCHITECTURE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              The 11-SKU Packaging System: <br />
              <span className="italic font-serif text-[#4A152E]">Modular Vector Dieline Blueprints</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Engineered by Vidushi Mewara. Rather than disconnected packaging, all 11 SKUs share a unified structural grid—incorporating dual-panel vector dielines, interlocking zero-glue tuck flaps, and micro-calibrated label bleeds.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DFD7]">
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#4A152E]" />
            Product Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#4A152E] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-[#E2DFD7] hover:border-[#4A152E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Packaging Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkus.map((sku) => (
            <div
              key={sku.id}
              onClick={() => {
                setSelectedSku(sku);
                setModalPage('front');
              }}
              className="bg-white border border-[#E2DFD7] overflow-hidden group cursor-pointer shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Dieline Artwork Preview Box */}
              <div className="relative overflow-hidden bg-[#EFECE6] p-6 flex items-center justify-center min-h-[300px]">
                <img
                  src={sku.frontImage}
                  alt={sku.title}
                  className="w-full h-auto max-h-[280px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
                    <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                    <span>Inspect Dual Dielines</span>
                  </div>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-white/90 backdrop-blur-xs font-mono text-[10px] text-[#4A152E] uppercase tracking-wider border border-[#E2DFD7]">
                  {sku.volume}
                </div>
              </div>

              {/* Card Meta Description */}
              <div className="p-6 border-t border-[#E2DFD7] space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold block mb-1">
                    {sku.category} // SKU #{sku.id < 10 ? `0${sku.id}` : sku.id}
                  </span>
                  <h3 className="font-serif text-xl text-stone-950 font-normal leading-snug group-hover:text-[#4A152E] transition-colors mb-2">
                    {sku.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-2">
                    {sku.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DFD7] flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#4A152E] font-medium flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-[#4A152E]" />
                    Page 1 & 2 Vector Dieline
                  </span>
                  <Eye className="w-4 h-4 text-stone-400 group-hover:text-[#4A152E] transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dieline Inspection Modal */}
      {selectedSku && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedSku(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-4 mb-4">
              <div>
                <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                  {selectedSku.category} // VECTOR PACKAGING DIELINE
                </span>
                <h3 className="font-serif text-2xl text-white font-normal">
                  {selectedSku.title}
                </h3>
              </div>

              {/* Page Toggle Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setModalPage('front')}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    modalPage === 'front'
                      ? 'bg-[#4A152E] text-white border border-pink-400'
                      : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  Page 1: Front Panel Dieline
                </button>
                <button
                  onClick={() => setModalPage('back')}
                  className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    modalPage === 'back'
                      ? 'bg-[#4A152E] text-white border border-pink-400'
                      : 'bg-stone-800 text-stone-400 hover:text-white'
                  }`}
                >
                  Page 2: Box Layout Dieline
                </button>
                <button
                  onClick={() => setSelectedSku(null)}
                  className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-stone-800 cursor-pointer ml-2"
                >
                  Close [ESC]
                </button>
              </div>
            </div>

            {/* Dieline Image Display Box */}
            <div className="overflow-auto flex-1 flex items-center justify-center p-6 bg-stone-950 border border-stone-800 mb-4">
              <img
                src={modalPage === 'front' ? selectedSku.frontImage : selectedSku.backImage}
                alt={`${selectedSku.title} ${modalPage} dieline`}
                className="max-w-full max-h-[60vh] object-contain"
              />
            </div>

            {/* Dieline Highlights & Description */}
            <div className="border-t border-stone-800 pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <p className="text-xs font-sans text-stone-300 max-w-xl">
                {selectedSku.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedSku.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-stone-900 border border-stone-800 text-pink-300 font-mono text-[11px] flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-pink-400" />
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
