/**
 * TechBuddyStudio - Central Site Configuration
 * 
 * All business details, contact information, social links, and external URLs
 * are managed centrally from this file for consistency and easy updates.
 */

// Central domain configuration (can be configured via environment variable)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://techbuddystudio.vercel.app";

export const siteConfig = {
  name: "TechBuddyStudio",
  legalName: "TechBuddyStudio",
  tagline: "Modern Websites for Growing Businesses",
  description:
    "TechBuddyStudio designs and builds modern, fast, mobile-friendly websites and web experiences that help businesses build credibility, showcase their services, and make it easier for customers to connect.",
  url: SITE_URL,
  founder: {
    name: "Anmol Tiwari",
    role: "Founder & Full Stack Developer",
    location: "India",
    experienceHighlight: "Java Full Stack Development Intern — Mphasis",
    portfolioUrl: "https://iamanmol.vercel.app/",
    githubUrl: "https://github.com/AnmolTwari",
    linkedinUrl: "https://linkedin.com/in/openit",
  },
  contact: {
    email: "techbuddystudio@gmail.com",
    mailtoUrl: "mailto:techbuddystudio@gmail.com",
    phone: "8726616847",
    displayPhone: "+91 87266 16847",
    whatsappNumber: "918726616847", // International standard format for India (91 + 10 digits)
    whatsappMessage:
      "Hi TechBuddyStudio, I came across your website and would like to discuss a website for my business.",
    get whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
        this.whatsappMessage
      )}`;
    },
    location: "India",
  },
  socials: {
    instagram: {
      name: "Instagram",
      handle: "@techbuddystudio",
      url: "https://www.instagram.com/techbuddystudio/",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/openit",
    },
    github: {
      name: "GitHub",
      url: "https://github.com/AnmolTwari",
    },
    founderPortfolio: {
      name: "Anmol's Portfolio",
      url: "https://iamanmol.vercel.app/",
    },
  },
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
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
    "Anmol Tiwari",
    "high performance web applications",
  ],
};

export type SiteConfig = typeof siteConfig;
