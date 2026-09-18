---
phase: 5
plan: 1
wave: 1
---

# Plan 5.1: Hero Section with Embedded Clean Foamer Canvas Stage

## Objective
Build `HeroSection.jsx` incorporating `augen.pro` typography (large headline, category pill tags "PRO-HUMAN", "AI-DRIVEN", CTA arrow link) with the 299-frame `foamer` canvas scroll animation embedded directly inside the hero showcase stage where `augen.pro` places their hero asset. The canvas stage must be **100% clean with zero text labels, overlay cards, or floating badges**.

## Context
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `src/components/ScrollUnboxing.jsx`

## Tasks

<task type="auto">
  <name>Build HeroSection component with clean embedded foamer canvas stage</name>
  <files>c:\port\src\components\HeroSection.jsx, c:\port\src\components\ScrollUnboxing.jsx</files>
  <action>
    - Create HeroSection with augen.pro typography: headline, category pill tags ("PRO-HUMAN", "AI-DRIVEN"), CTA arrow link.
    - Embed 299-frame foamer scroll canvas inside hero showcase stage.
    - Ensure canvas scroll scrubbing has 0 text labels, 0 floating cards, 0 badges for a pure clean visual experience.
  </action>
  <verify>npm run build</verify>
  <done>HeroSection.jsx created with clean embedded foamer scroll canvas stage.</done>
</task>

## Success Criteria
- [ ] HeroSection matches augen.pro layout structure.
- [ ] Embedded foamer scroll canvas features zero text overlays or labels.
