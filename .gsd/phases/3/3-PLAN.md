---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: GSAP Micro-Animations & Final Production Audit

## Objective
Implement GSAP ScrollTrigger micro-animations across portfolio sections (Navbar entrance, section title staggered reveals, subtle parallax on gallery items, and rule-line border reveals) and execute a full empirical production build audit.

## Context
- .gsd/SPEC.md
- .gsd/ROADMAP.md
- DESIGN.md
- src/components/
- src/App.jsx

## Tasks

<task type="auto">
  <name>Create GSAP ScrollTrigger section animations hook and utility</name>
  <files>src/hooks/useScrollAnimations.js, src/App.jsx, src/components/PortfolioGallery.jsx, src/components/AboutSection.jsx, src/components/ContactSection.jsx</files>
  <action>
    Create `src/hooks/useScrollAnimations.js` using GSAP ScrollTrigger for section headers, hairline borders, and gallery cards.
    Attach scroll animation hooks to PortfolioGallery, AboutSection, and ContactSection.
  </action>
  <verify>npm run build</verify>
  <done>GSAP animations initialize cleanly on scroll with zero runtime errors</done>
</task>

<task type="auto">
  <name>Perform full empirical build audit and lint check</name>
  <files>package.json, src/</files>
  <action>
    Run `npm run lint` and `npm run build` to verify clean production bundle generation.
  </action>
  <verify>npm run build</verify>
  <done>Production bundle dist/ generated with 0 errors and 0 lint failures</done>
</task>

## Success Criteria
- [ ] GSAP micro-animations smoothly trigger on scroll
- [ ] Section titles, hairline rules, and cards reveal with editorial ease curves
- [ ] Production build succeeds cleanly
