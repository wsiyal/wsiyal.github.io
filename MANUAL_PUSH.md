# Manual GitHub Push Instructions

## Issue: Repository Not Found
The automated push is failing with "Repository not found".

## Please Verify:

### 1. Check Repository Details
- Go to: https://github.com/wsiyal/wsiyal.github.io
- Confirm the repository exists and is PUBLIC
- Check the exact spelling: `wsiyal.github.io`

### 2. Manual Push Commands
If the repository exists, run these commands manually:

```bash
cd c:\Users\ws\CascadeProjects\personal-website

# Remove and re-add remote
git remote remove origin
git remote add origin https://github.com/wsiyal/wsiyal.github.io.git

# Push your code
git push -u origin main

# Deploy with gh-pages
npm run deploy
```

### 3. Alternative: Use GitHub Desktop
If command line doesn't work:
1. Install GitHub Desktop
2. Clone your repository
3. Copy your website files into the folder
4. Commit and push

### 4. Enable GitHub Pages
After successful push:
- Go to: https://github.com/wsiyal/wsiyal.github.io/settings/pages
- Source: "Deploy from a branch"
- Branch: main
- Folder: /root
- Click Save

## Expected Result
Website live at: https://wsiyal.github.io/
