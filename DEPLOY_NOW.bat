@echo off
echo Deploying to GitHub Pages now...
echo.

echo Step 1: Reset remote...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Add all files and commit...
git add .
git commit -m "Deploy website - GitHub Pages ready"

echo Step 3: Force push to main...
git push -u origin main --force

echo Step 4: Create gh-pages branch with dist...
git checkout --orphan gh-pages
git rm -rf .
git add dist/
git commit -m "GitHub Pages deployment"

echo Step 5: Push gh-pages...
git push origin gh-pages --force

echo Step 6: Return to main...
git checkout main

echo.
echo SUCCESS! Go to:
echo https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo Set:
echo - Source: Deploy from a branch
echo - Branch: gh-pages
echo - Folder: /root
echo.
echo Your website: https://wsiyal.github.io/
pause
