import React from 'react';
import ScrollUnboxing from './ScrollUnboxing';

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-32 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Top Header Content - augen.pro style */}
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
        {/* Category Pills */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="augen-pill augen-pill-outline text-slate-700">
            PRO-HUMAN
          </span>
          <span className="augen-pill augen-pill-outline text-slate-700">
            AI-DRIVEN
          </span>
          <span className="augen-pill augen-pill-blue">
            INVISIBLE COMPUTING
          </span>
        </div>

        {/* Display Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-slate-900 tracking-tight leading-[1.15] mb-6">
          We design Pro-Human, AI-driven{' '}
          <span className="font-normal text-[#0071e3]">
            Invisible Computing
          </span>{' '}
          that works effortlessly for you.
        </h1>

        {/* Subtitle / CTA Arrow Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#experience"
            className="inline-flex items-center space-x-2 text-sm font-medium text-slate-900 hover:text-[#0071e3] transition-colors group"
          >
            <span>Explore Experience</span>
            <span className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-xs group-hover:border-[#0071e3] group-hover:bg-[#0071e3] group-hover:text-white transition-all">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* Embedded Hero Showcase Stage with Foamer Scroll Canvas */}
      <div className="w-full rounded-3xl overflow-hidden border border-slate-200/80 shadow-2xl bg-white relative">
        <ScrollUnboxing />
      </div>
    </section>
  );
}
