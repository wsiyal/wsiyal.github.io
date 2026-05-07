# Root GitHub Pages Deployment

## For website at: https://wsiyal.github.io/

### Step 1: Create Repository
- Go to GitHub and create repository named: `wsiyal.github.io`
- **Important:** Repository name must match your username exactly
- Choose **Public**
- Don't initialize with README

### Step 2: Deploy
Run the batch file or use commands:
```bash
git remote set-url origin https://github.com/wsiyal/wsiyal.github.io.git
git push -u origin main
npm run deploy
```

### Step 3: Enable GitHub Pages
- Go to: https://github.com/wsiyal/wsiyal.github.io
- Settings → Pages
- Source: "Deploy from a branch"
- Branch: `main`
- Folder: `/root`
- Click Save

### Your Website URL:
https://wsiyal.github.io/

## Notes:
- This is a special GitHub Pages feature for user pages
- Repository name must be exactly `username.github.io`
- Automatically serves from root URL without subdirectory
