import React from 'react';

const STRUCTURE_CARDS = [
  {
    id: '01',
    category: 'PAGE STRUCTURE',
    title: 'Project & Portfolio Showcase',
    description: 'Clean placeholder container ready for your work, casestudies, and interactive demos.',
    tag: 'Ready to populate',
    accentColor: 'indigo',
  },
  {
    id: '02',
    category: 'CONTENT MODULE',
    title: 'Interactive Feature Blocks',
    description: 'Bento-style layout modules to present key features, specs, or product highlights.',
    tag: 'Flexible Layout',
    accentColor: 'purple',
  },
  {
    id: '03',
    category: 'MEDIA GALLERY',
    title: 'Visual Assets & Lightbox',
    description: 'Optimized grid for high-resolution renders, mockups, and video embeds.',
    tag: 'Fast Preload',
    accentColor: 'pink',
  },
];

export default function ShowcaseGrid() {
  return (
    <section id="showcase" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
          <span>STRUCTURE & CONTENT PLUGINS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Clean Foundation for Your{' '}
          <span className="font-serif-display italic font-normal text-indigo-600">
            Custom Pages.
          </span>
        </h2>
        <p className="mt-4 text-base text-slate-600 leading-relaxed">
          The layout is structured with clean modular components so you can seamlessly add your own content, project showcases, or detailed subpages later.
        </p>
      </div>

      {/* Grid Containers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STRUCTURE_CARDS.map((card) => (
          <div
            key={card.id}
            className="vibrant-card p-8 rounded-3xl flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Tag & Number */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono-code tracking-wider text-slate-400 font-semibold">
                  {card.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[11px] font-semibold text-slate-700 border border-slate-200">
                  {card.tag}
                </span>
              </div>

              {/* Placeholder Card Canvas / Thumbnail Frame */}
              <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 border border-slate-200/80 flex flex-col items-center justify-center p-4 mb-6 group-hover:border-indigo-300 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-200 flex items-center justify-center text-indigo-600 font-bold text-sm mb-2 group-hover:scale-110 transition-transform">
                  {card.id}
                </div>
                <span className="text-xs font-medium text-slate-500 font-mono-code">
                  [Content Placeholder]
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                {card.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>

            {/* Bottom Action Footer */}
            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
              <span>Ready for content</span>
              <span className="text-indigo-600 group-hover:translate-x-1 transition-transform">
                + Add Section →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
