# Deployment Instructions

## Quick Deployment Steps

### 1. Open your terminal/command prompt in this folder
```bash
cd c:\Users\ws\CascadeProjects\personal-website
```

### 2. Push to GitHub
```bash
git remote set-url origin https://github.com/Wajidsiyal/personal-website.git
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to: https://github.com/Wajidsiyal/personal-website
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Set:
   - Source: "Deploy from a branch"
   - Branch: `main`
   - Folder: `/root`
5. Click "Save"

### 4. Your website will be live at:
https://Wajidsiyal.github.io/personal-website/

## Alternative: One-Command Deployment
If you want to automate this completely, run:
```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

Then in GitHub Pages settings, select the `gh-pages` branch instead of `main`.
