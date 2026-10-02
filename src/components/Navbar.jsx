import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Box, Layers, Cpu, Image as ImageIcon, FileText } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '3D Scroll', href: '#animation' },
    { label: 'Overview', href: '#overview' },
    { label: 'Mood Board', href: '#theory' },
    { label: 'Showcase', href: '#packaging-suite' },
    { label: 'Tools & Skills', href: '#tools-skills' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/92 backdrop-blur-xl border-b border-stone-200/90 py-2.5 shadow-xs'
          : 'bg-transparent py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Designer Case Study Logo Header */}
        <a href="#animation" className="group flex items-center gap-2.5 text-stone-900 transition-opacity">
          <div className="w-7 h-7 bg-[#4A152E] text-pink-100 flex items-center justify-center font-serif text-xs font-bold tracking-tight">
            VM
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xs sm:text-sm tracking-wider uppercase font-semibold text-stone-950">
              VIDUSHI <span className="font-light italic text-[#4A152E]">Mewara</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-stone-500 font-mono -mt-0.5 hidden sm:inline-block">
              DESIGN CASE STUDY // CAMEÓLA
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-0.5 bg-stone-100/90 p-1 rounded-full border border-stone-200 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide text-stone-700 hover:text-stone-950 hover:bg-white transition-all duration-200 whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#packaging-suite"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#4A152E] hover:bg-[#381023] text-white text-xs font-mono uppercase tracking-wider transition-all duration-200 shadow-xs group"
          >
            <span>11 SKUs</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-900 hover:text-stone-600 transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-3 rounded-lg text-xs font-mono uppercase tracking-wider text-stone-800 hover:bg-stone-100 transition-colors"
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
