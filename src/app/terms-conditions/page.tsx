import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_URL } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | TechBuddyStudio",
  description: "Terms and conditions for web design, development, and digital engineering services provided by TechBuddyStudio.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Service Terms & Policies"
          title="Terms & Conditions"
          subtitle={`Last updated: ${lastUpdated} • Standard service terms and engagement policies for TechBuddyStudio.`}
        />

        <div className="max-w-4xl 2xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 sm:py-20 space-y-10">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs 2xl:text-sm font-bold text-[#001c55] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="space-y-8 text-sm sm:text-base 2xl:text-lg leading-relaxed text-[#4a4f5c]">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website ({SITE_URL}) or engaging <strong>{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Studio&rdquo;) for custom web design, website development, or digital engineering services, you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                2. Scope of Services &amp; Project Quotes
              </h2>
              <p>
                All web design, development, and maintenance services are defined in a written project scope, agreement, or proposal provided prior to the commencement of work. Any additions or modifications to the agreed scope requested during or after development will be evaluated and quoted separately as add-ons or future phases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                3. Milestone Payments &amp; Delivery Schedule
              </h2>
              <p>
                Project fees are structured around clear milestones agreed upon before project initiation. Standard milestone breakdowns typically involve an upfront deposit upon blueprint approval, progress staging milestones, and final settlement upon domain deployment and asset handover.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                4. Intellectual Property &amp; Code Ownership
              </h2>
              <p>
                Upon receipt of full and final payment, 100% ownership of custom source code, website assets, design components, and documentation developed for your project is transferred directly to you. {siteConfig.name} retains no proprietary lock-in on your codebase.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                5. Client Responsibilities &amp; Content Provision
              </h2>
              <p>
                Clients are responsible for providing brand assets (logos, high-res photography, custom copy, and domain access) in a timely manner. Delays in asset provision may adjust target delivery dates proportionally.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                6. Post-Launch Warranty &amp; Maintenance
              </h2>
              <p>
                All custom production deliveries include a 30-day post-launch technical warranty covering bug fixes, browser compatibility checks, and minor configuration adjustments. Ongoing monthly maintenance and support can be retained separately.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                7. Limitation of Liability
              </h2>
              <p>
                In no event shall {siteConfig.name} or its team be liable for any indirect, incidental, special, or consequential damages resulting from website downtime, third-party hosting outages, domain registrar interruptions, or client-initiated modifications to the production environment after handover.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                8. Inquiries &amp; Legal Contact
              </h2>
              <p>
                For questions regarding these Terms &amp; Conditions or our service agreements, please contact us directly:
              </p>
              <div className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200 space-y-1.5 text-xs sm:text-sm 2xl:text-base">
                <div className="font-bold text-[#070708]">{siteConfig.name}</div>
                <div>Email: <a href={siteConfig.contact.mailtoUrl} className="text-[#001c55] hover:underline font-semibold">{siteConfig.contact.email}</a></div>
                <div>Location: {siteConfig.contact.location}</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
