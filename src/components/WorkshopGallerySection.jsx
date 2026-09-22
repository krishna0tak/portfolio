import React, { useState } from 'react';
import { Camera, Eye, Maximize2, Layers, Filter, Compass } from 'lucide-react';

import ws1 from '../assets/WhatsApp Image 2026-09-22 at 11.57.50 (1).jpeg';
import ws2 from '../assets/WhatsApp Image 2026-09-22 at 11.57.50.jpeg';
import ws3 from '../assets/WhatsApp Image 2026-09-22 at 11.57.51 (1).jpeg';
import ws4 from '../assets/WhatsApp Image 2026-09-22 at 11.57.51 (2).jpeg';
import ws5 from '../assets/WhatsApp Image 2026-09-22 at 11.57.51.jpeg';
import ws6 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (1).jpeg';
import ws7 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (2).jpeg';
import ws8 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52 (3).jpeg';
import ws9 from '../assets/WhatsApp Image 2026-09-22 at 11.57.52.jpeg';
import ws10 from '../assets/WhatsApp Image 2026-09-22 at 12.00.54 (1).jpeg';
import ws11 from '../assets/WhatsApp Image 2026-09-22 at 12.00.54 (2).jpeg';
import ws12 from '../assets/WhatsApp Image 2026-09-22 at 12.00.54.jpeg';

const WORKSHOP_PHOTOS = [
  {
    id: 1,
    title: 'Paperboard & Substrate Weight Testing',
    stage: 'Material Research',
    src: ws1,
    caption: 'Evaluating unbleached virgin paperboard stock weight (350 GSM vs 400 GSM) for zero-glue dieline integrity.',
  },
  {
    id: 2,
    title: 'Color Pigment & Ink Drawdowns',
    stage: 'Color Matching',
    src: ws2,
    caption: 'Press-room color drawdowns testing Baby Sky Blue and Soft Blush Pink pigments under neutral daylight (D65 standard).',
  },
  {
    id: 3,
    title: 'Water Pearl Serum & Folding Carton Study',
    stage: 'Package Prototyping',
    src: ws3,
    caption: 'Evaluating bottle label balance against the deep plum folding carton under neutral daylight standard.',
  },
  {
    id: 4,
    title: 'Typography & Foil Embossing Proofs',
    stage: 'Print Finishing',
    src: ws4,
    caption: 'Blind deboss and hot rose-gold micro-foil stamping proofs on textured paperboard.',
  },
  {
    id: 5,
    title: 'Outer Packaging Interlocking Mockup',
    stage: 'Dieline Prototyping',
    src: ws5,
    caption: 'Hand-cut 1:1 scale structural box dieline checking tuck-tab tension and corner fold alignment.',
  },
  {
    id: 6,
    title: 'Luxe Solaire Packaging & Bottle Hierarchy',
    stage: 'Package Prototyping',
    src: ws6,
    caption: 'Examining contrast between the sunset orange folding carton and white sunscreen bottle label typography.',
  },
  {
    id: 7,
    title: 'Surface Coating & Matte Varnish Swatches',
    stage: 'CMF Studies',
    src: ws7,
    caption: 'Comparing soft-touch matte tactile varnish against anti-smudge velvet coatings for humidity protection.',
  },
  {
    id: 8,
    title: 'Bottle Label Grid Alignment & Bleed Check',
    stage: 'Graphic Pre-Press',
    src: ws8,
    caption: 'Verifying BOPP synthetic label grid margins and curved wrap alignment across pump neck dimensions.',
  },
  {
    id: 9,
    title: 'Bottle Wrap & Folding Box Presentation',
    stage: 'Package Prototyping',
    src: ws9,
    caption: 'Evaluating side-by-side alignment of typography, wordmarks, and volume callouts across container and carton.',
  },
  {
    id: 10,
    title: 'Studio Lighting & Material Refraction',
    stage: 'Visual Renders',
    src: ws10,
    caption: 'Calibrating studio lighting setups for soft ambient key light and caustic glass reflections.',
  },
  {
    id: 11,
    title: 'Multi-SKU Packaging Color Hierarchy',
    stage: 'Product Family',
    src: ws11,
    caption: 'Arranging color accent bands across 11 product SKUs to ensure instant shelf recognition.',
  },
  {
    id: 12,
    title: 'Final Unboxing Presentation Assembly',
    stage: 'Final Prototype',
    src: ws12,
    caption: 'Complete physical assembly review prior to client delivery and 3D web experience encoding.',
  },
];

const STAGES = ['All Stages', 'Material Research', 'Color Matching', 'Package Prototyping', 'Dieline Prototyping', 'Print Finishing'];

export default function WorkshopGallerySection() {
  const [selectedStage, setSelectedStage] = useState('All Stages');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredPhotos =
    selectedStage === 'All Stages'
      ? WORKSHOP_PHOTOS
      : WORKSHOP_PHOTOS.filter((p) => p.stage === selectedStage);

  return (
    <section id="workshop" className="py-24 bg-white border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                04. STUDIO & WORKSHOP PROCESS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Physical Prototyping & <br />
              <span className="italic font-serif text-[#4A152E]">Studio Workshop Captures</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Behind the scenes: 12 physical studio captures documenting material selection, ink drawdowns, zero-glue dieline cuts, and prototype stress testing.
          </p>
        </div>

        {/* Stage Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DFD7]">
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#4A152E]" />
            Process Stage:
          </span>
          {STAGES.map((stage) => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedStage === stage
                  ? 'bg-[#4A152E] text-white shadow-xs'
                  : 'bg-[#F7F6F3] text-stone-700 border border-[#E2DFD7] hover:border-[#4A152E]'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* Workshop Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveLightbox(photo)}
              className="bg-[#F7F6F3] border border-[#E2DFD7] overflow-hidden group cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-stone-950 p-2.5 flex items-center justify-center aspect-square w-full">
                <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
                    <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                    <span>Inspect Photo</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#E2DFD7] space-y-2 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold">
                      {photo.stage} // #{photo.id}
                    </span>
                    <Camera className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#4A152E] transition-colors" />
                  </div>
                  <h3 className="font-serif text-lg text-stone-950 font-normal leading-snug group-hover:text-[#4A152E] transition-colors mb-2">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <div>
                <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                  STUDIO WORKSHOP CAPTURE // {activeLightbox.stage}
                </span>
                <h3 className="font-serif text-xl text-white font-normal">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-stone-800 cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>

            <div className="overflow-auto flex-1 flex items-center justify-center p-4 bg-stone-950 border border-stone-800 mb-4">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <p className="text-xs font-sans text-stone-300 border-t border-stone-800 pt-3">
              {activeLightbox.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
