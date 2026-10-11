import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { PortfolioGrid } from "@/components/portfolio-grid";

export const metadata = {
  title: "Featured Work & Live Deployments | TechBuddyStudio",
  description:
    "Explore live interactive showcases and technical prototypes engineered by TechBuddyStudio. Filter by live demos and concept prototypes.",
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
          badge="Verified Engineering Portfolio"
          title="Selected Work & Live Platforms"
          subtitle="Explore our live interactive showcases and technical prototypes. Built to demonstrate high performance, clean code, and direct booking flows."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1720px] 4xl:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 3xl:px-16 py-10 sm:py-14 2xl:py-16 3xl:py-24">
          <PortfolioGrid />
        </div>

        {/* Discovery Call Final CTA to drive conversions */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

