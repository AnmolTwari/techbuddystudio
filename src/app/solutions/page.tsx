import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { 
  Building2, 
  Compass, 
  Store, 
  Globe, 
  Target, 
  RefreshCw, 
  ShoppingBag, 
  AppWindow, 
  ShieldCheck, 
  CreditCard,
  CalendarCheck,
  ArrowRight
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Industry Solutions | TechBuddyStudio",
  description:
    "Tailored digital solutions and booking infrastructure for hospitality, retail, startups, and modern businesses.",
  alternates: {
    canonical: "/solutions",
  },
};

export default function SolutionsPage() {
  const industries = [
    {
      id: "hospitality",
      title: "Hospitality & Stays",
      subtitle: "For hotels, luxury resorts, boutique villas, and travel companies",
      description: "Replace high commission fees with direct guest booking channels, instant reservation funnels, and real-time room availability.",
      cards: [
        {
          title: "DirectStay",
          tagline: "Direct booking channel for your hotel.",
          badgeTitle: "Commission-free booking portal",
          badgeDesc: "Enable guests to check live rates and book rooms directly without 15-25% OTA commissions.",
          bgColor: "bg-[#9a5b18]",
          textColor: "text-white",
          innerBoxBg: "bg-[#6b3e10]",
          innerBoxText: "text-amber-100",
          linkText: "Launch DirectStay",
          linkUrl: "https://hotel-fawn-seven.vercel.app/",
          icon: Building2,
        },
        {
          title: "WanderTribe",
          tagline: "Curated expedition & itinerary platform.",
          badgeTitle: "Interactive tour & schedule engine",
          badgeDesc: "Showcase multi-day expeditions, live departure batches, gear guides, and instant batch booking.",
          bgColor: "bg-[#8c82f2]",
          textColor: "text-white",
          innerBoxBg: "bg-[#5548c7]",
          innerBoxText: "text-indigo-100",
          linkText: "Launch WanderTribe",
          linkUrl: "https://traveller-alpha-sable.vercel.app/",
          icon: Compass,
        },
        {
          title: "Direct Channels",
          tagline: "Reach new direct guests seamlessly.",
          badgeTitle: "Direct inquiry funnels",
          badgeDesc: "Connect directly to travelers with 1-click inquiry quotes, live room calendars, and banquet builders.",
          bgColor: "bg-[#93cbf5]",
          textColor: "text-[#001c55]",
          innerBoxBg: "bg-[#001c55]",
          innerBoxText: "text-blue-100",
          linkText: "Explore Setup",
          linkUrl: "/discovery-call",
          icon: Globe,
        },
        {
          title: "Pay & Inquiries",
          tagline: "Automatic and secure settlements.",
          badgeTitle: "Booking settlements & Instant Confirmations",
          badgeDesc: "Instant booking confirmations and secure international payment settlement across 70+ currencies.",
          bgColor: "bg-[#001c55]",
          textColor: "text-white",
          innerBoxBg: "bg-[#001238]",
          innerBoxText: "text-slate-200",
          linkText: "Explore Setup",
          linkUrl: "/discovery-call",
          icon: CreditCard,
        },
      ],
    },
    {
      id: "retail",
      title: "Retail & E-Commerce Brands",
      subtitle: "For direct-to-consumer stores, retail shops, and wholesale distributors",
      description: "Omnichannel inventory management, high-speed mobile checkout, and automated order notifications.",
      cards: [
        {
          title: "ShopManager",
          tagline: "Omnichannel retail & POS management.",
          badgeTitle: "Inventory & sales command center",
          badgeDesc: "Manage multi-category inventory, track stock levels, issue companion POS receipts, and monitor sales analytics.",
          bgColor: "bg-[#9a5b18]",
          textColor: "text-white",
          innerBoxBg: "bg-[#6b3e10]",
          innerBoxText: "text-amber-100",
          linkText: "Launch ShopManager",
          linkUrl: "https://managemyshop.vercel.app/",
          icon: Store,
        },
        {
          title: "D2C Web Store",
          tagline: "Modern digital storefront for your brand.",
          badgeTitle: "High-speed mobile checkout",
          badgeDesc: "Clean product showcase, instant shopping cart, seamless payment gateway integration, and instant order routing.",
          bgColor: "bg-[#8c82f2]",
          textColor: "text-white",
          innerBoxBg: "bg-[#5548c7]",
          innerBoxText: "text-indigo-100",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: ShoppingBag,
        },
        {
          title: "B2B Catalog",
          tagline: "Wholesale & volume pricing portals.",
          badgeTitle: "Direct wholesale quote builder",
          badgeDesc: "Enable bulk distributors to browse catalog specifications, download assets, and submit high-volume requests.",
          bgColor: "bg-[#93cbf5]",
          textColor: "text-[#001c55]",
          innerBoxBg: "bg-[#001c55]",
          innerBoxText: "text-blue-100",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: AppWindow,
        },
        {
          title: "Pay & Billing",
          tagline: "Secure customer billing engine.",
          badgeTitle: "Stripe & Global Payment Sync",
          badgeDesc: "Automated invoice generation, multi-currency payment settlement, and instant order notifications.",
          bgColor: "bg-[#001c55]",
          textColor: "text-white",
          innerBoxBg: "bg-[#001238]",
          innerBoxText: "text-slate-200",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: CreditCard,
        },
      ],
    },
    {
      id: "startups",
      title: "Startups & Digital Platforms",
      subtitle: "For tech startups, booking engines, SaaS platforms, and API builders",
      description: "Bespoke full-stack web applications engineered for speed, secure authentication, and long-term scalability.",
      cards: [
        {
          title: "Custom Web App",
          tagline: "Tailored business logic and SaaS portals.",
          badgeTitle: "Full-Stack React & Node Architecture",
          badgeDesc: "Role-based authentication, interactive dashboards, real-time database sync, and robust API endpoints.",
          bgColor: "bg-[#001c55]",
          textColor: "text-white",
          innerBoxBg: "bg-[#001238]",
          innerBoxText: "text-slate-200",
          linkText: "Discuss Architecture",
          linkUrl: "/discovery-call",
          icon: AppWindow,
        },
        {
          title: "ResuMatch AI",
          tagline: "AI-assisted resume & candidate scoring.",
          badgeTitle: "FastAPI & Microservices Engine",
          badgeDesc: "Automated candidate parsing, job-description scoring, and hiring pipeline workspace with fast filtering.",
          bgColor: "bg-[#8c82f2]",
          textColor: "text-white",
          innerBoxBg: "bg-[#5548c7]",
          innerBoxText: "text-indigo-100",
          linkText: "View Case Study",
          linkUrl: "/work",
          icon: Target,
        },
        {
          title: "ParkSy",
          tagline: "Realtime space & parking management.",
          badgeTitle: "Socket.io Live Sync Engine",
          badgeDesc: "Interactive space booking, live slot occupancy monitoring, digital visitor passes, and administrative reports.",
          bgColor: "bg-[#93cbf5]",
          textColor: "text-[#001c55]",
          innerBoxBg: "bg-[#001c55]",
          innerBoxText: "text-blue-100",
          linkText: "View Case Study",
          linkUrl: "/work",
          icon: ShieldCheck,
        },
        {
          title: "API Settlement",
          tagline: "Integrated backend connections.",
          badgeTitle: "Enterprise Database & Security",
          badgeDesc: "Scalable Postgres database structures, automated backups, and encrypted token auth systems.",
          bgColor: "bg-[#9a5b18]",
          textColor: "text-white",
          innerBoxBg: "bg-[#6b3e10]",
          innerBoxText: "text-amber-100",
          linkText: "Contact Us",
          linkUrl: "/discovery-call",
          icon: CreditCard,
        },
      ],
    },
    {
      id: "business",
      title: "Business & Agency Websites",
      subtitle: "For local businesses, clinics, consultants, salons, and professional services",
      description: "Sleek, brand-aligned websites that build instant credibility, rank locally on Google, and convert visitors into clients.",
      cards: [
        {
          title: "Brand Website",
          tagline: "High-credibility digital home for your company.",
          badgeTitle: "Custom Responsive Architecture",
          badgeDesc: "Showcase your services, team, portfolio, and location with sub-second page speed and local SEO discovery.",
          bgColor: "bg-[#001c55]",
          textColor: "text-white",
          innerBoxBg: "bg-[#001238]",
          innerBoxText: "text-slate-200",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: Globe,
        },
        {
          title: "Landing Page",
          tagline: "High-converting single-page campaigns.",
          badgeTitle: "Lead Generation Architecture",
          badgeDesc: "Friction-free inquiry forms, social proof, and instant conversion triggers designed specifically for ad traffic.",
          bgColor: "bg-[#8c82f2]",
          textColor: "text-white",
          innerBoxBg: "bg-[#5548c7]",
          innerBoxText: "text-indigo-100",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: Target,
        },
        {
          title: "Redesign & Speed",
          tagline: "Modernize an outdated or slow website.",
          badgeTitle: "UI & Performance Overhaul",
          badgeDesc: "Upgrade clunky templates to modern Next.js 16 with 99+ Lighthouse performance scores across mobile viewports.",
          bgColor: "bg-[#93cbf5]",
          textColor: "text-[#001c55]",
          innerBoxBg: "bg-[#001c55]",
          innerBoxText: "text-blue-100",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: RefreshCw,
        },
        {
          title: "Instant Inquiries",
          tagline: "Direct lead capture & automated routing.",
          badgeTitle: "Zero-Friction Customer Contact",
          badgeDesc: "Direct high-intent lead routing into your team's inbox without friction or lost client opportunities.",
          bgColor: "bg-[#9a5b18]",
          textColor: "text-white",
          innerBoxBg: "bg-[#6b3e10]",
          innerBoxText: "text-amber-100",
          linkText: "Get Started",
          linkUrl: "/discovery-call",
          icon: CalendarCheck,
        },
      ],
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Tailored Digital Solutions"
          title="Solutions Built for Your Industry"
          subtitle="Whether you need direct hotel bookings, retail POS, startup web applications, or a high-converting corporate website, we have the exact architecture ready."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 sm:py-20">

          {/* Industry Sections */}
          <div className="space-y-24">
            {industries.map((ind) => (
              <div key={ind.id} id={ind.id} className="pt-4 border-t border-slate-200">
                <div className="mb-8 space-y-2">
                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold font-heading text-[#070708]">
                    {ind.title}
                  </h2>
                  <p className="text-sm sm:text-base 2xl:text-lg text-[#646a69]">
                    {ind.subtitle} — {ind.description}
                  </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
                  {ind.cards.map((card, idx) => {
                    const Icon = card.icon;
                    const isExternal = card.linkUrl.startsWith("http");

                    return (
                      <div
                        key={idx}
                        className={`rounded-3xl ${card.bgColor} ${card.textColor} p-7 2xl:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 min-h-[400px] 2xl:min-h-[440px]`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 2xl:w-10 2xl:h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                            </div>
                            <h3 className="text-2xl 2xl:text-3xl font-extrabold tracking-tight font-heading">
                              {card.title}
                            </h3>
                          </div>

                          <p className="text-sm 2xl:text-base opacity-95 font-medium leading-snug">
                            {card.tagline}
                          </p>

                          <div className={`rounded-2xl ${card.innerBoxBg} p-5 2xl:p-6 space-y-2 shadow-inner mt-4`}>
                            <h4 className="text-sm 2xl:text-base font-bold text-white font-heading">
                              {card.badgeTitle}
                            </h4>
                            <p className={`text-xs 2xl:text-sm ${card.innerBoxText} leading-relaxed font-normal`}>
                              {card.badgeDesc}
                            </p>
                          </div>
                        </div>

                        <div className="pt-5 mt-4 flex items-center justify-end">
                          {isExternal ? (
                            <a
                              href={card.linkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm 2xl:text-base font-bold hover:underline cursor-pointer opacity-95 hover:opacity-100"
                            >
                              <span>{card.linkText}</span>
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          ) : (
                            <Link
                              href={card.linkUrl}
                              className="inline-flex items-center gap-1.5 text-sm 2xl:text-base font-bold hover:underline cursor-pointer opacity-95 hover:opacity-100"
                            >
                              <span>{card.linkText}</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Call CTA */}
        <div className="mt-20">
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
