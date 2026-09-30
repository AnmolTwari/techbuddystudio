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
    subtitle: "Designed for phone screens first",
    description:
      "Over 75% of your customers will visit your website from Instagram, links in bios, or mobile searches. We design every page to feel as smooth as a native mobile app.",
    keyPoints: [
      "Zero horizontal scrolling or overflow",
      "Large, finger-friendly touch targets",
      "Fast, fluid gestures and navigation",
    ],
  },
  {
    id: "fast-and-modern",
    iconName: "Zap",
    title: "Fast & Modern",
    subtitle: "Speed that keeps visitors engaged",
    description:
      "A 2-second delay in page load can lose more than 50% of your visitors. We engineer ultra-fast websites using modern Next.js and optimized assets that load in a blink.",
    keyPoints: [
      "Sub-second initial page render",
      "Automatic image and asset compression",
      "High Google Core Web Vitals score",
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
