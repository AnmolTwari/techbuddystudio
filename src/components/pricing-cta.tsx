"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Calculator, MessageSquare, Sparkles } from "lucide-react";

export function PricingCTA() {
  return (
    <section className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-800 p-8 sm:p-12 text-white shadow-2xl overflow-hidden">
          {/* Ambient glow decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-200">
                Custom Tailored Estimates
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
                Every business is different.
              </h3>
              <p className="text-sm sm:text-base text-indigo-100 leading-relaxed">
                Tell us what you&apos;re looking for and we&apos;ll recommend the right scope, technology, and timeline for your specific project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold rounded-xl bg-white text-indigo-900 hover:bg-slate-100 shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl bg-indigo-950/40 hover:bg-indigo-950/60 text-white border border-white/20 transition-colors"
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
