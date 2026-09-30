import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { FeaturedWork } from "@/components/featured-work";
import { WhyUs } from "@/components/why-us";
import { ProcessSection } from "@/components/process-section";
import { AboutSection } from "@/components/about-section";
import { TechStack } from "@/components/tech-stack";
import { TestimonialsPlaceholder } from "@/components/testimonials-placeholder";
import { PricingCTA } from "@/components/pricing-cta";
import { FAQSection } from "@/components/faq-section";
import { ContactSection } from "@/components/contact-section";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      {/* Sticky Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem Section */}
        <ProblemSection />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Featured Work (Selected Work) */}
        <FeaturedWork />

        {/* 5. Why TechBuddyStudio */}
        <WhyUs />

        {/* 6. Process (From idea to launch) */}
        <ProcessSection />

        {/* 7. About TechBuddyStudio */}
        <AboutSection />

        {/* 8. Tech Stack */}
        <TechStack />

        {/* 9. Quality Commitment & Authentic Client System */}
        <TestimonialsPlaceholder />

        {/* 10. Custom Quote CTA */}
        <PricingCTA />

        {/* 11. FAQ Section */}
        <FAQSection />

        {/* 12. Contact Section */}
        <ContactSection />

        {/* 13. Final CTA Banner */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
