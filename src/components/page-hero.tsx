"use client";

import React from "react";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-14 lg:pb-16 bg-gradient-to-b from-[#02040a] via-[#001138] to-[#001c55] rounded-b-[36px] sm:rounded-b-[48px] lg:rounded-b-[60px] text-white overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#5030cc]/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10">
        <div className="max-w-3xl 2xl:max-w-4xl space-y-4">
          {badge && (
            <span className="inline-block text-xs 2xl:text-sm uppercase font-extrabold tracking-widest text-[#c6cbfb]">
              {badge}
            </span>
          )}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-[1.15] font-heading">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl text-slate-200/90 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
