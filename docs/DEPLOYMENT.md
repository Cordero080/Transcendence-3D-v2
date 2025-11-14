# Deployment Guide

## Why Three.js Files Are Ignored

The large Three.js library files (`libs/three.core.js` and `libs/three.module.js`) are ignored in `.gitignore` because:

- **File Size**: `three.core.js` is 1.3MB and 58,000+ lines - too large for GitHub
- **Better Practice**: Using the npm package version instead
- **Optimization**: Vite can bundle and optimize the npm version

## Current Setup

### Development (Local)

```bash
npx vite
```

- Three.js loads from `node_modules/three/` (npm package)
- FBXLoader and other loaders still use local `libs/` files

### Production (GitHub Pages)

1. **Build the project**:

   ```bash
   npm run build
   # or
   vite build
   ```

   This creates an optimized `dist/` folder with all dependencies bundled

2. **Deploy to GitHub Pages**:
   - Option A: Push the `dist/` folder to a `gh-pages` branch
   - Option B: Configure GitHub Pages to use the `dist/` folder
   - Option C: Use GitHub Actions to auto-build and deploy

## What's Ignored in Git

```
node_modules/          # All npm dependencies
.env                   # Environment variables
dist/                  # Built files (generated on build)
libs/three.core.js     # Large Three.js file (1.3MB)
libs/three.module.js   # Large Three.js file
```

## What's Committed

- Source code (`app.js`, `main-test.js`, etc.)
- Small loader files (`libs/FBXLoader.js`, etc.)
- Assets (models, images, music)
- Configuration files (`package.json`, `vite.config.js`)

## Build Scripts

Add to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## GitHub Pages Setup

### Method 1: Manual Deployment

```bash
npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:Cordero080/Transcendence-3D-2.0.git main:gh-pages
```

### Method 2: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml` to auto-deploy on push to main.

## Benefits

✅ Smaller repository size  
✅ Faster git operations  
✅ Optimized production builds  
✅ Automatic code splitting and tree-shaking  
✅ Industry standard approach

## Debug Mode

### Debug Transcendence Button

The game includes a debug button to instantly trigger the transcendence effect for testing. This is useful during development to test the transcendence sequence without playing through the entire game.

#### HTML Code (Button)

Add this button in `index.html` within the `.startButtonContainer` div (after the RESET button):

```html
<!-- Debug button for testing transcendence -->
<button
  class="ResetButton"
  id="debugTranscendBtn"
  style="background: oklch(55.657% 0.27058 200); margin-left: 10px;"
>
  DEBUG TRANSCEND
</button>
```

**Full Context:**

```html
<div class="startButtonContainer">
  <button class="StartButton">START</button>
  <button class="ResetButton">RESET</button>
  <!-- Debug button for testing transcendence -->
  <button
    class="ResetButton"
    id="debugTranscendBtn"
    style="background: oklch(55.657% 0.27058 200); margin-left: 10px;"
  >
    DEBUG TRANSCEND
  </button>
</div>
```

#### JavaScript Code (Event Listener)

Add this code in `app.js` after the RESET button event listener (around line 2586):

```javascript
// DEBUG TRANSCEND: instantly trigger transcendence for testing
const debugTranscendBtn = document.getElementById("debugTranscendBtn");
if (debugTranscendBtn) {
  debugTranscendBtn.addEventListener("click", () => {
    console.log(
      "🧪 DEBUG TRANSCEND clicked - triggering transcendence effects"
    );
    // Trigger the mystical transcendence effect first
    triggerMysticalTranscendence(9000);
    // Trigger intergalactic beam 1 second later (matching the actual game sequence)
    setTimeout(() => {
      triggerIntergalacticBeam();
    }, 1000);
    // Show the transcendence overlay after effects complete
    setTimeout(() => {
      showWhiteTranscendenceOverlay();
    }, 9000);
  });
}
```

#### To Remove Debug Mode (Production):

**Option 1: Comment out the HTML button**

```html
<!-- <button class="ResetButton" id="debugTranscendBtn" style="background: oklch(55.657% 0.27058 200); margin-left: 10px;">DEBUG TRANSCEND</button> -->
```

**Option 2: Hide with CSS**

```html
<button
  class="ResetButton"
  id="debugTranscendBtn"
  style="background: oklch(55.657% 0.27058 200); margin-left: 10px; display: none;"
>
  DEBUG TRANSCEND
</button>
```

**Option 3: Remove both HTML and JavaScript code entirely**

The JavaScript code already includes a safety check (`if (debugTranscendBtn)`), so it won't throw errors if the button doesn't exist.

#### Return to Regular Game Mode:

After triggering debug transcendence, click the "PLAY AGAIN" button or use the "RESET" button to return to normal gameplay.
