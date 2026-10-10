"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-center items-center text-center studio-hero-bg text-white overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 2xl:pt-48 2xl:pb-40"
    >
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] 2xl:w-[1000px] h-[450px] bg-[#5030cc]/20 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center relative z-10 space-y-7 sm:space-y-8 2xl:space-y-10">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight text-white leading-[1.12] font-heading max-w-4xl 2xl:max-w-5xl mx-auto">
          The Infrastructure Layer for <br className="hidden sm:inline" /> Modern Business.
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-slate-200/90 max-w-2xl 2xl:max-w-3xl mx-auto leading-relaxed font-normal">
          One platform for custom design, engineering, and conversion<span className="text-rose-400 font-bold">.</span>
        </p>

        {/* Centered Hero Action CTAs with Working Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full sm:w-auto">
          <Link
            href="/discovery-call"
            className="studio-btn-primary w-full sm:w-auto text-sm sm:text-base 2xl:text-lg py-3.5 sm:py-4 px-7 sm:px-8 2xl:px-10 group cursor-pointer shadow-lg"
          >
            <span>Book a Discovery Call</span>
            <div className="w-6 h-6 rounded-full bg-[#001c55] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          <Link
            href="/work"
            className="studio-btn-secondary w-full sm:w-auto text-sm sm:text-base 2xl:text-lg py-3.5 sm:py-4 px-6 sm:px-7 2xl:px-9 group cursor-pointer inline-flex items-center gap-2.5"
          >
            <span>Explore Live Platforms</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
}
