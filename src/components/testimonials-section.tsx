"use client";

import React from "react";
import { realTestimonials } from "@/data/testimonials";
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 3xl:py-28 bg-[#f8f9fc] border-t border-slate-200">
      <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1720px] 4xl:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 3xl:mb-18">
          <div className="max-w-2xl 3xl:max-w-4xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae8ff] text-[#001c55] text-xs 3xl:text-sm font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Transparent Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl 2xl:text-5xl 3xl:text-6xl font-bold font-heading text-[#070708] tracking-tight">
              Real Collaborator &amp; Client Feedback
            </h2>
            <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#646a69]">
              Direct feedback from business operators, hospitality leaders, and retail managers who have evaluated and tested our systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs 3xl:text-sm font-semibold text-[#646a69] bg-white px-4 3xl:px-6 py-2 3xl:py-3 rounded-2xl border border-slate-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>100% Verified Technical Feedback</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 3xl:gap-10 4xl:gap-12 items-stretch">
          {realTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-7 sm:p-8 3xl:p-10 rounded-3xl bg-white border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Rating & Context Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 3xl:w-5 3xl:h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] 3xl:text-xs uppercase font-bold text-[#001c55] bg-[#eae8ff] px-2.5 3xl:px-3 py-0.5 3xl:py-1 rounded-full">
                    {t.verifiedContext}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base 3xl:text-lg text-[#4a4f5c] leading-relaxed italic">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#070708] font-heading">
                    {t.author}
                  </h4>
                  <p className="text-xs text-[#646a69]">
                    {t.role}
                  </p>
                  <p className="text-[11px] font-semibold text-[#001c55] mt-0.5">
                    {t.project}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-xl bg-slate-100 text-[#001c55] flex items-center justify-center flex-shrink-0">
                  <MessageSquareQuote className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
