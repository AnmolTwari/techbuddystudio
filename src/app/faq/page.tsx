import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Frequently Asked Questions & Delivery | TechBuddyStudio",
  description:
    "Find answers to common questions about our website builds, delivery timelines, pricing, code ownership, and support.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Clear & Transparent Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our web engineering workflow, payment milestones, code ownership, and ongoing support."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-10 sm:py-14 2xl:py-16">
          {/* Accordion Component */}
          <FAQSection />
        </div>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
