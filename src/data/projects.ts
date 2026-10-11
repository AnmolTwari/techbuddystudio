export type ProjectKind = "showcase" | "concept" | "client";

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  projectKind: ProjectKind;
  kindBadge: string;
  isFeatured: boolean;
  featuredRank?: number;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  statusBadge?: string;
  themeColor: {
    accent: string;
    lightBg: string;
    darkBg: string;
    badgeBorder: string;
  };
  highlights: {
    label: string;
    value: string;
  }[];
  // Verified case study breakdown
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    verifiedOutcome: string;
    architecture?: string[];
    technologyWhy?: { tech: string; reason: string }[];
    results?: string[];
  };
}

export const featuredProjects: Project[] = [
  {
    id: "directstay",
    title: "DirectStay",
    category: "Hospitality & Stays",
    tagline: "Direct-Booking & Guest Experience Platform",
    description:
      "An interactive hospitality demonstration showing commission-free direct booking, live room selection, interactive revenue calculator, and banquet inquiries.",
    projectKind: "showcase",
    kindBadge: "Interactive Showcase Demo",
    isFeatured: true,
    featuredRank: 1,
    features: [
      "Direct booking flow with instant room selection",
      "Interactive hotel revenue & commission-savings calculator",
      "Banquet & corporate event quotation builder",
      "Real-time guest inquiry routing with room preference prefill",
      "Hospitality-focused conversion architecture",
      "Fluid responsive layout tested across mobile viewports",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://hotel-fawn-seven.vercel.app/",
    githubUrl: "https://github.com",
    statusBadge: "Live Demo Available",
    themeColor: {
      accent: "#38bdf8",
      lightBg: "from-sky-500/10 via-slate-500/5 to-transparent",
      darkBg: "from-sky-950/40 via-slate-900/20 to-transparent",
      badgeBorder: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    },
    highlights: [
      { label: "Channel", value: "Direct Booking" },
      { label: "Live Demo", value: "Interactive" },
      { label: "Tech Stack", value: "Next.js + TS" },
    ],
    caseStudy: {
      overview: "Created to demonstrate how independent hotels and resorts can bypass 15–25% OTA commissions with a frictionless direct-booking channel.",
      challenge: "Independent properties often lose margins to third-party travel agencies because their direct websites lack interactive room previews and rapid quote builders.",
      solution: "Engineered a mobile-first direct booking UI featuring clear room tiering, interactive date selection, and an automated commission-savings calculator.",
      verifiedOutcome: "Demonstrates a complete direct-booking workflow without third-party commission overhead.",
      architecture: [
        "Next.js App Router for server-rendered hotel room pages",
        "Client-side availability calculator and room tier comparator",
        "Direct banquet & corporate event quotation builder",
        "Mobile-first responsive layout tailored for on-the-go travelers"
      ],
      technologyWhy: [
        { tech: "Next.js & React", reason: "Server rendering ensures high Google search visibility for resort keywords while delivering instant page transitions." },
        { tech: "Tailwind CSS", reason: "Utility styling ensures zero runtime CSS overhead and consistent styling across devices." },
        { tech: "TypeScript", reason: "Ensures type safety across room models, pricing rules, and reservation forms." }
      ],
      results: [
        "100% commission-free direct booking workflow simulation",
        "Sub-second page transitions across mobile viewports",
        "Integrated banquet and wedding event lead capture"
      ]
    },
  },
  {
    id: "wandertribe",
    title: "WanderTribe",
    category: "Travel & Expeditions",
    tagline: "Expedition Booking & Interactive Itinerary Platform",
    description:
      "An interactive travel demonstration featuring multi-day tour itineraries, batch schedule selectors, gear checklists, and inquiry funnels.",
    projectKind: "showcase",
    kindBadge: "Interactive Showcase Demo",
    isFeatured: true,
    featuredRank: 2,
    features: [
      "Dynamic trip discovery with difficulty & elevation badges",
      "Interactive day-by-day expedition itinerary breakdowns",
      "Departure schedule switcher with batch status indicators",
      "Traveler gear checklist and expedition preparation guide",
      "Direct inquiry modal with batch date selection",
      "Mobile-optimized high-engagement travel UI",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://traveller-alpha-sable.vercel.app/",
    githubUrl: "https://github.com",
    statusBadge: "Live Demo Available",
    themeColor: {
      accent: "#f59e0b",
      lightBg: "from-amber-500/10 via-stone-500/5 to-transparent",
      darkBg: "from-amber-950/40 via-stone-900/20 to-transparent",
      badgeBorder: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    highlights: [
      { label: "Format", value: "Expedition Trips" },
      { label: "Live Demo", value: "Interactive" },
      { label: "Tech Stack", value: "Next.js + Tailwind" },
    ],
    caseStudy: {
      overview: "Engineered to demonstrate modern travel experience marketing with interactive day-by-day itineraries and departure batch switching.",
      challenge: "Adventure tour operators struggle with high bounce rates on complex multi-day itinerary pages that overwhelm mobile users.",
      solution: "Designed visual difficulty indicators, interactive day expanders, departure calendar toggles, and 1-tap booking inquiries.",
      verifiedOutcome: "Provides structured multi-day itinerary navigation tested across mobile viewports.",
      architecture: [
        "Interactive day-by-day itinerary accordion with elevation data",
        "Batch selector with remaining slot counters",
        "Pre-trip gear checklist with interactive pack checkoffs",
        "Friction-free modal booking funnel"
      ],
      technologyWhy: [
        { tech: "Next.js 16", reason: "Pre-renders expedition detail pages for search discovery while enabling rapid batch toggling." },
        { tech: "Lucide React", reason: "Visual iconography for elevation, difficulty, climate, and batch schedules." }
      ],
      results: [
        "Structured multi-day itinerary breakdown tested on handheld screens",
        "1-tap inquiry capture with prefilled trip dates",
        "High-contrast outdoor visual aesthetic"
      ]
    },
  },
  {
    id: "shopmanager",
    title: "ShopManager",
    category: "Retail & Operations",
    tagline: "Omnichannel Business & Point-of-Sale Platform",
    description:
      "A full-stack business management application combining product cataloging, sales dashboards, and companion POS workflows.",
    projectKind: "showcase",
    kindBadge: "Interactive Showcase Demo",
    isFeatured: true,
    featuredRank: 3,
    features: [
      "Business sales dashboard with categorized revenue summaries",
      "Multi-category inventory & stock tracking system",
      "Companion POS workflow for counter checkout receipts",
      "Multi-tenant data isolation and secure auth structure",
      "Full-stack Spring Boot REST API integration with PostgreSQL",
      "High-density responsive data tables and analytics cards",
    ],
    techStack: [
      "React",
      "React Native / Expo",
      "Vite",
      "Tailwind CSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
    ],
    liveUrl: "https://managemyshop.vercel.app/",
    githubUrl: "https://github.com",
    statusBadge: "Live Demo Available",
    themeColor: {
      accent: "#443dff",
      lightBg: "from-[#443dff]/10 via-[#2f27ce]/5 to-transparent",
      darkBg: "from-[#2f27ce]/30 via-[#0c0827]/20 to-transparent",
      badgeBorder: "border-[#443dff]/30 text-[#443dff] bg-[#443dff]/10",
    },
    highlights: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Backend", value: "Spring Boot + PG" },
      { label: "Live Demo", value: "Interactive" },
    ],
    caseStudy: {
      overview: "A business software system demonstrating unified inventory control across digital storefronts and physical counter checkouts.",
      challenge: "Retail merchants lose track of inventory when sales happen across disparate web channels and physical store counters.",
      solution: "Developed unified stock management, thermal receipt generation workflows, and responsive sales reporting tables.",
      verifiedOutcome: "Integrated multi-branch data structures with real-time stock deductions.",
      architecture: [
        "Full-stack Spring Boot REST API with PostgreSQL connection pooling",
        "React Vite web dashboard with high-density data tables",
        "Companion POS counter interface for thermal receipt printing",
        "JWT-based role authentication and tenant isolation"
      ],
      technologyWhy: [
        { tech: "Java Spring Boot", reason: "Enterprise-grade concurrency and transactional guarantees for financial sales records." },
        { tech: "PostgreSQL", reason: "Relational foreign keys and indexing for stock levels across multiple branch locations." },
        { tech: "React & Vite", reason: "Rapid client-side rendering for responsive checkout counters and search filters." }
      ],
      results: [
        "Instant inventory sync across point-of-sale registers",
        "Automated thermal receipt output generation",
        "Clear financial sales summaries by category and payment method"
      ]
    },
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "resumatch-ai",
    title: "ResuMatch AI",
    category: "Talent & AI Matching",
    tagline: "Applicant Tracking & Resume Fit Analyzer",
    description:
      "A functional prototype exploring candidate evaluation by parsing resumes, scoring relevance against job descriptions, and organizing recruitment pipelines.",
    projectKind: "concept",
    kindBadge: "Concept Prototype",
    isFeatured: false,
    features: [
      "Resume parsing and key skill extraction architecture",
      "Job-description match scoring algorithm prototype",
      "Recruiter review workspace with smart candidate filtering",
      "FastAPI microservice backend integration",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL"],
    statusBadge: "Concept Prototype",
    themeColor: {
      accent: "#10b981",
      lightBg: "from-emerald-500/10 to-transparent",
      darkBg: "from-emerald-950/30 to-transparent",
      badgeBorder: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
    highlights: [
      { label: "Architecture", value: "React + FastAPI" },
      { label: "Format", value: "Concept Prototype" },
      { label: "Engine", value: "Python NLP" },
    ],
    caseStudy: {
      overview: "A technical prototype demonstrating AI-assisted talent evaluation and structured resume parsing.",
      challenge: "Recruitment teams face high fatigue screening hundreds of unstructured PDF resumes against specific job requirements.",
      solution: "Built a Python FastAPI service that parses candidate resumes, extracts core skill tokens, and calculates match scores against job postings.",
      verifiedOutcome: "Demonstrates microservice integration for automated applicant filtering.",
      architecture: [
        "FastAPI Python service for document extraction",
        "React frontend for recruiter pipeline review",
        "PostgreSQL database for applicant history"
      ],
      technologyWhy: [
        { tech: "Python FastAPI", reason: "Native ecosystem for document parsing and asynchronous high-throughput execution." },
        { tech: "React & TypeScript", reason: "Interactive drag-and-drop pipeline interface for recruitment teams." }
      ],
      results: [
        "Fast document tokenization and extraction in under 2 seconds",
        "Normalized skill taxonomy and job description match scoring"
      ]
    }
  },
  {
    id: "parksy",
    title: "ParkSy",
    category: "Smart Mobility",
    tagline: "Real-Time Parking Reservation Engine",
    description:
      "A functional architecture prototype demonstrating interactive slot bookings, WebSocket live sync, and digital visitor pass generation.",
    projectKind: "concept",
    kindBadge: "Concept Prototype",
    isFeatured: false,
    features: [
      "Interactive slot booking with live space occupancy updates",
      "Realtime occupancy sync via Socket.io event loop",
      "Digital visitor access passes & QR verification prototype",
      "Revenue tracking and peak-time usage reports",
    ],
    techStack: ["React", "Vite", "Express.js", "Socket.io", "MongoDB"],
    statusBadge: "Concept Prototype",
    themeColor: {
      accent: "#ec4899",
      lightBg: "from-pink-500/10 to-transparent",
      darkBg: "from-pink-950/30 to-transparent",
      badgeBorder: "border-pink-500/30 text-pink-400 bg-pink-500/10",
    },
    highlights: [
      { label: "Architecture", value: "React + Socket.io" },
      { label: "Format", value: "Concept Prototype" },
      { label: "Database", value: "MongoDB" },
    ],
    caseStudy: {
      overview: "A smart mobility prototype demonstrating WebSocket-driven real-time slot occupancy and digital QR pass generation.",
      challenge: "Commercial complexes and shared garages lose revenue and cause traffic bottlenecks when drivers cannot see real-time space availability.",
      solution: "Implemented a Socket.io event loop broadcasting live slot updates to all connected client browsers simultaneously.",
      verifiedOutcome: "Real-time state synchronization with zero page reload latency.",
      architecture: [
        "Socket.io bi-directional WebSocket server",
        "Express REST endpoints for reservation authentication",
        "MongoDB schema for multi-floor slot layouts",
        "QR code generator for digital visitor access passes"
      ],
      technologyWhy: [
        { tech: "Socket.io", reason: "Sub-100ms event broadcasting when a space is reserved or released." },
        { tech: "MongoDB", reason: "Flexible document layout supporting varying garage and level structures." }
      ],
      results: [
        "Instant multi-client slot occupancy updates",
        "Digital QR access pass generation for visitor verification"
      ]
    }
  },
];
export const allProjects: Project[] = [...featuredProjects, ...secondaryProjects];

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((p) => p.id.toLowerCase() === slug.toLowerCase());
}
