import React from 'react';
import { ArrowDownRight, Box, ShieldCheck, RefreshCw, Sparkles, Compass, Layers, CheckCircle2, User } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="overview" className="relative py-24 bg-white border-t border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Top Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-stone-200">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              VIDUSHI MEWARA // INDUSTRIAL & PACKAGING DESIGN CASE STUDY
            </span>
            <span className="text-stone-300">|</span>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              PROJECT: CAMEÓLA PARIS 11-SKU STRUCTURAL PACKAGING
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#4A152E] animate-pulse" />
            <span className="font-mono text-xs text-stone-700 uppercase tracking-wider font-semibold">
              STATUS: COMPLETE DESIGN ARCHIVE & VECTOR DIELINES
            </span>
          </div>
        </div>

        {/* Case Study Statement & Challenge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-200 font-mono text-xs text-[#4A152E]">
              <Compass className="w-3.5 h-3.5" />
              <span>01. THE DESIGN BRIEF & ARCHITECTURAL PROBLEM</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 leading-[1.08] tracking-tight">
              Engineering Tactile Luxury <br />
              <span className="italic font-serif font-light text-[#4A152E]">
                Through Zero-Glue Structural Origami.
              </span>
            </h2>

            <p className="text-base md:text-lg text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              An exhaustive packaging architecture and industrial design case study by <strong>Vidushi Mewara</strong>. The core mandate was to conceptualize and engineer a cohesive 11-SKU identity for <strong>CAMEÓLA Paris</strong>—a clean beauty house dedicated to botanical purity without synthetic fragrance.
            </p>

            <p className="text-sm md:text-base text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              Rather than defaulting to standard composite plastics and non-recyclable hot-melt adhesives typical in luxury cosmetics, this project rethinks the physical unboxing ritual entirely through sustainable FSC virgin paperboard, friction-fit locking geometry, and classical French typographic restraint.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #IndustrialPackaging
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #ZeroGlueDieline
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #FSCPaperboard
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #FrenchAestheticHeritage
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #3DKinematicStudy
              </span>
              <span className="px-3 py-1 bg-stone-100 border border-stone-200 font-mono text-[11px] text-stone-700 uppercase">
                #MaterialTesting
              </span>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 bg-stone-50 p-8 border border-stone-200 shadow-xs">
            <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold border-b border-stone-200 pb-3">
              CASE STUDY SPECIFICATIONS
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>LEAD DESIGNER</span>
                <span className="text-stone-950 font-semibold">VIDUSHI MEWARA</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>DISCIPLINE</span>
                <span className="text-stone-950 font-semibold">PACKAGING & INDUSTRIAL DESIGN</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>PROJECT SUBJECT</span>
                <span className="text-stone-950 font-semibold">CAMEÓLA PARIS SYSTEM</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>DELIVERED SKUS</span>
                <span className="text-stone-950 font-semibold">11 STRUCTURAL DIELINES</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>IDEATION DECK</span>
                <span className="text-stone-950 font-semibold">5-PAGE PROCESS DOSSIER</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>STUDIO RESEARCH</span>
                <span className="text-stone-950 font-semibold">12 PHYSICAL PROTOTYPES</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-600 border-b border-stone-200/80 pb-2">
                <span>3D VISUALIZATION</span>
                <span className="text-stone-950 font-semibold">299-FRAME KINEMATIC SIMULATION</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case Study Metric Cards */}
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
              Modular Dieline Architecture
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <RefreshCw className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">02</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              5 Chapters
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Ideation & Theory Dossier
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <ShieldCheck className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">03</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              0% Glue
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Friction-Lock Assembly
            </p>
          </div>

          <div className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/30 transition-colors">
            <div className="flex items-center justify-between text-stone-700 mb-4">
              <Sparkles className="w-5 h-5 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-400">04</span>
            </div>
            <div className="font-serif text-3xl text-stone-950 font-normal mb-1">
              12 Captures
            </div>
            <p className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              Physical Workshop Tests
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
