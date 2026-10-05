"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Calculator, MessageSquare, Sparkles } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#2f27ce] dark:bg-[#120e36] border border-[#2f27ce] dark:border-[#221a5a] p-8 sm:p-12 text-white shadow-xl overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-[#dddbff]">
                Custom Tailored Estimates
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Every business is unique.
              </h3>
              <p className="text-sm sm:text-base text-[#dddbff]/90 leading-relaxed font-normal">
                Tell us what you&apos;re looking for and we&apos;ll recommend the right scope, technology, and timeline for your specific project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-lg bg-white text-[#2f27ce] hover:bg-[#fbfbfe] shadow-sm hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-lg bg-[#050316]/30 hover:bg-[#050316]/50 text-white border border-white/20 transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
