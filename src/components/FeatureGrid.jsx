import React from 'react';

const FEATURES = [
  {
    id: '01',
    category: 'SENSE & PERCEIVE',
    title: 'Contextual Intelligence',
    description: 'Proactively anticipates your intent using spatial sensors and low-latency local inference.',
    badge: 'Hardware Sync',
  },
  {
    id: '02',
    category: 'TACTILE RESPONSE',
    title: 'Haptic Feedback Engine',
    description: 'Precision physical interaction tailored to human biomechanics and micro-movements.',
    badge: 'Micro-Actuators',
  },
  {
    id: '03',
    category: 'INVISIBLE OS',
    title: 'Zero Interface Overhead',
    description: 'Computing that fades into the background, amplifying human capability without distraction.',
    badge: 'Ambient Canvas',
  },
];

export default function FeatureGrid() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200/80 pb-8">
        <div>
          <span className="text-xs font-medium tracking-widest text-slate-400 font-mono uppercase mb-2 block">
            01 // CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-slate-900 tracking-tight">
            Designed for effortless <span className="text-[#0071e3]">human potential.</span>
          </h2>
        </div>
        <p className="mt-4 md:mt-0 text-sm text-slate-500 max-w-md leading-relaxed">
          Combining custom materials, spatial awareness, and silent performance to build hardware that feels natural.
        </p>
      </div>

      {/* Bento Grid Layout - augen.pro style */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((item) => (
          <div
            key={item.id}
            className="augen-card p-8 flex flex-col justify-between group relative min-h-[320px]"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  {item.category}
                </span>
                <span className="augen-pill augen-pill-outline text-[11px]">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-normal text-slate-900 tracking-tight mb-3 group-hover:text-[#0071e3] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-700">
              <span className="text-slate-400 font-mono">{item.id}</span>
              <span className="text-[#0071e3] group-hover:translate-x-1 transition-transform">
                Explore Spec ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
