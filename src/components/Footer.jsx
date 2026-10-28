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
                  Graphic Designer | Brand Identity & Packaging Design
                </span>
                <span className="font-mono text-[9px] text-pink-300 uppercase tracking-widest mt-0.5">
                  NIFT Graduate | 4 Years of Experience
                </span>
              </div>
            </div>

            <p className="text-stone-300 text-xs font-sans font-light max-w-md leading-relaxed">
              From concept to execution, I create thoughtful brand identities, packaging, and visual experiences.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-[11px]">
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); alert("Resume link will be configured by Vidushi Mewara"); }}
                className="text-pink-300 hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <span>View My Resume ↗</span>
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="#behance"
                onClick={(e) => { e.preventDefault(); alert("Behance portfolio link will be configured by Vidushi Mewara"); }}
                className="text-pink-300 hover:text-white underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <span>Explore My Behance ↗</span>
              </a>
              <span className="text-stone-600">•</span>
              <a
                href="mailto:vidushimewara@gmail.com"
                className="text-pink-300 hover:text-white underline underline-offset-4 flex items-center gap-1"
              >
                <span>Let's Connect ↗</span>
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
                <a href="#overview" className="hover:text-pink-300 transition-colors">01. Brief</a>
              </li>
              <li>
                <a href="#theory" className="hover:text-pink-300 transition-colors">02. Identity</a>
              </li>
              <li>
                <a href="#packaging-suite" className="hover:text-pink-300 transition-colors">03. Packaging Suite</a>
              </li>
              <li>
                <a href="#tools-skills" className="hover:text-pink-300 transition-colors">04. Toolkit</a>
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
              <p>ROLE: SOLE BRAND & PACKAGING DESIGNER</p>
              <p>QUALIFICATION: NIFT GRADUATE</p>
              <p>EXPERIENCE: 4 YEARS OF EXPERIENCE</p>
              <p>SUBJECT: CAMEÓLA PARIS SYSTEM</p>
              <p>DELIVERABLES: 11 PACKAGING SKUS</p>
              <p className="text-pink-300 pt-1">STATUS: VERIFIED DESIGN PORTFOLIO</p>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500">
          <div>
            © {new Date().getFullYear()} VIDUSHI MEWARA — BRAND IDENTITY & PACKAGING DESIGN.
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
