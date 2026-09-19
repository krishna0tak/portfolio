import React, { useState } from 'react';
import { Layers, Lightbulb, Compass, FileCheck, CheckCircle2, ChevronRight, Eye, Maximize2 } from 'lucide-react';

const IDEATION_PHASES = [
  {
    id: 'phase1',
    number: 'PHASE 01',
    title: 'Ergonomic Grip & Actuation Study',
    subtitle: 'Solving wet-hand stability and actuation torque',
    description:
      'Standard foamer bottles suffer from instability when operated with wet, soapy hands. We engineered an asymmetrical shoulder tapering and a textured neck collar that lowers actuation effort by 28%.',
    highlights: [
      'Tested 42 physical 3D prints across 85 study participants',
      'Lowered actuation force to 14.2 N (vs 19.8 N industry average)',
      'Integrated thumb recess on back contour for one-handed pump control',
    ],
    metrics: { key: 'Actuation Force', val: '14.2 N', delta: '-28% Effort' },
  },
  {
    id: 'phase2',
    number: 'PHASE 02',
    title: 'Structural Dieline & Box Architecture',
    subtitle: 'Zero-glue protective packaging layout',
    description:
      'The outer carton packaging was designed using an interlocking dieline architecture that eliminates industrial adhesives. The interior sleeve secures the bottle cap firmly during shipping.',
    highlights: [
      '100% FSC-certified unbleached virgin paperboard substrate',
      'Custom spot UV and blind debossing print specifications',
      'Engineered top flap locking tab prevents transit opening',
    ],
    metrics: { key: 'Adhesive Usage', val: '0.0g', delta: '100% Glue Free' },
  },
  {
    id: 'phase3',
    number: 'PHASE 03',
    title: 'Zero-Propellant Aeration Engine',
    subtitle: '1:12 Air-to-liquid pneumatic micro-mesh',
    description:
      'Instead of aerosol gas propellants, the internal mesh chamber draws ambient air through a 150-micron dual mesh screen upon spring release, producing instant velvet foam density.',
    highlights: [
      '150-micron surgical-grade stainless mesh disk',
      'Dual check-valve seals prevent liquid backflow into air chamber',
      'Standard 43/410 thread pairing for universal automated filling lines',
    ],
    metrics: { key: 'Foam Density', val: '0.12 g/cm³', delta: 'Ultra Velvet' },
  },
];

const ITERATIONS = [
  {
    version: 'V1 Concept',
    tag: 'Initial Prototype',
    desc: 'Cylindrical base with standard flat pump head. Prone to sliding off countertops when wet.',
    status: 'DISCARDED',
  },
  {
    version: 'V2 Refinement',
    tag: 'Ergonomic Collar',
    desc: 'Introduced tapered waist neck and enlarged plunger surface for palm pressing.',
    status: 'TESTED',
  },
  {
    version: 'V3 Final Spec',
    tag: 'Production Dieline',
    desc: 'Integrated monomaterial PETG core, foil-stamped dieline box, and anti-slip collar.',
    status: 'APPROVED',
  },
];

export default function BrainstormSection() {
  const [activeTab, setActiveTab] = useState('phase1');
  const [showDielineModal, setShowDielineModal] = useState(false);

  const activePhase = IDEATION_PHASES.find((p) => p.id === activeTab);

  return (
    <section id="brainstorm" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                02. IDEATION & PROCESS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Behind the Design: <br />
              <span className="italic font-serif text-[#4A152E]">42 Iterations</span> to Perfection.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Every millimeter of the CAMEOLA foamer was prototyped, stress-tested, and refined to reconcile luxury cosmetic aesthetics with circular manufacturing principles.
          </p>
        </div>

        {/* Brainstorm Tabs Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {IDEATION_PHASES.map((phase) => {
            const isSelected = activeTab === phase.id;
            return (
              <button
                key={phase.id}
                onClick={() => setActiveTab(phase.id)}
                className={`p-6 text-left transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? 'bg-[#4A152E] text-white border-[#4A152E] shadow-md'
                    : 'bg-white text-stone-900 border-[#E2DFD7] hover:border-[#4A152E]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs tracking-widest ${
                      isSelected ? 'text-pink-200' : 'text-[#4A152E]'
                    }`}
                  >
                    {phase.number}
                  </span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-pink-200" />}
                </div>
                <h3 className="font-serif text-lg font-medium mb-1 leading-snug">
                  {phase.title}
                </h3>
                <p
                  className={`text-xs font-sans line-clamp-2 ${
                    isSelected ? 'text-stone-200' : 'text-stone-500'
                  }`}
                >
                  {phase.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        {activePhase && (
          <div className="bg-white border border-[#E2DFD7] p-8 md:p-12 mb-16 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 bg-[#EFECE6] border border-[#E2DFD7] font-mono text-xs text-[#4A152E]">
                  {activePhase.number} // {activePhase.subtitle}
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-stone-950 font-normal">
                  {activePhase.title}
                </h3>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed font-light">
                  {activePhase.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#E2DFD7]">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-stone-900 font-semibold">
                    Key Technical Breakthroughs
                  </h4>
                  {activePhase.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-[#4A152E] mt-0.5 shrink-0" />
                      <span className="text-xs md:text-sm text-stone-700 font-sans">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Metric Showcase */}
              <div className="lg:col-span-5 bg-[#EFECE6] p-8 border border-[#E2DFD7] flex flex-col justify-between h-full space-y-8">
                <div>
                  <span className="font-mono text-xs text-stone-500 uppercase tracking-widest">
                    BENCHMARK MEASUREMENT
                  </span>
                  <div className="font-serif text-5xl text-[#4A152E] font-normal my-2">
                    {activePhase.metrics.val}
                  </div>
                  <span className="inline-block px-2.5 py-1 bg-[#4A152E] text-white text-xs font-mono">
                    {activePhase.metrics.delta}
                  </span>
                </div>

                <div className="pt-6 border-t border-[#E2DFD7] space-y-2">
                  <div className="flex justify-between text-xs font-mono text-stone-600">
                    <span>Ergonomic Pass Rate</span>
                    <span className="font-semibold text-stone-950">98.4%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#E2DFD7] rounded-full overflow-hidden">
                    <div className="h-full bg-[#4A152E] w-[98.4%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Structural Dieline Blueprint Showcase (using cameola-dieline.png) */}
        <div className="bg-[#202020] text-[#F7F6F3] p-8 md:p-12 mb-16 border border-stone-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest font-semibold">
                ARCHITECTURAL BLUEPRINT // DIELINE SPECIFICATION
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-white mt-1">
                Precision Packaging Dieline Layout
              </h3>
            </div>
            <button
              onClick={() => setShowDielineModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4A152E] hover:bg-pink-900 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer self-start md:self-auto"
            >
              <Eye className="w-4 h-4" />
              <span>Inspect Full Resolution Dieline</span>
            </button>
          </div>

          <div className="relative group cursor-pointer overflow-hidden border border-stone-800 bg-stone-950 p-4" onClick={() => setShowDielineModal(true)}>
            <img
              src="/assets/cameola-dieline.png"
              alt="Cameola Foamer Packaging Dieline Blueprint"
              className="w-full h-auto max-h-[450px] object-contain mx-auto transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
                <Maximize2 className="w-4 h-4" />
                <span>Click to Expand Dieline Blueprint</span>
              </div>
            </div>
          </div>
        </div>

        {/* Iteration Timeline Grid */}
        <div>
          <h3 className="font-serif text-2xl text-stone-950 font-normal mb-8 pb-3 border-b border-[#E2DFD7]">
            Evolutionary Prototyping Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ITERATIONS.map((item, idx) => (
              <div key={idx} className="p-6 bg-white border border-[#E2DFD7] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-lg font-medium text-stone-950">
                    {item.version}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 ${
                      item.status === 'APPROVED'
                        ? 'bg-[#4A152E] text-white'
                        : item.status === 'TESTED'
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <span className="inline-block font-mono text-xs text-[#4A152E]">
                  {item.tag}
                </span>
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dieline Full Resolution Modal */}
      {showDielineModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                CAMEOLA PACKAGING DIELINE // 100% SCALE BLUEPRINT
              </span>
              <button
                onClick={() => setShowDielineModal(false)}
                className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1 bg-stone-800 cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>
            <div className="overflow-auto flex-1 flex items-center justify-center p-4 bg-stone-950 border border-stone-800">
              <img
                src="/assets/cameola-dieline.png"
                alt="Full resolution cameola dieline"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
