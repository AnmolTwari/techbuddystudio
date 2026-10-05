"use client";

import React, { useState } from "react";
import Link from "next/link";
import { featuredProjects, secondaryProjects } from "@/data/projects";
import { 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Globe, 
  Cpu
} from "lucide-react";

export function FeaturedWork() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-[#f0effe]/50 dark:bg-[#050316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Proven Digital Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-white tracking-tight">
            Selected Work
          </h2>

          <p className="text-base sm:text-lg text-[#484469] dark:text-[#a39fd4]">
            A selection of web platforms and digital experiences built by Anmol, demonstrating conversion-focused UX, clean responsive design, and robust engineering.
          </p>
        </div>

        {/* Primary Featured Projects (Large Visual Cards) */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-3xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-md hover:shadow-2xl hover:shadow-[#2f27ce]/5 transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch`}
            >
              {/* Left Column: Project Details & Features */}
              <div className={`p-8 sm:p-10 lg:col-span-7 flex flex-col justify-between space-y-6 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-[#2f27ce] dark:text-[#443dff]">
                      {project.category}
                    </span>
                    {project.statusBadge && (
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${project.themeColor.badgeBorder}`}>
                        {project.statusBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#050316] dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#484469] dark:text-[#a39fd4] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Business Description */}
                  <p className="text-sm sm:text-base text-[#050316]/85 dark:text-[#dddbff]/90 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Highlights Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-[#f0effe] dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a]">
                        <span className="block text-[10px] text-[#484469] dark:text-[#a39fd4] font-bold uppercase">{h.label}</span>
                        <span className="block text-xs font-extrabold text-[#050316] dark:text-[#fbfbfe] mt-0.5 truncate">{h.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-[#050316] dark:text-[#dddbff] uppercase tracking-wider block mb-2.5">
                      Key Capabilities:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#050316]/80 dark:text-[#dddbff]/90 font-medium">
                      {project.features.map((feat, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-3 border-t border-[#dddbff]/50 dark:border-[#221a5a]">
                    <span className="text-[11px] font-bold text-[#484469] dark:text-[#a39fd4] uppercase tracking-wider block mb-2">
                      Engineered With:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-bold rounded-lg bg-[#f0effe] dark:bg-[#120e36] text-[#050316] dark:text-[#dddbff] border border-[#dddbff] dark:border-[#221a5a]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Demo CTA Link */}
                <div className="pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>View Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Visual Case Showcase Container */}
              <div
                className={`p-6 sm:p-8 lg:p-10 lg:col-span-5 flex flex-col justify-center bg-[#fbfbfe] dark:bg-[#07051a] border-t lg:border-t-0 ${
                  index % 2 === 1 ? "lg:border-r lg:order-1" : "lg:border-l lg:order-2"
                } border-[#dddbff] dark:border-[#221a5a] relative overflow-hidden`}
              >
                {/* Decorative Visual Mockup UI Card */}
                <div className="relative rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] shadow-lg p-5 space-y-4 transform group-hover:scale-[1.01] transition-transform duration-200">
                  {/* Browser simulated bar */}
                  <div className="flex items-center justify-between border-b border-[#dddbff] dark:border-[#221a5a] pb-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#484469] dark:text-[#a39fd4] truncate max-w-[180px]">
                      {project.liveUrl?.replace("https://", "")}
                    </span>
                    <Globe className="w-3.5 h-3.5 text-[#484469] dark:text-[#a39fd4]" />
                  </div>

                  {/* Project specific UI simulation */}
                  {project.id === "directstay" && (
                    <div className="space-y-3 py-2">
                      <div className="h-28 rounded-lg bg-[#2f27ce] p-4 text-white flex flex-col justify-end">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#dddbff]">Luxury Resort Booking</span>
                        <h4 className="text-base font-bold">Oceanview Grand Villa</h4>
                        <span className="text-xs text-[#dddbff]/90 font-medium">$340 / night • Direct Perks</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-md bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] font-bold border border-[#dddbff] dark:border-[#221a5a] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
                          <span>Direct WhatsApp Concierge</span>
                        </div>
                        <div className="p-2 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-800/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                          <span>Instant ROI Calculator</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "wandertribe" && (
                    <div className="space-y-3 py-2">
                      <div className="h-28 rounded-lg bg-[#b45309] p-4 text-white flex flex-col justify-end">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-amber-200">Adventure Trail 2026</span>
                        <h4 className="text-base font-bold">High Altitude Expedition</h4>
                        <span className="text-xs text-amber-100 font-medium">Live Batch Availability • 4 Seats Left</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-800/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                          <span>Interactive Itinerary</span>
                        </div>
                        <div className="p-2 rounded-md bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-300 font-bold border border-orange-200 dark:border-orange-800/40 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-orange-600 dark:text-orange-400 flex-shrink-0" />
                          <span>1-Tap WhatsApp Booking</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {project.id === "shopmanager" && (
                    <div className="space-y-3 py-2">
                      <div className="h-28 rounded-lg bg-[#19134a] p-4 text-white flex flex-col justify-end">
                        <span className="text-[10px] uppercase font-extrabold tracking-wider text-[#dddbff]">Multi-Branch Management</span>
                        <h4 className="text-base font-bold">POS &amp; Inventory Hub</h4>
                        <span className="text-xs text-[#dddbff]/90 font-medium">Spring Boot + Postgres Architecture</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div className="p-2 rounded-md bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] font-bold border border-[#dddbff] dark:border-[#221a5a] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
                          <span>Mobile Companion POS</span>
                        </div>
                        <div className="p-2 rounded-md bg-[#dddbff]/30 dark:bg-[#120e36] text-[#2f27ce] dark:text-[#dddbff] font-bold border border-[#dddbff] dark:border-[#221a5a] flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
                          <span>Enterprise Security</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual live link button */}
                  <div className="pt-2 text-center">
                    <span className="text-xs text-[#2f27ce] dark:text-[#443dff] font-bold inline-flex items-center gap-1">
                      Click &ldquo;View Live Demo&rdquo; to test the live app <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Section: More Work */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#dddbff] dark:border-[#221a5a]">
            <div>
              <h3 className="text-2xl font-bold text-[#050316] dark:text-white">
                More Technical Work
              </h3>
              <p className="text-sm text-[#484469] dark:text-[#a39fd4] mt-1 font-medium">
                Advanced software platforms built with modern APIs, realtime websockets, and AI integrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryProjects.map((project) => (
              <div
                key={project.id}
                className="p-7 rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] hover:border-[#443dff]/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#2f27ce] dark:text-[#443dff]">
                      {project.category}
                    </span>
                    <Cpu className="w-4 h-4 text-[#484469] dark:text-[#a39fd4]" />
                  </div>

                  <h4 className="text-xl font-bold text-[#050316] dark:text-white">
                    {project.title}
                  </h4>

                  <p className="text-sm text-[#050316]/85 dark:text-[#dddbff]/90 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-[#050316]/80 dark:text-[#dddbff]/90 pt-1 font-medium">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#dddbff]/50 dark:border-[#221a5a] flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-bold rounded bg-[#f0effe] dark:bg-[#120e36] text-[#050316] dark:text-[#dddbff] border border-[#dddbff] dark:border-[#221a5a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] text-center space-y-3 shadow-sm">
          <h4 className="text-base font-bold text-[#050316] dark:text-white">
            Have a specific vision for your business website?
          </h4>
          <p className="text-sm text-[#484469] dark:text-[#a39fd4] max-w-xl mx-auto font-normal">
            We can structure a tailored design and feature set designed specifically around how your customers make buying decisions.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#2f27ce] dark:text-[#443dff] hover:text-[#443dff] underline pt-1"
          >
            <span>Discuss your custom requirements →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
