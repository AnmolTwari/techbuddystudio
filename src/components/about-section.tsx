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
              <div className="rounded-2xl border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] p-8 text-center space-y-6 shadow-lg">
                {/* Official Studio Logo Badge */}
                <div className="relative w-28 h-28 mx-auto rounded-2xl overflow-hidden border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] p-2 shadow-xs group hover:scale-105 transition-transform duration-200">
                  <Image
                    src="/newlogo.png"
                    alt="TechBuddyStudio Official Logo"
                    fill
                    sizes="112px"
                    className="object-contain p-1"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-[#050316] dark:text-white">
                    {siteConfig.founder.name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#2f27ce] dark:text-[#443dff]">
                    {siteConfig.founder.role}
                  </p>
                  <p className="text-xs text-[#484469] dark:text-[#a39fd4]">
                    Location: {siteConfig.founder.location}
                  </p>
                </div>

                {/* Experience highlight badge */}
                <div className="p-3 rounded-xl bg-[#f0effe] dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a] flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-[#dddbff]/60 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#443dff] flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#484469] dark:text-[#a39fd4] uppercase font-medium">Industry Experience</span>
                    <span className="block text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                      {siteConfig.founder.experienceHighlight}
                    </span>
                  </div>
                </div>

                {/* Philosophy Statement */}
                <div className="text-[11px] text-[#484469] dark:text-[#a39fd4] italic">
                  &ldquo;Engineering high-performance web platforms with clean code, fast load times, and practical business utility.&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#443dff]" />
              <span>About TechBuddyStudio</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#050316] dark:text-white tracking-tight">
              Crafting websites that help businesses thrive online.
            </h2>

            <div className="space-y-4 text-base text-[#484469] dark:text-[#dddbff]/90 leading-relaxed font-normal">
              <p>
                Hi, I&apos;m <strong className="text-[#050316] dark:text-white font-semibold">Anmol</strong>, the founder of TechBuddyStudio.
              </p>
              <p>
                I build modern web experiences with a focus on clean design, fast performance, and practical business functionality. Whether you run a hotel or resort, a retail business, a travel agency, or a growing company, my goal is to make your business look world-class and effortless for customers to connect with.
              </p>
              <p>
                My background includes full-stack engineering, building production web applications, business platforms, and digital experiences across modern frontend ecosystems and enterprise backend systems.
              </p>
            </div>

            {/* Core Values / Approach */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-[#050316] dark:text-[#dddbff]">
                  Direct communication with the engineer building your site
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] flex items-start gap-2.5">
                <Layers className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-[#050316] dark:text-[#dddbff]">
                  Clean, maintainable code you own completely
                </span>
              </div>
            </div>

            {/* Subtle Personal Portfolio Link */}
            <div className="pt-4 border-t border-[#dddbff] dark:border-[#221a5a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-[#484469] dark:text-[#a39fd4]">
                Want to explore Anmol&apos;s personal technical projects &amp; background?
              </span>

              <a
                href={siteConfig.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border border-[#dddbff] dark:border-[#221a5a] bg-[#f0effe] dark:bg-[#120e36] text-[#050316] dark:text-[#dddbff] hover:bg-[#dddbff]/40 dark:hover:bg-[#19134a] transition-colors"
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
