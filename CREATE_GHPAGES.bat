@echo off
echo Creating gh-pages branch for GitHub Pages...
echo.

echo Step 1: Reset remote...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Ensure main has content...
git checkout main
git add .
git commit -m "Main branch content ready"

echo Step 3: Push main branch...
git push -u origin main --force

echo Step 4: Create gh-pages branch with dist...
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "GitHub Pages deployment files"

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
