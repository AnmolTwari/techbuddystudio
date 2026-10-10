<div align="center">

# ⚡ TechBuddyStudio

**Modern, Fast & Conversion-Focused Websites for Growing Businesses**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-techbuddystudio.vercel.app-6366F1?style=for-the-badge&logo=vercel&logoColor=white)](https://techbuddystudio.vercel.app/)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  <a href="https://techbuddystudio.vercel.app/"><strong>Explore the Live Studio Website »</strong></a>
  <br />
  <br />
  <a href="#-key-features">Key Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-mobile-first-design">Mobile Experience</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-contact--founder">Founder & Contact</a>
</p>

</div>

---

## 🌟 Overview

**TechBuddyStudio** is a boutique digital studio website engineered to showcase premium web design and full-stack development services for small businesses, hospitality brands, retail shops, startups, and growing enterprises.

Designed and built from the ground up with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, the platform bridges the gap between real-world business excellence and high-converting online digital experiences.

🔗 **Live Production URL:** [https://techbuddystudio.vercel.app/](https://techbuddystudio.vercel.app/)

---

## 🚀 Key Features

- 🌓 **Adaptive Light / Dark Theme Engine**: Instant theme switching with zero hydration flicker, persistent `localStorage` preference, and high-contrast color palettes.
- 📱 **100% Mobile-First & Fully Responsive**: Tailored viewport layouts, fluid typography, touch-optimized targets (>=44px), and adaptive drawers for smartphones, tablets, and desktops.
- 💬 **WhatsApp Conversion Funnels**: Direct 1-click WhatsApp inquiry generators, floating contact concierge, and pre-filled project inquiry text.
- 🖥️ **Interactive Industry Mockup Showcase**:
  - **Hospitality & Resorts**: Live direct booking ROI calculator, zero-commission perk highlights, and instant quote estimation.
  - **Adventure Travel**: Interactive multi-day expedition itinerary with real-time batch seat counters.
  - **Retail & Point-of-Sale**: Multi-branch POS management preview with inventory status indicators.
- 🎨 **Brand Identity Suite**:
  - Multi-resolution `.ico` icon (16px to 256px)
  - Infinite-resolution SVG favicon (`/favicon.svg`)
  - Apple Touch Icons (`/apple-touch-icon.png`)
  - Web App Manifest (`/site.webmanifest`)
- 🔍 **SEO & OpenGraph Optimization**:
  - Schema.org `ProfessionalService` JSON-LD structured data
  - Dynamic `sitemap.xml` and `robots.txt` generators
  - Open Graph (`og:image`) and Twitter Card metadata for rich social sharing

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (Strict type safety) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & CSS Custom Properties |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Icons** | [Lucide React](https://lucide.dev/) & Custom Vector SVGs |
| **Deployment** | [Vercel](https://vercel.com/) (Edge Network CDN, Automated CI/CD) |

---

## 📱 Mobile-First Design

TechBuddyStudio is engineered with a strict **mobile-first mindset**:
- **Zero Horizontal Overflow**: Guaranteed safe rendering on narrow screen viewports (from 320px up to ultra-wide 4K).
- **Smooth Drawer Navigation**: Accessible mobile menu with smooth animations and rapid action buttons.
- **Floating Concierge**: Position-aware WhatsApp widget that adapts dynamically to mobile keyboard overlays and safe areas.
- **Optimized Asset Delivery**: Modern WebP/PNG and SVG vector assets for lightning-fast mobile loading on 3G/4G/5G connections.

---

## 📂 Project Structure

```bash
techbuddystudio/
├── public/                     # Static public assets & favicons
│   ├── apple-touch-icon.png    # 180x180 iOS Touch Icon
│   ├── favicon-16x16.png       # 16x16 PNG Favicon
│   ├── favicon-32x32.png       # 32x32 PNG Favicon
│   ├── favicon-48x48.png       # 48x48 PNG Favicon
│   ├── favicon.ico             # Multi-size ICO Favicon
│   ├── favicon.svg             # Scalable Vector Favicon
│   ├── icon-192.png            # 192x192 PWA Icon
│   ├── icon-512.png            # 512x512 PWA Icon
│   ├── logo.png                # Official Studio Logo
│   ├── og-image.png            # Open Graph Social Banner
│   └── site.webmanifest        # Web App Manifest
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── apple-icon.png      # Next.js Apple Icon Route
│   │   ├── favicon.ico         # Next.js Favicon Route
│   │   ├── globals.css         # Global Tailwind & Theme CSS
│   │   ├── icon.png            # Next.js Icon Route
│   │   ├── icon.svg            # Next.js SVG Icon Route
│   │   ├── layout.tsx          # Root Layout with SEO, Metadata & JSON-LD
│   │   ├── page.tsx            # Main Landing Page
│   │   ├── robots.ts           # Dynamic Robots.txt
│   │   └── sitemap.ts          # Dynamic Sitemap.xml
│   ├── components/             # Reusable UI Components
│   │   ├── about-section.tsx   # Founder Story & Positioning
│   │   ├── contact-section.tsx # Interactive Form & WhatsApp Generator
│   │   ├── faq-section.tsx     # Expandable Business FAQ
│   │   ├── featured-work.tsx   # Curated Project Case Studies
│   │   ├── final-cta.tsx       # Bottom Conversion CTA
│   │   ├── floating-whatsapp.tsx# Floating Action Widget
│   │   ├── footer.tsx          # Studio Footer & Socials
│   │   ├── hero.tsx            # Hero Section with CTA Badges
│   │   ├── icons.tsx           # Custom Brand & Social Icons
│   │   ├── interactive-browser-mockup.tsx # Interactive App Simulations
│   │   ├── navbar.tsx          # Responsive Header with Theme Switcher
│   │   ├── pricing-cta.tsx     # Custom Estimate Callout
│   │   ├── problem-section.tsx # Business Pain Points & Solutions
│   │   ├── process-section.tsx # 4-Step Studio Process
│   │   ├── services-section.tsx# Core Service Offerings
│   │   ├── tech-stack.tsx      # Technologies & Frameworks
│   │   ├── testimonials-placeholder.tsx # Client Trust Metrics
│   │   ├── theme-provider.tsx  # Light/Dark Mode Context
│   │   └── why-us.tsx          # Key Value Propositions
│   ├── config/
│   │   └── site.ts             # Centralized Business & Contact Configuration
│   └── data/                   # Structured Content & Project Case Studies
│       ├── faq.ts
│       ├── pricing.ts
│       ├── problems.ts
│       ├── process.ts
│       ├── projects.ts
│       └── services.ts
├── scripts/                    # Build & Asset Generation Utilities
│   ├── generate-favicons.js    # Multi-resolution ICO & PNG builder
│   └── generate-svg-favicon.js # SVG icon generator
├── package.json
└── tsconfig.json
```

---

## ⚡ Getting Started

### Prerequisites

- **Node.js**: v18.17 or higher (Node 20+ / 24+ recommended)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### 1. Clone the repository

```bash
git clone https://github.com/AnmolTwari/techbuddystudio.git
cd techbuddystudio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## 🌐 Deployment

The project is optimized for instant deployment on [Vercel](https://vercel.com/):

1. Push your repository to GitHub.
2. Import the repository into your Vercel Dashboard.
3. Vercel automatically detects Next.js settings and handles the build.
4. Set the environment variable `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://techbuddystudio.vercel.app`).

---

## 👤 Studio & Contact

**TechBuddyStudio** — Full-Cycle Web & Digital Systems Studio.

- 🌐 **Live Website**: [techbuddystudio.vercel.app](https://techbuddystudio.vercel.app/)
- 💼 **LinkedIn**: [linkedin.com](https://linkedin.com)
- 🐙 **GitHub**: [github.com/AnmolTwari/techbuddystudio](https://github.com/AnmolTwari/techbuddystudio)
- 📸 **Instagram**: [@techbuddystudio](https://www.instagram.com/techbuddystudio/)
- ✉️ **Email**: [techbuddystudio@gmail.com](mailto:techbuddystudio@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
