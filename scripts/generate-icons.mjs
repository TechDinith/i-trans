import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const OUT = path.join(process.cwd(), "public");
mkdirSync(OUT, { recursive: true });

const TEAL = "#23765C";
const CYAN = "#02FDFB";
const BG = "#0a0a0f";

/**
 * Square brand mark: rounded tile on the site background, teal border,
 * gradient "iT" centred. Mirrors the opengraph-image card so the favicon,
 * PWA icon and social card all read as the same mark.
 */
function svg(size) {
  const r = size * 0.22;
  const fontSize = size * 0.46;
  const id = "g";
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${TEAL}"/>
      <stop offset="100%" stop-color="${CYAN}"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="${BG}"/>
  <rect x="${size * 0.09}" y="${size * 0.09}" width="${size * 0.82}" height="${size * 0.82}"
        rx="${r}" fill="none" stroke="url(#${id})" stroke-width="${size * 0.045}"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="central"
        font-family="Helvetica, Arial, sans-serif" font-size="${fontSize}"
        font-weight="800" fill="url(#${id})" letter-spacing="-${size * 0.02}">iT</text>
</svg>`;
}

const targets = [
  { file: "icon-32x32.png", size: 32 },
  { file: "apple-icon.png", size: 180 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
];

for (const { file, size } of targets) {
  const buf = await sharp(Buffer.from(svg(size * 4)))
    .resize(size, size)
    .png({ compressionLevel: 9 })
    .toBuffer();
  writeFileSync(path.join(OUT, file), buf);
  console.log(`${file.padEnd(18)} ${size}x${size}  ${(buf.length / 1024).toFixed(1)} KB`);
}

writeFileSync(path.join(OUT, "icon.svg"), svg(512), "utf8");
console.log("icon.svg          vector");
