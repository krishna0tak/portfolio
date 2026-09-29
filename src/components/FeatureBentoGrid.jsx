import React from 'react';
import { Type, Palette, Layers, Sparkles, BookOpen, CheckCircle2, ShieldCheck, Box } from 'lucide-react';
import dielineSample from '../assets/packaging_extracted_png/crystel dew scrub_page_2.png';

export default function FeatureBentoGrid() {
  return (
    <section id="features" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                06. PACKAGING DESIGN SYSTEM & PRINCIPLES
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Design Architecture & <br />
              <span className="italic font-serif text-[#4A152E]">Structural System Highlights</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Vidushi Mewara structured the design system around four fundamental packaging engineering pillars: diacritic typographic hierarchy, dual-panel vector precision, chromatic harmony, and zero-glue origami sustainability.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: Large 2-column Haute-Cosmétique Wordmark Architecture */}
          <div className="md:col-span-2 bg-[#202020] text-[#F7F6F3] p-8 md:p-12 border border-stone-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden group">
            <div className="relative z-10 space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A152E] text-white text-[11px] font-mono uppercase tracking-widest">
                <Type className="w-3.5 h-3.5" />
                <span>BRAND TYPOGRAPHY & DIACRITIC GEOMETRY</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Haute-Cosmétique Wordmark Architecture.
              </h3>
              <p className="text-stone-400 text-sm font-sans font-light leading-relaxed">
                The visual identity pairs high-contrast literary serifs with sharp italic accents. The custom diacritic 'É' was engineered with optical weight compensation to withstand hot-foil stamping and letterpress embossing, while modern grotesque typography governs technical formulas and volume callouts with crystalline legibility.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center gap-6 border-t border-stone-800">
              <div>
                <span className="font-serif text-3xl text-white">Paris / FR</span>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Heritage Origin</p>
              </div>
              <div className="w-px h-8 bg-stone-800" />
              <div>
                <span className="font-serif text-3xl text-white">Serif + Sans</span>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Typeface Pairing</p>
              </div>
              <div className="w-px h-8 bg-stone-800" />
              <div>
                <span className="font-serif text-3xl text-[#FFB0CD]">CAMEÓLA</span>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Custom Diacritic É</p>
              </div>
            </div>

            {/* Background Decorative Type Accent */}
            <div className="absolute right-[-10px] bottom-[-20px] opacity-10 group-hover:opacity-15 transition-opacity pointer-events-none select-none font-serif text-[180px] text-pink-300 leading-none">
              É
            </div>
          </div>

          {/* Bento Item 2: Structural Dieline Blueprint */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between min-h-[380px] relative group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                  DIELINE BLUEPRINT
                </span>
                <Layers className="w-4 h-4 text-stone-400" />
              </div>
              <h3 className="font-serif text-xl text-stone-950 font-normal mb-1.5">
                Dual-Panel Vector Blueprint
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Every SKU deliverable pairs Page 1 front label graphics with Page 2 flat carton dieline geometry featuring zero-glue interlocking tuck-end tabs.
              </p>
            </div>

            {/* Dieline Image Preview */}
            <div className="mt-4 p-3 bg-[#EFECE6] border border-[#E2DFD7] flex items-center justify-center h-48 overflow-hidden">
              <img
                src={dielineSample}
                alt="Vector Dieline Blueprint"
                className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Bento Item 3: Color Palette & Substrate Harmonization */}
          <div className="bg-white border border-[#E2DFD7] p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                <Palette className="w-4 h-4 text-[#4A152E]" />
                <span>COLOR HARMONY</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-950 font-normal">
                Baby Sky & Soft Pink Color System.
              </h3>
              <p className="text-stone-600 text-xs font-sans leading-relaxed">
                Extracted directly from Vidushi Mewara's ideation deck: calm Baby Sky Blue and Soft Blush Pink contrasted against deep Cosmetic Plum (#4A152E) for instant shelf distinction.
              </p>
            </div>

            {/* Color Swatch Bars */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="space-y-1.5">
                <div className="h-10 bg-[#4A152E] border border-stone-300 flex items-center justify-center text-[10px] font-mono text-white">
                  #4A152E
                </div>
                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-tight text-center">Plum</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-10 bg-[#E8C2D0] border border-stone-300 flex items-center justify-center text-[10px] font-mono text-stone-800">
                  #E8C2D0
                </div>
                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-tight text-center">Soft Pink</p>
              </div>
              <div className="space-y-1.5">
                <div className="h-10 bg-[#B8D7E8] border border-stone-300 flex items-center justify-center text-[10px] font-mono text-stone-800">
                  #B8D7E8
                </div>
                <p className="font-mono text-[9px] text-stone-500 uppercase tracking-tight text-center">Baby Sky</p>
              </div>
            </div>
          </div>

          {/* Bento Item 4: Unscented Manifesto & Sustainable Paperboard */}
          <div className="md:col-span-2 bg-[#EFECE6] border border-[#E2DFD7] p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A152E] text-white text-[11px] font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DESIGN PHILOSOPHY & CIRCULARITY</span>
              </div>
              <h3 className="font-serif text-3xl text-stone-950 font-normal leading-tight">
                "Beauty That Speaks Without Scent."
              </h3>
              <p className="text-stone-600 text-sm font-sans leading-relaxed">
                Vidushi Mewara's design rationale rejects artificial perfumes and visual clutter. Clean, gender-neutral packaging geometry communicates pure skin health, paired with 100% recyclable FSC virgin paperboard cartons and zero-glue interlocking tabs.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2DFD7]">
              <div>
                <span className="font-serif text-2xl text-stone-950">11 SKUs</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Packaging Vectors</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-stone-950">FSC Stock</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Carton Substrate</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#4A152E]">0%</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Toxic Adhesives Used</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
