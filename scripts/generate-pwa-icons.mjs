import sharp from 'sharp';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'client', 'public');
const iconsDir = join(publicDir, 'icons');

if (!existsSync(iconsDir)) {
  mkdirSync(iconsDir, { recursive: true });
}

async function generateIcon(size, filename, maskable = false) {
  const padding = maskable ? Math.floor(size * 0.15) : 0;
  const innerSize = size - padding * 2;
  const fontSize = Math.floor(innerSize * 0.6);
  const centerX = size / 2;
  const centerY = size / 2;

  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0b1a2e;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0d4f4a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1bcb92;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#bg)" />
      <text
        x="${centerX}"
        y="${centerY}"
        font-family="Arial Black, Arial, sans-serif"
        font-size="${fontSize}"
        font-weight="900"
        fill="white"
        text-anchor="middle"
        dominant-baseline="central"
      >S</text>
    </svg>
  `;

  const outputPath = join(filename.includes('apple') ? publicDir : iconsDir, filename.replace('icons/', ''));
  
  await sharp(Buffer.from(svg))
    .png()
    .toFile(outputPath);

  console.log(`Generated: ${outputPath}`);
}

async function main() {
  console.log('Generating PWA icons for SuVerse...');
  
  await generateIcon(180, 'apple-touch-icon.png', false);
  await generateIcon(192, 'icon-192.png', false);
  await generateIcon(512, 'icon-512.png', false);
  await generateIcon(192, 'icon-192-maskable.png', true);
  await generateIcon(512, 'icon-512-maskable.png', true);

  console.log('Done! All icons generated.');
}

main().catch(console.error);
