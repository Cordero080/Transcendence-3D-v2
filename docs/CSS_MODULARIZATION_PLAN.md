# CSS Modularization Plan

## Completed ✅

- `styles/components/overlays.css` - Game over, transcendence, page overlays
- `styles/components/buttons.css` - All button styles
- `styles/components/stat-bars.css` - Stat bars and timers
- `styles/base/fonts.css` - Font imports and definitions
- `styles/base/reset.css` - CSS reset
- `styles/base/scrollbar.css` - Custom scrollbar
- `styles/layout/body.css` - Body styles
- `styles/layout/header.css` - Header styles
- `styles/layout/pet-container.css` - Pet container styles

## TODO - Effects Module

### `styles/effects/glitch.css`

Should contain:

- `.glitch-stutter-overlay` (line 1750)
- `.glitch-stutter-overlay.active` (line 1787)
- `.glitch-stutter-overlay.active.evolution` (line 1794)
- `.glitch-stutter-overlay.glitch-inverted` (line 2225)
- `.stutter-scanlines` (line 2170)
- `.stutter-static` (line 2195)
- `.stutter-flash` (line 2206)
- `.colorful-glitch-container` (line 2978)
- `.colorful-glitch-text` (line 3078)
- `.colorful-glitch-overlay` (line 3096)
- `.colorful-glitch-particles` (line 3140)
- `.colorful-glitch-border` (line 3152)
- `.glitching-effect` (line 3022)
- `.glitch-text` (line 3035)
- `.glitch-bars` (line 3048)
- `.glitch-static` (line 3065)

### `styles/effects/transcendence.css`

Should contain:

- `.glitch-stutter-overlay.active.transcendence` (line 1817)
- `.glitch-stutter-overlay.active.transcendence::before` (line 1998)
- `.glitch-stutter-overlay.active.transcendence::after` (line 2053)
- `.glitch-stutter-overlay.active.transcendence .radial-burst-ring` (line 2126)

## TODO - Animations Module

### `styles/animations/keyframes.css`

Should consolidate ALL @keyframes from main.css:

**Glitch Animations:**

- `stutterFlicker` (appears at 2375, 3312 - duplicate?)
- `stutterScan` (2389)
- `stutterStatic` (2394)
- `stutterFlash` (2403)
- `dynamicCatGlitch` (2426)
- `stutterFlickerInverted` (2314)
- `stutterScanInverted` (2327)
- `stutterStaticInverted` (2332)
- `stutterFlashInverted` (2340)
- `dynamicCatGlitchInverted` (2346)
- `glitchContainer` (1339)
- `glitchText` (1352)
- `glitchBars` (1390)
- `glitchStatic` (1399)
- `gameOverGlitch` (1699)
- `colorfulGlitchContainer` (3119, 3167 - duplicate?)
- `colorfulGlitchText` (3188)
- `colorfulGlitchOverlay` (3239)
- `colorfulGlitchParticles` (3248)
- `colorfulGlitchBorder` (3271)

**Evolution Animations:**

- `cyberpunkEvolutionGlow` (2450)
- `cyberpunkEvolutionGlowInverted` (2354)
- `evolutionParticles` (2485)
- `evolutionParticlesInverted` (2363)
- `evolutionShimmer` (2508)
- `evolutionShimmerInverted` (2369)

**Transcendence Animations:**

- `transcendenceFadeAway` (2544)
- `mysticalTranscendenceGlow` (2569)
- `mandalaRotation` (2619)
- `cosmicPulse` (2637)
- `etherealShimmer` (need to find)
- `spectralScanUpDown` (need to find)
- `spectralScanDownUp` (need to find)
- `radialBurstGrow` (need to find)

**Other Animations:**

- `gradientMove` (70)
- `gradientShift` (144, 377 - duplicates?)
- `fadeIn` (522)
- `spin` (927)
- `spinReverse` (979)
- `floatButton` (997)
- `spectrumGradientMove` (1056)
- `fadeInWord` (need to find)
- `wordDropDown` (need to find)
- `floatCrystal` (need to find)
- `crystalPulse` (need to find)

## TODO - Remaining Styles

Need to identify and modularize:

- Info box styles
- Dropdown styles
- Pet chat styles
- Corner button styles
- Scaling root styles
- Word animations

## Final Step

Create new `main.css` with @import statements for all modules in correct order:

```css
/* Base */
@import "./styles/base/reset.css";
@import "./styles/base/fonts.css";
@import "./styles/base/scrollbar.css";

/* Layout */
@import "./styles/layout/body.css";
@import "./styles/layout/header.css";
@import "./styles/layout/pet-container.css";

/* Components */
@import "./styles/components/overlays.css";
@import "./styles/components/buttons.css";
@import "./styles/components/stat-bars.css";

/* Effects */
@import "./styles/effects/glitch.css";
@import "./styles/effects/transcendence.css";

/* Animations */
@import "./styles/animations/keyframes.css";
```

## Notes

- Be cautious with duplicate keyframe definitions
- Maintain animation dependencies
- Test thoroughly after each module extraction
- Keep original main.css as backup until verified
