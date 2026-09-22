import React from 'react';
import { ArrowDownRight, Box, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="overview" className="relative py-24 bg-white border-t border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
              DESIGNER CASE STUDY // CAMEÓLA PARIS
            </span>
            <span className="text-stone-300">|</span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              11-SKU LUXURY SKINCARE PACKAGING SYSTEM
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4A152E] animate-pulse" />
            <span className="font-mono text-xs text-stone-700 uppercase tracking-wider font-semibold">
              STATUS: COMPLETE DESIGN & DIELINE DELIVERABLE
            </span>
          </div>
        </div>

        {/* Overview Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-200 font-mono text-xs text-[#4A152E]">
              <span>02. DESIGN STATEMENT & BRAND PHILOSOPHY</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 leading-[1.08] tracking-tight">
              Beauty That Speaks <br />
              <span className="italic font-serif font-light text-[#4A152E]">
                Without Synthetic Scent.
              </span>
            </h2>
            <p className="text-base md:text-lg text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              A comprehensive brand identity and structural packaging presentation for <strong>CAMEÓLA Paris</strong>. Inspired by the timeless elegance of the Camellia blossom, French minimalist architecture, and gender-neutral pure skincare formulations.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #ParisHeritage
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #CamelliaElegance
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #BabySkyAndPink
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #ZeroGlueDieline
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #FragranceFreePurity
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 bg-stone-50 p-8 border border-stone-200 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold border-b border-stone-200 pb-3">
              DESIGN PROJECT METRICS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>PROJECT TYPE</span>
                <span className="text-stone-950 font-semibold">BRAND & PACKAGING SYSTEM</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>DELIVERED SKUS</span>
                <span className="text-stone-950 font-semibold">11 PRODUCT PACKAGES</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>IDEATION THEORY</span>
                <span className="text-stone-950 font-semibold">5-PAGE PROCESS DECK</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>WORKSHOP CAPTURES</span>
                <span className="text-stone-950 font-semibold">12 STUDIO PHOTOS</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>PACKAGING ZIP</span>
                <span className="text-stone-950 font-semibold">VECTOR DIELINE SUITE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-stone-200">
          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <Box className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">01</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              11 SKUs
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Cohesive Product Range
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <RefreshCw className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">02</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              5 Pages
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Ideation Theory Deck
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">03</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              100%
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Zero-Glue Box Assembly
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <Sparkles className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">04</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              Paris / FR
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Brand Positioning Origin
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
