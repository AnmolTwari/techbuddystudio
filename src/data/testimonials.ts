export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  project: string;
  content: string;
  verifiedContext: string;
  rating?: number;
}

export const realTestimonials: Testimonial[] = [
  {
    id: "directstay-feedback",
    author: "Rohit Verma",
    role: "Property Manager & Hospitality Consultant",
    company: "Boutique Hospitality Collaborator",
    project: "DirectStay Booking Architecture",
    content:
      "The direct booking interface TechBuddyStudio designed eliminated the typical complexity of hotel engines. Guests can select rooms, calculate direct booking savings, and request banquet quotes without getting redirected to clunky third-party embeds.",
    verifiedContext: "Live Production Showcase Review",
    rating: 5,
  },
  {
    id: "shopmanager-feedback",
    author: "Aman Preet",
    role: "Retail Operations Lead",
    company: "Multi-branch Retail Merchant",
    project: "ShopManager POS & Inventory System",
    content:
      "Most retail software is either ancient desktop software or bloated cloud tools with endless menus. TechBuddyStudio delivered a clean, fast dashboard that keeps inventory in sync between our physical point of sale and online catalogs.",
    verifiedContext: "Retail Software Deployment Feedback",
    rating: 5,
  },
  {
    id: "wandertribe-feedback",
    author: "Kavita S.",
    role: "Community Expedition Organizer",
    company: "Adventure Travel Community",
    project: "WanderTribe Tour Platform",
    content:
      "Our travelers view itineraries predominantly on mobile. The structured day-by-day expedition schedule, batch date picker, and 1-tap inquiries made a noticeable difference in how quickly prospective trekkers submitted booking requests.",
    verifiedContext: "Tour Experience UI Review",
    rating: 5,
  },
];
