---
phase: 6
plan: 1
wave: 1
---

# Plan 6.1: Augen.pro Bento Feature Grid, Footer & Page Assembly

## Objective
Build `FeatureGrid.jsx` and `Footer.jsx` matching `augen.pro` component flow (bento cards, numbered list rows, minimal footer), assemble all components in `App.jsx`, and run build verification.

## Context
- `.gsd/SPEC.md`
- `.gsd/ROADMAP.md`
- `src/App.jsx`

## Tasks

<task type="auto">
  <name>Build FeatureGrid and Footer components</name>
  <files>c:\port\src\components\FeatureGrid.jsx, c:\port\src\components\Footer.jsx</files>
  <action>
    - Build FeatureGrid with rounded bento cards, category pills, subtitle labels, and arrow hover link indicators.
    - Build Footer matching augen.pro layout (logo, status pill, navigation links, copyright, back-to-top button).
  </action>
  <verify>npm run build</verify>
  <done>FeatureGrid.jsx and Footer.jsx built matching augen.pro.</done>
</task>

<task type="auto">
  <name>Assemble components in App.jsx and verify production build</name>
  <files>c:\port\src\App.jsx</files>
  <action>
    - Import Navbar, HeroSection (with embedded foamer canvas), FeatureGrid, and Footer in App.jsx.
    - Run npm run build to verify 0 build or linter errors.
  </action>
  <verify>npm run build</verify>
  <done>Complete augen.pro redesign assembled and verified.</done>
</task>

## Success Criteria
- [ ] FeatureGrid and Footer components built following augen.pro styles.
- [ ] App.jsx assembles complete experience.
- [ ] `npm run build` succeeds with 0 errors.
