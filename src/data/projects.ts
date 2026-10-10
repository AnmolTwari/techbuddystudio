export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  isFeatured: boolean;
  featuredRank?: number; // 1 for DirectStay, 2 for WanderTribe, 3 for ShopManager
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
  // Future real client fields (extensible architecture)
  clientInfo?: {
    clientName?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

export const featuredProjects: Project[] = [
  {
    id: "directstay",
    title: "DirectStay",
    category: "Hospitality / Hotel Website",
    tagline: "Direct-Booking & Guest Experience Platform for Luxury Hotels & Resorts",
    description:
      "A modern direct-booking platform designed for hotels, luxury resorts, and hospitality businesses to drive commission-free direct bookings and streamline guest communications.",
    isFeatured: true,
    featuredRank: 1,
    features: [
      "Direct booking & instant room selection experience",
      "Seamless real-time reservation & enquiry flow",
      "Interactive ROI calculator for hotel revenue",
      "Banquet & event quote builder",
      "Hospitality-focused conversion architecture",
      "Ultra-responsive mobile layout for on-the-go travelers",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://hotel-fawn-seven.vercel.app/",
    statusBadge: "Live Production Showcase",
    themeColor: {
      accent: "#38bdf8", // Sky blue / ocean resort
      lightBg: "from-sky-500/10 via-slate-500/5 to-transparent",
      darkBg: "from-sky-950/40 via-slate-900/20 to-transparent",
      badgeBorder: "border-sky-500/30 text-sky-400 bg-sky-500/10",
    },
    highlights: [
      { label: "Focus", value: "Direct Bookings" },
      { label: "Channel", value: "Instant Booking" },
      { label: "Performance", value: "Fast & Fluid" },
    ],
  },
  {
    id: "wandertribe",
    title: "WanderTribe",
    category: "Travel & Experiences",
    tagline: "Expedition Booking & Interactive Itinerary Platform",
    description:
      "A curated adventure and travel experience platform designed for group expeditions, guided tours, and travel communities with real-time batch availability and interactive itineraries.",
    isFeatured: true,
    featuredRank: 2,
    features: [
      "Dynamic trip discovery with visual difficulty & elevation badges",
      "Interactive day-by-day expedition itineraries",
      "High-converting batch booking & enquiry funnel",
      "Annual departure schedule generator & batch switcher",
      "Traveler gear checklist & prep guides",
      "Mobile-optimized high-engagement travel UI",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
    liveUrl: "https://traveller-alpha-sable.vercel.app/",
    statusBadge: "Live Production Showcase",
    themeColor: {
      accent: "#f59e0b", // Amber adventure / warm trail
      lightBg: "from-amber-500/10 via-stone-500/5 to-transparent",
      darkBg: "from-amber-950/40 via-stone-900/20 to-transparent",
      badgeBorder: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    },
    highlights: [
      { label: "Discovery", value: "Curated Itineraries" },
      { label: "Batches", value: "Live Schedule" },
      { label: "Conversion", value: "1-Tap Inquiries" },
    ],
  },
  {
    id: "shopmanager",
    title: "ShopManager",
    category: "Retail / Business Management",
    tagline: "Omnichannel Business & Point-of-Sale Platform",
    description:
      "An advanced retail operations platform designed to help retail shops, inventory managers, and multi-branch businesses manage operations through modern web dashboards and mobile companion tools.",
    isFeatured: true,
    featuredRank: 3,
    features: [
      "Comprehensive business analytics & sales dashboard",
      "Multi-category inventory & stock tracking system",
      "Mobile POS companion workflow",
      "Multi-tenant data isolation & secure auth",
      "Enterprise Java Spring Boot backend integration",
      "High-density responsive data tables & graphs",
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
    statusBadge: "Live Business Software",
    themeColor: {
      accent: "#443dff", // Studio signature accent
      lightBg: "from-[#443dff]/10 via-[#2f27ce]/5 to-transparent",
      darkBg: "from-[#2f27ce]/30 via-[#0c0827]/20 to-transparent",
      badgeBorder: "border-[#443dff]/30 text-[#443dff] bg-[#443dff]/10",
    },
    highlights: [
      { label: "Architecture", value: "Full Stack" },
      { label: "Backend", value: "Spring Boot + PG" },
      { label: "Capability", value: "POS + Dashboard" },
    ],
  },
];

export const secondaryProjects: Project[] = [
  {
    id: "resumatch-ai",
    title: "ResuMatch AI",
    category: "AI / Talent Matching Platform",
    tagline: "Intelligent Applicant Tracking & Resume Fit Analyzer",
    description:
      "An AI-assisted recruitment platform that streamlines candidate evaluation by parsing resumes, scoring relevance against job descriptions, and organizing hiring pipelines.",
    isFeatured: false,
    features: [
      "AI-powered resume parsing and skill extraction",
      "Job-description match scoring algorithm",
      "Recruiter review workspace with smart filtering",
      "FastAPI microservice integration",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL"],
    themeColor: {
      accent: "#10b981",
      lightBg: "from-emerald-500/10 to-transparent",
      darkBg: "from-emerald-950/30 to-transparent",
      badgeBorder: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
    },
    highlights: [
      { label: "AI Engine", value: "FastAPI + Python" },
      { label: "Focus", value: "Recruitment Fit" },
    ],
  },
  {
    id: "parksy",
    title: "ParkSy",
    category: "Smart Mobility / Space Management",
    tagline: "Realtime Parking Management & Reservation System",
    description:
      "A comprehensive parking management system featuring interactive slot reservations, digital visitor passes, live occupancy monitoring, and administrative reporting.",
    isFeatured: false,
    features: [
      "Interactive slot booking with live space updates",
      "Realtime occupancy sync via Socket.io",
      "Digital visitor access passes & QR verification",
      "Revenue tracking and peak-time usage reports",
    ],
    techStack: ["React", "Vite", "Express.js", "Socket.io", "MongoDB"],
    themeColor: {
      accent: "#ec4899",
      lightBg: "from-pink-500/10 to-transparent",
      darkBg: "from-pink-950/30 to-transparent",
      badgeBorder: "border-pink-500/30 text-pink-400 bg-pink-500/10",
    },
    highlights: [
      { label: "Realtime", value: "Socket.io Engine" },
      { label: "Management", value: "Passes + Booking" },
    ],
  },
];
