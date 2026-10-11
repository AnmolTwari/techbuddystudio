export interface DedicatedService {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  deliverables: {
    title: string;
    description: string;
  }[];
  whoIsItFor: {
    persona: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
    duration: string;
  }[];
  techStack: string[];
  highlights: {
    label: string;
    value: string;
  }[];
  caseStudyRef?: {
    id: string;
    title: string;
    category: string;
    url: string;
  };
}

export const dedicatedServices: Record<string, DedicatedService> = {
  "custom-web-development": {
    slug: "custom-web-development",
    title: "Custom Web Development",
    badge: "Core Engineering Specialization",
    tagline: "High-performance bespoke websites built for speed, conversion, and complete code ownership.",
    heroDescription:
      "We design and build bespoke web platforms tailored to your brand identity and business operations. Engineered with modern Next.js and TypeScript, your website delivers sub-second load times, mobile-first responsiveness, and zero dependency on bloated third-party page builders.",
    metaTitle: "Custom Web Development Services | TechBuddyStudio",
    metaDescription:
      "Bespoke Next.js & React web development built for speed, brand credibility, and search engine discovery with 100% code ownership.",
    deliverables: [
      {
        title: "Bespoke Responsive Frontend",
        description: "Pixel-perfect mobile, tablet, and desktop layouts designed specifically around your brand with clean typography and whitespace.",
      },
      {
        title: "Technical SEO & Schema Integration",
        description: "Semantic HTML5, automated XML sitemaps, OpenGraph social preview cards, and structured JSON-LD data for Google rankings.",
      },
      {
        title: "Zero-Bloat Performance Architecture",
        description: "Optimized Core Web Vitals, WebP/AVIF asset compression, edge caching, and minimal client JavaScript bundles.",
      },
      {
        title: "100% Intellectual Property & Code Ownership",
        description: "Full repository transfer with clean documentation upon handover. No proprietary builder lock-in or ongoing platform rent.",
      },
    ],
    whoIsItFor: [
      {
        persona: "Established Businesses & Boutique Brands",
        description: "Companies whose current template or Wix/WordPress site looks dated, loads slowly, or fails to represent their market prestige.",
      },
      {
        persona: "Hospitality & Professional Practices",
        description: "Resorts, hotels, medical clinics, and legal consultancies needing custom inquiry routing and localized search authority.",
      },
      {
        persona: "High-Growth Founders & Agencies",
        description: "Teams that require direct collaboration with software engineers rather than dealing with junior agency account managers.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Information Architecture",
        description: "We analyze your audience, audit existing traffic, map page hierarchies, and establish content requirements.",
        duration: "Days 1–3",
      },
      {
        step: "02",
        title: "Bespoke Design & Interactive Prototype",
        description: "We create clean typography palettes, responsive layouts, and interactive wireframes for review and approval.",
        duration: "Week 1",
      },
      {
        step: "03",
        title: "Full-Stack Development & Private Staging",
        description: "We write clean TypeScript & Next.js code, integrate forms, and deploy to a password-protected staging URL for live testing.",
        duration: "Week 2",
      },
      {
        step: "04",
        title: "QA, Performance Polish & Production Handover",
        description: "We audit cross-device responsiveness, connect domain & SSL, configure DNS, and transfer complete source code repositories.",
        duration: "Days 12–14",
      },
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge", "Lucide React"],
    highlights: [
      { label: "Delivery", value: "1–2 Weeks" },
      { label: "Target Speed", value: "< 1.5s Load" },
      { label: "Code Ownership", value: "100% Transfer" },
    ],
    caseStudyRef: {
      id: "directstay",
      title: "DirectStay Hospitality Platform",
      category: "Hospitality & Stays",
      url: "/work/directstay",
    },
  },

  "ecommerce": {
    slug: "ecommerce",
    title: "E-Commerce & Retail Solutions",
    badge: "Commerce Architecture",
    tagline: "Modern web storefronts, B2B wholesale portals, and omnichannel inventory management.",
    heroDescription:
      "We build fast, frictionless digital commerce experiences connecting product catalogs, high-speed mobile checkout, multi-currency payment gateways, and companion point-of-sale inventory tracking.",
    metaTitle: "Custom E-Commerce & Retail Development | TechBuddyStudio",
    metaDescription:
      "High-speed mobile storefronts, wholesale catalogs, and omnichannel retail inventory platforms built with React and modern APIs.",
    deliverables: [
      {
        title: "High-Speed Mobile Product Catalog & Cart",
        description: "Instant filtering, search, and category switching designed to prevent cart abandonment on mobile networks.",
      },
      {
        title: "Secure Payment Gateway Integration",
        description: "Stripe, Razorpay, and multi-currency checkout flows with automated tax handling and instant email confirmations.",
      },
      {
        title: "Companion POS & Stock Sync Workflow",
        description: "Point-of-sale receipt generation and inventory level tracking connecting physical stores with web storefronts.",
      },
      {
        title: "B2B Wholesale & Volume Quote Builder",
        description: "Custom bulk order tiers, wholesale catalog downloads, and high-volume inquiry routing for distributors.",
      },
    ],
    whoIsItFor: [
      {
        persona: "Direct-to-Consumer (D2C) Brands",
        description: "Brands needing customized product storytelling and rapid checkout without heavy Shopify plugin monthly fees.",
      },
      {
        persona: "Retail Merchants & Physical Shops",
        description: "Store owners wanting unified inventory control between counter registers and their customer-facing website.",
      },
      {
        persona: "Wholesale & Merchandise Distributors",
        description: "B2B suppliers requiring structured wholesale inquiries, tier pricing, and automated spec sheet downloads.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Catalog Modeling & Checkout Flow",
        description: "We map product categories, variant attributes, tax rates, shipping logic, and checkout payment routes.",
        duration: "Days 1–4",
      },
      {
        step: "02",
        title: "UX Design & Mobile Storefront",
        description: "We design clean product grid layouts, detail galleries, and 1-tap cart drawers optimized for mobile shoppers.",
        duration: "Week 1",
      },
      {
        step: "03",
        title: "Payment Gateway & Inventory Sync",
        description: "We connect secure Stripe/Razorpay webhooks, order databases, and stock level reconciliation mechanisms.",
        duration: "Weeks 2–3",
      },
      {
        step: "04",
        title: "Checkout Testing, QA & Launch",
        description: "We run end-to-end test transactions, verify email receipts, configure SSL, and execute production launch.",
        duration: "Week 3",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe API", "PostgreSQL", "Spring Boot"],
    highlights: [
      { label: "Delivery", value: "2–3 Weeks" },
      { label: "Checkout", value: "1-Tap Fast Pay" },
      { label: "Inventory", value: "Omnichannel Sync" },
    ],
    caseStudyRef: {
      id: "shopmanager",
      title: "ShopManager Omnichannel POS",
      category: "Retail & Operations",
      url: "/work/shopmanager",
    },
  },

  "saas-applications": {
    slug: "saas-applications",
    title: "SaaS Applications & Digital Platforms",
    badge: "Full-Stack Software Engineering",
    tagline: "Tailored business logic, role-based dashboards, and scalable database architecture.",
    heroDescription:
      "We architect and build full-stack web applications for tech startups, internal corporate operations, and digital portals. Featuring secure token authentication, real-time database synchronization, administrative controls, and well-documented REST/GraphQL APIs.",
    metaTitle: "Custom SaaS & Web Application Development | TechBuddyStudio",
    metaDescription:
      "Enterprise-grade full-stack web application development. React dashboards, secure role authentication, and scalable database architecture.",
    deliverables: [
      {
        title: "Role-Based Administrative Dashboards",
        description: "Granular permissions, user management, audit logs, and high-density responsive data tables with export capabilities.",
      },
      {
        title: "Secure Authentication & Session Management",
        description: "Encrypted JWT, OAuth, or Supabase Auth flows with CSRF protection and multi-tenant data isolation.",
      },
      {
        title: "Relational & Document Database Architecture",
        description: "Optimized PostgreSQL or MongoDB schemas with automated indexing, transactional safety, and automated backups.",
      },
      {
        title: "Documented REST & Microservice APIs",
        description: "Cleanly structured, versioned API endpoints ready for third-party integrations, mobile apps, or background webhooks.",
      },
    ],
    whoIsItFor: [
      {
        persona: "Early-Stage Tech Founders",
        description: "Startups needing a robust MVP or production platform built quickly with scalable code they fully own.",
      },
      {
        persona: "Operations & Logistics Managers",
        description: "Businesses replacing cumbersome spreadsheets with custom internal dashboards and field team workflows.",
      },
      {
        persona: "Subscription & B2B Service Providers",
        description: "Companies offering client portals, booking engines, or recurring digital memberships.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Data Modeling & Architecture Blueprint",
        description: "We define database entity relationships, permission matrices, API contract specifications, and state diagrams.",
        duration: "Week 1",
      },
      {
        step: "02",
        title: "Interactive UI & Component Library",
        description: "We craft data table states, modal dialogs, dashboard charts, and responsive form components in Figma/Code.",
        duration: "Week 2",
      },
      {
        step: "03",
        title: "Backend API & Database Implementation",
        description: "We build transactional endpoints, background worker jobs, security middleware, and real-time sockets.",
        duration: "Weeks 2–4",
      },
      {
        step: "04",
        title: "Security Audit, Staging & CI/CD Handover",
        description: "We run penetration tests, configure automated cloud deployments (Docker/Vercel/AWS), and deliver full documentation.",
        duration: "Week 4",
      },
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "FastAPI / Python", "PostgreSQL", "Docker", "Socket.io"],
    highlights: [
      { label: "Delivery", value: "3–5 Weeks" },
      { label: "Architecture", value: "Full Stack" },
      { label: "Auth", value: "Role-Based RBAC" },
    ],
    caseStudyRef: {
      id: "shopmanager",
      title: "ShopManager Software Platform",
      category: "Retail & Operations",
      url: "/work/shopmanager",
    },
  },

  "ai-integration": {
    slug: "ai-integration",
    title: "AI Integration & Workflow Automation",
    badge: "Intelligent Systems",
    tagline: "Natural language parsing, automated content scoring, and custom LLM microservices.",
    heroDescription:
      "We integrate practical, business-aligned AI capabilities into existing web workflows. From automated PDF resume and invoice parsing to semantic vector search and intelligent routing—helping your team automate repetitive cognitive tasks.",
    metaTitle: "Practical AI Integration & Automation | TechBuddyStudio",
    metaDescription:
      "Integrate practical AI workflows, resume/document parsing, and intelligent data extraction into your business web applications.",
    deliverables: [
      {
        title: "Document & Unstructured Data Parsing",
        description: "Extract structured JSON from PDF resumes, customer invoices, and contracts in seconds using Python/FastAPI microservices.",
      },
      {
        title: "Semantic Search & Vector Embeddings",
        description: "Enable intelligent search across internal knowledge bases and product catalogs that understands customer intent.",
      },
      {
        title: "Smart Inquiry Qualification & Routing",
        description: "Automatically score inbound client inquiries and route high-intent prospects directly to the appropriate team member.",
      },
      {
        title: "Private, Secure API Architecture",
        description: "Zero customer data leakage. Private API integrations with strict confidentiality and token rate-limiting.",
      },
    ],
    whoIsItFor: [
      {
        persona: "Recruitment & HR Departments",
        description: "Hiring teams handling hundreds of applicant resumes who need automated skill extraction and requirement matching.",
      },
      {
        persona: "Customer Support & Lead Teams",
        description: "Companies wanting to automate tier-1 qualification and summarize complex customer inquiries before human review.",
      },
      {
        persona: "Knowledge-Heavy Professional Services",
        description: "Consultancies and research firms needing fast semantic search across thousands of internal documents.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Use Case Scoping & Feasibility",
        description: "We identify high-friction manual data tasks and select the most cost-effective AI model and extraction pipeline.",
        duration: "Days 1–3",
      },
      {
        step: "02",
        title: "Pipeline Prototype & Accuracy Benchmarking",
        description: "We build a test harness with real sample data to benchmark accuracy, latency, and token cost economics.",
        duration: "Week 1",
      },
      {
        step: "03",
        title: "Microservice Integration & Web UI",
        description: "We wire the parsing service to your React/Next.js dashboard with instant visual progress bars and edit workflows.",
        duration: "Week 2",
      },
      {
        step: "04",
        title: "Monitoring, Error Handling & Deployment",
        description: "We implement fallback handling for malformed documents, set up logging, and deploy with complete documentation.",
        duration: "Days 12–15",
      },
    ],
    techStack: ["FastAPI", "Python", "React", "TypeScript", "PostgreSQL", "LangChain / OpenAI API", "Docker"],
    highlights: [
      { label: "Delivery", value: "1–2 Weeks" },
      { label: "Latency", value: "Sub-2s Parsing" },
      { label: "Privacy", value: "Zero Data Leakage" },
    ],
    caseStudyRef: {
      id: "resumatch-ai",
      title: "ResuMatch AI Candidate Scorer",
      category: "Talent & AI Matching",
      url: "/work/resumatch-ai",
    },
  },

  "maintenance": {
    slug: "maintenance",
    title: "Ongoing Maintenance & Optimization",
    badge: "Reliability & SLAs",
    tagline: "Continuous Core Web Vitals monitoring, security upgrades, and rapid technical support.",
    heroDescription:
      "A fast website is an active asset. We provide continuous maintenance, dependency upgrades, monthly performance audits, uptime monitoring, and designated engineering hours to keep your website running at peak efficiency.",
    metaTitle: "Website Maintenance & Performance Retainers | TechBuddyStudio",
    metaDescription:
      "Dedicated monthly engineering support, Core Web Vitals maintenance, security updates, and guaranteed response SLAs.",
    deliverables: [
      {
        title: "Continuous Core Web Vitals Auditing",
        description: "Monthly audits of First Contentful Paint (FCP), Largest Contentful Paint (LCP), and Cumulative Layout Shift (CLS).",
      },
      {
        title: "Dependency & Framework Upgrades",
        description: "Proactive Next.js, React, and package security updates to prevent technical debt and vulnerabilities.",
      },
      {
        title: "Direct Engineer Support & Content Updates",
        description: "Dedicated hours each month for new landing pages, menu tweaks, announcement banners, and feature enhancements.",
      },
      {
        title: "24/7 Uptime & SSL Certificate Monitoring",
        description: "Continuous health checks with instant alerting and automated DNS/SSL certificate renewal management.",
      },
    ],
    whoIsItFor: [
      {
        persona: "Businesses Without an In-House Engineer",
        description: "Companies that want peace of mind knowing senior engineers are actively maintaining their web infrastructure.",
      },
      {
        persona: "High-Traffic E-Commerce & Hospitality Brands",
        description: "Businesses where even an hour of downtime or slow page speeds directly damages customer bookings and revenue.",
      },
      {
        persona: "Growing Companies Adding Frequent Features",
        description: "Teams that need ongoing UI polish and content adjustments without negotiating individual contracts each time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Initial Infrastructure & Code Audit",
        description: "We baseline existing page load speeds, inspect dependencies for security vulnerabilities, and set up monitoring alerts.",
        duration: "Day 1",
      },
      {
        step: "02",
        title: "Dedicated Communication Channel",
        description: "We connect directly via email and dedicated support routing with guaranteed under-2-hour SLA response times.",
        duration: "Immediate",
      },
      {
        step: "03",
        title: "Scheduled Monthly Optimization Sprint",
        description: "Each month, we execute package updates, patch security notices, optimize database queries, and implement requested edits.",
        duration: "Monthly",
      },
      {
        step: "04",
        title: "Performance & Health Reporting",
        description: "You receive a clear monthly report detailing load time metrics, uptime logs, and completed technical enhancements.",
        duration: "End of Month",
      },
    ],
    techStack: ["Next.js", "Vercel Analytics", "Sentry", "Google Search Console", "Lighthouse CI", "Uptime Kuma"],
    highlights: [
      { label: "SLA Response", value: "< 2 Hours" },
      { label: "Monitoring", value: "24/7 Uptime" },
      { label: "Cadence", value: "Monthly Sprints" },
    ],
  },
};

export function getDedicatedService(slug: string): DedicatedService | undefined {
  return dedicatedServices[slug];
}
