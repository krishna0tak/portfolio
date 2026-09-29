import React from 'react';
import { Compass, CheckCircle2, Box, Sparkles, Layers, Cpu, Wrench, Palette, FileText, CheckSquare } from 'lucide-react';

const DESIGN_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Brief & Discovery',
    category: 'Foundations',
    desc: 'Establishing brand values, French cosmetic heritage, and the primary mandate for fragrance-free botanical purity.',
  },
  {
    step: '02',
    title: 'Market & Archetype Research',
    category: 'Strategy',
    desc: 'Auditing luxury cosmetic packaging waste, unboxing rituals, and defining gender-neutral architectural aesthetics.',
  },
  {
    step: '03',
    title: 'Form & Petal Ideation',
    category: 'Industrial Design',
    desc: 'Translating Camellia blossom geometry into ergonomic bottle contours, plunger angles, and tactile carton proportions.',
  },
  {
    step: '04',
    title: 'Substrate & CMF Studies',
    category: 'Color & Material',
    desc: 'Formulating pigment ratios for Baby Sky Blue and Soft Blush Pink on high-caliper FSC virgin paperboard under D65 daylight.',
  },
  {
    step: '05',
    title: 'CAD & Dieline Engineering',
    category: 'Packaging Engineering',
    desc: 'Drafting 11 zero-glue folding carton vector templates with precision 15° friction-fit locking ears and zero adhesive.',
  },
  {
    step: '06',
    title: 'Physical Workshop Testing',
    category: 'Prototyping',
    desc: '1:1 scale paperboard stress testing: calibrating caliper (350 vs 400 GSM), scoring rule depths, and grain alignment.',
  },
  {
    step: '07',
    title: '3D Kinematics & CGI',
    category: 'Visualization',
    desc: '299-frame interactive unboxing choreography rendered in Blender Cycles with specular roughness calibration.',
  },
  {
    step: '08',
    title: 'Pre-Press & Production Suite',
    category: 'Deliverables',
    desc: 'Final dual-panel vector dieline blueprints, spot UV coordinates, and micro-foil stamping registration tolerances.',
  },
];

export default function HeroSection() {
  return (
    <section id="overview" className="relative py-24 bg-white border-t border-b border-stone-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Case Study Statement & Challenge (Starts immediately after scroll unboxing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start">
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

          {/* WHAT WE DELIVERED // PROJECT INTRO */}
          <div className="lg:col-span-4 space-y-5 bg-stone-50 p-8 border border-stone-200 shadow-xs">
            <div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-widest block mb-1">
                PROJECT INTRO & SCOPE
              </span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold border-b border-stone-200 pb-3 flex items-center justify-between">
                <span>WHAT WE DELIVERED</span>
                <span className="text-[10px] text-stone-500 font-normal">VIDUSHI MEWARA</span>
              </h3>
            </div>

            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              A comprehensive industrial and structural packaging suite engineered from conceptual ideation to production-ready vector dielines:
            </p>

            <div className="space-y-3 pt-1">
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>11 Packaging SKUs</strong> with dual-panel vector dielines (bottle wraps + outer folding boxes).</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>5-Chapter Ideation Dossier</strong> establishing brand taxonomy, diacritics, and color theory.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>12 Physical Studio Prototypes</strong> validating paperboard caliper, grain stress, and scoring rules.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>299-Frame 3D Kinematics</strong> interactive unboxing choreography rendered in Blender.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>100% Zero-Glue Architecture</strong> using precision friction-fit tuck-end tabs.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>Print Finishing Matrix</strong> with spot UV coordinates and micro-foil stamping tolerances.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Card Design Process Grid */}
        <div className="pt-12 border-t border-stone-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#4A152E]" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold">
                  DESIGN METHODOLOGY & WORKFLOW
                </span>
              </div>
              <h3 className="font-serif text-2xl text-stone-950 font-normal">
                8-Phase Design Process
              </h3>
            </div>
            <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
              END-TO-END INDUSTRIAL EXECUTION
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESIGN_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 bg-stone-50 border border-stone-200 hover:border-[#4A152E]/40 hover:bg-white transition-all duration-200 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200/80">
                    <span className="font-mono text-sm font-bold text-[#4A152E]">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase text-stone-500 tracking-wider">
                      {step.category}
                    </span>
                  </div>

                  <h4 className="font-serif text-lg text-stone-950 font-normal mb-2 group-hover:text-[#4A152E] transition-colors">
                    {step.title}
                  </h4>

                  <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-200/50 flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400">
                    PHASE {step.step} / 08
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-[#4A152E] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
