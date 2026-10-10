import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Layers 
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Our Process & Delivery Workflow | TechBuddyStudio",
  description:
    "Learn how we take your project from discovery to live deployment in 4 transparent, milestone-driven steps.",
  alternates: {
    canonical: "/process",
  },
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      phase: "Phase 1: Discovery",
      title: "Understanding Your Business & Audience",
      tagline: "Clarity before code",
      description:
        "We start with a focused discovery consultation to understand what your business does, your ideal target customers, required booking & payment systems, and your brand aesthetic goals.",
      deliverables: [
        "Business goal & audience alignment",
        "Sitemap & page structure outline",
        "Key messaging & call-to-action direction",
        "Technical scope & fixed timeline agreement",
      ],
      duration: "Day 1 - 2",
    },
    {
      number: "02",
      phase: "Phase 2: Blueprint & UI/UX",
      title: "Structuring the Visual & User Experience",
      tagline: "Clean, modern, and branded",
      description:
        "We create a sleek, bespoke layout designed around your brand identity. Every section is crafted to guide visitors naturally toward your core services, booking flows, and contact points.",
      deliverables: [
        "Modern typography & tailored color palette",
        "Mobile & desktop layout structure",
        "Interactive wireframe preview",
        "Direct feedback & revision iteration",
      ],
      duration: "Day 3 - 5",
    },
    {
      number: "03",
      phase: "Phase 3: Engineering & Staging",
      title: "Building Fast, Responsive Code",
      tagline: "High performance & clean architecture",
      description:
        "We build your website using modern Next.js 16, React, and Tailwind CSS. You receive a private live staging URL to test the responsive interface, forms, and booking interactions in real time.",
      deliverables: [
        "Production-grade Next.js frontend",
        "Direct booking & contact form integrations",
        "Cross-browser & multi-device testing (Mobile, iPad, 4K)",
        "Lighthouse 99+ speed optimization",
      ],
      duration: "Day 6 - 10",
    },
    {
      number: "04",
      phase: "Phase 4: Launch & Handover",
      title: "Deployment, SEO Setup & Handoff",
      tagline: "Live and ready for customers",
      description:
        "We configure your custom domain, establish SSL encryption, set up essential search engine optimizations, connect analytics, perform final QA, and transfer 100% source code ownership.",
      deliverables: [
        "Custom domain connection & SSL security",
        "Google search console & SEO metadata setup",
        "100% source code & asset repository handover",
        "Post-launch walkthrough & ongoing assistance",
      ],
      duration: "Day 11 - 14",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Structured & Transparent Workflow"
          title="From Idea to Launch in 4 Steps"
          subtitle="No black boxes or hidden surprises. You receive private staging links at every milestone so you always know the exact progress of your website."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 sm:py-20">

          {/* 4 Steps Detailed List */}
          <div className="space-y-10 2xl:space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 sm:p-12 2xl:p-14 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-lg transition-all duration-200 grid grid-cols-1 lg:grid-cols-12 gap-8 2xl:gap-12 items-start"
              >
                {/* Number & Phase Header */}
                <div className="lg:col-span-4 space-y-3">
                  <span className="text-5xl sm:text-6xl 2xl:text-7xl font-extrabold font-heading text-[#001c55] block">
                    {step.number}
                  </span>
                  <span className="inline-block text-xs 2xl:text-sm uppercase font-extrabold tracking-wider px-3.5 py-1 rounded-full bg-[#eae8ff] text-[#001c55] border border-[#001c55]/10">
                    {step.phase}
                  </span>
                  <div className="flex items-center gap-2 text-xs 2xl:text-sm font-semibold text-[#646a69] pt-1">
                    <Clock className="w-3.5 h-3.5 text-[#5030cc]" />
                    <span>Typical Timeline: {step.duration}</span>
                  </div>
                </div>

                {/* Details & Deliverables */}
                <div className="lg:col-span-8 space-y-5">
                  <div>
                    <span className="text-xs 2xl:text-sm font-bold text-[#646a69] uppercase tracking-wider block">
                      {step.tagline}
                    </span>
                    <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold font-heading text-[#070708] mt-1">
                      {step.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base 2xl:text-lg text-[#4a4f5c] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs 2xl:text-sm font-bold text-[#070708] uppercase tracking-wider block mb-3">
                      Key Deliverables in this Step:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm 2xl:text-base text-[#4a4f5c]">
                      {step.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Call CTA */}
        <div className="mt-20">
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
