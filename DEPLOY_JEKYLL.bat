@echo off
echo Deploying Jekyll site to GitHub Pages...
echo.

echo Step 1: Clean remote setup...
git remote remove origin
git remote add origin https://github.com/Wajidsiyal/wsiyal.github.io.git

echo Step 2: Add Jekyll files...
git add .
git commit -m "Deploy Jekyll site with index.md and _config.yml"

echo Step 3: Push to GitHub...
git push -u origin main --force

echo.
echo DEPLOYMENT COMPLETE!
echo.
echo Your website: https://wsiyal.github.io/
echo.
echo GitHub will build Jekyll site automatically.
echo Wait 2-5 minutes then check your website.
pause
