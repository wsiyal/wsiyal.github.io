@echo off
echo Final GitHub Pages solution...
echo.

echo Step 1: Reset completely...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main branch has all files...
git checkout main
git add .
git commit -m "Complete website deployment"

echo Step 3: Force push main branch...
git push -u origin main --force

echo Step 4: Create gh-pages with proper content...
git checkout --orphan gh-pages
git rm -rf .
git add dist/
git commit -m "GitHub Pages deployment"

echo Step 5: Push gh-pages...
git push origin gh-pages --force

echo Step 6: Return to main...
git checkout main

echo.
echo DEPLOYMENT COMPLETE!
echo.
echo Go to: https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo Settings:
echo - Source: Deploy from a branch  
echo - Branch: gh-pages (recommended) OR main
echo - Folder: /root
echo.
echo Your website: https://wsiyal.github.io/
pause
