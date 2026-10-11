import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { dedicatedServices, getDedicatedService } from "@/data/services-data";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  ExternalLink,
  Users,
  Layers,
  CalendarCheck
} from "lucide-react";
import type { Metadata } from "next";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(dedicatedServices).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getDedicatedService(slug);

  if (!service) {
    return {
      title: "Service Not Found | TechBuddyStudio",
    };
  }

  return {
    title: `${service.metaTitle}`,
    description: service.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: "website",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getDedicatedService(slug);

  if (!service) {
    notFound();
  }

  const otherServices = Object.values(dedicatedServices).filter((s) => s.slug !== service.slug);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Service Hero */}
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 3xl:pt-48 3xl:pb-24 bg-[#000d28] text-white border-b border-white/10">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
            <div className="mb-6 3xl:mb-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs sm:text-sm 3xl:text-base font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
                <span>All Engineering Services</span>
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full bg-white/10 text-[#eae8ff] text-xs 3xl:text-sm font-bold border border-white/15 mb-4 3xl:mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#c6cbfb]" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl 3xl:text-7xl 4xl:text-8xl font-extrabold tracking-tight font-heading leading-tight mb-4 3xl:mb-6">
              {service.title}
            </h1>
            <p className="text-lg sm:text-2xl 3xl:text-3xl text-slate-200 font-semibold max-w-3xl 3xl:max-w-5xl leading-snug mb-4 3xl:mb-6">
              {service.tagline}
            </p>
            <p className="text-sm sm:text-base 3xl:text-xl text-slate-300/90 max-w-3xl 3xl:max-w-5xl leading-relaxed font-normal mb-8 3xl:mb-12">
              {service.heroDescription}
            </p>

            <div className="flex flex-wrap items-center gap-4 3xl:gap-6 pt-2">
              <Link
                href="/discovery-call"
                className="inline-flex items-center justify-center gap-2.5 bg-[#eae8ff] hover:bg-white text-[#001c55] font-heading font-semibold text-sm sm:text-base 3xl:text-lg py-3.5 3xl:py-4.5 px-7 3xl:px-9 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Book a Discovery Call</span>
                <div className="w-6 h-6 3xl:w-7 3xl:h-7 rounded-full bg-[#001c55] text-white flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                </div>
              </Link>

              {service.caseStudyRef && (
                <Link
                  href={service.caseStudyRef.url}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-heading font-semibold text-sm sm:text-base 3xl:text-lg py-3.5 3xl:py-4.5 px-6 3xl:px-8 rounded-full border border-white/20 transition-all duration-200"
                >
                  <span>View Case Study: {service.caseStudyRef.title}</span>
                  <ArrowRight className="w-4 h-4 3xl:w-5 3xl:h-5" />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Highlights Ribbon */}
        <section className="py-6 3xl:py-10 bg-[#f8f9fc] border-b border-slate-200">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 3xl:gap-8">
              {service.highlights.map((h, i) => (
                <div key={i} className="p-4 3xl:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <span className="block text-[11px] 3xl:text-xs font-bold text-[#646a69] uppercase tracking-wider">{h.label}</span>
                  <span className="block text-sm sm:text-base 3xl:text-lg font-extrabold text-[#070708] mt-1 font-heading">{h.value}</span>
                </div>
              ))}
              <div className="p-4 3xl:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="block text-[11px] 3xl:text-xs font-bold text-[#646a69] uppercase tracking-wider">Ownership</span>
                <span className="block text-sm sm:text-base 3xl:text-lg font-extrabold text-emerald-700 mt-1 font-heading">100% Code Handover</span>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-12 sm:py-16 2xl:py-20 3xl:py-28">
          <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-12 3xl:space-y-18">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#001c55] block">
                Deliverables &amp; Engineering Scope
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-heading text-[#070708] tracking-tight">
                What You Receive Upon Handover
              </h2>
              <p className="text-sm sm:text-base text-[#646a69] max-w-2xl">
                Every project is delivered with clean architecture, modern performance standards, and complete transparency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                {service.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="p-6 rounded-3xl bg-[#f8f9fc] border border-slate-200 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#001c55] text-white flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold font-heading text-[#070708]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#4a4f5c] leading-relaxed pl-10.5">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who This Service Is For */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#001c55] block mb-1">
                  Target Fit
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                  Who This Service Is For
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.whoIsItFor.map((item, wIdx) => (
                  <div key={wIdx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#070708]">
                      {item.persona}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#646a69] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Process */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#001c55] block mb-1">
                  Delivery Cadence
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                  The 4-Step Delivery Process
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.process.map((step) => (
                  <div key={step.step} className="p-6 rounded-3xl bg-[#f8f9fc] border border-slate-200 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-extrabold font-heading text-[#001c55]/20">
                          {step.step}
                        </span>
                        <span className="text-[11px] font-bold text-[#001c55] px-2.5 py-0.5 rounded-full bg-[#eae8ff]">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-heading text-[#070708]">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#646a69] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Banner */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#001c55] text-white space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#eae8ff]">
                  Modern Engineering Stack
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Engineered with Modern, High-Performance Technologies
              </h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-white/10 text-white border border-white/15"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Services Navigation */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#070708]">
                Explore Other Specialized Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {otherServices.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/services/${other.slug}`}
                    className="p-5 rounded-2xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] transition-all group flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#001c55]">
                        {other.badge}
                      </span>
                      <h4 className="text-sm font-bold text-[#070708] group-hover:text-[#001c55] transition-colors font-heading mt-1">
                        {other.title}
                      </h4>
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs font-bold text-[#001c55] pt-2">
                      <span>View Service</span>
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
