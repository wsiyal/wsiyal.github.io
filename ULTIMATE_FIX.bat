@echo off
echo Ultimate GitHub Pages fix...
echo.

echo Step 1: Clean reset...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main branch has content...
git checkout main
git add .
git commit -m "Deploy website content to main branch"

echo Step 3: Force push main branch...
git push -u origin main --force

echo Step 4: Create gh-pages branch with dist content...
git checkout --orphan gh-pages
git --work-tree add -A dist/
git commit -m "GitHub Pages deployment"

echo Step 5: Push gh-pages branch...
git push origin gh-pages --force

echo Step 6: Return to main...
git checkout main

echo.
echo SUCCESS! Now go to:
echo https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo Set:
echo - Source: Deploy from a branch
echo - Branch: gh-pages (if exists) OR main (if not)
echo - Folder: /root
echo.
echo Your website: https://wsiyal.github.io/
pause
