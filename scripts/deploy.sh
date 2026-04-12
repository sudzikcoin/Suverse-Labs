#!/bin/bash
set -euo pipefail

export PATH="/root/.nvm/versions/node/v20.19.6/bin:$PATH"

cd /opt/suverse-site

echo "============================================"
echo "SuVerse deploy started at $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "============================================"

# Step 1: Generate new post
echo "[1/3] Generating new post..."
node scripts/generate-post.js

# Step 2: Build
echo "[2/3] Building..."
npm run build

# Step 3: Deploy
echo "[3/3] Deploying to /var/www/suverse.io/..."
cp -r dist/public/* /var/www/suverse.io/

echo "============================================"
echo "Deployed successfully at $(date -u '+%Y-%m-%d %H:%M:%S UTC')"
echo "============================================"
