"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden studio-dot-pattern">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-[#443dff]" />
          <span>Ready to Grow Your Business?</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-[#fbfbfe] tracking-tight">
            Ready to build your online presence?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#050316]/75 dark:text-[#dddbff]/80 leading-relaxed font-normal">
            Let&apos;s create a website that makes your business easier to discover, understand, and contact.
          </p>
        </div>

        {/* Dual Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 transition-colors shadow-xs cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
