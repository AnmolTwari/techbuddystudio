export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "instagram-vs-website",
    category: "Strategy",
    question: "Do I need a website if I already have Instagram?",
    answer:
      "While Instagram is great for discovery and community engagement, a dedicated website gives your business a permanent, professional home on the internet. A website lets customers easily find your complete services, pricing or quotes, business hours, location, and contact options without endless scrolling. Most importantly, a website appears on Google Search and gives your business immediate credibility that social media alone cannot provide.",
  },
  {
    id: "website-redesign",
    category: "Services",
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If your current website looks dated, loads slowly, or doesn't work well on mobile phones, we can completely redesign it. We will modernize your visual branding, structure the content for higher customer conversions, speed up load times, and ensure a seamless mobile experience while preserving any existing search rankings.",
  },
  {
    id: "whatsapp-enquiries",
    category: "Features",
    question: "Can you add WhatsApp and enquiry forms?",
    answer:
      "Yes, absolutely. We design every website with practical customer contact funnels in mind. This includes floating WhatsApp buttons with pre-filled enquiry messages, customized multi-step contact forms, quick call-to-action buttons, and quote calculators that make it effortless for customers to reach you.",
  },
  {
    id: "mobile-responsiveness",
    category: "Design",
    question: "Will my website work smoothly on mobile phones?",
    answer:
      "Yes, 100%. Over 70% of web visitors browse on mobile devices, which is why we build all websites mobile-first. We rigorously test across compact smartphones, standard mobile screens, tablets, laptops, and ultra-wide desktop monitors to ensure flawless layout, fast touch interactions, and zero horizontal scrolling.",
  },
  {
    id: "ecommerce-store",
    category: "Services",
    question: "Can you build an online store?",
    answer:
      "Yes. We build clean, high-performing e-commerce websites with intuitive product showcases, category filtering, cart & checkout workflows, and secure payment integration. We also create lightweight catalogs with direct WhatsApp checkout for boutique businesses.",
  },
  {
    id: "custom-web-apps",
    category: "Advanced",
    question: "Can you build custom web applications?",
    answer:
      "Yes. Beyond standard marketing websites, we develop bespoke web applications including client portals, booking and reservation systems, business management dashboards, and internal operational tools using modern full-stack architectures (React, Next.js, Node.js, Spring Boot, FastAPI, PostgreSQL).",
  },
  {
    id: "maintenance-support",
    category: "Support",
    question: "Do you provide maintenance and updates after launch?",
    answer:
      "Yes. We offer ongoing maintenance and support arrangements. Whether you need regular menu updates, new service pages, security monitoring, technical upgrades, or occasional tweaks, we ensure your website stays fast, secure, and up to date.",
  },
  {
    id: "project-timeline",
    category: "Timeline",
    question: "How long does a website take to build and launch?",
    answer:
      "Timelines depend on the project's scope, number of pages, custom features, and how quickly content is finalized. Typically, a high-converting landing page takes 3–5 business days, a standard 5–8 page business website takes 1–2 weeks, and custom web platforms or e-commerce stores take 2–4+ weeks.",
  },
];
