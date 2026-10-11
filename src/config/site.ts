/**
 * TechBuddyStudio - Central Site Configuration
 * 
 * All business details, contact information, social links, and external URLs
 * are managed centrally from this file for consistency and easy updates.
 */

// Central domain configuration (can be configured via environment variable)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://techbuddystudio.com";

export const siteConfig = {
  name: "TechBuddyStudio",
  legalName: "TechBuddyStudio",
  tagline: "Custom Web Development & Business Solutions",
  description:
    "TechBuddyStudio builds high-performance custom websites and business applications, specializing in hospitality, retail, and SaaS solutions.",
  url: SITE_URL,
  studio: {
    name: "TechBuddyStudio Team",
    role: "Custom Web & Business Solutions Studio",
    location: "India & Worldwide",
    experienceHighlight: "Full-Stack Web Engineering & High-Performance Architecture",
    portfolioUrl: "/work",
  },
  contact: {
    email: "techbuddystudio@gmail.com",
    mailtoUrl: "mailto:techbuddystudio@gmail.com",
    phone: "9128726616",
    displayPhone: "+91 91287 26616",
    location: "India (Worldwide Client Delivery)",
  },
  socials: {
    instagram: {
      name: "Instagram",
      handle: "@techbuddystudio",
      url: "https://www.instagram.com/techbuddystudio/",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com",
    },
    github: {
      name: "GitHub",
      url: "https://github.com",
    },
  },
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "Insights", href: "/insights" },
    { name: "Process", href: "/process" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ],
  keywords: [
    "TechBuddyStudio",
    "professional web development",
    "business website design",
    "custom web development",
    "Next.js web development",
    "full-stack web development",
    "mobile friendly websites",
    "hospitality website development",
    "e-commerce websites",
    "high performance web applications",
  ],
};

export type SiteConfig = typeof siteConfig;
