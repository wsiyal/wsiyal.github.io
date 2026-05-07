@echo off
echo Fixing GitHub Pages deployment...
echo.

echo Step 1: Reset everything...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Force push to main branch...
git add .
git commit -m "Final deployment - GitHub Pages setup"
git push -u origin main --force

echo Step 3: Try gh-pages deployment...
npm run deploy

echo Step 4: Alternative - push dist directly...
git checkout --orphan gh-pages
git --work-tree add -A dist/
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages --force
git checkout main

echo.
echo Now check: https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo Should show main branch with /root folder
echo.
echo Your website: https://wsiyal.github.io/
pause
