import React, { useState } from 'react';
import { Camera, Eye, Maximize2, Layers, Filter, Compass, Wrench, CheckCircle2 } from 'lucide-react';

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
    title: 'Paperboard Caliper & Fiber Grain Stress Testing',
    stage: 'Material Testing',
    src: ws1,
    caption: 'Evaluating unbleached virgin paperboard caliper (350 GSM vs 400 GSM). Folding along versus against paper grain to eliminate micro-cracking along structural hinge creases.',
  },
  {
    id: 2,
    title: 'Press-Room Ink Drawdowns under D65 Daylight',
    stage: 'Color Matching',
    src: ws2,
    caption: 'Calibrating custom soy-ink pigment drawdowns for Baby Sky Blue and Soft Blush Pink under standardized D65 neutral daylight to ensure consistent spectral reflectance.',
  },
  {
    id: 3,
    title: 'Water Pearl Serum & Folding Carton Friction Fit',
    stage: 'Physical Mockup',
    src: ws3,
    caption: '1:1 scale assembly test evaluating the internal friction-fit collar against the deep plum outer folding carton, ensuring the bottle remains firmly suspended during transit.',
  },
  {
    id: 4,
    title: 'Blind Deboss & Micro-Foil Stamping Registration Proofs',
    stage: 'Print Finishing',
    src: ws4,
    caption: 'Testing brass die temperature and impression dwell time for crisp blind debossing of French diacritics and hot rose-gold foil registration on textured paper stock.',
  },
  {
    id: 5,
    title: 'Zero-Glue Interlocking Tuck-End Mechanics',
    stage: 'Dieline Engineering',
    src: ws5,
    caption: 'Hand-cut structural box dieline iterating the angle of the locking friction ears (15° vs 18°) to guarantee secure closure without a single drop of toxic adhesive.',
  },
  {
    id: 6,
    title: 'Luxe Solaire Packaging & Optical Balance',
    stage: 'Physical Mockup',
    src: ws6,
    caption: 'Side-by-side evaluation of the sunset orange folding carton against white sunscreen bottle label typography under studio diffuse illumination.',
  },
  {
    id: 7,
    title: 'Tactile Soft-Touch Matte Varnish Calibration',
    stage: 'CMF Studies',
    src: ws7,
    caption: 'Comparing soft-touch matte aqueous varnish against anti-scuff velvet coatings to prevent cosmetic fingerprint smudges while providing a luxurious velvet tactile feel.',
  },
  {
    id: 8,
    title: 'Label Grid Registration & Curved Bleed Tolerances',
    stage: 'Pre-Press Calibration',
    src: ws8,
    caption: 'Verifying BOPP synthetic label wrap margins and cylindrical wrap alignment across pump neck dimensions to eliminate label spiraling on automated bottling lines.',
  },
  {
    id: 9,
    title: 'Container & Secondary Carton Typographic Alignment',
    stage: 'Physical Mockup',
    src: ws9,
    caption: 'Examining horizontal baseline alignment between the primary bottle wrap and the exterior folding box dieline to maintain cohesive typographic pacing.',
  },
  {
    id: 10,
    title: 'Studio Lighting & Material Specular Behavior',
    stage: '3D Simulation Study',
    src: ws10,
    caption: 'Photographing physical material gloss levels to accurately calibrate roughness and specular IOR maps inside Blender for the 3D unboxing animation sequence.',
  },
  {
    id: 11,
    title: 'Family Color Hierarchy & Retail Pacing',
    stage: 'Product Family',
    src: ws11,
    caption: 'Pacing the 11 packaging SKUs across shelf mockups to verify instant category differentiation (Serums, Scrubs, Moisturisers, Cleansers, Mists) within a shared identity.',
  },
  {
    id: 12,
    title: 'Final Unboxing Kinematics & Presentation Review',
    stage: 'Final Validation',
    src: ws12,
    caption: 'Comprehensive physical assembly review verifying hinge durability, tactile hand-feel, and opening choreography before packaging dieline finalization.',
  },
];

const STAGES = ['All Stages', 'Material Testing', 'Color Matching', 'Physical Mockup', 'Dieline Engineering', 'Print Finishing', 'CMF Studies'];

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
                04. PHYSICAL PROTOTYPING & STRUCTURAL WORKSHOP
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Hands-On Structural Validation: <br />
              <span className="italic font-serif text-[#4A152E]">Caliper, Grain & Dieline Engineering</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            12 photographic captures from Vidushi Mewara's physical studio workshop. Packaging concepts must endure physical realities: testing paperboard fiber orientation, scoring rule depth, and zero-glue tab friction before digital vector release.
          </p>
        </div>

        {/* Stage Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DFD7]">
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#4A152E]" />
            Lab Stage:
          </span>
          {STAGES.map((stage) => (
            <button
              key={stage}
              onClick={() => setSelectedStage(stage)}
              className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedStage === stage
                  ? 'bg-[#4A152E] text-white shadow-xs'
                  : 'bg-[#EFECE6] text-stone-700 hover:bg-stone-200'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>

        {/* 12-Item Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActiveLightbox(photo)}
              className="bg-[#F7F6F3] border border-[#E2DFD7] overflow-hidden group cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden aspect-4/3 bg-stone-100">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-stone-900/80 backdrop-blur-xs text-white font-mono text-[10px] uppercase tracking-wider">
                  {photo.stage}
                </div>
                <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-stone-950 font-mono text-xs uppercase">
                    <Maximize2 className="w-3.5 h-3.5 text-[#4A152E]" />
                    <span>Inspect</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-1">
                    STUDIO CAPTURE // 0{photo.id}
                  </span>
                  <h3 className="font-serif text-base text-stone-950 font-normal leading-snug line-clamp-1">
                    {photo.title}
                  </h3>
                </div>
                <p className="text-xs text-stone-600 font-sans leading-relaxed line-clamp-3 pt-1 border-t border-[#E2DFD7]/80">
                  {photo.caption}
                </p>
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
            className="relative max-w-4xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                STUDIO WORKSHOP PROTO // CAPTURE 0{activeLightbox.id}
              </span>
              <button
                onClick={() => setActiveLightbox(null)}
                className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1 bg-stone-800 cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center p-2 bg-stone-950 border border-stone-800 mb-4">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs text-pink-400 uppercase">
                {activeLightbox.stage}
              </span>
              <h3 className="font-serif text-xl text-white font-normal">
                {activeLightbox.title}
              </h3>
              <p className="text-xs text-stone-400 font-sans leading-relaxed">
                {activeLightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
