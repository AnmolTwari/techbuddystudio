import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_URL } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FileText, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | TechBuddyStudio",
  description: "Terms and conditions for web design, development, and digital engineering services provided by TechBuddyStudio.",
  alternates: {
    canonical: "/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  const lastUpdated = "March 2026";

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfbfe] dark:bg-[#050316] text-[#050316] dark:text-[#fbfbfe]">
      <Navbar />

      <main className="flex-1 pt-32 pb-20 sm:pt-36 sm:pb-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top Breadcrumb / Back Link */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#2f27ce] dark:text-[#443dff] hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-3 border-b border-[#dddbff] dark:border-[#221a5a] pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
              <FileText className="w-3.5 h-3.5 text-[#443dff]" />
              <span>Service Terms &amp; Policies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">
              Last updated: {lastUpdated} • Effective immediately
            </p>
          </div>

          {/* Terms Content */}
          <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#050316]/85 dark:text-[#dddbff]/90">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing our website ({SITE_URL}) or engaging <strong>{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Studio&rdquo;) for custom web design, website development, or digital engineering services, you agree to comply with and be bound by these Terms and Conditions.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                2. Scope of Services &amp; Project Quotes
              </h2>
              <p>
                All web design, development, and maintenance services are defined in a written project scope, agreement, or proposal provided prior to the commencement of work. Any additions or modifications to the agreed scope requested during or after development will be evaluated and quoted separately as add-ons or future phases.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                3. Milestone Payments &amp; Deliverables
              </h2>
              <p>
                Projects are structured around clear, agreed milestones (e.g., initial deposit upon project kickoff, review milestone upon preview build, and final balance prior to domain deployment and live release). Payments are non-refundable once the associated milestone phase of work has been completed and reviewed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                4. Intellectual Property &amp; Code Ownership
              </h2>
              <p>
                Upon final payment in full, the client receives <strong>100% ownership</strong> of the custom source code, design assets, and website content created specifically for their project. The client retains full control over their custom domain name, hosting accounts, and third-party integrations. {siteConfig.name} reserves the right to showcase the completed work in our digital portfolio and case studies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                5. Client Responsibilities
              </h2>
              <p>
                The client agrees to provide necessary brand assets, high-resolution imagery, copy, domain access credentials, and timely feedback needed to keep development on schedule. Delays in client feedback or asset delivery may adjust project completion timelines accordingly.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                6. Warranties &amp; Post-Launch Support
              </h2>
              <p>
                We test all deliverables across modern desktop and mobile browsers prior to launch. We provide a post-launch support window following production deployment to address any technical bugs or unexpected errors within the agreed project scope. Ongoing feature development, content management, or major structural redesigns are available under our maintenance and support arrangements.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                7. Limitation of Liability
              </h2>
              <p>
                In no event shall {siteConfig.name} or its founder be liable for any indirect, incidental, special, or consequential damages resulting from website downtime, third-party hosting outages, domain registrar interruptions, or client-initiated modifications to the production environment after handover.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#dddbff] dark:border-[#221a5a]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                8. Inquiries &amp; Legal Contact
              </h2>
              <p>
                For questions regarding these Terms &amp; Conditions or our service agreements, please contact us directly:
              </p>
              <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] space-y-1 text-xs sm:text-sm">
                <div className="font-bold text-[#050316] dark:text-white">{siteConfig.name}</div>
                <div>Founder: {siteConfig.founder.name}</div>
                <div>Email: <a href={siteConfig.contact.mailtoUrl} className="text-[#2f27ce] dark:text-[#443dff] hover:underline font-semibold">{siteConfig.contact.email}</a></div>
                <div>WhatsApp: <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#2f27ce] dark:text-[#443dff] hover:underline font-semibold">{siteConfig.contact.displayPhone}</a></div>
                <div>Location: {siteConfig.founder.location}</div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
