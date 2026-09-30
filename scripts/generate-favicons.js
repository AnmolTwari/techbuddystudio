const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type ICO
  header.writeUInt16LE(count, 4); // Count

  let offset = 6 + count * 16;
  const entries = [];

  for (const { buffer, size } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size >= 256 ? 0 : size, 0); // Width
    entry.writeUInt8(size >= 256 ? 0 : size, 1); // Height
    entry.writeUInt8(0, 2); // Palette colors
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(buffer.length, 8); // Image data size
    entry.writeUInt32LE(offset, 12); // Image data offset
    entries.push(entry);
    offset += buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function run() {
  const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
  const publicDir = path.join(__dirname, '..', 'public');
  const appDir = path.join(__dirname, '..', 'src', 'app');

  console.log('Reading source logo from:', logoPath);

  // 1. Generate sizes for standard ICO (16, 32, 48, 64, 128, 256)
  const icoSizes = [16, 32, 48, 64, 128, 256];
  const icoBuffers = [];

  for (const size of icoSizes) {
    const buf = await sharp(logoPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    icoBuffers.push({ buffer: buf, size });
  }

  const icoBuffer = createIco(icoBuffers);

  // Save favicon.ico in both src/app/ (for App Router) and public/ (for root / static fallback)
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Saved src/app/favicon.ico and public/favicon.ico');

  // 2. Generate standard PNG favicons
  const pngTargets = [
    { name: 'favicon-16x16.png', size: 16, dir: publicDir },
    { name: 'favicon-32x32.png', size: 32, dir: publicDir },
    { name: 'favicon-48x48.png', size: 48, dir: publicDir },
    { name: 'apple-touch-icon.png', size: 180, dir: publicDir },
    { name: 'apple-icon.png', size: 180, dir: appDir },
    { name: 'icon.png', size: 192, dir: appDir },
    { name: 'icon-192.png', size: 192, dir: publicDir },
    { name: 'icon-512.png', size: 512, dir: publicDir },
  ];

  for (const target of pngTargets) {
    const dest = path.join(target.dir, target.name);
    await sharp(logoPath)
      .resize(target.size, target.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(dest);
    console.log(`Generated ${target.name} (${target.size}x${target.size}) -> ${dest}`);
  }

  // 3. Generate site.webmanifest
  const webManifest = {
    name: "TechBuddyStudio",
    short_name: "TechBuddy",
    description: "Modern Websites for Growing Businesses",
    start_url: "/",
    display: "standalone",
    background_color: "#080b11",
    theme_color: "#4f46e5",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };

  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(webManifest, null, 2));
  console.log('Saved public/site.webmanifest');

  console.log('All favicon assets generated successfully!');
}

run().catch(err => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
