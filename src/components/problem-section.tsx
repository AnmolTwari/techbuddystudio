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
        return <PhoneOff className="w-5 h-5 text-indigo-600 dark:text-indigo-500" />;
      case "AlertTriangle":
        return <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-500" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-sky-600 dark:text-sky-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-indigo-600 dark:text-indigo-500" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-[#070a10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-200 dark:border-rose-500/20 bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-400 text-xs font-bold">
            <span>The Online Opportunity Gap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Is your business losing opportunities online?
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            Most businesses offer great real-world services, but their online presence fails to reflect their quality, making it hard for prospective clients to take action.
          </p>
        </div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemCards.map((card, index) => (
            <div
              key={card.id}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center border border-slate-200 dark:border-slate-700/60">
                  {getIcon(card.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {card.painPoint}
                </p>
              </div>

              {/* Solution Pill */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                  {card.solution}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Transformation Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-900 via-slate-900 to-violet-950 border border-indigo-500/30 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
              The TechBuddyStudio Solution
            </span>
            <p className="text-lg sm:text-xl font-bold text-white max-w-2xl leading-snug">
              TechBuddyStudio helps turn your online presence into a professional customer experience.
            </p>
          </div>

          <Link
            href="#services"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white transition-all shadow-md"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
