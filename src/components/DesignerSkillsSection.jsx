import React, { useState } from 'react';
import {
  Cpu,
  Layers,
  Sparkles,
  Box,
  Palette,
  CheckCircle2,
  Compass,
  FileCheck,
  Maximize,
  PenTool,
  Sliders,
  Scissors
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const DIGITAL_TOOLS = [
  {
    name: 'Blender',
    category: '3D Visualisation',
    version: '3D Modelling',
    badge: '3D Visualisation',
    highlight: 'Visual Exploration',
    desc: '3D visualisation and presentation to support design exploration.',
    skills: [
      '3D Modelling',
      'Visual Presentation',
      'Material Exploration',
      'Composition',
      'Design Iteration'
    ]
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector Design',
    version: 'Vector Artwork',
    badge: 'Packaging Artwork',
    highlight: 'Logo & Packaging Design',
    desc: 'Custom logo development, label layouts, and packaging artwork.',
    skills: [
      'Logo Customisation',
      'Vector Illustration',
      'Label Design',
      'Packaging Layouts',
      'Print-Ready Artwork'
    ]
  },
  {
    name: 'Adobe Photoshop',
    category: 'Image Editing',
    version: 'Image Creation',
    badge: 'Digital Assets',
    highlight: 'Product Imagery',
    desc: 'Product visuals, ingredient graphics, website sliders, and social media assets.',
    skills: [
      'Product Image Editing',
      'Ingredient Visuals',
      'Website Sliders',
      'Social Media Creatives',
      'Image Compositing'
    ]
  },
  {
    name: 'Adobe InDesign',
    category: 'Layout & Production',
    version: 'Page Layout',
    badge: 'Artwork Preparation',
    highlight: 'Print Production',
    desc: 'Organising layouts and preparing production-ready design files.',
    skills: [
      'Layout Design',
      'Typography',
      'Document Setup',
      'Artwork Preparation'
    ]
  }
];

const PACKAGING_SKILLS = [
  {
    icon: Compass,
    title: 'Research & Ideation',
    subtitle: 'Brand Research',
    desc: 'Exploring references, moodboards, and initial directions.',
    metric: 'Research & Exploration',
    tags: ['#BrandResearch', '#Moodboards', '#Ideation']
  },
  {
    icon: Sparkles,
    title: 'Concept Development',
    subtitle: 'Brand Visualisation',
    desc: 'Building creative direction and a cohesive visual identity.',
    metric: 'Concept to Identity',
    tags: ['#CreativeDirection', '#LogoDesign', '#ColourPalette']
  },
  {
    icon: Box,
    title: 'Design & Execution',
    subtitle: 'Visual Design',
    desc: 'Developing packaging, labels, and supporting digital assets.',
    metric: 'Brand & Packaging',
    tags: ['#PackagingDesign', '#ProductImagery', '#DigitalAssets']
  },
  {
    icon: FileCheck,
    title: 'Print Production',
    subtitle: 'Artwork & Vendor Coordination',
    desc: 'Preparing print-ready artwork and coordinating with vendors for production.',
    metric: 'Production Ready',
    tags: ['#Prepress', '#FinalArtwork', '#VendorCoordination']
  }
];

export default function DesignerSkillsSection() {
  const [sectionRef, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredTool, setHoveredTool] = useState(null);

  return (
    <section
      ref={sectionRef}
      id="tools-skills"
      className="relative py-24 bg-white border-b border-[#E2DFD7] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7] reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E] animate-pulse-dot" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                05. DESIGNER TOOLKIT & IMPLEMENTED SKILLS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Creative Tools & <br />
              <span className="italic font-serif text-[#4A152E]">Design Expertise</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            From brand visualisation to final packaging artwork, combining creative thinking with digital design and production skills.
          </p>
        </div>

        {/* Part 1: Software & Digital Production Tools */}
        <div className={`mb-16 reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E2DFD7]/80">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#4A152E] animate-pulse-dot" />
              <span className="font-mono text-xs text-stone-900 uppercase tracking-widest font-semibold">
                Software & Digital Production Tools
              </span>
            </div>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
              Digital Design Pipeline
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIGITAL_TOOLS.map((tool, idx) => {
              const isHovered = hoveredTool === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredTool(idx)}
                  onMouseLeave={() => setHoveredTool(null)}
                  className={`relative bg-[#F8F7F4] border p-8 flex flex-col justify-between group transition-all duration-300 overflow-hidden ${
                    isHovered
                      ? 'border-[#4A152E] bg-white -translate-y-1.5 shadow-xl shadow-[#4A152E]/5'
                      : 'border-[#E2DFD7] hover:border-stone-300 shadow-2xs'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-[2px] bg-[#4A152E] transition-transform duration-300 origin-left ${
                      isHovered ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2DFD7]">
                      <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold">
                        {tool.category}
                      </span>
                      {tool.isLive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-[10px] uppercase tracking-wider shadow-2xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
                          {tool.badge}
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 bg-white border border-[#E2DFD7] text-stone-700 font-mono text-[10px] uppercase tracking-wider">
                          {tool.badge}
                        </span>
                      )}
                    </div>

                    <h3 className={`font-serif text-2xl font-normal transition-colors mb-1 ${
                      isHovered ? 'text-[#4A152E]' : 'text-stone-950'
                    }`}>
                      {tool.name}
                    </h3>
                    <span className="font-mono text-[11px] text-stone-400 block mb-4">
                      {tool.version} • <span className="text-[#4A152E] font-medium">{tool.highlight}</span>
                    </span>

                    <p className="text-xs sm:text-sm text-stone-600 font-sans font-light leading-relaxed mb-6">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2DFD7]">
                    <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-2 font-semibold">
                      Core Technical Implementations:
                    </span>
                    <div className="space-y-1.5">
                      {tool.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs font-mono text-stone-800">
                          <CheckCircle2 className={`w-3.5 h-3.5 transition-colors ${
                            isHovered ? 'text-[#4A152E]' : 'text-stone-400'
                          }`} />
                          <span className="group-hover:text-stone-900 transition-colors">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Design Expertise */}
        <div className={`reveal-fade-up ${isInView ? 'is-revealed' : ''}`}>
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E2DFD7]/80">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-900 uppercase tracking-widest font-semibold">
                Design Expertise
              </span>
            </div>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
              From Concept to Production
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGING_SKILLS.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between group hover:border-[#4A152E] hover:-translate-y-1.5 transition-all duration-300 shadow-2xs hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs group-hover:bg-[#4A152E] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="font-mono text-[9px] text-[#4A152E] uppercase tracking-widest block font-semibold mb-0.5">
                        {skill.subtitle}
                      </span>
                      <h4 className="font-serif text-lg text-stone-950 font-normal leading-snug group-hover:text-[#4A152E] transition-colors">
                        {skill.title}
                      </h4>
                    </div>

                    <p className="text-xs text-stone-600 font-sans font-light leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E2DFD7] space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-stone-400 uppercase">Metric Spec</span>
                      <span className="font-mono text-[10px] text-[#4A152E] font-semibold">{skill.metric}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {skill.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-1.5 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700 font-mono text-[9px] group-hover:border-pink-200 group-hover:text-[#4A152E] transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

