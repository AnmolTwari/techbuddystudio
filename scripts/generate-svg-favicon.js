const fs = require('fs');
const path = require('path');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="tbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#443dff" />
      <stop offset="50%" stop-color="#3931db" />
      <stop offset="100%" stop-color="#2f27ce" />
    </linearGradient>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0c0827" />
      <stop offset="100%" stop-color="#050316" />
    </linearGradient>
    <filter id="badgeGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="4" stdDeviation="12" flood-color="#443dff" flood-opacity="0.35" />
    </filter>
  </defs>

  <!-- Circular dark background badge -->
  <circle cx="256" cy="256" r="236" fill="url(#bgGradient)" stroke="#221a5a" stroke-width="8" filter="url(#badgeGlow)" />
  
  <!-- Subtle accent inner ring -->
  <circle cx="256" cy="256" r="230" fill="none" stroke="url(#tbGradient)" stroke-width="2.5" stroke-opacity="0.5" />

  <!-- TB Monogram Emblem -->
  <g id="tb-monogram" transform="translate(14, 0)">
    <!-- Letter T: Solid Pure White -->
    <path 
      d="M 116 148 L 268 148 L 268 186 L 210 186 L 210 364 L 174 364 L 174 186 L 116 186 Z" 
      fill="#FFFFFF" 
    />
    
    <!-- Letter B: Vibrant Studio Gradient -->
    <path 
      d="M 256 148 L 332 148 C 374 148, 398 170, 398 204 C 398 226, 386 242, 366 250 C 394 259, 406 280, 406 308 C 406 344, 376 364, 332 364 L 256 364 Z 
         M 292 182 L 292 238 L 330 238 C 350 238, 362 227, 362 210 C 362 193, 350 182, 330 182 Z 
         M 292 274 L 292 330 L 334 330 C 356 330, 368 318, 368 302 C 368 286, 356 274, 334 274 Z" 
      fill="url(#tbGradient)" 
    />
  </g>
</svg>
`;

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');

fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent);
fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent);
console.log('Saved favicon.svg in public/ and src/app/icon.svg');
