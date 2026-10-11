"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[72vh] sm:min-h-[76vh] lg:min-h-[80vh] 3xl:min-h-[84vh] 4xl:min-h-[86vh] flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#02040a] via-[#001138] to-[#001c55] rounded-none text-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 2xl:pt-40 2xl:pb-24 3xl:pt-48 3xl:pb-32"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[1000px] 3xl:w-[1400px] 4xl:w-[1800px] h-[450px] 3xl:h-[650px] bg-[#5030cc]/20 blur-[160px] 3xl:blur-[220px] rounded-full pointer-events-none" />

      <div className="w-full max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 flex flex-col items-center justify-center text-center relative z-10 space-y-7 sm:space-y-8 2xl:space-y-10 3xl:space-y-12">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl 4xl:text-[7rem] font-bold tracking-tight text-white leading-[1.12] 3xl:leading-[1.08] font-heading max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl mx-auto">
          Custom Web Development <br className="hidden sm:inline" /> &amp; Business Solutions.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl 3xl:text-3xl text-slate-200/90 max-w-2xl 2xl:max-w-3xl 3xl:max-w-5xl mx-auto leading-relaxed font-normal">
          Fast, responsive websites and digital applications engineered for conversion. Specializing in hospitality, retail, and SaaS.
        </p>

        {/* Centered Hero Action CTAs with Working Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="/discovery-call"
            className="inline-flex items-center justify-center gap-2.5 bg-[#eae8ff] hover:bg-[#ded9ff] text-[#001c55] font-heading font-semibold text-sm sm:text-base 2xl:text-lg 3xl:text-xl py-3.5 sm:py-4 3xl:py-5 px-7 sm:px-8 2xl:px-10 3xl:px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
          >
            <span>Book a Discovery Call</span>
            <div className="w-6 h-6 3xl:w-7 3xl:h-7 rounded-full bg-[#001c55] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
            </div>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/80 font-heading font-semibold text-sm sm:text-base 2xl:text-lg 3xl:text-xl py-3.5 sm:py-4 3xl:py-5 px-6 sm:px-7 2xl:px-9 3xl:px-11 rounded-full hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
          >
            <span>Explore Live Showcases</span>
            <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
