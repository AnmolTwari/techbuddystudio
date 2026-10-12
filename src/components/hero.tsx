"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col justify-center items-center text-center bg-gradient-to-b from-[#02040a] via-[#001138] to-[#001c55] text-white overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3.5rem] lg:rounded-b-[4.5rem] 2xl:rounded-b-[5.5rem] shadow-xl pt-28 pb-16 sm:pt-36 sm:pb-24 2xl:pt-40 2xl:pb-28 mb-10 sm:mb-14 lg:mb-16 2xl:mb-20 transition-colors duration-300"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[1000px] 3xl:w-[1400px] h-[450px] bg-[#5030cc]/20 blur-[160px] rounded-full pointer-events-none" />

      {/* Hero Content Container */}
      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-7">
        
        {/* Subtle Pill Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium text-slate-200 shadow-xs transition-colors cursor-default">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Showcases &amp; High-Conversion Digital Platforms</span>
        </div>

        {/* Refined Main Headline (compact & proportional, leaving breathing room on screen) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-bold tracking-tight text-white leading-[1.14] font-heading max-w-4xl mx-auto">
          Custom Web Development <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-white via-slate-100 to-[#c6cbfb] bg-clip-text text-transparent">
            &amp; Business Solutions.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Fast, responsive websites and digital applications engineered for conversion. Specializing in hospitality, retail, and SaaS.
        </p>

        {/* Centered Hero Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="/discovery-call"
            className="inline-flex items-center justify-center gap-2.5 bg-[#eae8ff] hover:bg-[#ded9ff] text-[#001c55] font-heading font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-7 sm:px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
          >
            <span>Book a Discovery Call</span>
            <div className="w-6 h-6 rounded-full bg-[#001c55] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/80 font-heading font-semibold text-sm sm:text-base py-3.5 sm:py-4 px-6 sm:px-7 rounded-full hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
          >
            <span>Explore Live Showcases</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}

