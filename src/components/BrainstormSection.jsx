import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import moodboard from '../assets/moodboard.jpeg';
import logoImg from '../assets/logo.jpg';

export default function BrainstormSection() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={sectionRef}
      id="theory"
      className="relative py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className={`mb-16 pb-8 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block mb-6">
            03. VISUAL IDENTITY &amp; BRAND MOOD BOARD
          </span>
          <img
            src={logoImg}
            alt="CAMEÓLA Brand Logo"
            className="w-auto max-w-[280px] sm:max-w-xs h-auto object-contain"
          />
          <p className="text-xs font-mono text-stone-500 uppercase tracking-widest mt-4">
            CUSTOM WORDMARK // LUXURY SKINCARE IDENTITY
          </p>
        </div>

        {/* Moodboard Header */}
        <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#4A152E] animate-pulse-dot" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                CREATIVE DIRECTION
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
              Brand Moodboard</h3>
          </div>
          <button
            onClick={() => setLightboxImage(moodboard)}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4A152E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#381023] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer self-start sm:self-center"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Inspect Img</span>
          </button>
        </div>

        {/* Moodboard Image — flat, minimal single layer */}
        <div
          className={`relative group cursor-pointer overflow-hidden border border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}
          onClick={() => setLightboxImage(moodboard)}
        >
          <img
            src={moodboard}
            alt="Brand Mood Board — CAMEÓLA Paris"
            className="w-full h-auto max-h-[860px] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.01]"
          />
          <div className="absolute inset-0 bg-stone-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <Maximize2 className="w-4 h-4 text-[#4A152E]" />
              <span>Expand Img</span>
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
