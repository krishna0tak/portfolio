---
phase: 1
plan: 1
wave: 1
---

# Plan 1.1: Vanta.js Ambient Background Integration

## Objective
Integrate Three.js powered Vanta.js ambient fog canvas backdrop behind the portfolio hero and unboxing stage, strictly matching `#F7F6F3` (Canvas Base) and `#EFECE6` (Canvas Subtle) substrate tones.

## Context
- .gsd/SPEC.md
- DESIGN.md
- src/index.css
- src/components/ProductUnboxingScroll.jsx

## Tasks

<task type="auto">
  <name>Install vanta dependency and create VantaBackground component</name>
  <files>package.json, src/components/VantaBackground.jsx</files>
  <action>
    Install `vanta` package via npm.
    Create `VantaBackground.jsx` using Vanta FOG effect initialized with Three.js.
    Configure colors: highlightColor: 0xEFECE6, midtoneColor: 0xF7F6F3, lowlightColor: 0xE2DFD7, baseColor: 0xF7F6F3.
  </action>
  <verify>npm run build</verify>
  <done>VantaBackground component compiles cleanly and renders responsive 3D ambient canvas</done>
</task>

<task type="auto">
  <name>Integrate VantaBackground in ProductUnboxingScroll and App layout</name>
  <files>src/components/ProductUnboxingScroll.jsx, src/App.jsx</files>
  <action>
    Embed VantaBackground behind the pinned unboxing canvas in ProductUnboxingScroll.jsx.
    Ensure z-index layering preserves total visibility of the 300-frame image sequence while providing subtle studio depth.
  </action>
  <verify>npm run build</verify>
  <done>ProductUnboxingScroll renders ambient Vanta backdrop without blocking unboxing canvas</done>
</task>

## Success Criteria
- [ ] Vanta ambient backdrop renders smoothly behind hero section
- [ ] Substrate colors match `#F7F6F3` / `#EFECE6` design specs
- [ ] Build passes with zero errors
