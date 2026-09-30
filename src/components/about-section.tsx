"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { 
  ExternalLink, 
  Sparkles, 
  ShieldCheck, 
  Layers,
  Award
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Official Studio Emblem & Brand Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Glow backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-sky-500/20 rounded-3xl blur-2xl -z-10" />

              <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-[#0e1424]/90 backdrop-blur-xl p-8 text-center space-y-6 shadow-xl">
                {/* Official Studio Logo Badge */}
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl shadow-indigo-600/30 border-2 border-indigo-400/30 bg-black group hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="TechBuddyStudio Official Logo"
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-indigo-600 dark:text-sky-400">
                    {siteConfig.founder.role}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Location: {siteConfig.founder.location}
                  </p>
                </div>

                {/* Experience highlight badge */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-medium">Industry Experience</span>
                    <span className="block text-xs font-bold text-slate-800 dark:text-slate-200">
                      {siteConfig.founder.experienceHighlight}
                    </span>
                  </div>
                </div>

                {/* Studio Philosophy Pill */}
                <div className="text-[11px] text-slate-500 dark:text-slate-400 italic">
                  &ldquo;Building digital experiences with craftsmanship, performance, and practical business utility.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Person Behind TechBuddyStudio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Crafting websites that help businesses thrive online.
            </h2>

            <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Hi, I&apos;m <strong className="text-slate-900 dark:text-white font-semibold">Anmol</strong> — the founder of TechBuddyStudio.
              </p>
              <p>
                I build modern web experiences with a focus on clean design, fast performance, and practical business functionality. Whether you run a boutique hotel, a retail business, an adventure travel company, or a growing brand, my goal is to make your business look world-class and effortless for customers to connect with.
              </p>
              <p>
                My background includes full-stack engineering, building production web applications, business platforms, and digital experiences across modern frontend ecosystems and enterprise backend systems.
              </p>
            </div>

            {/* Core Values / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Direct communication with the engineer building your site
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  Clean, maintainable code you own completely
                </span>
              </div>
            </div>

            {/* Subtle Personal Portfolio Link */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Want to explore Anmol&apos;s personal technical projects &amp; background?
              </span>

              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <span>View Anmol&apos;s Portfolio</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
