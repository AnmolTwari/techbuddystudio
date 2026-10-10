"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 2xl:py-36 bg-white dark:bg-[#050711] relative transition-colors duration-300">
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FAQ Header */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#001c55]">
            <HelpCircle className="w-3.5 h-3.5 text-[#5030cc]" />
            Got Questions? We&apos;ve Got Answers
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight text-[#070708] leading-[1.15] font-heading">
            Frequently Asked Questions.
          </h2>

          <p className="text-base sm:text-lg 2xl:text-xl text-[#646a69] leading-relaxed font-normal">
            Clear answers to common questions about working with TechBuddyStudio.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 2xl:space-y-5">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-[#f7f8fa] dark:bg-[#0b1126] overflow-hidden transition-all duration-300 shadow-xs hover:border-[#001c55]/30 dark:hover:border-[#eae8ff]/30"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-7 2xl:px-8 py-6 2xl:py-7 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg 2xl:text-xl font-bold text-[#070708] dark:text-white font-heading">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 2xl:w-10 2xl:h-10 rounded-full bg-white dark:bg-[#121936] border border-slate-200/80 dark:border-slate-800 flex items-center justify-center text-[#070708] dark:text-[#eae8ff] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#001c55] text-white dark:bg-[#eae8ff] dark:text-[#001c55]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 2xl:w-5 2xl:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-7 2xl:px-8 pb-6 2xl:pb-7 pt-1 border-t border-slate-200/60 dark:border-slate-800/80 text-sm sm:text-base 2xl:text-lg text-[#646a69] dark:text-[#9ba3b8] leading-relaxed font-normal animate-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-14 p-6 sm:p-8 2xl:p-10 rounded-3xl bg-[#f6fafe] dark:bg-[#0b1126] border border-slate-200/80 dark:border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left space-y-1">
            <span className="text-base 2xl:text-lg font-bold text-[#070708] dark:text-white block font-heading">
              Still have a question about your project?
            </span>
            <span className="text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-normal block">
              Reach out to our engineering team or schedule a 1-on-1 discovery consultation.
            </span>
          </div>

          <Link
            href="/discovery-call"
            className="inline-flex items-center justify-center gap-2 bg-[#001c55] hover:bg-[#00287a] text-white font-heading font-semibold text-xs 2xl:text-sm py-3 px-5 2xl:px-6 rounded-full flex-shrink-0 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
          >
            <span>Book Discovery Call</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
