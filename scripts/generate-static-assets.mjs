/**
 * Generate static assets that need to exist in public/ before the build:
 * - apple-touch-icon.png (180x180)
 * - og-default.jpg (1200x630 fallback OG image)
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');

// ── Apple Touch Icon (180×180) ──────────────────────────────────────
async function generateAppleTouchIcon() {
  const svgSource = readFileSync(join(publicDir, 'favicon.svg'));
  await sharp(svgSource)
    .resize(180, 180)
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('Created public/apple-touch-icon.png');
}

// ── OG Default Image (1200×630) ─────────────────────────────────────
async function generateOgDefault() {
  // Create a branded dark card with the site name
  const svgMarkup = `
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="630" fill="#141210"/>
      <line x1="570" y1="230" x2="630" y2="230" stroke="#a97c50" stroke-width="3"/>
      <text x="600" y="310" font-family="Georgia, serif" font-size="64" font-weight="400"
            fill="#FAF9F7" text-anchor="middle" letter-spacing="-1">Eclipse Media</text>
      <text x="600" y="365" font-family="Arial, sans-serif" font-size="24"
            fill="#a97c50" text-anchor="middle">Melbourne Wedding Photography</text>
      <line x1="570" y1="400" x2="630" y2="400" stroke="#a97c50" stroke-width="3"/>
    </svg>`;

  await sharp(Buffer.from(svgMarkup))
    .jpeg({ quality: 90 })
    .toFile(join(publicDir, 'og-default.jpg'));
  console.log('Created public/og-default.jpg');
}

await generateAppleTouchIcon();
await generateOgDefault();
console.log('Done generating static assets.');
