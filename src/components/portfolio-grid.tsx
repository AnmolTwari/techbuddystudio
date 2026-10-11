"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Project, allProjects } from "@/data/projects";
import { ExternalLink, CheckCircle2, Globe, MonitorCheck, Layers, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<"all" | "showcase" | "concept">("all");

  const filteredProjects = activeFilter === "all"
    ? allProjects
    : allProjects.filter((p) => p.projectKind === activeFilter);

  return (
    <div className="space-y-10">
      {/* Portfolio Transparency Banner & Category Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-3xl bg-[#f8f9fc] border border-slate-200">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#001c55]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#001c55]">
              Verified Architecture &amp; Live Demos
            </span>
          </div>
          <p className="text-xs sm:text-sm text-[#646a69] max-w-xl">
            We distinguish live interactive showcases (working deployments you can test directly) from functional concept prototypes.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#001c55] text-white shadow-xs font-bold"
                : "text-[#646a69] hover:text-[#070708]"
            }`}
          >
            All Work ({allProjects.length})
          </button>
          <button
            onClick={() => setActiveFilter("showcase")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "showcase"
                ? "bg-[#001c55] text-white shadow-xs font-bold"
                : "text-[#646a69] hover:text-[#070708]"
            }`}
          >
            Live Showcases (3)
          </button>
          <button
            onClick={() => setActiveFilter("concept")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeFilter === "concept"
                ? "bg-[#001c55] text-white shadow-xs font-bold"
                : "text-[#646a69] hover:text-[#070708]"
            }`}
          >
            Concept Prototypes (2)
          </button>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-12 sm:space-y-16 3xl:space-y-20">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group rounded-3xl 3xl:rounded-[36px] bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
          >
            {/* Left Column: Details */}
            <div
              className={`p-7 sm:p-10 lg:p-12 3xl:p-16 lg:col-span-7 flex flex-col justify-between space-y-6 ${
                index % 2 === 1 ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <div className="space-y-5 3xl:space-y-7">
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs 3xl:text-sm uppercase font-extrabold tracking-wider text-[#001c55]">
                    {project.category}
                  </span>
                  <span
                    className={`text-[11px] 3xl:text-xs font-bold px-3 py-0.5 rounded-full border ${
                      project.projectKind === "showcase"
                        ? "bg-sky-50 text-sky-700 border-sky-200"
                        : "bg-emerald-50 text-emerald-700 border-emerald-200"
                    }`}
                  >
                    {project.kindBadge}
                  </span>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold font-heading text-[#070708]">
                    {project.title}
                  </h2>
                  <p className="text-sm 2xl:text-base 3xl:text-lg font-semibold text-[#646a69] mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base 2xl:text-lg 3xl:text-xl text-[#4a4f5c] leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights Grid */}
                <div className="grid grid-cols-3 gap-2.5 3xl:gap-4 pt-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                      <span className="block text-[10px] 2xl:text-xs text-[#646a69] font-bold uppercase">{h.label}</span>
                      <span className="block text-xs sm:text-sm 2xl:text-base font-extrabold text-[#070708] mt-0.5 truncate">{h.value}</span>
                    </div>
                  ))}
                </div>

                {/* Verified Case Study Breakdown (if present) */}
                {project.caseStudy && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#001c55] block">
                      Case Study Overview:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4a4f5c]">
                      <div>
                        <strong className="text-[#070708] block mb-0.5">The Challenge:</strong>
                        <span>{project.caseStudy.challenge}</span>
                      </div>
                      <div>
                        <strong className="text-[#070708] block mb-0.5">The Solution:</strong>
                        <span>{project.caseStudy.solution}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-100 text-xs">
                      <strong className="text-emerald-700 font-bold block mb-0.5">Verified Outcome:</strong>
                      <span className="text-[#4a4f5c]">{project.caseStudy.verifiedOutcome}</span>
                    </div>
                  </div>
                )}

                {/* Key Capabilities */}
                <div className="pt-2">
                  <span className="text-xs 2xl:text-sm font-bold text-[#070708] uppercase tracking-wider block mb-2">
                    Key Features:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs 2xl:text-sm text-[#4a4f5c]">
                    {project.features.map((feat, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#001c55] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] 2xl:text-xs font-bold text-[#646a69] uppercase tracking-wider block mb-2">
                    Engineered With:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] 2xl:text-xs font-bold bg-white border border-slate-200 text-[#001c55] shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <Link
                  href={`/work/${project.id}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#001c55] hover:bg-[#00287a] text-white font-heading font-semibold text-xs sm:text-sm 2xl:text-base py-3 px-6 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#001c55] border border-slate-300 font-heading font-semibold text-xs sm:text-sm 2xl:text-base py-3 px-6 rounded-full shadow-2xs hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Preview Simulation */}
            <div
              className={`p-6 sm:p-10 2xl:p-12 lg:col-span-5 flex flex-col justify-center bg-[#f0effe]/40 border-t lg:border-t-0 ${
                index % 2 === 1 ? "lg:border-r lg:order-1" : "lg:border-l lg:order-2"
              } border-slate-200`}
            >
              <div className="rounded-2xl border border-slate-200 bg-white shadow-lg p-5 2xl:p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[11px] 2xl:text-xs font-mono text-[#646a69] truncate max-w-[180px]">
                    {project.liveUrl ? project.liveUrl.replace("https://", "") : `${project.id}.prototype`}
                  </span>
                  <Globe className="w-3.5 h-3.5 text-[#646a69]" />
                </div>

                <div className="rounded-xl bg-slate-50 p-6 border border-slate-100 space-y-3 text-center">
                  <MonitorCheck className="w-8 h-8 2xl:w-10 2xl:h-10 text-[#001c55] mx-auto mb-1" />
                  <span className="text-xs 2xl:text-sm font-bold text-[#070708] block">
                    {project.projectKind === "showcase" ? "Live Interactive Showcase" : "Technical Concept Prototype"}
                  </span>
                  <span className="text-[11px] 2xl:text-xs text-[#646a69] block">
                    {project.liveUrl ? "Fully functional deployment ready to test" : "Internal architecture and codebase"}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#001c55] hover:underline pt-1"
                    >
                      <span>Open live site</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
