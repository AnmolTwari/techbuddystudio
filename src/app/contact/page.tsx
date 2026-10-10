import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { siteConfig } from "@/config/site";
import { Mail, Clock, PhoneCall, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Book a Discovery Call | TechBuddyStudio",
  description:
    "Get in touch with TechBuddyStudio for custom website estimates, direct booking platform setups, or technical inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Get in Touch"
          title="Let's Build Your High-Performance Website"
          subtitle="Have a project in mind, need a tailored estimate, or want to discuss direct booking infrastructure for your business? Connect directly with us."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 sm:py-20">

          {/* 3 Unified Professional Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {/* Consultation Card */}
            <Link
              href="/discovery-call"
              className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Live Consultation
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors">
                    Book Discovery Call
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    Schedule a focused 1-on-1 strategy call with lead engineers to map your features, timeline, and quote.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs 2xl:text-sm font-bold text-[#001c55]">
                <span>Schedule Call Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Direct Email Card */}
            <a
              href={siteConfig.contact.mailtoUrl}
              className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Official Inbox
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors">
                    Email Inquiry
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    Send your project brief, wireframes, RFP documents, or questions directly to our engineering mailbox.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs 2xl:text-sm font-bold text-[#001c55]">
                <span className="truncate">{siteConfig.contact.email}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* SLA Response Guarantee Card */}
            <div className="p-8 2xl:p-9 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="space-y-1.5">
                  <span className="text-[10px] 2xl:text-xs font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] px-2.5 py-0.5 rounded-full inline-block">
                    Response Guarantee
                  </span>
                  <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708]">
                    Under 2 Hours SLA
                  </h3>
                  <p className="text-xs 2xl:text-sm text-[#646a69] leading-relaxed">
                    We value your time. All inquiries submitted during business hours receive prompt answers and detailed roadmaps.
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

          {/* Form Section */}
          <div className="pt-4">
            <ContactSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
