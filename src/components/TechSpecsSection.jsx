import React from 'react';
import { FileText, Download, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';

const DESIGN_SPECS = [
  { group: 'DESIGNER ROLE', param: 'Lead Industrial & Packaging Designer', val: 'Vidushi Mewara' },
  { group: 'DESIGNER ROLE', param: 'Specialization & Focus', val: 'Zero-Glue Structural Origami & Brand Identity' },
  { group: 'PROJECT SCOPE', param: 'Delivered Product SKUs', val: '11 Skincare Packaging Systems' },
  { group: 'PROJECT SCOPE', param: 'Client / Case Study Subject', val: 'CAMEÓLA Paris (French Skincare Brand)' },
  { group: 'PROJECT SCOPE', param: 'Product Suite Categories', val: 'Serums, Scrubs, Moisturisers, Cleansers, Mists & Sun Care' },
  { group: 'SOFTWARE STACK', param: '3D Kinematics & Rendering', val: 'Blender 3.6 LTS & Cycles Engine' },
  { group: 'SOFTWARE STACK', param: 'CAD & Dieline Engineering', val: 'Adobe Illustrator & SolidWorks' },
  { group: 'SOFTWARE STACK', param: 'Interactive 3D Web Scrubbing', val: 'HTML5 Canvas & 299-Frame JPG Kinematics' },
  { group: 'TYPOGRAPHY SYSTEM', param: 'Display & Wordmark Typeface', val: 'Custom Serif with French Acute Accent (É)' },
  { group: 'TYPOGRAPHY SYSTEM', param: 'Body & Technical Label Font', val: 'Modernist Grotesque / Inter Tight' },
  { group: 'COLOR SYSTEM', param: 'Primary Brand Color', val: 'Cosmetic Plum (#4A152E)' },
  { group: 'COLOR SYSTEM', param: 'Accent Harmony', val: 'Baby Sky Blue (#B8D7E8) & Soft Blush Pink (#E8C2D0)' },
  { group: 'MATERIAL & FINISH', param: 'Carton Substrate Specification', val: 'FSC-Certified 350-400 GSM Unbleached Paperboard' },
  { group: 'MATERIAL & FINISH', param: 'Dieline Structural Assembly', val: '100% Zero-Glue Interlocking Friction-Fit Tuck End' },
  { group: 'MATERIAL & FINISH', param: 'Surface Treatment Specification', val: 'Tactile Soft-Touch Matte Varnish & Hot Rose-Gold Foil' },
  { group: 'PHYSICAL TESTING', param: 'Studio Prototyping Hardware', val: 'Flatbed Precision Cutter-Creaser & D65 Lighting' },
];

export default function TechSpecsSection() {
  return (
    <section id="specs" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                07. CASE STUDY SPECIFICATIONS & DELIVERABLES MATRIX
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Design Engineering & <br />
              <span className="italic font-serif text-[#4A152E]">Technical Deliverables Matrix</span>.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#packaging-suite"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#202020] hover:bg-[#4A152E] text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <Layers className="w-4 h-4" />
              <span>Inspect 11 Vector Dielines</span>
            </a>
          </div>
        </div>

        {/* Specs Table */}
        <div className="bg-white border border-[#E2DFD7] shadow-xs">
          <div className="px-8 py-4 bg-[#EFECE6] border-b border-[#E2DFD7] flex items-center justify-between">
            <span className="font-mono text-xs text-stone-900 font-semibold uppercase tracking-wider">
              PROJECT PARAMETER / DESIGN CRITERIA
            </span>
            <span className="font-mono text-xs text-[#4A152E] font-semibold uppercase tracking-wider">
              ENGINEERING SPECIFICATION VALUE
            </span>
          </div>

          <div className="divide-y divide-[#E2DFD7]">
            {DESIGN_SPECS.map((spec, idx) => (
              <div key={idx} className="px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#F7F6F3] transition-colors">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] px-2 py-0.5 bg-[#EFECE6] text-stone-600">
                    {spec.group}
                  </span>
                  <span className="font-sans text-sm font-medium text-stone-900">
                    {spec.param}
                  </span>
                </div>
                <span className="font-mono text-sm font-semibold text-[#4A152E] self-start sm:self-auto">
                  {spec.val}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
