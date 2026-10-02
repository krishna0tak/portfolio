import React, { useState } from 'react';
import { Maximize2, Sparkles, Type, Palette, Layers, Box, CheckCircle2, Copy, Check } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import page3 from '../assets/ideation_extracted/page_3.png';

const HARMONIC_PALETTE = [
  {
    name: 'Cosmetic Plum',
    hex: '#4A152E',
    pantone: 'PANTONE 7428 C',
    cmyk: 'C35 M95 Y40 K55',
    bg: 'bg-[#4A152E]',
    textColor: 'text-white'
  },
  {
    name: 'Baby Sky',
    hex: '#B8D7E8',
    pantone: 'PANTONE 2905 C',
    cmyk: 'C28 M7 Y3 K0',
    bg: 'bg-[#B8D7E8]',
    textColor: 'text-stone-900'
  },
  {
    name: 'Blush Pink',
    hex: '#E8C2D0',
    pantone: 'PANTONE 706 C',
    cmyk: 'C6 M26 Y9 K0',
    bg: 'bg-[#E8C2D0]',
    textColor: 'text-stone-900'
  },
  {
    name: 'Warm Stone',
    hex: '#F7F6F3',
    pantone: 'PANTONE 7527 C',
    cmyk: 'C2 M2 Y4 K0',
    bg: 'bg-[#F7F6F3]',
    textColor: 'text-stone-900'
  },
];

export default function BrainstormSection() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [copiedHex, setCopiedHex] = useState(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleCopyHex = (hex) => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(hex);
    }
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  return (
    <section
      ref={sectionRef}
      id="theory"
      className="relative py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block">
              03. VISUAL IDENTITY & BRAND MOOD BOARD
            </span>
            {/* Packaging Wordmark Matching the Physical Boxes */}
            <div className="inline-flex flex-col items-start select-none group cursor-default">
              <h2 className="font-serif text-4xl sm:text-6xl text-stone-950 tracking-wider uppercase font-semibold leading-none group-hover:text-[#4A152E] transition-colors duration-300">
                CAMEÓLA
              </h2>
              <span className="font-serif text-xl sm:text-2xl italic font-light text-[#4A152E] tracking-widest pl-1 -mt-1 sm:-mt-2">
                Paris
              </span>
            </div>
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest pt-1">
              HAUTE-COSMÉTIQUE LOGOTYPE // PACKAGING EMBOSSING VECTOR
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 border border-[#E2DFD7] shadow-2xs hover:border-[#4A152E]/30 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-9 h-9 bg-[#4A152E] text-pink-100 flex items-center justify-center font-serif text-base font-bold shadow-2xs">
              C
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                PACKAGING MONOGRAM
              </span>
              <span className="font-mono text-xs text-stone-800 font-medium">
                CAMÉLIA ÉLÉGANCE
              </span>
            </div>
          </div>
        </div>

        {/* Brand Mood Board Showcase */}
        <div className={`bg-white border border-[#E2DFD7] p-6 md:p-10 shadow-xs mb-8 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2DFD7] gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#4A152E] animate-pulse-dot" />
                <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                  CURATED AESTHETIC DIRECTION
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                Brand Mood Board & Design Essence
              </h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider px-2.5 py-1 bg-[#EFECE6] border border-[#E2DFD7]">
                Temporary Asset (Ready for User Swap)
              </span>
              <button
                onClick={() => setLightboxImage(page3)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4A152E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#381023] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect Full Mood Board</span>
              </button>
            </div>
          </div>

          {/* Mood Board Display Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F6F3] p-4 sm:p-6 border border-[#E2DFD7]">
            {/* Main Mood Board Image with smooth hover effect */}
            <div
              className="lg:col-span-8 relative group cursor-pointer overflow-hidden border border-[#E2DFD7] bg-white p-3 shadow-xs hover:border-[#4A152E]/30 transition-all duration-300"
              onClick={() => setLightboxImage(page3)}
            >
              <img
                src={page3}
                alt="Brand Mood Board — CAMEÓLA Paris"
                className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                  <span>Expand Full-Res Mood Board</span>
                </div>
              </div>
            </div>

            {/* Mood Board Curatorial Notes & Color Palette */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-1">
                  VISUAL ESSENCE & ARCHITECTURAL INSPIRATION
                </span>
                <h4 className="font-serif text-xl sm:text-2xl text-stone-950 font-normal leading-tight">
                  Tactile Softness & Botanical Geometry
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm font-sans font-light leading-relaxed mt-2">
                  Curated aesthetic moodboard establishing the sensory contrast: the architectural purity of Parisian stone facades paired with the soft, organic folds of the Camellia blossom.
                </p>
              </div>

              {/* Interactive Mood Board Palette Swatches */}
              <div className="space-y-2.5 pt-2 border-t border-[#E2DFD7]">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-stone-800 uppercase tracking-wider font-semibold">
                    Harmonic Color System
                  </span>
                  <span className="font-mono text-[9px] text-stone-400 uppercase">
                    CLICK TO COPY HEX
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {HARMONIC_PALETTE.map((c) => {
                    const isCopied = copiedHex === c.hex;
                    return (
                      <button
                        key={c.hex}
                        onClick={() => handleCopyHex(c.hex)}
                        title={`Click to copy ${c.hex} (${c.pantone})`}
                        className="group relative space-y-1 text-center cursor-pointer p-1 rounded-none border border-transparent hover:border-stone-300 hover:bg-white transition-all duration-200"
                      >
                        <div
                          className={`h-10 ${c.bg} border border-stone-300/80 shadow-2xs relative overflow-hidden transition-transform duration-200 group-hover:scale-105 flex items-center justify-center`}
                        >
                          {/* Shimmer sweep on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                          
                          {isCopied && (
                            <span className="font-mono text-[9px] font-bold text-white bg-black/60 px-1 py-0.5 rounded-none animate-in fade-in zoom-in-75">
                              ✓
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-[9px] text-stone-700 block font-medium group-hover:text-[#4A152E] transition-colors truncate">
                          {c.name}
                        </span>
                        <span className="font-mono text-[8px] text-stone-400 block group-hover:text-stone-600 transition-colors">
                          {isCopied ? 'COPIED!' : c.hex}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sensory Attributes */}
              <div className="space-y-2 pt-2 border-t border-[#E2DFD7]">
                <span className="font-mono text-xs text-stone-800 uppercase tracking-wider font-semibold block">
                  Aesthetic Vectors
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['#FrenchMinimalism', '#VelvetTouch', '#CamelliaPetal', '#NeutralSubstrates'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700 hover:border-pink-200 hover:text-[#4A152E] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design System Foundations (Color, Typography & Substrates) */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          {/* Card 1: Typographic Architecture */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs hover:border-[#4A152E]/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs group-hover:bg-[#4A152E] group-hover:text-white transition-colors duration-300">
                <Type className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                TYPOGRAPHIC HIERARCHY
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal group-hover:text-[#4A152E] transition-colors">
                Haute-Cosmétique Wordmark & Pairing
              </h4>
              <p className="text-stone-600 text-xs font-sans font-light leading-relaxed">
                The visual identity pairs high-contrast literary serifs with sharp italic accents. The custom diacritic 'É' was engineered with optical weight compensation to withstand hot-foil stamping, while modernist clean grotesque sans governs technical formulas with crystalline legibility.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E2DFD7] flex items-center justify-between font-mono text-[10px] text-stone-500">
              <span>Display: Custom French Serif</span>
              <span className="text-[#4A152E] font-semibold">Body: Inter Tight</span>
            </div>
          </div>

          {/* Card 2: Color System & Printing */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs hover:border-[#4A152E]/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs group-hover:bg-[#4A152E] group-hover:text-white transition-colors duration-300">
                <Palette className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                CHROMATIC HARMONY
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal group-hover:text-[#4A152E] transition-colors">
                Calibrated Palette & Ink Drawdowns
              </h4>
              <p className="text-stone-600 text-xs font-sans font-light leading-relaxed">
                Primary cosmetic plum anchors secondary cartons, offset by airy baby sky blue and soft blush pink accents. Calibrated under D65 standard daylight conditions to guarantee color consistency across differing paperboard absorptions.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E2DFD7] flex items-center justify-between font-mono text-[10px] text-stone-500">
              <span>Pantone Solid Coated</span>
              <span className="text-[#4A152E] font-semibold">D65 Press Matching</span>
            </div>
          </div>

          {/* Card 3: Substrate & Tactility */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs hover:border-[#4A152E]/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs group-hover:bg-[#4A152E] group-hover:text-white transition-colors duration-300">
                <Box className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                SUSTAINABLE CMF
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal group-hover:text-[#4A152E] transition-colors">
                FSC Paperboard & Velvet Aqueous Finish
              </h4>
              <p className="text-stone-600 text-xs font-sans font-light leading-relaxed">
                Engineered on 350–400 GSM FSC-certified unbleached virgin paperboard. Finished with a zero-plastic velvet-touch aqueous varnish that elevates hand-feel while preserving 100% repulpability in circular waste streams.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#E2DFD7] flex items-center justify-between font-mono text-[10px] text-stone-500">
              <span>350-400 GSM Virgin Board</span>
              <span className="text-[#4A152E] font-semibold">100% Repulpable</span>
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
                BRAND MOOD BOARD // FULL RESOLUTION VIEWER
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
                alt="Brand Mood Board inspection"
                className="max-w-full max-h-[75vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

