@echo off
echo Deploying your personal website to GitHub Pages...
echo.

echo Step 1: Setting up GitHub remote...
git remote set-url origin https://github.com/Wajidsiyal/personal-website.git

echo Step 2: Pushing to GitHub...
git push -u origin main

echo Step 3: Building and deploying...
npm run deploy

echo.
echo Your website will be live at: https://Wajidsiyal.github.io/personal-website/
echo.
echo If this fails, manually enable GitHub Pages in your repository settings.
pause
