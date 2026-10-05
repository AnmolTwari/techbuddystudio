"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Got Questions? We&apos;ve Got Answers</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            Clear answers to common questions about working with TechBuddyStudio.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#443dff] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#050316] dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg bg-[#f0effe] dark:bg-[#120e36] flex items-center justify-center text-[#484469] dark:text-[#dddbff] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-[#dddbff]/60 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 border-t border-[#dddbff]/40 dark:border-[#221a5a] text-sm text-[#484469] dark:text-[#dddbff]/85 leading-relaxed font-normal animate-in slide-in-from-top-1 duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have more questions */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f0effe]/70 dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a] text-center flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <span className="text-sm font-bold text-[#050316] dark:text-white block">
              Still have a question about your project?
            </span>
            <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">
              Message us directly on WhatsApp or email anytime.
            </span>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors flex-shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
