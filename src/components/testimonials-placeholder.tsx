"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function TestimonialsPlaceholder() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Our Quality Commitment</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#050316] dark:text-white">
            Our Commitment to Every Project
          </h3>

          <p className="text-sm sm:text-base text-[#484469] dark:text-[#a39fd4] max-w-2xl mx-auto leading-relaxed">
            We focus on authentic collaboration, transparent communication, and clean code that delivers real commercial value for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#0c0827]/90 border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
              <div className="flex items-center gap-2 text-[#2f27ce] dark:text-[#443dff] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </div>
              <p className="text-xs text-[#484469] dark:text-[#dddbff]/80 mt-1 font-medium">
                Clear milestones and upfront scope with zero unexpected charges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#0c0827]/90 border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
              <div className="flex items-center gap-2 text-[#2f27ce] dark:text-[#443dff] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Full Ownership</span>
              </div>
              <p className="text-xs text-[#484469] dark:text-[#dddbff]/80 mt-1 font-medium">
                You own 100% of your source code, domain, assets, and accounts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#0c0827]/90 border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
              <div className="flex items-center gap-2 text-[#2f27ce] dark:text-[#443dff] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Post-Launch Support</span>
              </div>
              <p className="text-xs text-[#484469] dark:text-[#dddbff]/80 mt-1 font-medium">
                Hands-on walkthrough and direct technical assistance after launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
