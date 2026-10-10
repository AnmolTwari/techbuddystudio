import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { featuredProjects, secondaryProjects } from "@/data/projects";
import { ExternalLink, CheckCircle2, Globe, MonitorCheck, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Featured Work & Live Deployments | TechBuddyStudio",
  description:
    "Explore live web platforms, booking engines, and digital applications engineered by TechBuddyStudio.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Production Portfolio"
          title="Selected Work & Live Platforms"
          subtitle="A curated selection of production websites, booking platforms, and custom web applications built by TechBuddyStudio."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-10 sm:py-14 2xl:py-16">

          {/* Primary Featured Projects */}
          <div className="space-y-12 sm:space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch"
              >
                {/* Left Column: Details */}
                <div
                  className={`p-8 sm:p-12 lg:col-span-7 flex flex-col justify-between space-y-6 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs uppercase font-extrabold tracking-wider text-[#001c55]">
                        {project.category}
                      </span>
                      {project.statusBadge && (
                        <span className="text-[11px] font-bold px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 border border-emerald-500/20">
                          {project.statusBadge}
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold font-heading text-[#070708]">
                        {project.title}
                      </h2>
                      <p className="text-sm 2xl:text-base font-semibold text-[#646a69] mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base 2xl:text-lg text-[#4a4f5c] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2.5 pt-1">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="p-3 rounded-2xl bg-white border border-slate-200 shadow-xs">
                          <span className="block text-[10px] 2xl:text-xs text-[#646a69] font-bold uppercase">{h.label}</span>
                          <span className="block text-xs sm:text-sm 2xl:text-base font-extrabold text-[#070708] mt-0.5 truncate">{h.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <span className="text-xs 2xl:text-sm font-bold text-[#070708] uppercase tracking-wider block mb-2">
                        Key Capabilities:
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

                  <div className="pt-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-[#001c55] hover:bg-[#00287a] text-white font-heading font-semibold text-sm 2xl:text-base py-3 px-6 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                      >
                        <span>Launch Live Demo</span>
                        <ExternalLink className="w-4 h-4" />
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
                        {project.liveUrl?.replace("https://", "")}
                      </span>
                      <Globe className="w-3.5 h-3.5 text-[#646a69]" />
                    </div>

                    <div className="rounded-xl bg-slate-50 p-4 2xl:p-6 border border-slate-100 space-y-3 text-center">
                      <MonitorCheck className="w-8 h-8 2xl:w-10 2xl:h-10 text-[#001c55] mx-auto mb-1" />
                      <span className="text-xs 2xl:text-sm font-bold text-[#070708] block">
                        Full Responsive Preview
                      </span>
                      <span className="text-[10px] 2xl:text-xs text-[#646a69] block">
                        Optimized for Mobile, Tablet &amp; 4K Desktop
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Projects Grid */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl 2xl:text-3xl font-bold text-[#070708] font-heading mb-8">
              Additional Platform Builds
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8">
              {secondaryProjects.map((p) => (
                <div
                  key={p.id}
                  className="p-6 2xl:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="text-[11px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55]">
                      {p.category}
                    </span>
                    <h4 className="text-lg 2xl:text-xl font-bold text-[#070708] font-heading">
                      {p.title}
                    </h4>
                    <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                      {p.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] 2xl:text-xs font-bold bg-white border border-slate-200 text-[#001c55]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {p.liveUrl && (
                    <div className="pt-3 border-t border-slate-200">
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs 2xl:text-sm font-bold text-[#001c55] hover:underline inline-flex items-center gap-1"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
