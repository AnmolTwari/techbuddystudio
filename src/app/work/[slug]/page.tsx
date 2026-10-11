import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { allProjects, getProjectBySlug } from "@/data/projects";
import { 
  ExternalLink, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Terminal 
} from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.id,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Case Study Not Found | TechBuddyStudio",
    };
  }

  return {
    title: `${project.title} — Case Study & Architecture | TechBuddyStudio`,
    description: `${project.tagline}. Detailed engineering breakdown, problem statement, technical stack, and verified deliverables.`,
    alternates: {
      canonical: `/work/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Technical Case Study | TechBuddyStudio`,
      description: project.description,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = allProjects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Case Study Header */}
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 3xl:pt-48 3xl:pb-24 bg-[#000d28] text-white border-b border-white/10">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
            {/* Back link */}
            <div className="mb-6 3xl:mb-8">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-xs sm:text-sm 3xl:text-base font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
                <span>Back to All Work</span>
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-4 3xl:mb-6">
              <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wider px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full bg-white/10 text-[#eae8ff] border border-white/15">
                {project.category}
              </span>
              <span
                className={`text-xs 3xl:text-sm font-bold px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full border ${
                  project.projectKind === "showcase"
                    ? "bg-sky-500/20 text-sky-300 border-sky-400/30"
                    : "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                }`}
              >
                {project.kindBadge}
              </span>
            </div>

            {/* Title & Tagline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold tracking-tight font-heading leading-tight mb-4 3xl:mb-6">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl 3xl:text-2xl text-slate-300 max-w-3xl 3xl:max-w-5xl leading-relaxed font-normal mb-8 3xl:mb-12">
              {project.tagline}
            </p>

            {/* CTA action buttons */}
            <div className="flex flex-wrap items-center gap-4 3xl:gap-6 pt-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#eae8ff] hover:bg-white text-[#001c55] font-heading font-semibold text-sm sm:text-base 3xl:text-lg py-3.5 3xl:py-4.5 px-7 3xl:px-9 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm sm:text-base 3xl:text-lg py-3.5 3xl:py-4.5 px-6 3xl:px-8 rounded-full border border-white/20 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4 3xl:w-5 3xl:h-5" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Overview Stats Ribbon */}
        <section className="py-8 3xl:py-12 bg-[#f8f9fc] border-b border-slate-200">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 3xl:gap-8">
              {project.highlights.map((h, i) => (
                <div key={i} className="p-4 3xl:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] 3xl:text-xs font-bold text-[#646a69] uppercase tracking-wider">
                    {h.label}
                  </span>
                  <span className="block text-sm sm:text-base 3xl:text-lg font-extrabold text-[#070708] mt-1 truncate font-heading">
                    {h.value}
                  </span>
                </div>
              ))}
              <div className="p-4 3xl:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-[11px] 3xl:text-xs font-bold text-[#646a69] uppercase tracking-wider">
                  Verification
                </span>
                <span className="block text-sm sm:text-base 3xl:text-lg font-extrabold text-emerald-700 mt-1 truncate font-heading">
                  Verified Outcome
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Core Body */}
        <section className="py-12 sm:py-16 2xl:py-20 3xl:py-28">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-12 sm:space-y-16 3xl:space-y-20">
            
            {/* The Challenge */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold border border-rose-200">
                <span>01. The Problem</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                The Business Challenge
              </h2>
              <p className="text-base sm:text-lg text-[#4a4f5c] leading-relaxed max-w-4xl">
                {project.caseStudy?.challenge || project.description}
              </p>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <span>02. The Solution</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                Technical Strategy &amp; Implementation
              </h2>
              <p className="text-base sm:text-lg text-[#4a4f5c] leading-relaxed max-w-4xl">
                {project.caseStudy?.solution || project.description}
              </p>

              {project.caseStudy?.architecture && (
                <div className="pt-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#070708] mb-3">
                    Architectural Highlights:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="p-4 rounded-2xl bg-[#f8f9fc] border border-slate-200 flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#001c55] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-[#4a4f5c] font-medium">{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Technology Rationale */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eae8ff] text-[#001c55] text-xs font-bold border border-slate-200">
                <Cpu className="w-3.5 h-3.5" />
                <span>03. Technology Stack</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                Why We Selected These Technologies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {(project.caseStudy?.technologyWhy || project.techStack.map(t => ({ tech: t, reason: "Chosen for high performance, developer productivity, and reliable scaling." }))).map((item, tIdx) => (
                  <div key={tIdx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#001c55] block">
                      {item.tech}
                    </span>
                    <p className="text-xs sm:text-sm text-[#646a69] leading-relaxed">
                      {item.reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Outcomes */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#001c55] text-white shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#eae8ff] inline-flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  04. Measurable Outcomes
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Verified Technical Results
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                {(project.caseStudy?.results || [project.caseStudy?.verifiedOutcome || "Verified architecture"]).map((res, rIdx) => (
                  <div key={rIdx} className="space-y-1.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-1" />
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed block font-medium">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Projects */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#070708]">
                Explore Other Case Studies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/work/${rel.id}`}
                    className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-2xs hover:shadow-md transition-all group flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#001c55]">
                        {rel.category}
                      </span>
                      <h4 className="text-lg font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors mt-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-[#646a69] mt-1 leading-relaxed">
                        {rel.tagline}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001c55]">
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
