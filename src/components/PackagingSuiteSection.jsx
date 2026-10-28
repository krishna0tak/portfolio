import React, { useState, useEffect } from 'react';
import {
  Layers,
  Eye,
  Maximize2,
  Filter,
  Package,
  FileText,
  CheckCircle2,
  Camera,
  Box,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

// ==========================================
// 1. DIELINE IMPORTS (Page 1 & Page 2)
// ==========================================
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

// ==========================================
// 2. PHYSICAL STUDIO PROTOTYPE CAPTURES (1-to-1 Verified)
// ==========================================
// Celestial Glow Brightening Serum: 30ml dropper + golden carton with water droplets
import celestialGlowPhoto from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (2).jpeg';

// Water Pearl Hydrating Serum: 30ml dropper + mocha carton & marble pebble angle
import waterPearlPhoto1 from '../assets/WhatsApp Image 2026-09-22 at 11.57.51 (1).jpeg';
import waterPearlPhoto2 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (3).jpeg';

// Crystal Dew Micro-Exfoliating Scrub: Teal carton + open jar with crystalline quartz scrub
import crystalDewPhoto from '../assets/WhatsApp Image 2026-09-22 at 12.00.54 (2).jpeg';

// Lustre Hydration Exfoliating Scrub: Mauve/pink carton + closed jar & open pink scrub texture
import lustreScrubPhoto1 from '../assets/WhatsApp Image 2026-09-22 at 12.00.54.jpeg';
import lustreScrubPhoto2 from '../assets/WhatsApp Image 2026-09-22 at 12.00.54 (1).jpeg';

// Sebum Control Clarity Scrub: Charcoal carton + wide 100gm jar
import sebumScrubPhoto from '../assets/WhatsApp Image 2026-09-22 at 11.57.51 (2).jpeg';

// Hydration Divine Face Moisture Cream: Dark teal carton + 50ml barrier pump bottle
import hydrationDivinePhoto from '../assets/WhatsApp Image 2026-09-22 at 11.57.50.jpeg';

// Luminous Hydrating Facial Mist: Rose box + 100ml spray bottle with mist droplets & horizontal
import mistSpray1 from '../assets/WhatsApp Image 2026-09-22 at 11.57.51.jpeg';
import mistSpray2 from '../assets/WhatsApp Image 2026-09-22 at 11.57.50 (1).jpeg';

// Luxe Solaire Invisible Sunscreen SPF50+: Sunset orange carton + 50ml bottle & pump texture
import luxeSolairePhoto1 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52.jpeg';
import luxeSolairePhoto2 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (1).jpeg';

// ==========================================
// 3. MASTER PACKAGING SKU CATALOGUE (EXACT 1-TO-1 MAPPING)
// ==========================================
const PACKAGING_SKUS = [
  {
    id: 1,
    title: 'Celestial Glow Brightening Serum',
    category: 'Serums & Treatments',
    volume: '30ml / 1.0 fl oz',
    substrate: 'Glass Dropper + FSC Folding Box',
    frontImage: celestialP1,
    productImage: celestialGlowPhoto,
    productAltImage: null,
    backImage: celestialP2,
    productLabel: 'Studio Capture: 30ml Dropper Bottle & Gold Foil Debossed Outer Box with Dew Drops',
    productAltLabel: null,
    desc: 'A featherlight illuminating serum infused with cold-pressed camellia seed lipids. Housed in a custom 30ml UV-coated amber glass dropper vial with a friction-fit tuck-end outer carton.',
    highlights: ['30ml / 1.0 fl oz', 'Glass Dropper + FSC Folding Box', 'Cold-Pressed Camellia Seed Lipids', 'Friction-Fit Tuck-End Outer Carton'],
  },
  {
    id: 2,
    title: 'Water Pearl Hydrating Serum',
    category: 'Serums & Treatments',
    volume: '30ml / 1.0 fl oz',
    substrate: 'Frosted Glass Vial + Structural Outer Sleeve',
    frontImage: waterPearlP1,
    productImage: waterPearlPhoto1,
    productAltImage: waterPearlPhoto2,
    backImage: waterPearlP2,
    productLabel: 'Studio Capture: 30ml Dropper Bottle & Deep Mocha Secondary Carton',
    productAltLabel: 'Studio Capture: Natural Pebble Balance & CMF Specular Reflection',
    desc: 'Deep cellular hydration powered by triple-molecular hyaluronic acid and fermented camellia water. Housed in frosted glass with a minimalist vertical dosage scale.',
    highlights: ['30ml / 1.0 fl oz', 'Frosted Glass Vial + Structural Outer Sleeve', 'Triple-Molecular Hyaluronic Acid', 'Minimalist Vertical Dosage Scale'],
  },
  {
    id: 3,
    title: 'Crystal Dew Micro-Exfoliating Scrub',
    category: 'Exfoliators & Scrubs',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Extruded Barrier Tube + Locking Folding Carton',
    frontImage: crystalDewP1,
    productImage: crystalDewPhoto,
    productAltImage: null,
    backImage: crystalDewP2,
    productLabel: 'Studio Capture: Teal Carton with Open Jar & Crystalline Mineral Formula',
    productAltLabel: null,
    desc: 'Ultra-fine crystalline silica suspended in soothing camellia nectar. Packaged in a soft-touch squeeze tube with a 15° angled dispensing nozzle and tactile outer sleeve.',
    highlights: ['50ml / 1.7 fl oz', 'Extruded Barrier Tube + Locking Folding Carton', 'Ultra-Fine Crystalline Silica', '15° Angled Dispensing Nozzle'],
  },
  {
    id: 4,
    title: 'Lustre Hydration Smoothing Scrub',
    category: 'Exfoliators & Scrubs',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Squeeze Tube + Tuck-Top Folding Box',
    frontImage: lustreScrubP1,
    productImage: lustreScrubPhoto1,
    productAltImage: lustreScrubPhoto2,
    backImage: lustreScrubP2,
    productLabel: 'Studio Capture: Squeeze Tube & Mauve Carton Balanced on Pebble',
    productAltLabel: 'Texture Proof: Open Squeeze Proof with Rosehip Polish Texture',
    desc: 'A gentle polishing emulsion enriched with crushed camellia seed husks. Packaged in a pastel blush folding carton with rose-gold foil accent lines.',
    highlights: ['50ml / 1.7 fl oz', 'Squeeze Tube + Tuck-Top Folding Box', 'Crushed Camellia Seed Husks', 'Pastel Blush + Rose-Gold Foil Accents'],
  },
  {
    id: 5,
    title: 'Sebum Control Clarifying Scrub',
    category: 'Exfoliators & Scrubs',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Matte Finish Tube + Dual-Flap Outer Carton',
    frontImage: sebumScrubP1,
    productImage: sebumScrubPhoto,
    productAltImage: null,
    backImage: sebumScrubP2,
    productLabel: 'Studio Capture: Charcoal Grey Carton & Mattifying Scrub Packaging',
    productAltLabel: null,
    desc: 'Balancing botanical scrub formulated with French kaolin clay and camellia leaf extract. Wrapped in a structural dual-crease tuck carton with precision air venting.',
    highlights: ['50ml / 1.7 fl oz', 'Matte Finish Tube + Dual-Flap Outer Carton', 'French Kaolin Clay & Camellia Leaf', 'Dual-Crease Tuck Air-Vented Carton'],
  },
  {
    id: 6,
    title: 'Hydration Divine Barrier Face Moisture',
    category: 'Moisturizers & Creams',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Double-Wall Cosmetic Jar + Origami Sleeve',
    frontImage: hydrationDivineP1,
    productImage: hydrationDivinePhoto,
    productAltImage: null,
    backImage: hydrationDivineP2,
    productLabel: 'Studio Capture: Dark Teal Secondary Carton & Cosmetic Jar',
    productAltLabel: null,
    desc: 'A rich velvety barrier restorative cream blending camellia butter and ceramides. Housed in an ergonomic heavy-base jar with an airtight inner gasket.',
    highlights: ['50ml / 1.7 fl oz', 'Double-Wall Cosmetic Jar + Origami Sleeve', 'Camellia Butter & Ceramides', 'Ergonomic Heavy-Base Jar'],
  },
  {
    id: 7,
    title: 'Sublime Cream Rich Replenishing Moisturiser',
    category: 'Moisturizers & Creams',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Heavy Base Jar + Suspension Carton',
    frontImage: sublimeCreamP1,
    productImage: sublimeCreamP2,
    productAltImage: null,
    backImage: sublimeCreamP2,
    isDielineOnly: true,
    productLabel: 'Technical Blueprint: 50ml Primary Container Bottle Wrap Dieline',
    productAltLabel: null,
    desc: 'Ultra-nourishing overnight lipid cream formulated for barrier repair. Protected by a high-caliper virgin folding carton with friction-fit retaining collar.',
    highlights: ['50ml / 1.7 fl oz', 'Heavy Base Jar + Suspension Carton', 'Overnight Lipid Barrier Repair', 'High-Caliper Virgin Folding Carton'],
  },
  {
    id: 8,
    title: 'Persian Glow Radiance Facewash',
    category: 'Cleansers & Facewash',
    volume: '100ml / 3.4 fl oz',
    substrate: 'Dispenser Pump Bottle + Outer Carton',
    frontImage: persianGlowP1,
    productImage: '/assets/cameola-mockup.jpg',
    productAltImage: '/assets/cameola-bottle-label.png',
    backImage: persianGlowP2,
    productLabel: 'Studio Mockup: 100ml Pump Dispenser Bottle & Burgundy Folding Carton',
    productAltLabel: 'Primary Blueprint: High-Resolution Bottle Label Vector Wrap',
    desc: 'Gentle gel-to-foam botanical cleanser with brightening damask rose and camellia saponins. Engineered in a 100ml airless pump cylinder.',
    highlights: ['100ml / 3.4 fl oz', 'Dispenser Pump Bottle + Outer Carton', 'Brightening Damask Rose', 'Airless Pump Cylinder'],
  },
  {
    id: 9,
    title: 'Radiance Revealed Purifying Facewash',
    category: 'Cleansers & Facewash',
    volume: '100ml / 3.4 fl oz',
    substrate: 'Cylindrical Bottle + Locking Folded Shell',
    frontImage: radianceRevealedP1,
    productImage: radianceRevealedP2,
    productAltImage: null,
    backImage: radianceRevealedP2,
    isDielineOnly: true,
    productLabel: 'Technical Blueprint: 100ml Primary Bottle Wrap Dieline',
    productAltLabel: null,
    desc: 'Deep-pore clarifying cleanse without stripping natural lipids. Features an ergonomic ribbed cap and tamper-evident pull-tab seal.',
    highlights: ['100ml / 3.4 fl oz', 'Cylindrical Bottle + Locking Folded Shell', 'Deep-Pore Clarifying Cleanse', 'Ergonomic Ribbed Cap & Tamper Seal'],
  },
  {
    id: 10,
    title: 'Luminous Hydrating Mist',
    category: 'Mists & Sun Protection',
    volume: '100ml / 3.4 fl oz',
    substrate: 'Atomizer Flask + Cylindrical Rigid Tube',
    frontImage: luminousMistP1,
    productImage: mistSpray1,
    productAltImage: mistSpray2,
    backImage: luminousMistP2,
    productLabel: 'Studio Capture: Upright 100ml Mist Bottle & Rose Carton with Water Droplets',
    productAltLabel: 'Studio Capture: Horizontal Assembly & Secondary Typography View',
    desc: 'Micro-fine revitalizing botanical facial mist. Housed in an ultra-fine atomizing aluminum flask with protective outer tube.',
    highlights: ['100ml / 3.4 fl oz', 'Atomizer Flask + Cylindrical Rigid Tube', 'Micro-Fine Facial Mist', 'Atomizing Aluminum Flask'],
  },
  {
    id: 11,
    title: 'Luxe Solaire Invisible Sunscreen SPF 50+',
    category: 'Mists & Sun Protection',
    volume: '50ml / 1.7 fl oz',
    substrate: 'Ergonomic Oval Bottle + Auto-Lock Carton',
    frontImage: luxeSolaireP1,
    productImage: luxeSolairePhoto1,
    productAltImage: luxeSolairePhoto2,
    backImage: luxeSolaireP2,
    productLabel: 'Studio Capture: Sunset Orange Carton & 50ml Pump Bottle',
    productAltLabel: 'Texture Proof: Dispensed Broad-Spectrum SPF 50+ Emulsion',
    desc: 'Broad-spectrum SPF 50+ broad UV defense with zero white cast. Engineered in a pocket-slim oval bottle with friction-locking outer carton.',
    highlights: ['50ml / 1.7 fl oz', 'Ergonomic Oval Bottle + Auto-Lock Carton', 'Broad-Spectrum SPF 50+ UV Defense', 'Zero White Cast Pocket-Slim Oval Bottle'],
  },
];

const CATEGORIES = [
  'All (11 SKUs)',
  'Serums & Treatments',
  'Exfoliators & Scrubs',
  'Moisturizers & Creams',
  'Cleansers & Facewash',
  'Mists & Sun Protection',
];

export default function PackagingSuiteSection() {
  const [activeCategory, setActiveCategory] = useState('All (11 SKUs)');
  const [selectedSku, setSelectedSku] = useState(null);
  const [selectedAltAngle, setSelectedAltAngle] = useState(false);
  const [zoomAsset, setZoomAsset] = useState(null); // 'front' | 'product' | 'box' | null

  const filteredSkus =
    activeCategory === 'All (11 SKUs)'
      ? PACKAGING_SKUS
      : PACKAGING_SKUS.filter((sku) => sku.category === activeCategory);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedSku) return;
      if (e.key === 'Escape') {
        if (zoomAsset) {
          setZoomAsset(null);
        } else {
          setSelectedSku(null);
        }
      } else if (e.key === 'ArrowRight' && !zoomAsset) {
        const currentIndex = filteredSkus.findIndex((s) => s.id === selectedSku.id);
        const nextIndex = (currentIndex + 1) % filteredSkus.length;
        setSelectedSku(filteredSkus[nextIndex]);
        setSelectedAltAngle(false);
      } else if (e.key === 'ArrowLeft' && !zoomAsset) {
        const currentIndex = filteredSkus.findIndex((s) => s.id === selectedSku.id);
        const prevIndex = (currentIndex - 1 + filteredSkus.length) % filteredSkus.length;
        setSelectedSku(filteredSkus[prevIndex]);
        setSelectedAltAngle(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSku, filteredSkus, zoomAsset]);

  const openSkuModal = (sku) => {
    setSelectedSku(sku);
    setSelectedAltAngle(false);
    setZoomAsset(null);
  };

  const [sectionRef, isInView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      id="packaging-suite"
      className="relative py-24 bg-[#F8F7F4] border-b border-[#E2DFD7] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E] animate-pulse-dot" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                04. INTERACTIVE PACKAGING SHOWCASE & 11-SKU DIELINE SUITE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Modular Packaging Architecture: <br />
              <span className="italic font-serif text-[#4A152E]">Dielines & Physical Studio Captures</span>.
            </h2>
          </div>
          <div className="max-w-md space-y-2">
            <p className="text-stone-600 font-sans text-sm md:text-base leading-relaxed font-light">
              Engineered by Vidushi Mewara. Hover any card to instantly crossfade from the vector dieline to its exact matching studio product photograph.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A152E]/10 border border-[#4A152E]/20 text-[#4A152E] font-mono text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse-dot" />
              <span>Click any card to open the 3-asset triad</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className={`flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#4A152E]" />
            Filter Range:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#4A152E] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-[#E2DFD7] hover:border-[#4A152E] hover:text-[#4A152E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 11-SKU Interactive Showcase Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          {filteredSkus.map((sku) => (
            <div
              key={sku.id}
              onClick={() => openSkuModal(sku)}
              className="bg-white border border-[#E2DFD7] overflow-hidden group cursor-pointer shadow-xs hover:border-[#4A152E]/50 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Interactive Thumbnail Stage: Front Dieline (Default) ➔ Product Capture (Hover) */}
              <div className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F6] to-[#ECEAE4] min-h-[340px] flex items-center justify-center p-6 border-b border-[#E2DFD7]/80">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d1cfc7_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Default Image: Front Panel / Primary Label Dieline */}
                <div className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-500 group-hover:opacity-0 group-hover:scale-95">
                  <img
                    src={sku.frontImage}
                    alt={`${sku.title} Front Panel Dieline`}
                    className="max-w-[85%] max-h-[260px] object-contain drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Default State Badge */}
                  <div className="absolute top-0 left-0 px-2.5 py-1 bg-white/95 backdrop-blur-xs font-mono text-[10px] text-[#4A152E] uppercase tracking-wider border border-[#E2DFD7] flex items-center gap-1.5 shadow-2xs">
                    <FileText className="w-3 h-3 text-[#4A152E]" />
                    <span>01. Vector Dieline</span>
                  </div>
                </div>

                {/* Hover Reveal Image: Exact Matching Physical Product Capture */}
                <div className="absolute inset-0 z-20 bg-white/95 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out flex items-center justify-center p-4">
                  <img
                    src={sku.productImage}
                    alt={`${sku.title} Physical Product Capture`}
                    className="max-w-[90%] max-h-[290px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
                  />
                  
                  {/* Hover Studio Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#4A152E] text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    {sku.isDielineOnly ? (
                      <>
                        <Box className="w-3 h-3 text-pink-300" />
                        <span>Dieline Blueprint</span>
                      </>
                    ) : (
                      <>
                        <Camera className="w-3 h-3 text-pink-300" />
                        <span>Physical Studio Proof</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Volume Badge (Always Top Right) */}
                <div className="absolute top-3 right-3 z-30 px-2.5 py-1 bg-white/90 backdrop-blur-xs font-mono text-[10px] text-stone-700 uppercase tracking-wider border border-[#E2DFD7] shadow-2xs">
                  {sku.volume.split('+')[0].trim()}
                </div>

                {/* Bottom Inspection Prompt Overlay on Hover */}
                <div className="absolute bottom-3 left-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between px-3 py-2 bg-[#4A152E] text-white font-mono text-[11px] uppercase tracking-wider shadow-md">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Layers className="w-3.5 h-3.5 text-pink-300" />
                      Inspect 3-Asset Triad
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-pink-300" />
                  </div>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E2DFD7]/80">
                    <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold">
                      {sku.category}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400 uppercase font-medium">
                      SKU #{sku.id < 10 ? `0${sku.id}` : sku.id}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-stone-950 font-normal leading-snug group-hover:text-[#4A152E] transition-colors mb-2">
                    {sku.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-2">
                    {sku.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E2DFD7] flex items-center justify-between text-xs font-mono text-[#4A152E]">
                  <span className="flex items-center gap-1.5 font-semibold text-[11px]">
                    <Layers className="w-3.5 h-3.5 text-[#4A152E]" />
                    <span>3-Asset Triad Ready</span>
                  </span>
                  <span className="text-[11px] text-stone-500 group-hover:text-[#4A152E] flex items-center gap-1 transition-colors">
                    Click to Open <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3-IMAGE TRIAD INSPECTION MODAL (ALL 3 VISIBLE AT ONCE)   */}
      {/* ========================================================= */}
      {selectedSku && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedSku(null)}
        >
          <div
            className="relative max-w-6xl w-full bg-[#111111] border border-stone-800 p-4 sm:p-6 shadow-2xl flex flex-col max-h-[96vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-800 gap-3 shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 bg-[#4A152E] text-white font-mono text-[10px] uppercase tracking-wider font-semibold">
                    SKU #{selectedSku.id < 10 ? `0${selectedSku.id}` : selectedSku.id}
                  </span>
                  <span className="font-mono text-xs text-pink-300 uppercase tracking-widest">
                    {selectedSku.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal">
                  {selectedSku.title}
                </h3>
              </div>

              {/* Navigation & Close Controls */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  onClick={() => {
                    const currentIndex = filteredSkus.findIndex((s) => s.id === selectedSku.id);
                    const prevIndex = (currentIndex - 1 + filteredSkus.length) % filteredSkus.length;
                    setSelectedSku(filteredSkus[prevIndex]);
                    setSelectedAltAngle(false);
                    setZoomAsset(null);
                  }}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                  title="Previous SKU (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Prev</span>
                </button>

                <button
                  onClick={() => {
                    const currentIndex = filteredSkus.findIndex((s) => s.id === selectedSku.id);
                    const nextIndex = (currentIndex + 1) % filteredSkus.length;
                    setSelectedSku(filteredSkus[nextIndex]);
                    setSelectedAltAngle(false);
                    setZoomAsset(null);
                  }}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white font-mono text-xs uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                  title="Next SKU (Right Arrow)"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedSku(null)}
                  className="p-1.5 bg-stone-800 hover:bg-[#4A152E] text-stone-300 hover:text-white transition-colors cursor-pointer ml-2"
                  title="Close (ESC)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Instruction Banner */}
            <div className="flex items-center justify-between py-2 px-3 bg-stone-900 border border-stone-800 my-3 text-[11px] font-mono text-stone-300 shrink-0">
              <span className="text-pink-300 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Showing All 3 Production Assets In Parallel</span>
              </span>
              <span className="text-stone-400 uppercase hidden sm:inline">
                {selectedSku.volume} • Click Any Asset to Zoom
              </span>
            </div>

            {/* ============================================================== */}
            {/* 3-COLUMN SIDE-BY-SIDE ASSET TRIAD DISPLAY                      */}
            {/* ============================================================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 overflow-y-auto pr-1 pb-2">
              {/* ------------------------------------------------------------ */}
              {/* ASSET 01: FRONT PANEL / PRIMARY LABEL DIELINE               */}
              {/* ------------------------------------------------------------ */}
              <div
                onClick={() => setZoomAsset('front')}
                className="bg-[#181818] border border-stone-800 p-3.5 flex flex-col justify-between group/panel hover:border-pink-500/60 transition-all cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                    <span className="font-mono text-[10px] text-pink-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <FileText className="w-3 h-3" />
                      <span>Asset 01 // Primary Dieline</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-stone-500 group-hover/panel:text-pink-300 transition-colors" />
                  </div>
                  <h4 className="font-serif text-stone-200 text-sm mb-2">
                    Front Panel & Container Wrap
                  </h4>
                </div>

                <div className="bg-[#FAF9F6] p-3 my-2 flex items-center justify-center min-h-[240px] max-h-[320px] rounded-xs border border-stone-800 overflow-hidden relative">
                  <img
                    src={selectedSku.frontImage}
                    alt={`${selectedSku.title} Front Dieline`}
                    className="max-w-full max-h-[240px] object-contain transition-transform duration-300 group-hover/panel:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/panel:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-2.5 py-1 bg-stone-950/90 text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-pink-300" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800/80 font-mono text-[10px] text-stone-400">
                  <span>Vector Spec: Label Artwork & Margins</span>
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* ASSET 02: PHYSICAL STUDIO PRODUCT CAPTURE (CENTERPIECE)     */}
              {/* ------------------------------------------------------------ */}
              <div
                onClick={() => setZoomAsset('product')}
                className="bg-[#181818] border-2 border-[#4A152E] p-3.5 flex flex-col justify-between group/panel hover:border-pink-400 transition-all cursor-pointer relative shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                    <span className="font-mono text-[10px] text-pink-400 uppercase tracking-widest font-bold flex items-center gap-1.5">
                      <Camera className="w-3 h-3 text-pink-400" />
                      <span>Asset 02 // Physical Product</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-pink-400 group-hover/panel:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-serif text-white text-sm mb-2">
                    Studio Prototype Capture
                  </h4>
                </div>

                <div className="bg-white p-3 my-2 flex items-center justify-center min-h-[240px] max-h-[320px] rounded-xs border border-stone-800 overflow-hidden relative">
                  <img
                    src={selectedAltAngle && selectedSku.productAltImage ? selectedSku.productAltImage : selectedSku.productImage}
                    alt={`${selectedSku.title} Product Capture`}
                    className="max-w-full max-h-[240px] object-contain transition-transform duration-300 group-hover/panel:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/panel:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-2.5 py-1 bg-[#4A152E] text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-pink-300" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                {/* Alternate Angle Switcher if Available */}
                <div className="pt-2 border-t border-stone-800/80 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-stone-400 truncate max-w-[180px]">
                    {selectedAltAngle && selectedSku.productAltLabel ? selectedSku.productAltLabel : selectedSku.productLabel}
                  </span>
                  {selectedSku.productAltImage && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAltAngle(!selectedAltAngle);
                      }}
                      className="px-2 py-0.5 bg-stone-800 hover:bg-[#4A152E] text-pink-300 font-mono text-[9px] uppercase tracking-wider border border-stone-700 cursor-pointer shrink-0 transition-colors"
                    >
                      {selectedAltAngle ? 'View Primary' : 'Alt Angle'}
                    </button>
                  )}
                </div>
              </div>

              {/* ------------------------------------------------------------ */}
              {/* ASSET 03: STRUCTURAL BOX CARTON DIELINE                     */}
              {/* ------------------------------------------------------------ */}
              <div
                onClick={() => setZoomAsset('box')}
                className="bg-[#181818] border border-stone-800 p-3.5 flex flex-col justify-between group/panel hover:border-pink-500/60 transition-all cursor-pointer relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-stone-800">
                    <span className="font-mono text-[10px] text-pink-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                      <Box className="w-3 h-3" />
                      <span>Asset 03 // Box Blueprint</span>
                    </span>
                    <Maximize2 className="w-3.5 h-3.5 text-stone-500 group-hover/panel:text-pink-300 transition-colors" />
                  </div>
                  <h4 className="font-serif text-stone-200 text-sm mb-2">
                    Outer Folding Box Blueprint
                  </h4>
                </div>

                <div className="bg-[#FAF9F6] p-3 my-2 flex items-center justify-center min-h-[240px] max-h-[320px] rounded-xs border border-stone-800 overflow-hidden relative">
                  <img
                    src={selectedSku.backImage}
                    alt={`${selectedSku.title} Box Dieline`}
                    className="max-w-full max-h-[240px] object-contain transition-transform duration-300 group-hover/panel:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/panel:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-2.5 py-1 bg-stone-950/90 text-white font-mono text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-pink-300" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800/80 font-mono text-[10px] text-stone-400">
                  <span>Structural Blueprint: Flaps & Scoring</span>
                </div>
              </div>
            </div>

            {/* Modal Bottom Metadata & Highlights */}
            <div className="border-t border-stone-800 pt-3 mt-3 flex flex-col md:flex-row md:items-center justify-between gap-3 shrink-0">
              <p className="text-xs font-sans text-stone-300 max-w-xl font-light leading-relaxed">
                {selectedSku.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedSku.highlights.map((h, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-stone-900 border border-stone-800 text-pink-300 font-mono text-[10px] flex items-center gap-1"
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

      {/* ========================================================= */}
      {/* HIGH-RES EXPANDED SINGLE-ASSET LIGHTBOX                   */}
      {/* ========================================================= */}
      {zoomAsset && selectedSku && (
        <div
          className="fixed inset-0 z-60 bg-black/98 backdrop-blur-lg flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setZoomAsset(null)}
        >
          <div
            className="relative max-w-5xl w-full h-[90vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div>
                <span className="font-mono text-xs text-pink-400 uppercase tracking-widest block">
                  {selectedSku.title}
                </span>
                <h4 className="font-serif text-lg text-white">
                  {zoomAsset === 'front' && '01. Front Panel & Container Wrap Dieline'}
                  {zoomAsset === 'product' && (selectedAltAngle && selectedSku.productAltLabel ? selectedSku.productAltLabel : selectedSku.productLabel)}
                  {zoomAsset === 'box' && '03. Outer Folding Box Dieline Blueprint'}
                </h4>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setZoomAsset(null)}
                  className="px-3.5 py-1.5 bg-[#4A152E] hover:bg-[#621d3e] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <X className="w-4 h-4" />
                  <span>Back to 3-Asset Triad [ESC]</span>
                </button>
              </div>
            </div>

            {/* Large Stage Display */}
            <div className="flex-1 my-4 bg-stone-950/80 border border-stone-800 p-4 flex items-center justify-center overflow-auto rounded-xs">
              <img
                src={
                  zoomAsset === 'front'
                    ? selectedSku.frontImage
                    : zoomAsset === 'box'
                    ? selectedSku.backImage
                    : selectedAltAngle && selectedSku.productAltImage
                    ? selectedSku.productAltImage
                    : selectedSku.productImage
                }
                alt="Enlarged Asset View"
                className="max-w-full max-h-[72vh] object-contain"
              />
            </div>

            {/* Quick Switcher Between the 3 in Zoom Mode */}
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-stone-800">
              <button
                onClick={() => setZoomAsset('front')}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider cursor-pointer ${
                  zoomAsset === 'front'
                    ? 'bg-[#4A152E] text-white'
                    : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                1. Front Dieline
              </button>
              <button
                onClick={() => setZoomAsset('product')}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider cursor-pointer ${
                  zoomAsset === 'product'
                    ? 'bg-[#4A152E] text-white'
                    : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                2. Product Capture
              </button>
              <button
                onClick={() => setZoomAsset('box')}
                className={`px-3 py-1 font-mono text-xs uppercase tracking-wider cursor-pointer ${
                  zoomAsset === 'box'
                    ? 'bg-[#4A152E] text-white'
                    : 'bg-stone-900 text-stone-400 hover:text-white'
                }`}
              >
                3. Box Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
