#!/bin/bash

# Build the project
npm run build

# Navigate to the dist folder
cd dist

# Initialize git in the dist folder
git init
git branch -M main

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to the gh-pages branch
git push -f https://github.com/wsiyal/wsiyal.github.io.git main:gh-pages

# Go back to the root directory
cd ..
