import React, { useState } from 'react';
import { Eye, Maximize2, X, Image as ImageIcon, Filter } from 'lucide-react';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'CAMEOLA Studio 3D Bottle Mockup',
    category: '3D Renders',
    aspect: 'aspect-4/3',
    src: '/assets/cameola-mockup.jpg',
    desc: 'Photorealistic 3D render showcasing soft-touch matte finish and gold-embossed neck ring.',
  },
  {
    id: 2,
    title: 'Architectural Packaging Dieline',
    category: 'Packaging Dielines',
    aspect: 'aspect-16/9',
    src: '/assets/cameola-dieline.png',
    desc: 'Complete 1:1 scale unbleached paperboard box dieline layout with bleed margins and fold vectors.',
  },
  {
    id: 3,
    title: 'Front & Back Label Graphic Artboard',
    category: 'Label Graphics',
    aspect: 'aspect-4/3',
    src: '/assets/cameola-bottle-label.png',
    desc: 'Water-resistant BOPP foil label layout with grid alignment and typography scale.',
  },
  {
    id: 4,
    title: 'Pump Actuation Ergonomics Blueprint',
    category: '3D Renders',
    aspect: 'aspect-Square',
    src: '/frames/ezgif-frame-150.jpg',
    desc: 'Scrub frame render demonstrating internal air chamber compression and fluid path.',
  },
  {
    id: 5,
    title: 'Foamer Bottle Full Unboxing Frame',
    category: '3D Renders',
    aspect: 'aspect-4/3',
    src: '/frames/ezgif-frame-290.jpg',
    desc: 'High-resolution frame isolate of assembled pump collar and reservoir cap.',
  },
  {
    id: 6,
    title: 'Structural Box Assembly Mockup Slot',
    category: 'Mockups',
    aspect: 'aspect-16/9',
    src: '/assets/cameola-mockup.jpg',
    desc: 'Contextual studio photography placeholder slot for upcoming client media content.',
  },
];

const CATEGORIES = ['All', '3D Renders', 'Packaging Dielines', 'Label Graphics', 'Mockups'];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightbox, setActiveLightbox] = useState(null);

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                04. VISUAL ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Project Gallery & <br />
              <span className="italic font-serif text-[#4A152E]">High-Res Renders</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Comprehensive visual asset archive featuring studio mockups, vector dielines, graphic artboards, and structural frame isolates.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-[#E2DFD7]">
          <span className="font-mono text-xs text-stone-500 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#4A152E]" />
            Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#4A152E] text-white shadow-xs'
                  : 'bg-white text-stone-700 border border-[#E2DFD7] hover:border-[#4A152E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="bg-white border border-[#E2DFD7] overflow-hidden group cursor-pointer shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-[#EFECE6] p-4 flex items-center justify-center min-h-[260px]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto max-h-[300px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white text-stone-950 font-mono text-xs uppercase tracking-wider">
                    <Maximize2 className="w-4 h-4 text-[#4A152E]" />
                    <span>Expand Asset</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#E2DFD7] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold">
                    {item.category}
                  </span>
                  <Eye className="w-3.5 h-3.5 text-stone-400 group-hover:text-[#4A152E] transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-stone-950 font-normal leading-snug group-hover:text-[#4A152E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 font-sans line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-[#141414] border border-stone-800 p-6 shadow-2xl flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between pb-4 border-b border-stone-800 mb-4">
              <div>
                <span className="font-mono text-xs text-pink-400 uppercase tracking-widest">
                  {activeLightbox.category} // ASSET #{activeLightbox.id}
                </span>
                <h3 className="font-serif text-xl text-white font-normal">
                  {activeLightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveLightbox(null)}
                className="text-stone-400 hover:text-white font-mono text-xs uppercase tracking-wider px-3 py-1.5 bg-stone-800 cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>

            <div className="overflow-auto flex-1 flex items-center justify-center p-6 bg-stone-950 border border-stone-800 mb-4">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-w-full max-h-[65vh] object-contain"
              />
            </div>

            <p className="text-xs font-sans text-stone-400 border-t border-stone-800 pt-3">
              {activeLightbox.desc}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
