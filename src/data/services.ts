export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: "Globe" | "Target" | "RefreshCw" | "ShoppingBag" | "AppWindow" | "ShieldCheck";
  badge?: string;
  features: string[];
  idealFor: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    category: "Core Digital Presence",
    badge: "Most Popular",
    description:
      "Professional websites designed around your company's brand, services, and target customers to build immediate credibility.",
    iconName: "Globe",
    features: [
      "Custom brand-aligned visual design",
      "Mobile-first responsive architecture",
      "High-speed performance optimization",
      "Local SEO & search visibility ready",
      "Direct WhatsApp & lead enquiry integration",
    ],
    idealFor: "Small businesses, local clinics, consultants, salons, gyms, and professional services.",
  },
  {
    id: "landing-pages",
    title: "Landing Pages",
    category: "High Conversion",
    description:
      "Focused, high-converting landing pages built specifically for marketing campaigns, new product launches, and service promotions.",
    iconName: "Target",
    features: [
      "Conversion-focused copy structure",
      "Fast, friction-free lead capture forms",
      "Optimized for Instagram & ad traffic",
      "Instant WhatsApp chat callouts",
      "Fast, lightweight load times",
    ],
    idealFor: "Campaign launches, real estate showcases, event tickets, and promotional offers.",
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    category: "Modernization",
    badge: "Transformation",
    description:
      "Modernize an outdated website to improve its design aesthetic, mobile usability, navigation structure, and conversion rate.",
    iconName: "RefreshCw",
    features: [
      "Contemporary, premium UI redesign",
      "Fix mobile responsiveness issues",
      "Modern typography & color overhaul",
      "SEO preservation & structure upgrade",
      "Faster page speed & user retention",
    ],
    idealFor: "Businesses with slow, dated, or clunky websites that don't match their current standards.",
  },
  {
    id: "ecommerce-websites",
    title: "E-commerce Websites",
    category: "Online Sales",
    description:
      "Online stores with seamless product presentation, shopping cart functionality, and customer-focused checkout experiences.",
    iconName: "ShoppingBag",
    features: [
      "Clean product catalog & filters",
      "Smooth shopping cart & checkout flow",
      "Secure payment gateway integration",
      "Mobile shopping optimization",
      "WhatsApp order enquiry capability",
    ],
    idealFor: "Retail stores, modern brands, merchandise sellers, and direct-to-consumer businesses.",
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Applications",
    category: "Bespoke Platforms",
    badge: "Advanced",
    description:
      "Tailored web applications, internal dashboards, booking systems, and business platforms built to automate your operations.",
    iconName: "AppWindow",
    features: [
      "Custom business dashboards & workflows",
      "Role-based authentication & permissions",
      "Realtime data & database architecture",
      "Custom booking & management engines",
      "Full API integrations & scalability",
    ],
    idealFor: "Startups, multi-branch businesses, reservation portals, and customized operational workflows.",
  },
  {
    id: "website-maintenance",
    title: "Website Maintenance",
    category: "Ongoing Support",
    description:
      "Reliable ongoing support, content updates, security patches, bug fixes, and continuous improvements for your website.",
    iconName: "ShieldCheck",
    features: [
      "Regular content & pricing updates",
      "Continuous performance & uptime checks",
      "Security patches & dependency updates",
      "Quick turnarounds on design tweaks",
      "Direct technical support",
    ],
    idealFor: "Busy business owners who want their website running smoothly without managing code.",
  },
];
