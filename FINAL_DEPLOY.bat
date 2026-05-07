@echo off
echo Final deployment to wsiyal.github.io...
echo.

echo Step 1: Reset git remote...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Add all files...
git add .
git commit -m "Deploy personal website to GitHub Pages"

echo Step 3: Push to GitHub...
git push -u origin main --force

echo Step 4: Deploy with gh-pages...
npm run deploy

echo.
echo SUCCESS! Now enable GitHub Pages:
echo https://github.com/Wajidsiyal/wsiyal.github.io/settings/pages
echo.
echo Settings:
echo - Source: Deploy from a branch
echo - Branch: main (or gh-pages)
echo - Folder: /root
echo.
echo Your website will be at: https://wsiyal.github.io/
pause
