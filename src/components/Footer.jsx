import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#202020] text-[#F7F6F3] py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4A152E] text-white flex items-center justify-center font-serif text-sm font-bold">
                C
              </div>
              <span className="font-serif text-xl tracking-tight text-white">
                CAMEOLA PACKAGING
              </span>
            </div>
            <p className="text-stone-400 text-xs font-sans font-light max-w-sm leading-relaxed">
              An architectural project showcase of 350ml aerated liquid soap packaging. Inspired by Apple design precision and circular monomaterial engineering.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 font-sans text-xs text-stone-300">
              <li>
                <a href="#hero" className="hover:text-pink-300 transition-colors">00. Overview</a>
              </li>
              <li>
                <a href="#animation" className="hover:text-pink-300 transition-colors">01. 3D Scroll Unboxing</a>
              </li>
              <li>
                <a href="#brainstorm" className="hover:text-pink-300 transition-colors">02. Ideation & Dieline</a>
              </li>
              <li>
                <a href="#features" className="hover:text-pink-300 transition-colors">03. Bento Innovations</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-pink-300 transition-colors">04. Visual Gallery</a>
              </li>
              <li>
                <a href="#specs" className="hover:text-pink-300 transition-colors">05. Engineering Matrix</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              PROJECT CREDITS
            </h4>
            <div className="text-xs font-mono text-stone-400 space-y-1">
              <p>DESIGN: ATELIER VISUAL ARCHIVE</p>
              <p>SOFTWARE: THREE.JS / VITE / REACT</p>
              <p>INSPIRATION: MACBOOK PRO SHOWCASE</p>
              <p>STATUS: DIELINE PRODUCTION READY</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} CAMEOLA PACKAGING SHOWCASE. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-pink-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
