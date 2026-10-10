"use client";

import React from "react";
import { Gauge, Zap, ShieldCheck } from "lucide-react";

export function ProblemSection() {
  const statMetrics = [
    {
      value: "99.8%",
      label: "Performance & SEO Standard",
      detail: "Google Lighthouse score across all screen sizes.",
      icon: Gauge,
    },
    {
      value: "< 1.2s",
      label: "Average Page Load Speed",
      detail: "Next.js 15 Edge network with global CDN caching.",
      icon: Zap,
    },
    {
      value: "100%",
      label: "Source Code & Asset Ownership",
      detail: "Zero vendor lock-in. You own your code completely.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-12 sm:py-16 2xl:py-20 bg-white relative transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Two-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 sm:mb-12">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-[#070708] leading-[1.18] font-heading">
              The Only Web Studio <br className="hidden sm:inline" />
              with Design, Performance, <br className="hidden sm:inline" />
              and Conversion in One Platform
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-5 pt-1 lg:pt-2">
            <p className="text-base sm:text-lg 2xl:text-xl text-[#646a69] leading-relaxed font-normal">
              Most businesses run website design, development, and customer acquisition on separate systems. TechBuddyStudio is the first platform where all three belong to the same infrastructure.
            </p>
            <p className="text-base sm:text-lg 2xl:text-xl text-[#646a69] leading-relaxed font-normal">
              Any modern business can launch and scale with high-performance web engineering. We made it that way, so cost and technical complexity are never the reason a business stays offline.
            </p>
          </div>
        </div>

        {/* Double-Border Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 2xl:gap-8">
          {statMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-2.5 rounded-[20px] border border-[#e4e5e7] dark:border-[#1a2347] bg-[#f6fafe]/60 dark:bg-[#0b1126]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-full rounded-xl bg-white dark:bg-[#0b1126] p-7 2xl:p-8 flex flex-col justify-between space-y-4 shadow-xs">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <span className="text-4xl sm:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-[#070708] font-heading block">
                        {stat.value}
                      </span>
                      <span className="text-sm 2xl:text-base font-bold text-[#001c55] mt-2 block">
                        {stat.label}
                      </span>
                    </div>
                    <div className="w-11 h-11 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <p className="text-xs 2xl:text-sm text-[#646a69] pt-3 border-t border-slate-100 leading-relaxed">
                    {stat.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
