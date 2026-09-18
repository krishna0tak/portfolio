import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto augen-glass-header rounded-full px-5 py-2.5 flex items-center justify-between w-full max-w-2xl transition-all duration-300">
        {/* Left Logo Icon */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-tight group-hover:bg-[#0071e3] transition-colors">
            A
          </div>
          <span className="font-bold text-slate-900 text-sm tracking-tight hidden sm:inline">
            Augen Pro
          </span>
        </a>

        {/* Center Nav Items */}
        <div className="flex items-center space-x-6 text-xs font-medium text-slate-600">
          <a href="#hero" className="hover:text-slate-900 transition-opacity hover:opacity-100 opacity-70">
            Overview
          </a>
          <a href="#experience" className="hover:text-slate-900 transition-opacity hover:opacity-100 opacity-70">
            Experience
          </a>
          <a href="#specs" className="hover:text-slate-900 transition-opacity hover:opacity-100 opacity-70">
            Specifications
          </a>
        </div>

        {/* Right Action Button */}
        <a
          href="#experience"
          className="augen-pill augen-pill-blue font-semibold shadow-sm hover:shadow transition-all"
        >
          Explore ↗
        </a>
      </nav>
    </header>
  );
}
