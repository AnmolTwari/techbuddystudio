export interface WhyUsPillar {
  id: string;
  iconName: "Smartphone" | "Zap" | "Briefcase" | "MessageSquare";
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
}

export const whyUsPillars: WhyUsPillar[] = [
  {
    id: "mobile-first",
    iconName: "Smartphone",
    title: "Mobile First",
    subtitle: "Built for modern browsing habits",
    description:
      "We design websites around the way customers actually browse — starting with mobile and scaling beautifully to larger screens.",
    keyPoints: [
      "Zero horizontal scrolling or layout shifts",
      "Large, finger-friendly touch targets",
      "Fast, fluid gestures and intuitive navigation",
    ],
  },
  {
    id: "optimized-for-speed",
    iconName: "Zap",
    title: "Optimized for Speed",
    subtitle: "Lightweight, performance-focused builds",
    description:
      "We build lightweight, performance-focused websites designed to load quickly and reliably across modern devices and connections.",
    keyPoints: [
      "Fast, lightweight initial page render",
      "Modern asset compression & clean code",
      "Smooth, responsive user experience",
    ],
  },
  {
    id: "built-around-business",
    iconName: "Briefcase",
    title: "Built Around Your Business",
    subtitle: "Tailored to your actual customers",
    description:
      "No generic cookie-cutter templates with lorem ipsum text. We organize your services, pricing guides, photos, and unique selling points specifically to resonate with your target clients.",
    keyPoints: [
      "Custom visual branding & tone",
      "Content focused on customer questions",
      "Clear distinction from local competitors",
    ],
  },
  {
    id: "easy-customer-contact",
    iconName: "MessageSquare",
    title: "Easy Customer Contact",
    subtitle: "Zero friction from interest to inquiry",
    description:
      "Getting new business is the ultimate objective. We implement direct WhatsApp links, smart enquiry forms, one-tap calling, and booking prompts that turn browsers into conversations.",
    keyPoints: [
      "1-tap WhatsApp chat with prefilled context",
      "Clean, non-intimidating contact forms",
      "Direct email and phone links",
    ],
  },
];
