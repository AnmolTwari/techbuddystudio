"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  ArrowRight,
  CreditCard,
  CalendarCheck
} from "lucide-react";

interface SolutionCardData {
  title: string;
  tagline: string;
  badgeTitle: string;
  badgeDesc: string;
  bgColor: string;
  textColor: string;
  innerBoxBg: string;
  innerBoxText: string;
  linkText: string;
  linkUrl: string;
  icon: React.ElementType;
}

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("HOSPITALITY");

  const tabOptions = [
    { id: "HOSPITALITY", label: "Hospitality & Stays", subtext: "For hotels, luxury resorts, boutique villas, and travel companies" },
    { id: "ECOMMERCE", label: "Retail & Brands", subtext: "For direct-to-consumer brands, retail shops, and merchandise distributors" },
    { id: "WEBAPPS", label: "Startups & SaaS", subtext: "For tech startups, digital platforms, booking engines, and API builders" },
    { id: "BUSINESS", label: "Business Websites", subtext: "For local services, clinics, consultants, salons, gyms, and agencies" },
  ];

  const solutionsMap: Record<string, SolutionCardData[]> = {
    HOSPITALITY: [
      {
        title: "DirectStay",
        tagline: "A direct booking channel for your clients.",
        badgeTitle: "Commission-free direct booking portal",
        badgeDesc: "Enable your guests to directly check and book room inventory through a branded, white-label portal without intermediary fees.",
        bgColor: "bg-[#9a5b18]", // Warm Ochre
        textColor: "text-white",
        innerBoxBg: "bg-[#6b3e10]",
        innerBoxText: "text-amber-100",
        linkText: "Learn more",
        linkUrl: "https://hotel-fawn-seven.vercel.app/",
        icon: Building2,
      },
      {
        title: "WanderTribe",
        tagline: "Curated expedition & itinerary platform.",
        badgeTitle: "Interactive tour & schedule engine",
        badgeDesc: "Showcase multi-day expeditions, departure schedules, gear lists, and instant booking routes in one place.",
        bgColor: "bg-[#8c82f2]", // Lavender / Violet
        textColor: "text-white",
        innerBoxBg: "bg-[#5548c7]",
        innerBoxText: "text-indigo-100",
        linkText: "Learn more",
        linkUrl: "https://traveller-alpha-sable.vercel.app/",
        icon: Compass,
      },
      {
        title: "Direct Channels",
        tagline: "Reach new direct guests for free.",
        badgeTitle: "Direct guest enquiry funnels",
        badgeDesc: "Connect directly to potential travelers with 1-click inquiry quotes, live room calendars, and banquet builders.",
        bgColor: "bg-[#93cbf5]", // Sky Ice Blue
        textColor: "text-[#001c55]",
        innerBoxBg: "bg-[#001c55]",
        innerBoxText: "text-blue-100",
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: Globe,
      },
      {
        title: "Pay & Inquiries",
        tagline: "Automatic and secure settlements.",
        badgeTitle: "Booking settlements & Instant Confirmations",
        badgeDesc: "Instant booking confirmations and secure international payment settlement across 70+ currencies.",
        bgColor: "bg-[#001c55]", // Deep Navy
        textColor: "text-white",
        innerBoxBg: "bg-[#001238]",
        innerBoxText: "text-slate-200",
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: CreditCard,
      },
    ],
    ECOMMERCE: [
      {
        title: "ShopManager",
        tagline: "Omnichannel retail & POS management.",
        badgeTitle: "Inventory & sales command center",
        badgeDesc: "Manage multi-category inventory, track stock levels, issue companion POS receipts, and monitor sales analytics.",
        bgColor: "bg-[#9a5b18]",
        textColor: "text-white",
        innerBoxBg: "bg-[#6b3e10]",
        innerBoxText: "text-amber-100",
        linkText: "Learn more",
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
        linkText: "Learn more",
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
        linkText: "Learn more",
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
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: CreditCard,
      },
    ],
    WEBAPPS: [
      {
        title: "Custom Web App",
        tagline: "Tailored business logic and SaaS portals.",
        badgeTitle: "Full-Stack React & Node Architecture",
        badgeDesc: "Role-based authentication, interactive dashboards, real-time database sync, and robust API endpoints.",
        bgColor: "bg-[#001c55]",
        textColor: "text-white",
        innerBoxBg: "bg-[#001238]",
        innerBoxText: "text-slate-200",
        linkText: "Learn more",
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
        linkText: "Learn more",
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
        linkText: "Learn more",
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
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: CreditCard,
      },
    ],
    BUSINESS: [
      {
        title: "Brand Website",
        tagline: "High-credibility digital home for your company.",
        badgeTitle: "Custom Responsive Architecture",
        badgeDesc: "Showcase your services, team, portfolio, and location with sub-second page speed and local SEO discovery.",
        bgColor: "bg-[#001c55]",
        textColor: "text-white",
        innerBoxBg: "bg-[#001238]",
        innerBoxText: "text-slate-200",
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: Globe,
      },
      {
        title: "Landing Page",
        tagline: "High-converting single-page campaigns.",
        badgeTitle: "Lead Generation Architecture",
        badgeDesc: "Friction-free inquiry forms, social proof, and instant conversion triggers designed specifically for ad and social traffic.",
        bgColor: "bg-[#8c82f2]",
        textColor: "text-white",
        innerBoxBg: "bg-[#5548c7]",
        innerBoxText: "text-indigo-100",
        linkText: "Learn more",
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
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: RefreshCw,
      },
      {
        title: "Instant Inquiries",
        tagline: "Direct lead routing & inquiries.",
        badgeTitle: "Zero-Friction Customer Contact",
        badgeDesc: "Direct lead routing into your team without slow email delays or lost client opportunities.",
        bgColor: "bg-[#9a5b18]",
        textColor: "text-white",
        innerBoxBg: "bg-[#6b3e10]",
        innerBoxText: "text-amber-100",
        linkText: "Learn more",
        linkUrl: "/discovery-call",
        icon: CalendarCheck,
      },
    ],
  };

  const currentTab = tabOptions.find((t) => t.id === activeTab) || tabOptions[0];
  const currentCards = solutionsMap[activeTab] || solutionsMap.HOSPITALITY;

  return (
    <section id="solutions" className="py-20 sm:py-28 2xl:py-32 bg-white relative transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Solutions Overview Heading */}
        <div className="max-w-4xl space-y-3 mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-[#070708] font-heading">
            Every Step Covered from First Booking to Final Launch
          </h2>
          <p className="text-base sm:text-lg 2xl:text-xl text-[#646a69] font-normal leading-relaxed">
            TechBuddyStudio&apos;s suite of solutions encompass the entire digital chain. Connect your services, engage your clients, and settle bookings, all on one platform.
          </p>
        </div>

        {/* "Solutions for:" Header & Pill Switcher */}
        <div className="space-y-4 mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <span className="text-base sm:text-lg 2xl:text-xl font-bold text-[#070708] font-heading">
              Solutions for:
            </span>

            {/* Pill Switcher Container */}
            <div className="inline-flex flex-wrap items-center p-1 rounded-full border border-slate-300 bg-white shadow-xs">
              {tabOptions.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 sm:px-5 2xl:px-6 py-2 2xl:py-2.5 rounded-full text-xs sm:text-sm 2xl:text-base font-semibold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-[#001c55] text-white shadow-sm font-bold"
                      : "text-[#585c5f] hover:text-[#070708]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subtext for Active Tab */}
          <p className="text-sm sm:text-base 2xl:text-lg text-[#646a69] font-normal">
            {currentTab.subtext}
          </p>
        </div>

        {/* 4 Solid/Pastel Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 2xl:gap-8 items-stretch">
          {currentCards.map((card, idx) => {
            const Icon = card.icon;
            const isExternal = card.linkUrl.startsWith("http");

            return (
              <div
                key={idx}
                className={`rounded-3xl ${card.bgColor} ${card.textColor} p-7 2xl:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-200 min-h-[420px] 2xl:min-h-[460px]`}
              >
                {/* Card Top: Large Logo & Tagline */}
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

                  {/* Inset Contrasting Box */}
                  <div className={`rounded-2xl ${card.innerBoxBg} p-5 2xl:p-6 space-y-2 shadow-inner mt-4`}>
                    <h4 className="text-sm 2xl:text-base font-bold text-white font-heading">
                      {card.badgeTitle}
                    </h4>
                    <p className={`text-xs 2xl:text-sm ${card.innerBoxText} leading-relaxed font-normal`}>
                      {card.badgeDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Link with Arrow */}
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
    </section>
  );
}
