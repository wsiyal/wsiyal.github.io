@echo off
echo Complete GitHub Pages fix...
echo.

echo Step 1: Clean slate...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main branch has index.html...
git checkout main
git add .
git commit -m "Add website files to main branch"

echo Step 3: Force push main branch...
git push -u origin main --force

echo Step 4: Create proper gh-pages branch...
git checkout --orphan gh-pages
git rm -rf .
git cp -r dist/* .
git add .
git commit -m "Deploy website to GitHub Pages"

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
echo - Branch: gh-pages
echo - Folder: /root
echo.
echo Your website: https://wsiyal.github.io/
pause
