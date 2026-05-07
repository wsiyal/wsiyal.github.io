@echo off
echo Creating gh-pages branch for GitHub Pages...
echo.

echo Step 1: Clean remote setup...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main branch has content...
git checkout main
git add .
git commit -m "Main branch content ready"

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
echo SUCCESS! Now go to:
echo https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo You should now see "gh-pages" in branch dropdown!
echo Select:
echo - Branch: gh-pages
echo - Folder: /root
echo - Click Save
echo.
echo Your website: https://wsiyal.github.io/
pause
