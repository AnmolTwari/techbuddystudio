"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { InteractiveBrowserMockup } from "@/components/interactive-browser-mockup";
import { 
  ArrowRight, 
  Code2, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  MessageSquare
} from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden studio-grid-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Professional Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] text-[#050316] dark:text-[#dddbff] text-xs sm:text-sm font-semibold shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Custom Web Development &amp; Digital Engineering</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#050316] dark:text-white leading-[1.15] sm:leading-[1.12]"
          >
            Bespoke Websites &amp; Web Applications for{" "}
            <span className="text-[#2f27ce] dark:text-[#443dff]">
              Growing Businesses.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#050316]/85 dark:text-[#dddbff]/90 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We design and build fast, responsive, and conversion-focused websites that showcase your business with credibility and make it effortless for customers to connect with you.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold rounded-lg border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] text-[#050316] dark:text-[#fbfbfe] hover:bg-[#dddbff]/30 dark:hover:bg-[#19134a] transition-colors shadow-xs cursor-pointer"
            >
              <span>View Selected Work</span>
            </Link>
          </motion.div>

          {/* Supporting Attribution Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs sm:text-sm text-[#484469] dark:text-[#a39fd4] font-medium pt-1"
          >
            Crafted by {siteConfig.founder.name} • {siteConfig.name}
          </motion.p>
        </div>

        {/* Feature Quick Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 mb-10 text-center">
          <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs flex items-center justify-center gap-2 text-xs font-semibold text-[#050316] dark:text-[#dddbff]">
            <Smartphone className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
            <span>Mobile-First Design</span>
          </div>
          <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs flex items-center justify-center gap-2 text-xs font-semibold text-[#050316] dark:text-[#dddbff]">
            <Zap className="w-4 h-4 text-amber-500 flex-shrink-0" />
            <span>Fast Page Speed</span>
          </div>
          <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs flex items-center justify-center gap-2 text-xs font-semibold text-[#050316] dark:text-[#dddbff]">
            <MessageSquare className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>WhatsApp Connected</span>
          </div>
          <div className="p-3.5 rounded-lg bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs flex items-center justify-center gap-2 text-xs font-semibold text-[#050316] dark:text-[#dddbff]">
            <ShieldCheck className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
            <span>Production Tested</span>
          </div>
        </div>

        {/* Hero Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4"
        >
          <InteractiveBrowserMockup />
        </motion.div>
      </div>
    </section>
  );
}
