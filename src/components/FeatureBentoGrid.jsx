import React from 'react';
import { Cpu, ShieldCheck, Sparkles, Droplets, Layers, Zap } from 'lucide-react';

export default function FeatureBentoGrid() {
  return (
    <section id="features" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                03. PACKAGING INNOVATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Engineering Specs & <br />
              <span className="italic font-serif text-[#4A152E]">Bento Grid</span> Showcase.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            An architectural breakdown of structural packaging innovations engineered into every millimeter of the CAMEOLA foamer bottle.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Item 1: Large 2-column Aeration Engine */}
          <div className="md:col-span-2 bg-[#202020] text-[#F7F6F3] p-8 md:p-12 border border-stone-800 flex flex-col justify-between min-h-[380px] relative overflow-hidden group">
            <div className="relative z-10 space-y-4 max-w-lg">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A152E] text-white text-[11px] font-mono uppercase tracking-widest">
                <Cpu className="w-3.5 h-3.5" />
                <span>PNEUMATIC MECHANICS</span>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white font-normal leading-tight">
                Dual-Chamber Aeration Engine.
              </h3>
              <p className="text-stone-400 text-sm font-sans font-light leading-relaxed">
                Draws 1:12 air-to-liquid volumetric ratio through a 150-micron stainless steel mesh disk. Delivers dense, velvety micro-foam with zero gas propellants.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex items-center gap-6 border-t border-stone-800">
              <div>
                <span className="font-serif text-3xl text-white">0.4 ml</span>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Dosage / Stroke</p>
              </div>
              <div className="w-px h-8 bg-stone-800" />
              <div>
                <span className="font-serif text-3xl text-white">150 μm</span>
                <p className="font-mono text-[10px] text-stone-400 uppercase tracking-widest">Mesh Mesh Screen</p>
              </div>
            </div>

            {/* Background Decorative Graphic */}
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none p-6">
              <Droplets className="w-64 h-64 text-pink-500" />
            </div>
          </div>

          {/* Bento Item 2: Bottle Label & Graphic Dieline (using cameola-bottle-label.png) */}
          <div className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between min-h-[380px] relative group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                  LABEL DIELINE
                </span>
                <Layers className="w-4 h-4 text-stone-400" />
              </div>
              <h3 className="font-serif text-xl text-stone-950 font-normal mb-2">
                Label Graphic Geometry
              </h3>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                Water-resistant BOPP foil label with matte varnish overlay and crisp alignment registration.
              </p>
            </div>

            {/* Label Image Preview */}
            <div className="mt-4 p-3 bg-[#EFECE6] border border-[#E2DFD7] flex items-center justify-center h-48 overflow-hidden">
              <img
                src="/assets/cameola-bottle-label.png"
                alt="Cameola Bottle Label Geometry"
                className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Bento Item 3: Soft-Touch Tactile Finish */}
          <div className="bg-white border border-[#E2DFD7] p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                <Sparkles className="w-4 h-4 text-[#4A152E]" />
                <span>SURFACE FINISH</span>
              </div>
              <h3 className="font-serif text-2xl text-stone-950 font-normal">
                Tactile Soft-Touch Matte Coating.
              </h3>
              <p className="text-stone-600 text-xs font-sans leading-relaxed">
                Formulated with anti-fingerprint UV varnish that provides a velvety grip texture even in humid shower environments.
              </p>
            </div>

            <div className="p-4 bg-[#EFECE6] border border-[#E2DFD7] space-y-2">
              <div className="flex justify-between text-xs font-mono text-stone-600">
                <span>Friction Coefficient</span>
                <span className="font-semibold text-stone-950">0.82 μ</span>
              </div>
              <div className="w-full h-1 bg-[#E2DFD7]">
                <div className="h-full bg-[#4A152E] w-[82%]" />
              </div>
            </div>
          </div>

          {/* Bento Item 4: Monomaterial Sustainability (Large 2-column) */}
          <div className="md:col-span-2 bg-[#EFECE6] border border-[#E2DFD7] p-8 md:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#4A152E] text-white text-[11px] font-mono uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CIRCULAR ECONOMY</span>
              </div>
              <h3 className="font-serif text-3xl text-stone-950 font-normal leading-tight">
                100% Recyclable Monomaterial Construction.
              </h3>
              <p className="text-stone-600 text-sm font-sans leading-relaxed">
                By replacing traditional metal coil springs with a food-grade polyolefin spring element, the entire assembly can be placed into standard RIC #1 PET recycling streams without disassembly.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2DFD7]">
              <div>
                <span className="font-serif text-2xl text-stone-950">0%</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Metal Components</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-stone-950">RIC #1</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Resin ID Code</p>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#4A152E]">100%</span>
                <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Stream Compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
