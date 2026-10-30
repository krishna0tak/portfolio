import React, { useState } from 'react';
import { Maximize2, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import moodboard from '../assets/moodboard.jpeg';

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
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold block">
              03. VISUAL IDENTITY &amp; BRAND MOOD BOARD
            </span>
            {/* Packaging Wordmark Matching the Physical Boxes */}
            <div className="inline-flex flex-col items-start select-none group cursor-default">
              <h2 className="font-serif text-4xl sm:text-6xl text-stone-950 tracking-wider uppercase font-semibold leading-none group-hover:text-[#4A152E] transition-colors duration-300">
                CAMEÓLA
              </h2>
            </div>
            <p className="text-xs font-mono text-stone-500 uppercase tracking-widest pt-1">
              CUSTOM WORDMARK // LUXURY SKINCARE IDENTITY
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white px-5 py-3 border border-[#E2DFD7] shadow-2xs hover:border-[#4A152E]/30 hover:-translate-y-0.5 transition-all duration-300">
            <div className="w-9 h-9 bg-[#4A152E] text-pink-100 flex items-center justify-center font-serif text-base font-bold shadow-2xs">
              C
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] text-stone-400 uppercase tracking-wider block">
                [C] BRAND MONOGRAM
              </span>
              <span className="font-mono text-xs text-stone-800 font-medium">
                VISUAL IDENTITY
              </span>
            </div>
          </div>
        </div>

        {/* Brand Mood Board Showcase */}
        <div className={`bg-white border border-[#E2DFD7] p-6 md:p-10 shadow-xs reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#E2DFD7] gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-4 h-4 text-[#4A152E] animate-pulse-dot" />
                <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                  CREATIVE DIRECTION
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-stone-950 font-normal">
                Understated Luxury
              </h3>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider px-2.5 py-1 bg-[#EFECE6] border border-[#E2DFD7]">
                Brand Mood Board
              </span>
              <button
                onClick={() => setLightboxImage(moodboard)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4A152E] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#381023] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Inspect Full Mood Board</span>
              </button>
            </div>
          </div>

          {/* Mood Board Display Stage — Full Width */}
          <div className="bg-[#F7F6F3] p-4 sm:p-6 border border-[#E2DFD7]">
            <div
              className="relative group cursor-pointer overflow-hidden border border-[#E2DFD7] bg-white p-3 shadow-xs hover:border-[#4A152E]/30 transition-all duration-300"
              onClick={() => setLightboxImage(moodboard)}
            >
              <img
                src={moodboard}
                alt="Brand Mood Board — CAMEÓLA Paris"
                className="w-full h-auto max-h-[640px] object-contain mx-auto transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                  <span>Expand Full-Res Mood Board</span>
                </div>
              </div>
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
