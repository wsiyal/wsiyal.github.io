@echo off
echo Deploying your personal website to wsiyal.github.io...
echo.

echo Step 1: Setting up GitHub remote...
git remote set-url origin https://github.com/wsiyal/wsiyal.github.io.git

echo Step 2: Pushing to GitHub...
git push -u origin main

echo Step 3: Building and deploying...
npm run deploy

echo.
echo Your website will be live at: https://wsiyal.github.io/
echo.
echo If this fails, manually enable GitHub Pages in your repository settings.
pause
