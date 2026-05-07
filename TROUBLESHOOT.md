# GitHub Pages 404 Error Troubleshooting

## The Issue
Your website shows 404 at https://wsiyal.github.io/ because GitHub Pages isn't properly configured.

## Step-by-Step Fix

### 1. Verify Repository Exists
- Go to: https://github.com/wsiyal/wsiyal.github.io
- If this shows 404, the repository doesn't exist yet
- Create it with EXACT name: `wsiyal.github.io`

### 2. Push Your Code
```bash
git remote set-url origin https://github.com/wsiyal/wsiyal.github.io.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to repository → Settings → Pages
- Set:
  - Source: "Deploy from a branch"
  - Branch: `main`
  - Folder: `/root`
- Click "Save"

### 4. Wait for Deployment
- GitHub Pages takes 2-10 minutes to deploy
- Check "Actions" tab for build status

### 5. Alternative: Use gh-pages Branch
If main branch doesn't work:
```bash
npm run deploy
```
Then in Pages settings, select `gh-pages` branch instead of `main`.

### 6. Check Common Issues
- Repository must be PUBLIC
- Repository name must be EXACTLY `wsiyal.github.io`
- Wait at least 10 minutes after enabling Pages
- Check Actions tab for deployment errors

## Expected Result
After successful deployment: https://wsiyal.github.io/ should show your personal website.
