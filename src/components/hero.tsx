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
      {/* Ambient background glow highlights */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-indigo-500/20 via-violet-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Professional Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-slate-300/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Modern Web Development &amp; Engineering</span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] sm:leading-[1.12]"
          >
            Your business deserves a website that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-indigo-600 to-violet-600 dark:from-indigo-400 dark:via-sky-400 dark:to-violet-400">
              works as hard as you do.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We design and build modern, fast, mobile-friendly websites and web experiences that help businesses build credibility, showcase their services, and make it easier for customers to connect.
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/45 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="#work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/70 text-slate-900 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
            >
              <span>View Our Work</span>
            </Link>
          </motion.div>

          {/* Supporting Attribution Line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium pt-1"
          >
            Designed &amp; built by {siteConfig.founder.name} • {siteConfig.name}
          </motion.p>
        </div>

        {/* Feature Quick Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mt-12 mb-10 text-center">
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
            <Smartphone className="w-4 h-4 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
            <span>100% Mobile First</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
            <Zap className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" />
            <span>Fast Load Times</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>WhatsApp Ready</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-sm backdrop-blur-sm flex items-center justify-center gap-2 text-xs font-semibold text-slate-800 dark:text-slate-300">
            <ShieldCheck className="w-4 h-4 text-sky-600 dark:text-sky-400 flex-shrink-0" />
            <span>Production Quality</span>
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
