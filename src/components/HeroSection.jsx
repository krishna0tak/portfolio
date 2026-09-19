import React from 'react';
import { ArrowDownRight, Box, ShieldCheck, RefreshCw, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="overview" className="relative py-24 bg-white border-t border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-stone-900 uppercase tracking-widest font-semibold">
              PROJECT OVERVIEW // CASE STUDY 04
            </span>
            <span className="text-stone-300">|</span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              350ML AERATED FOAMER BOTTLE
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            <span className="font-mono text-xs text-stone-600 uppercase tracking-wider">
              STATUS: PRODUCTION-READY DIELINE
            </span>
          </div>
        </div>

        {/* Overview Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
              02. DESIGN STATEMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 leading-[1.05] tracking-tight">
              Architectural Form. <br />
              <span className="italic font-serif font-light text-stone-700">
                Pneumatic Engineering.
              </span>
            </h2>
            <p className="text-base md:text-lg text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              An architectural exploration into 350ml aerated liquid soap packaging. Combining sustainable monomaterial PETG resin with zero-propellant pressure mechanics.
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6 bg-stone-50 p-8 border border-stone-200">
            <h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 font-semibold border-b border-stone-200 pb-3">
              TECHNICAL MATRIX SUMMARY
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>RESERVOIR CAPACITY</span>
                <span className="text-stone-950 font-semibold">350 ML</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>DOSAGE OUTPUT</span>
                <span className="text-stone-950 font-semibold">0.4ml / STROKE</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>THREAD STANDARD</span>
                <span className="text-stone-950 font-semibold">43/410 FINISH</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>RECYCLABILITY ID</span>
                <span className="text-stone-950 font-semibold">RIC #1 PETG</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-stone-200">
          <div className="p-6 bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <Box className="w-5 h-5" />
              <span className="font-mono text-xs text-stone-400">01</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              350 ml
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Optimum Reservoir Capacity
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <RefreshCw className="w-5 h-5" />
              <span className="font-mono text-xs text-stone-400">02</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              42 Units
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Prototype Iterations
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-mono text-xs text-stone-400">03</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              100%
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Zero Chemical Propellant
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-mono text-xs text-stone-400">04</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              43/410
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Standardized Neck Finish
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
