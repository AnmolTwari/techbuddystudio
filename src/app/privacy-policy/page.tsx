import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_URL } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TechBuddyStudio",
  description: "Privacy policy describing how TechBuddyStudio collects, uses, and protects client and visitor data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Data Protection & Privacy"
          title="Privacy Policy"
          subtitle={`Last updated: ${lastUpdated} • How TechBuddyStudio respects and safeguards your personal and project information.`}
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
                1. Overview &amp; Commitment
              </h2>
              <p>
                At <strong>{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Studio&rdquo;), accessible from {SITE_URL}, we prioritize the privacy of our visitors and clients. This Privacy Policy document outlines the types of information that is collected and recorded by TechBuddyStudio and how we use it.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                2. Information We Collect
              </h2>
              <p>
                We only collect personal information that you voluntarily provide to us when submitting project inquiries, scheduling discovery calls, or requesting estimates:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Contact details:</strong> Name, email address, phone number, and company name.</li>
                <li><strong>Project information:</strong> Target timeline, budget ranges, required feature specifications, and reference links.</li>
                <li><strong>Technical log data:</strong> Standard anonymous web traffic statistics (browser type, device viewport, referring pages) to optimize site performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information we collect solely for business purposes related to serving you:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing customized project proposals, architecture recommendations, and quotes.</li>
                <li>Communicating with you regarding discovery calls and milestone delivery updates.</li>
                <li>Improving our web performance, user interface, and responsive styling.</li>
                <li>Ensuring security and preventing fraudulent inquiries.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                4. Confidentiality &amp; Third-Party Disclosure
              </h2>
              <p>
                We do not sell, trade, or rent your personal contact information to third parties. All project discussions, architecture notes, and business details shared during discovery sessions are held in strict confidence.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                5. Security of Your Information
              </h2>
              <p>
                We implement industry-standard encryption (HTTPS / SSL) across our website and ensure all project communications are handled through secure communication channels. We retain your contact information only as long as necessary to provide services or communicate regarding ongoing project work.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                6. Your Rights
              </h2>
              <p>
                You have the right to request access to any personal information we hold about you, request corrections, or request that your contact details be deleted from our records. To exercise any of these rights, please email us directly at <strong>{siteConfig.contact.email}</strong>.
              </p>
            </section>

            <section className="space-y-3 pt-6 border-t border-slate-200">
              <h2 className="text-xl sm:text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                7. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy, you can reach out to us at:
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
