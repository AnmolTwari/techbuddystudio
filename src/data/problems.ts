export interface ProblemCard {
  id: string;
  iconName: "SearchX" | "Instagram" | "PhoneOff" | "AlertTriangle" | "Smartphone";
  title: string;
  painPoint: string;
  solution: string;
}

export const problemCards: ProblemCard[] = [
  {
    id: "no-website",
    iconName: "SearchX",
    title: "No Dedicated Website",
    painPoint:
      "When prospective customers search for your business name or services on Google, they find confusing third-party directories or competitors instead.",
    solution:
      "A branded website gives your business a permanent home on the web and builds immediate authority.",
  },
  {
    id: "social-media-limits",
    iconName: "Instagram",
    title: "Instagram Isn't Everything",
    painPoint:
      "Social posts get buried in algorithms, highlight reels are hard to navigate, and visitors struggle to find complete service lists, pricing, or locations.",
    solution:
      "A website acts as your central hub where customers can browse everything clearly in one place.",
  },
  {
    id: "difficult-contact",
    iconName: "PhoneOff",
    title: "Friction in Reaching You",
    painPoint:
      "If getting in touch requires copy-pasting numbers or waiting days for a DM reply, interested prospects quickly bounce to someone else.",
    solution:
      "One-tap WhatsApp chats, quick enquiry forms, and instant call buttons convert warm interest instantly.",
  },
  {
    id: "outdated-design",
    iconName: "AlertTriangle",
    title: "Outdated Visual Appearance",
    painPoint:
      "An old, clunky, or neglected website sends a subconscious message that your business might be stagnant or behind the curve.",
    solution:
      "A modern, polished aesthetic matches the actual high standard of your products and services.",
  },
  {
    id: "poor-mobile",
    iconName: "Smartphone",
    title: "Poor Mobile Experience",
    painPoint:
      "Tiny unreadable text, broken desktop layouts on phone screens, and slow mobile loading immediately drive potential clients away.",
    solution:
      "Responsive, mobile-first design makes browsing effortless on every smartphone and tablet.",
  },
];
