"use client";

import React from "react";
import { whyUsPillars } from "@/data/why-us";
import { 
  Smartphone, 
  Zap, 
  Briefcase, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

export function WhyUs() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-[#2f27ce] dark:text-[#443dff]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#443dff] dark:text-[#dddbff]" />;
      case "MessageSquare":
        return <MessageSquare className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#2f27ce] dark:text-[#443dff]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Why Choose TechBuddyStudio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            Built for businesses, not just browsers.
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            A great business website isn&apos;t just about pretty pictures. It&apos;s about creating a frictionless experience that builds instant credibility and turns casual visitors into paying customers.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyUsPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-3xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] hover:border-[#443dff]/50 shadow-sm hover:shadow-xl hover:shadow-[#2f27ce]/5 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f0effe] dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a] flex items-center justify-center">
                  {getIcon(pillar.iconName)}
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#2f27ce] dark:text-[#443dff]">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-[#050316] dark:text-white">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#484469] dark:text-[#dddbff]/85 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Key Bullet Points */}
              <div className="pt-4 border-t border-[#dddbff]/50 dark:border-[#221a5a]">
                <ul className="space-y-2 text-xs sm:text-sm text-[#050316]/80 dark:text-[#dddbff]/90 font-medium">
                  {pillar.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
