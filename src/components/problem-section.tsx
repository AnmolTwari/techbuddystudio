"use client";

import React from "react";
import { Gauge, Zap, ShieldCheck } from "lucide-react";

export function ProblemSection() {
  const statMetrics = [
    {
      value: "< 1.5s",
      label: "Target Mobile Load Time",
      detail: "Edge delivery, asset optimization, and minimal client runtime.",
      icon: Zap,
    },
    {
      value: "90+",
      label: "Lighthouse Target",
      detail: "Optimized Core Web Vitals, accessible structure, and clean code.",
      icon: Gauge,
    },
    {
      value: "100%",
      label: "Code & Asset Ownership",
      detail: "Zero vendor lock-in. Full ownership of your code repository and assets upon delivery.",
      icon: ShieldCheck,
    }
  ];

  return (
    <section className="py-12 sm:py-16 2xl:py-20 3xl:py-28 bg-white relative transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1720px] 4xl:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
        {/* Split Two-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 3xl:gap-16 items-start mb-10 sm:mb-12 3xl:mb-16">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold tracking-tight text-[#070708] leading-[1.18] font-heading">
              Custom Engineering <br className="hidden sm:inline" />
              Without Agency Bloat <br className="hidden sm:inline" />
              or Template Limits
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 pt-1 lg:pt-2 3xl:pt-4">
            <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#646a69] leading-relaxed font-normal">
              Traditional web agencies often rely on heavy page builders, generic templates, and fragmented handoffs. We build custom web platforms from the ground up—combining thoughtful UI design, modern full-stack code, and direct conversion funnels tailored to your business model.
            </p>
          </div>
        </div>

        {/* Double-Border Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 2xl:gap-8 3xl:gap-10 4xl:gap-12">
          {statMetrics.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="p-2.5 rounded-[20px] 3xl:rounded-[28px] border border-[#e4e5e7] dark:border-[#1a2347] bg-[#f6fafe]/60 dark:bg-[#0b1126]/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-full rounded-xl 3xl:rounded-2xl bg-white dark:bg-[#0b1126] p-7 2xl:p-8 3xl:p-10 flex flex-col justify-between space-y-4 shadow-xs">
                  <div className="flex items-start justify-between w-full">
                    <div>
                      <span className="text-4xl sm:text-5xl 2xl:text-6xl 3xl:text-7xl font-extrabold tracking-tight text-[#070708] font-heading block">
                        {stat.value}
                      </span>
                      <span className="text-sm 2xl:text-base 3xl:text-lg font-bold text-[#001c55] mt-2 block">
                        {stat.label}
                      </span>
                    </div>
                    <div className="w-11 h-11 3xl:w-14 3xl:h-14 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Icon className="w-5 h-5 3xl:w-6 3xl:h-6" />
                    </div>
                  </div>
                  <p className="text-xs 2xl:text-sm 3xl:text-base text-[#646a69] pt-3 3xl:pt-4 border-t border-slate-100 leading-relaxed">
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
