"use client";

import React from "react";
import Link from "next/link";
import { problemCards } from "@/data/problems";
import { 
  SearchX, 
  PhoneOff, 
  AlertTriangle, 
  Smartphone, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { InstagramIcon } from "@/components/icons";

export function ProblemSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "SearchX":
        return <SearchX className="w-5 h-5 text-rose-600 dark:text-rose-500" />;
      case "Instagram":
        return <InstagramIcon className="w-5 h-5 text-amber-600 dark:text-amber-500" />;
      case "PhoneOff":
        return <PhoneOff className="w-5 h-5 text-[#2f27ce] dark:text-[#443dff]" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-500" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-[#2f27ce] dark:text-[#443dff]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#f0effe]/50 dark:bg-[#050316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <span>Why A Professional Website Matters</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            Is your business losing opportunities online?
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            Most businesses offer great real-world services, but their online presence fails to reflect their quality, making it hard for prospective clients to take action.
          </p>
        </div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card, index) => (
            <div
              key={card.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-sm hover:shadow-md hover:border-[#443dff]/50 transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#f0effe] dark:bg-[#120e36] flex items-center justify-center border border-[#dddbff] dark:border-[#221a5a]">
                  {getIcon(card.iconName)}
                </div>

                <h3 className="text-lg font-bold text-[#050316] dark:text-white">
                  {card.title}
                </h3>

                <p className="text-sm text-[#484469] dark:text-[#a39fd4] leading-relaxed font-normal">
                  {card.painPoint}
                </p>
              </div>

              {/* Solution Pill */}
              <div className="mt-6 pt-4 border-t border-[#dddbff]/60 dark:border-[#221a5a] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-[#050316] dark:text-[#dddbff]">
                  {card.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Transformation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#2f27ce] dark:bg-[#120e36] border border-[#2f27ce] dark:border-[#221a5a] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#dddbff]">
              The TechBuddyStudio Approach
            </span>
            <p className="text-lg sm:text-xl font-bold text-white max-w-2xl leading-snug">
              We turn your online presence into a clean, credible, and high-converting asset for your business.
            </p>
          </div>

          <Link
            href="#services"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-white text-[#2f27ce] dark:bg-[#0c0827] dark:text-[#dddbff] hover:bg-[#fbfbfe] dark:hover:bg-[#19134a] transition-all shadow-xs cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
