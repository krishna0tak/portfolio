import React from 'react';
import { FileText, Download, CheckCircle2 } from 'lucide-react';

const TECH_SPECS = [
  { group: 'CONTAINER DIMENSIONS', param: 'Nominal Fill Capacity', val: '350 ml (11.8 fl oz)' },
  { group: 'CONTAINER DIMENSIONS', param: 'Overflow Capacity', val: '375 ml' },
  { group: 'CONTAINER DIMENSIONS', param: 'Base Diameter x Height', val: '68 mm x 184 mm' },
  { group: 'CONTAINER DIMENSIONS', param: 'Structural Wall Thickness', val: '1.8 mm' },
  { group: 'PUMP ENGINE & DOSAGE', param: 'Actuation Output Dosage', val: '0.40 ml / stroke' },
  { group: 'PUMP ENGINE & DOSAGE', param: 'Neck Finish Standard', val: '43/410 Threaded' },
  { group: 'PUMP ENGINE & DOSAGE', param: 'Air-to-Liquid Ratio', val: '1 : 12 Volumetric' },
  { group: 'PUMP ENGINE & DOSAGE', param: 'Mesh Screen Pore Size', val: '150 Micron' },
  { group: 'MATERIAL & SUSTAINABILITY', param: 'Bottle Reservoir Resin', val: 'PETG (RIC #1 Recyclable)' },
  { group: 'MATERIAL & SUSTAINABILITY', param: 'Plunger & Collar Resin', val: 'Polypropylene (PP)' },
  { group: 'MATERIAL & SUSTAINABILITY', param: 'Spring Mechanism', val: 'Non-Metal Polyolefin Element' },
  { group: 'PRINT & DIELINE', param: 'Box Substrate Specification', val: '350 GSM Unbleached FSC Board' },
  { group: 'PRINT & DIELINE', param: 'Brand Ink Specification', val: 'Pantone 4975 C (Cosmetic Plum)' },
  { group: 'PRINT & DIELINE', param: 'Surface Treatment Varnish', val: 'Tactile Soft-Touch Matte UV' },
];

export default function TechSpecsSection() {
  return (
    <section id="specs" className="py-24 bg-[#F7F6F3] border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E2DFD7]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 bg-[#4A152E]" />
              <span className="font-mono text-xs text-[#4A152E] uppercase tracking-widest font-semibold">
                05. TECHNICAL MATRIX
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-stone-950 font-normal tracking-tight">
              Engineering & <br />
              <span className="italic font-serif text-[#4A152E]">Production Specs</span>.
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="/assets/cameola-dieline.png"
              download="cameola-dieline-blueprint.png"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#202020] hover:bg-[#4A152E] text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Production Dieline (PNG)</span>
            </a>
          </div>
        </div>

        {/* Specs Table */}
        <div className="bg-white border border-[#E2DFD7]">
          <div className="px-8 py-4 bg-[#EFECE6] border-b border-[#E2DFD7] flex items-center justify-between">
            <span className="font-mono text-xs text-stone-900 font-semibold uppercase tracking-wider">
              PARAMETER / SPECIFICATION
            </span>
            <span className="font-mono text-xs text-[#4A152E] font-semibold uppercase tracking-wider">
              ENGINEERING VALUE
            </span>
          </div>

          <div className="divide-y divide-[#E2DFD7]">
            {TECH_SPECS.map((spec, idx) => (
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
