export interface ProcessStep {
  number: string;
  step: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    step: "Discover",
    title: "Understanding Your Business & Audience",
    tagline: "Clarity before code",
    description:
      "We start by understanding what your business does, who your ideal customers are, your main services, and what specific action you want visitors to take (call, message, book, or buy).",
    deliverables: [
      "Target customer & goal alignment",
      "Sitemap & page structure outline",
      "Content & key messaging direction",
    ],
  },
  {
    number: "02",
    step: "Design",
    title: "Structuring the Visual & User Experience",
    tagline: "Clean, modern, and branded",
    description:
      "We create a sleek, bespoke layout designed around your brand identity. Every element is crafted to guide visitors naturally toward your core services and contact points.",
    deliverables: [
      "Modern typography & color palette",
      "Mobile & desktop layout structure",
      "Clear call-to-action placement",
    ],
  },
  {
    number: "03",
    step: "Build",
    title: "Engineering a Fast, Responsive Website",
    tagline: "High performance & clean code",
    description:
      "We build your website using modern, industry-standard web technology (Next.js, React, Tailwind CSS). Every page is optimized for lightning-fast load times and seamless mobile responsiveness.",
    deliverables: [
      "High-speed production-grade frontend",
      "WhatsApp & contact forms integration",
      "Cross-browser & multi-device testing",
    ],
  },
  {
    number: "04",
    step: "Launch",
    title: "Deployment, SEO Setup & Handoff",
    tagline: "Live and ready for customers",
    description:
      "We configure your custom domain, set up essential search engine optimizations and analytics, perform final quality checks, and launch your site ready to convert visitors.",
    deliverables: [
      "Domain connection & SSL security",
      "Search engine optimization (SEO) setup",
      "Full site handoff & ongoing support",
    ],
  },
];
