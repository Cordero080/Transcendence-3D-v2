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
