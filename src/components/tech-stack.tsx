"use client";

import React from "react";
import { techStackCategories } from "@/data/tech-stack";
import { Cpu } from "lucide-react";

export function TechStack() {
  return (
    <section className="py-20 sm:py-28 bg-[#f0effe]/50 dark:bg-[#050316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <Cpu className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Robust Engineering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            Modern technology. Practical results.
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            We select production-proven frameworks and reliable infrastructure to ensure your website is fast, secure, scalable, and easy to maintain.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#050316] dark:text-white">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {cat.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="p-2.5 rounded-xl bg-[#f0effe]/70 dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a] flex items-center justify-between"
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                          {tech.name}
                        </span>
                        <span className="text-[10px] text-[#484469] dark:text-[#a39fd4] font-medium">
                          {tech.description}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] border border-[#dddbff] dark:border-[#221a5a]">
                        {tech.badge}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
