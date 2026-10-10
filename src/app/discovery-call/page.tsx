import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { 
  MessageSquare, 
  PhoneCall, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Calendar,
  Mail,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Discovery Call | TechBuddyStudio",
  description:
    "Schedule a 1-on-1 discovery consultation with TechBuddyStudio. Explore custom web architectures, direct booking systems, fixed-price quotes, and timeline roadmaps.",
  alternates: {
    canonical: "/discovery-call",
  },
};

export default function DiscoveryCallPage() {
  const benefits = [
    {
      title: "Direct Engineer Consultation",
      desc: "Talk directly to senior web engineers who understand modern Next.js architecture, databases, and conversion logic — no sales reps.",
      icon: Layers,
    },
    {
      title: "Fixed-Price Scope & Timeline",
      desc: "Receive a clear, transparent milestone breakdown with zero hidden fees and committed launch dates.",
      icon: Clock,
    },
    {
      title: "100% Confidential & No Obligation",
      desc: "Your ideas and business data are protected. Discuss freely and evaluate your project without high-pressure commitments.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Dark Curved Header */}
        <PageHero
          badge="1-on-1 Engineering Consultation"
          title="Book Your Discovery Call"
          subtitle="Map out your project requirements, explore custom booking or web architecture, get accurate cost estimates, and receive a clear delivery roadmap."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-16">
          
          {/* 3 Unified Professional Consultation Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Strategy Call Session */}
            <a
              href="#contact"
              className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Live Engineering Call
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors">
                    1-on-1 Scope Alignment
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    Book a focused consultation with lead engineers to review your technical goals, features, and custom architecture.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs 2xl:text-sm font-bold text-[#001c55]">
                <span>Submit Scope Below</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Email Consultation */}
            <a
              href={siteConfig.contact.mailtoUrl}
              className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Official Inbox
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors">
                    Email Project Brief
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    Send your project specifications, wireframes, reference links, or RFP documents directly to our team.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs 2xl:text-sm font-bold text-[#001c55]">
                <span className="truncate">{siteConfig.contact.email}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* Response SLA */}
            <div className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Fast Turnaround SLA
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708]">
                    Under 2 Hours Response
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    We value your time. All project submissions receive a detailed scope breakdown, advice, and timeline estimate.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs 2xl:text-sm font-semibold text-[#646a69]">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mon – Sat Delivery</span>
                </div>
                <span className="text-[11px] uppercase font-bold text-[#001c55]">Worldwide</span>
              </div>
            </div>
          </div>

          {/* What to Expect in Discovery Session */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#f8f9fc] border border-slate-200 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#001c55]">
                Structured Discovery
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708]">
                What We Cover in Your Discovery Session
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-[#070708]">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#4a4f5c] leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Main Interactive Inquiry & Booking Form */}
          <div className="pt-6">
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
