"use client";

import React from "react";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Globe2, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Rocket, 
  Server, 
  Database, 
  CreditCard,
  Building2
} from "lucide-react";

export function LogoMarquee() {
  const stackItems = [
    { name: "Next.js 15", category: "Framework", icon: Globe2 },
    { name: "React 19", category: "Core UI", icon: Code2 },
    { name: "TypeScript", category: "Engineering", icon: Cpu },
    { name: "Tailwind CSS", category: "Design System", icon: Sparkles },
    { name: "Vercel Edge", category: "Global CDN", icon: Zap },
    { name: "Supabase & Postgres", category: "Backend & DB", icon: Database },
    { name: "Node.js & APIs", category: "Microservices", icon: Server },
    { name: "Stripe & Payments", category: "Billing Engine", icon: CreditCard },
    { name: "Hospitality & Travel", category: "Industry Solutions", icon: Building2 },
    { name: "SaaS & B2B Portals", category: "Enterprise Web", icon: Layers },
    { name: "Speed & SEO 100%", category: "Performance Standard", icon: Rocket },
    { name: "SOC-2 Architecture", category: "Security", icon: ShieldCheck },
  ];

  // Double the list for seamless looping marquee
  const marqueeItems = [...stackItems, ...stackItems];

  return (
    <section className="relative py-14 sm:py-18 bg-[#f6fafe] border-y border-slate-200/80 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <h3 className="text-sm sm:text-base 2xl:text-lg font-bold text-[#070708] font-heading">
          Trusted by Modern Businesses, Resorts &amp; High-Growth Brands
        </h3>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-2">
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 2xl:px-6 2xl:py-3.5 rounded-full bg-white border border-slate-200/80 shadow-xs hover:border-[#001c55] hover:shadow-md transition-all duration-200 flex-shrink-0 cursor-default"
              >
                <div className="w-8 h-8 rounded-full bg-[#eae8ff] flex items-center justify-center text-[#001c55] flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm 2xl:text-base font-bold text-[#070708] whitespace-nowrap">
                    {item.name}
                  </span>
                  <span className="text-[10px] 2xl:text-xs text-[#646a69] font-medium whitespace-nowrap">
                    {item.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
