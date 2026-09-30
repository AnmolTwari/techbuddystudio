"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function TestimonialsPlaceholder() {
  return (
    <section className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-50 via-slate-50 to-violet-50 dark:from-indigo-950/40 dark:via-slate-900/40 dark:to-violet-950/40 border border-indigo-200 dark:border-indigo-500/20 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/30 bg-white dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Quality Commitment</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Our Commitment to Every Project
          </h3>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We focus on authentic collaboration, transparent communication, and clean code that delivers real commercial value for your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Zero Hidden Fees</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                Clear milestones and upfront scope with zero unexpected charges.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Full Ownership</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                You own 100% of your source code, domain, assets, and accounts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 shadow-xs">
              <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                <span>Post-Launch Support</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 font-medium">
                Hands-on walkthrough and direct technical assistance after launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
