import React, { useState, useEffect } from 'react';
import { Compass, CheckCircle2, Box, Sparkles, Layers, Cpu, Wrench, Palette, FileText, CheckSquare, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const DESIGN_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Brief & Discovery',
    category: 'Foundations',
    desc: 'Understanding the brand vision, skincare positioning, and project requirements.',
  },
  {
    step: '02',
    title: 'Research & Inspiration',
    category: 'Research',
    desc: 'Exploring luxury skincare identities, visual references, and creative directions.',
  },
  {
    step: '03',
    title: 'Brand Visualisation',
    category: 'Ideation',
    desc: 'Developing initial concepts, moodboards, and logo explorations.',
  },
  {
    step: '04',
    title: 'Visual Identity Development',
    category: 'Visual Identity',
    desc: 'Refining the custom wordmark, colour palette, and typography.',
  },
  {
    step: '05',
    title: 'Packaging Design',
    category: 'Packaging',
    desc: 'Creating a cohesive label and packaging system across 11 products.',
  },
  {
    step: '06',
    title: 'Design Refinement',
    category: 'Refinement',
    desc: 'Refining layouts, typography, colours, and packaging artwork.',
  },
  {
    step: '07',
    title: 'Digital Brand Assets',
    category: 'Digital Assets',
    desc: 'Designing product imagery, website sliders, and social media creatives.',
  },
  {
    step: '08',
    title: 'Final Artwork & Production',
    category: 'Production',
    desc: 'Preparing final design files and coordinating packaging production.',
  },
];

function StatCounter({ target, suffix = '', label, isInView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = Math.floor(ease * target);
      setCount(currentVal);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return (
    <div className="p-3 bg-white border border-stone-200/90 shadow-2xs hover:border-[#4A152E]/40 hover:-translate-y-0.5 transition-all duration-300">
      <div className="font-serif text-2xl md:text-3xl font-normal text-[#4A152E] tracking-tight">
        {count < 10 && target >= 1 && target < 10 ? `0${count}` : count}{suffix}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-wider text-stone-500 mt-0.5">
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredStep, setHoveredStep] = useState(null);

  return (
    <section
      ref={sectionRef}
      id="overview"
      className="relative py-24 bg-white border-t border-b border-stone-200 scroll-mt-20 overflow-hidden"
    >
      {/* Subtle ambient light gradient accent */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 bg-stone-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Case Study Statement & Challenge */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 items-start reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-50 border border-pink-200 font-mono text-xs text-[#4A152E]">
              <Compass className="w-3.5 h-3.5 animate-pulse-dot" />
              <span>01. THE DESIGN BRIEF & CREATIVE DIRECTION</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 leading-[1.08] tracking-tight">
              From an Idea to a <br />
              <span className="italic font-serif font-light text-[#4A152E]">
                Distinctive Skincare Identity.
              </span>
            </h2>

            <p className="text-base md:text-lg text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              CAMEÓLA is a luxury skincare brand combining French sophistication with Indian ingredients. As the sole designer, I developed its visual identity from initial concept to packaging execution.
            </p>

            <p className="text-sm md:text-base text-stone-600 font-sans font-light max-w-2xl leading-relaxed">
              The challenge was to create a premium yet distinctive identity across a diverse skincare range. Custom typography, expressive colours, and minimal packaging formed a cohesive visual system.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                '#BrandIdentity',
                '#PackagingDesign',
                '#CreativeDirection',
                '#LogoDesign',
                '#VisualIdentity',
                '#DesignProcess'
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-stone-100 hover:bg-pink-50 hover:border-pink-200 hover:text-[#4A152E] transition-colors border border-stone-200 font-mono text-[11px] text-stone-700 uppercase cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* WHAT I DELIVERED // PROJECT SCOPE */}
          <div className="lg:col-span-4 space-y-5 bg-stone-50/90 p-8 border border-stone-200 shadow-xs relative overflow-hidden group">
            {/* Minimal card accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4A152E] to-transparent opacity-60" />

            <div>
              <span className="font-mono text-[11px] text-stone-500 uppercase tracking-widest block mb-1">
                PROJECT OVERVIEW & SCOPE
              </span>
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold border-b border-stone-200 pb-3 flex items-center justify-between">
                <span>WHAT I DELIVERED</span>
                <span className="text-[10px] text-stone-500 font-normal">BY: VIDUSHI MEWARA</span>
              </h3>
            </div>

            {/* Dynamic Metric Dashboard Grid */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <StatCounter target={11} label="Product SKUs" isInView={isInView} />
              <StatCounter target={1} label="Brand Identity" isInView={isInView} />
              <StatCounter target={100} suffix="%" label="Design Ownership" isInView={isInView} />
              <StatCounter target={5} label="Deliverable Categories" isInView={isInView} />
            </div>

            <p className="text-xs text-stone-600 font-sans leading-relaxed pt-1">
              Full creative and structural design scope executed independently by Vidushi Mewara:
            </p>

            <div className="space-y-2.5 pt-1">
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>1. Brand Visualisation & Creative Direction:</strong> Conceptualizing positioning and tone.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>2. Logo Design, Colour Palette & Visual Identity:</strong> Custom wordmark and design system.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>3. Label & Packaging Design:</strong> Vector dielines and carton layouts for 11 products.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>4. Website Sliders & Product Imagery:</strong> Visual mockups and banner compositions.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-stone-800">
                <CheckCircle2 className="w-4 h-4 text-[#4A152E] shrink-0 mt-0.5" />
                <span><strong>5. Social Media Assets:</strong> Editorial campaign creatives and promotional graphics.</span>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Card Design Process Grid */}
        <div className={`pt-12 border-t border-stone-200 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-stone-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#4A152E] animate-pulse-dot" />
                <span className="font-mono text-xs uppercase tracking-widest text-[#4A152E] font-semibold">
                  DESIGN METHODOLOGY & WORKFLOW // 8-Phase Design Process
                </span>
              </div>
              <h3 className="font-serif text-2xl text-stone-950 font-normal">
                8-Phase Design Process
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-stone-500 uppercase tracking-wider">
                FROM CONCEPT TO EXECUTION
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4A152E]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DESIGN_PROCESS_STEPS.map((step, idx) => {
              const isHovered = hoveredStep === step.step;
              return (
                <div
                  key={step.step}
                  onMouseEnter={() => setHoveredStep(step.step)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className={`relative p-6 bg-stone-50/90 border transition-all duration-300 flex flex-col justify-between group cursor-default overflow-hidden ${
                    isHovered
                      ? 'border-[#4A152E] bg-white -translate-y-1.5 shadow-lg shadow-[#4A152E]/5'
                      : 'border-stone-200 hover:border-stone-300'
                  }`}
                >
                  {/* Subtle top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-[#4A152E] transition-transform duration-300 origin-left ${
                      isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-stone-200/80">
                      <span className={`font-mono text-sm font-bold transition-colors ${
                        isHovered ? 'text-[#4A152E]' : 'text-stone-900'
                      }`}>
                        {step.step}
                      </span>
                      <span className="font-mono text-[10px] uppercase text-stone-500 tracking-wider">
                        {step.category}
                      </span>
                    </div>

                    <h4 className={`font-serif text-lg font-normal mb-2 transition-colors ${
                      isHovered ? 'text-[#4A152E]' : 'text-stone-950'
                    }`}>
                      {step.title}
                    </h4>

                    <p className="font-sans text-xs text-stone-600 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-stone-200/50 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
                      PHASE {step.step} / 08
                    </span>
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isHovered ? 'bg-[#4A152E] scale-125' : 'bg-stone-300'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

