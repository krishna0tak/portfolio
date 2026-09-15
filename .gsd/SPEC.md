# SPEC.md — Project Specification

> **Status**: `FINALIZED`
>
> ⚠️ **Planning Lock**: `FINALIZED` — Ready for GSD planning and execution.

## Vision
An elite haute-couture 3D packaging and spatial visualization studio web application (**Bonocartan × Caméola — Atelier Visual Archive**). It pairs Swiss typographic precision with tactile 3D renders, 300-frame interactive unboxing scroll scrubbing, ambient canvas lighting, and museum-grade editorial minimalism.

## Goals
1. **3D Unboxing Engine** — Smooth 300-frame 1080p canvas scroll-scrubbing with GSAP ScrollTrigger and high-DPI scaling.
2. **Ambient Vanta.js 3D Background** — Lightweight Three.js fog/halo background canvas matching `#F7F6F3` / `#EFECE6` substrate tones.
3. **Minimalist UI Component System** — Editorial components (Navbar, Project Cards, Material Swatch Drawer, Contact Dossier) conforming strictly to `DESIGN.md` (0px sharp corners, `#E2DFD7` hairline rules, `#202020` charcoal ink, `#4A152E` cosmetic plum).
4. **Interactive Material Inspector & Gallery** — Filterable project showcase with 3-part Swiss ledgers, material taxonomy tags, and project dossier overlays.

## Non-Goals (Out of Scope)
- E-commerce checkout or shopping cart processing.
- Backend user authentication or database storage (all state is client-side / static portfolio data).
- Heavy skeuomorphic drop shadows, rounded badges, or frosted glassmorphism cards.

## Constraints
- **Design System**: Strict adherence to `DESIGN.md` tokens and guidelines.
- **Framework**: Vite + React 19 + GSAP + Three.js / Vanta.js + Lucide React.
- **Performance**: High frame rate scrolling and low latency image sequence rendering.

## Success Criteria
- [x] Extracted design system from Stitch MCP and committed to `DESIGN.md`.
- [ ] Vanta.js ambient 3D backdrop active with `#F7F6F3` substrate styling.
- [ ] 0px sharp architectural UI components matching `DESIGN.md`.
- [ ] All interactive sections (Unboxing, Product Spotlight, Portfolio Gallery, About, Contact) operational and responsive.
- [ ] Clean production build via `npm run build` with zero errors.

---

*Last updated: 2026-09-16*
