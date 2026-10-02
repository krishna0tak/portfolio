import React from 'react';
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

const DIGITAL_TOOLS = [
  {
    name: 'Blender 3D (Cycles & LTS)',
    category: '3D Simulation & Animation',
    version: 'Blender 3.6 LTS / Cycles Engine',
    badge: 'Primary 3D Pipeline',
    highlight: '299-Frame Unboxing Kinematics',
    desc: 'Engineered the 3D container geometry, folding carton opening kinematics, and procedural material shaders. Leveraged Cycles ray-tracing with subsurface scattering (SSS) for cosmetic emulsions and calibrated Fresnel IOR for glass and acrylic specular behavior.',
    skills: [
      'Kinematic Box Opening Rigging',
      'Subsurface Light Scattering (SSS)',
      'Specular Roughness & IOR Physics',
      'Photorealistic Studio Lighting Setup',
      '299-Frame Scroll Web Sequence'
    ]
  },
  {
    name: 'Adobe Illustrator',
    category: 'Vector CAD & Dieline Engineering',
    version: 'Vector CAD & Print Separation',
    badge: '1:1 Production Blueprint',
    highlight: '11 Full Dieline Architectures',
    desc: 'Drafted millimeter-exact vector packaging dielines with distinct line layers for cut, score, and perforation. Built dedicated separation plates for spot UV varnish, blind debossing, and hot rose-gold foil stamping with 0.1mm press registration tolerances.',
    skills: [
      '1:1 CAD Dieline Geometry',
      'Spot UV & Foil Stamping Separation',
      'Cut, Score & Perforation Layering',
      'French Typographic Glyph Customization',
      'Zero-Error Press Bleed Margins'
    ]
  },
  {
    name: 'Adobe Photoshop',
    category: 'CMF Synthesis & Studio Retouching',
    version: 'Texture Mapping & Lighting',
    badge: 'Surface Proofing',
    highlight: 'D65 Daylight Simulation',
    desc: 'Synthesized high-resolution paperboard fiber displacement maps, specular roughness masks, and label opacity alpha channels. Retouched physical studio workshop prototype photographs to balance studio strobes against true pigment drawdowns.',
    skills: [
      'CMF Texture Map Synthesis',
      'D65 Daylight Color Calibration',
      'Studio Prototype Photo Retouching',
      'Alpha Channel Masking for Foil/Varnish',
      'Specular Reflection Grading'
    ]
  },
  {
    name: 'Substance 3D / KeyShot',
    category: 'Material Science & CMF Rendering',
    version: 'Photorealistic Shader Pipeline',
    badge: 'Material Physics',
    highlight: 'FSC Fiber Tactility Study',
    desc: 'Calibrated micro-roughness behavior of 350-400 GSM unbleached virgin paperboard versus velvet-touch aqueous varnish. Modeled metallic flake distribution in hot-stamped rose-gold foils under changing viewing angles.',
    skills: [
      'Procedural Paperboard Fiber Shaders',
      'Velvet Aqueous Varnish Emulation',
      'Metallic Foil Flake Distribution',
      'Specular Sheen Map Calibration'
    ]
  }
];

const PACKAGING_SKILLS = [
  {
    icon: Scissors,
    title: 'Zero-Glue Structural Origami',
    subtitle: 'Sustainable Packaging Mechanics',
    desc: 'Engineered interlocking friction-fit tabs and 15° angled retention flaps that hold cartons securely closed without toxic adhesives or synthetic tapes. Cartons unfold flat for 100% repulpability.',
    metric: '100% Glue-Free',
    tags: ['Friction-Fit Latch', 'Self-Locking Flaps', 'Suspension Collar']
  },
  {
    icon: Box,
    title: 'CMF & Substrate Specification',
    subtitle: 'Tactile Material Engineering',
    desc: 'Specified 350–400 GSM FSC-certified virgin unbleached folding boxboard. Calculated caliper thickness and aligned machine grain direction parallel to main carton creases to prevent spine cracking.',
    metric: '350–400 GSM',
    tags: ['FSC Virgin Board', 'Grain Direction', 'Anti-Cracking Score']
  },
  {
    icon: Palette,
    title: 'Color Systems & Press Feasibility',
    subtitle: 'Chromatics & Press Registration',
    desc: 'Formulated primary cosmetic plum (#4A152E) and auxiliary pastel accents with calibrated Pantone Solid Coated references. Formulated ink drawdowns validated under standard D65 daylight matching.',
    metric: 'D65 Daylight Calibrated',
    tags: ['Spot Color Formulations', 'Ink Drawdowns', '0.1mm Plate Tolerance']
  },
  {
    icon: Compass,
    title: 'Physical Workshop Prototyping',
    subtitle: 'Hands-On Structural Validation',
    desc: 'Constructed 12 full-scale physical workshop mockups to empirically test hinge durability, opening resistance, bottle insertion clearance, and tactile finger-friction during real-world unboxing.',
    metric: '12 Studio Test Protos',
    tags: ['Flatbed Cutter Scoring', 'Caliper Verification', 'Drop & Durability Tests']
  }
];

export default function DesignerSkillsSection() {
  return (
    <section id="tools-skills" className="py-24 bg-white border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                05. DESIGNER TOOLKIT & IMPLEMENTED SKILLS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Tools, Software & <br />
              <span className="italic font-serif text-[#4A152E]">Packaging Engineering Skills</span>.
            </h2>
          </div>
          <p className="text-stone-600 font-sans text-sm md:text-base max-w-md leading-relaxed font-light">
            Engineered by Vidushi Mewara. An integrated industrial design methodology bridging virtual 3D kinematics, precision CAD dielines, material science, and hands-on structural workshop prototyping.
          </p>
        </div>

        {/* Part 1: Software & Digital Tools Suite */}
        <div className="mb-16">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E2DFD7]/80">
            <div className="flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-900 uppercase tracking-widest font-semibold">
                Digital Production Software Stack
              </span>
            </div>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
              Virtual Prototyping & CAD Precision
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DIGITAL_TOOLS.map((tool, idx) => (
              <div
                key={idx}
                className="bg-[#F8F7F4] border border-[#E2DFD7] p-8 flex flex-col justify-between group hover:border-[#4A152E] transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E2DFD7]">
                    <span className="font-mono text-[10px] text-[#4A152E] uppercase tracking-widest font-semibold">
                      {tool.category}
                    </span>
                    <span className="px-2.5 py-0.5 bg-white border border-[#E2DFD7] text-stone-700 font-mono text-[10px] uppercase tracking-wider">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-stone-950 font-normal group-hover:text-[#4A152E] transition-colors mb-1">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#4A152E] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Industrial & Packaging Design Skills */}
        <div>
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#E2DFD7]/80">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#4A152E]" />
              <span className="font-mono text-xs text-stone-900 uppercase tracking-widest font-semibold">
                Packaging Design & Engineering Disciplines
              </span>
            </div>
            <span className="font-mono text-[10px] text-stone-500 uppercase tracking-wider">
              Empirical Structural Validation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGING_SKILLS.map((skill, idx) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E2DFD7] p-6 flex flex-col justify-between group hover:border-[#4A152E] transition-all duration-300 shadow-2xs hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 bg-[#4A152E]/10 text-[#4A152E] flex items-center justify-center rounded-xs group-hover:bg-[#4A152E] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <span className="font-mono text-[9px] text-[#4A152E] uppercase tracking-widest block font-semibold mb-0.5">
                        {skill.subtitle}
                      </span>
                      <h4 className="font-serif text-lg text-stone-950 font-normal leading-snug">
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
                          className="px-1.5 py-0.5 bg-[#EFECE6] border border-[#E2DFD7] text-stone-700 font-mono text-[9px]"
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
