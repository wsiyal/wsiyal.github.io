@echo off
echo Fixing GitHub Pages deployment for wsiyal.github.io...
echo.

echo Step 1: Checking current git status...
git status

echo.
echo Step 2: Setting up correct GitHub remote...
git remote remove origin
git remote add origin https://github.com/wsiyal/wsiyal.github.io.git

echo.
echo Step 3: Adding all files and committing...
git add .
git commit -m "Deploy personal website to wsiyal.github.io"

echo.
echo Step 4: Pushing to GitHub...
git push -u origin main --force

echo.
echo Step 5: Deploying with gh-pages...
npm run deploy

echo.
echo Deployment complete! Now go to:
echo https://github.com/wsiyal/wsiyal.github.io/settings/pages
echo.
echo Enable GitHub Pages with:
echo - Source: Deploy from a branch
echo - Branch: main (or gh-pages if that was created)
echo - Folder: /root
echo.
echo Your website will be at: https://wsiyal.github.io/
pause
