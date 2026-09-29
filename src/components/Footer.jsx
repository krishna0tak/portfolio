import React from 'react';
import { ArrowUp, User, Download, FileText, Layers, ExternalLink } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="colophon" className="bg-[#181818] text-[#F7F6F3] py-20 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-stone-800">
          {/* Designer Bio & Reflection */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#4A152E] text-white flex items-center justify-center font-serif text-sm font-bold">
                VM
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-tight text-white font-medium">
                  VIDUSHI <span className="font-light italic text-pink-300">Mewara</span>
                </span>
                <span className="font-mono text-[9px] text-stone-400 uppercase tracking-widest -mt-0.5">
                  INDUSTRIAL & PACKAGING DESIGNER
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs font-sans font-light max-w-md leading-relaxed">
              Case Study: CAMEÓLA Paris Luxury Packaging System. Exploring the convergence of zero-glue folding carton origami, FSC virgin paperboard tension, and classical French typography. Designed to eliminate toxic adhesives without diminishing the ritualistic luxury of cosmetic unboxing.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 font-mono text-[11px]">
              <a
                href="/src/assets/Ideation story.pdf"
                download="Vidushi_Mewara_CAMEOLA_Ideation_Story.pdf"
                className="text-pink-300 hover:text-white underline underline-offset-4 flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Ideation Story (PDF)</span>
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="/src/assets/Product packaging.zip"
                download="Vidushi_Mewara_CAMEOLA_Packaging_Suite.zip"
                className="text-pink-300 hover:text-white underline underline-offset-4 flex items-center gap-1.5"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Download Packaging Suite (ZIP)</span>
              </a>
            </div>
          </div>

          {/* Case Study Chapters Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              CASE STUDY CHAPTERS
            </h4>
            <ul className="space-y-2 font-sans text-xs text-stone-300">
              <li>
                <a href="#animation" className="hover:text-pink-300 transition-colors">01. 3D Kinematics Study</a>
              </li>
              <li>
                <a href="#overview" className="hover:text-pink-300 transition-colors">02. Design Challenge & Brief</a>
              </li>
              <li>
                <a href="#theory" className="hover:text-pink-300 transition-colors">03. Ideation Theory & Deck</a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-pink-300 transition-colors">04. Studio Workshop Captures</a>
              </li>
              <li>
                <a href="#packaging-suite" className="hover:text-pink-300 transition-colors">05. 11-SKU Dieline Suite</a>
              </li>
              <li>
                <a href="#features" className="hover:text-pink-300 transition-colors">06. System Architecture</a>
              </li>
              <li>
                <a href="#specs" className="hover:text-pink-300 transition-colors">07. Engineering Matrix</a>
              </li>
            </ul>
          </div>

          {/* Designer Credits */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-pink-400 font-semibold">
              DESIGNER CREDITS
            </h4>
            <div className="text-xs font-mono text-stone-400 space-y-1.5">
              <p>DESIGNER: VIDUSHI MEWARA</p>
              <p>SUBJECT: CAMEÓLA PARIS SYSTEM</p>
              <p>SCOPE: 11 PACKAGING SKUS + 5-PAGE DECK</p>
              <p>WORKSHOP: 12 STUDIO TEST CAPTURES</p>
              <p>SOFTWARE: BLENDER / THREE.JS / CAD</p>
              <p className="text-pink-300 pt-1">STATUS: VERIFIED DESIGN DOSSIER</p>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} VIDUSHI MEWARA — INDUSTRIAL & PACKAGING DESIGN CASE STUDY.
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
