"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 2xl:py-20 3xl:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1720px] 4xl:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
        {/* Curved Deep Navy CTA Card */}
        <div className="relative rounded-3xl 3xl:rounded-[36px] bg-gradient-to-b from-[#000000] via-[#001238] to-[#001c55] border border-white/10 p-8 sm:p-12 lg:p-16 2xl:p-20 3xl:p-24 4xl:p-28 text-center text-white shadow-2xl overflow-hidden">
          {/* Subtle Ambient Radial Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] 2xl:w-[800px] 3xl:w-[1200px] h-[350px] 3xl:h-[500px] bg-[#5030cc]/25 blur-[140px] 3xl:blur-[200px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl mx-auto space-y-6 3xl:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold tracking-tight text-white leading-[1.15] font-heading">
              Ready to Build Your High-Performance Platform?
            </h2>

            <p className="text-base sm:text-lg md:text-xl 3xl:text-2xl text-slate-200/90 leading-relaxed font-normal max-w-2xl 3xl:max-w-4xl mx-auto">
              Schedule a focused 1-on-1 discovery call with our lead engineers to map your features, architecture, and fixed milestone quote.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 3xl:gap-6 pt-4 3xl:pt-6">
              <Link
                href="/discovery-call"
                className="inline-flex items-center justify-center gap-2.5 bg-[#eae8ff] hover:bg-[#ded9ff] text-[#001c55] font-heading font-semibold text-sm sm:text-base 2xl:text-lg 3xl:text-xl py-4 3xl:py-5 px-8 2xl:px-10 3xl:px-12 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
              >
                <span>Book a Discovery Call</span>
                <div className="w-6 h-6 3xl:w-7 3xl:h-7 rounded-full bg-[#001c55] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform duration-200">
                  <ArrowRight className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                </div>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white/80 font-heading font-semibold text-sm sm:text-base 2xl:text-lg 3xl:text-xl py-4 3xl:py-5 px-7 2xl:px-9 3xl:px-11 rounded-full hover:-translate-y-0.5 transition-all duration-200 cursor-pointer w-full sm:w-auto group"
              >
                <span>Send Project Brief</span>
                <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

