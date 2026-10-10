"use client";

import React from "react";
import Link from "next/link";
import { processSteps } from "@/data/process";
import { ArrowRight } from "lucide-react";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 2xl:py-32 bg-white relative transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#070708] font-heading">
            Get Started with TechBuddyStudio
          </h2>
        </div>

        {/* 4 Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 2xl:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 2xl:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[#001c55] block">
                  {step.number}
                </span>

                <h3 className="text-xl 2xl:text-2xl font-bold text-[#070708] font-heading">
                  {step.title}
                </h3>

                <p className="text-sm 2xl:text-base text-[#646a69] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Action Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-base sm:text-lg font-bold text-[#070708] font-heading block">
              Want a detailed step-by-step breakdown?
            </span>
            <span className="text-xs sm:text-sm text-[#646a69] block">
              Explore our complete 4-phase agile engineering timeline and live staging milestones.
            </span>
          </div>

          <Link
            href="/process"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-[#001c55] bg-[#eae8ff] hover:bg-white transition-all shadow-xs inline-flex items-center gap-2 group flex-shrink-0 cursor-pointer"
          >
            <span>Explore Full Process</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
