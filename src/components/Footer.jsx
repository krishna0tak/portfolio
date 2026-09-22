import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-[#F7F6F3] py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4A152E] text-white flex items-center justify-center font-serif text-sm font-bold">
                C
              </div>
              <span className="font-serif text-xl tracking-tight text-white">
                CAMEÓLA <span className="font-light italic text-pink-300">Paris</span>
              </span>
            </div>
            <p className="text-stone-400 text-xs font-sans font-light max-w-sm leading-relaxed">
              Designer Case Study & Packaging Ecosystem presentation. Celebrating fragrance-free luxury skincare, French aesthetic heritage, and zero-glue packaging dieline architecture.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 font-mono text-[11px]">
              <a
                href="/src/assets/Ideation story.pdf"
                download="CAMEOLA_Ideation_Story.pdf"
                className="text-pink-300 hover:text-white underline underline-offset-4"
              >
                ↓ Download Ideation Story (PDF)
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="/src/assets/Product packaging.zip"
                download="CAMEOLA_Product_Packaging.zip"
                className="text-pink-300 hover:text-white underline underline-offset-4"
              >
                ↓ Download Packaging Suite (ZIP)
              </a>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              CASE STUDY NAVIGATION
            </h4>
            <ul className="space-y-2 font-sans text-xs text-stone-300">
              <li>
                <a href="#animation" className="hover:text-pink-300 transition-colors">01. 3D Scroll Hero</a>
              </li>
              <li>
                <a href="#overview" className="hover:text-pink-300 transition-colors">02. Design Statement</a>
              </li>
              <li>
                <a href="#theory" className="hover:text-pink-300 transition-colors">03. Ideation Theory & Deck</a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-pink-300 transition-colors">04. Studio Workshop Photos</a>
              </li>
              <li>
                <a href="#packaging-suite" className="hover:text-pink-300 transition-colors">05. 11-SKU Dieline Suite</a>
              </li>
              <li>
                <a href="#features" className="hover:text-pink-300 transition-colors">06. Design System Highlights</a>
              </li>
              <li>
                <a href="#specs" className="hover:text-pink-300 transition-colors">07. Deliverables & Print Matrix</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              DESIGNER CREDITS
            </h4>
            <div className="text-xs font-mono text-stone-400 space-y-1.5">
              <p>PROJECT: CAMEÓLA PARIS BRAND</p>
              <p>SCOPE: 11 PACKAGING SKUS + DECK</p>
              <p>WORKSHOP: 12 STUDIO CAPTURES</p>
              <p>TECH: BLENDER / THREE.JS / REACT</p>
              <p className="text-pink-300 pt-1">STATUS: PRESENTATION READY</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} CAMEÓLA PARIS DESIGNER PRESENTATION. ALL RIGHTS RESERVED.
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
