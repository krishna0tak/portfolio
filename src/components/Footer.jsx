import React from 'react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="specs" className="border-t border-slate-200/80 bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-tight">
            A
          </div>
          <div>
            <span className="font-bold text-slate-900 tracking-tight text-sm">
              Augen Pro
            </span>
            <p className="text-xs text-slate-400">
              Pro-Human, AI-driven Invisible Computing.
            </p>
          </div>
        </div>

        {/* Center Nav Links */}
        <div className="flex items-center space-x-6 text-xs font-medium text-slate-600">
          <a href="#hero" className="hover:text-[#0071e3] transition-colors">Overview</a>
          <a href="#experience" className="hover:text-[#0071e3] transition-colors">Experience</a>
          <a href="#specs" className="hover:text-[#0071e3] transition-colors">Specifications</a>
          <button onClick={scrollToTop} className="hover:text-[#0071e3] transition-colors">
            Back to top ↑
          </button>
        </div>

        {/* Right Status Indicator & Copyright */}
        <div className="flex items-center space-x-4 text-xs text-slate-400">
          <div className="flex items-center space-x-2 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>SYSTEM ACTIVE</span>
          </div>
          <span>© {new Date().getFullYear()} Augen Pro</span>
        </div>
      </div>
    </footer>
  );
}
