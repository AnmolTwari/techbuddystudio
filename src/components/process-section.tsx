"use client";

import React from "react";
import Link from "next/link";
import { processSteps } from "@/data/process";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#f0effe]/50 dark:bg-[#050316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <Clock className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Structured &amp; Transparent</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            From idea to launch.
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            A clear, straightforward 4-step workflow designed to take your website from initial concept to live production smoothly.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-sm hover:shadow-lg hover:border-[#443dff]/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Step number badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-mono text-[#2f27ce] dark:text-[#443dff]">
                    {step.number}
                  </span>
                  <span className="text-xs uppercase font-extrabold tracking-wider px-2.5 py-1 rounded-md bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff]">
                    {step.step}
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#484469] dark:text-[#a39fd4]">
                    {step.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-[#050316] dark:text-white">
                    {step.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#484469] dark:text-[#dddbff]/85 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mt-6 pt-4 border-t border-[#dddbff]/50 dark:border-[#221a5a]">
                <span className="text-[11px] font-bold text-[#050316] dark:text-[#dddbff] uppercase tracking-wider block mb-2">
                  What you get:
                </span>
                <ul className="space-y-1.5 text-xs text-[#484469] dark:text-[#dddbff]/80 font-medium">
                  {step.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold rounded-xl bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-lg shadow-[#2f27ce]/25 hover:shadow-[#2f27ce]/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Let&apos;s Build Yours</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
