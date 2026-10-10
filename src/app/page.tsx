import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogoMarquee } from "@/components/logo-marquee";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { ProcessSection } from "@/components/process-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Studio Curved Gradient & Pill CTAs */}
        <Hero />

        {/* 2. Logo / Stack Marquee (Underlapping curved hero) */}
        <LogoMarquee />

        {/* 3. Problem Section with Split 2-Column Header & Stat Cards */}
        <ProblemSection />

        {/* 4. Solutions Section with 4 Solid/Pastel Cards & Tabs */}
        <ServicesSection />

        {/* 5. Process (Get Started with TechBuddyStudio 01-04) */}
        <ProcessSection />

        {/* 6. Final Discovery Call CTA Block */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}



