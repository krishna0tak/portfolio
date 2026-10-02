import React, { useState } from 'react';
import { Maximize2, Sparkles, Type, Palette, Layers, Box, CheckCircle2 } from 'lucide-react';
import page3 from '../assets/ideation_extracted/page_3.png';

export default function BrainstormSection() {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="theory" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block">
              03. VISUAL IDENTITY & BRAND MOOD BOARD
            </span>
            {/* Packaging Wordmark Matching the Physical Boxes */}
            <div className="inline-flex flex-col items-start select-none">
              <h2 className="font-serif text-4xl sm:text-6xl text-stone-950 tracking-wider uppercase font-semibold leading-none">
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

          <div className="flex items-center gap-3 bg-white px-5 py-3 border border-[#E2DFD7] shadow-2xs">
            <div className="w-9 h-9 bg-[#4A152E] text-pink-100 flex items-center justify-center font-serif text-base font-bold">
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
        <div className="bg-white border border-[#E2DFD7] p-6 md:p-10 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2DFD7] gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#4A152E]" />
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
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4A152E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#381023] transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect Full Mood Board</span>
              </button>
            </div>
          </div>

          {/* Mood Board Display Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F7F6F3] p-4 sm:p-6 border border-[#E2DFD7]">
            {/* Main Mood Board Image */}
            <div
              className="lg:col-span-8 relative group cursor-pointer overflow-hidden border border-[#E2DFD7] bg-white p-3 shadow-xs"
              onClick={() => setLightboxImage(page3)}
            >
              <img
                src={page3}
                alt="Brand Mood Board — CAMEÓLA Paris"
                className="w-full h-auto max-h-[520px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
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

              {/* Mood Board Palette Swatches */}
              <div className="space-y-2 pt-2 border-t border-[#E2DFD7]">
                <span className="font-mono text-xs text-stone-800 uppercase tracking-wider font-semibold block">
                  Harmonic Color System
                </span>
                <div className="grid grid-cols-4 gap-2">
                  <div className="space-y-1 text-center">
                    <div className="h-9 bg-[#4A152E] border border-stone-300 rounded-xs shadow-2xs" />
                    <span className="font-mono text-[9px] text-stone-700 block font-medium">Cosmetic Plum</span>
                    <span className="font-mono text-[8px] text-stone-400 block">#4A152E</span>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-9 bg-[#B8D7E8] border border-stone-300 rounded-xs shadow-2xs" />
                    <span className="font-mono text-[9px] text-stone-700 block font-medium">Baby Sky</span>
                    <span className="font-mono text-[8px] text-stone-400 block">#B8D7E8</span>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-9 bg-[#E8C2D0] border border-stone-300 rounded-xs shadow-2xs" />
                    <span className="font-mono text-[9px] text-stone-700 block font-medium">Blush Pink</span>
                    <span className="font-mono text-[8px] text-stone-400 block">#E8C2D0</span>
                  </div>
                  <div className="space-y-1 text-center">
                    <div className="h-9 bg-[#F7F6F3] border border-stone-300 rounded-xs shadow-2xs" />
                    <span className="font-mono text-[9px] text-stone-700 block font-medium">Warm Stone</span>
                    <span className="font-mono text-[8px] text-stone-400 block">#F7F6F3</span>
                  </div>
                </div>
              </div>

              {/* Sensory Attributes */}
              <div className="space-y-2 pt-2 border-t border-[#E2DFD7]">
                <span className="font-mono text-xs text-stone-800 uppercase tracking-wider font-semibold block">
                  Aesthetic Vectors
                </span>
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  <span className="px-2 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700">#FrenchMinimalism</span>
                  <span className="px-2 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700">#VelvetTouch</span>
                  <span className="px-2 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700">#CamelliaPetal</span>
                  <span className="px-2 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700">#NeutralSubstrates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design System Foundations (Color, Typography & Substrates) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Typographic Architecture */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs">
                <Type className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                TYPOGRAPHIC HIERARCHY
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal">
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
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs">
                <Palette className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                CHROMATIC HARMONY
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal">
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
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-3">
              <div className="w-8 h-8 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs">
                <Box className="w-4 h-4" />
              </div>
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">
                SUSTAINABLE CMF
              </span>
              <h4 className="font-serif text-lg text-stone-950 font-normal">
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
