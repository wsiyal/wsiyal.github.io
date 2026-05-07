@echo off
echo Pushing your website to GitHub...
echo.

echo Step 1: Remove old remote...
git remote remove origin

echo Step 2: Add new remote...
git remote add origin https://github.com/wsiyal/wsiyal.github.io.git

echo Step 3: Push to GitHub...
git push -u origin main

echo Step 4: Deploy with gh-pages...
npm run deploy

echo.
echo If this fails, check:
echo 1. Repository exists at https://github.com/wsiyal/wsiyal.github.io
echo 2. Repository is PUBLIC
echo 3. Repository name is EXACTLY: wsiyal.github.io
echo.
echo After successful push, enable GitHub Pages at:
echo https://github.com/wsiyal/wsiyal.github.io/settings/pages
pause
