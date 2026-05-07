@echo off
echo Complete GitHub Pages deployment fix...
echo.

echo Step 1: Reset remote connection...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main branch has website files...
git checkout main
git add .
git commit -m "Deploy complete website to main"

echo Step 3: Force push main branch...
git push -u origin main --force

echo Step 4: Create gh-pages branch with dist content...
git checkout --orphan gh-pages
git rm -rf .
git add dist/
git commit -m "GitHub Pages deployment"

echo Step 5: Push gh-pages branch...
git push origin gh-pages --force

echo Step 6: Return to main...
git checkout main

echo.
echo DEPLOYMENT COMPLETE!
echo.
echo Now go to: https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo Set:
echo - Source: Deploy from a branch
echo - Branch: gh-pages (if available) OR main
echo - Folder: /root
echo.
echo Your website will be at: https://wsiyal.github.io/
pause
