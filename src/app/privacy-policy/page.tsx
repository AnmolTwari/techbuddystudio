import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_URL } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ShieldCheck, ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | TechBuddyStudio",
  description: "Privacy policy for TechBuddyStudio. Learn how we handle and protect your personal information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#443dff]" />
              <span>Legal Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">
              Last updated: {lastUpdated} • Effective immediately
            </p>
          </div>

          {/* Privacy Content */}
          <div className="prose dark:prose-invert max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-[#050316]/85 dark:text-[#dddbff]/90">
            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                1. Overview &amp; Commitment
              </h2>
              <p>
                At <strong>{siteConfig.name}</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy describes how we collect, use, and safeguard information when you visit our website ({SITE_URL}) or communicate with us regarding web development, design, and related services.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                2. Information We Collect
              </h2>
              <p>
                We only collect information that is voluntarily provided by you when you fill out our project inquiry form, contact us via email, or message us on WhatsApp. This may include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>Your name and business name</li>
                <li>Email address and phone / WhatsApp contact number</li>
                <li>Your business category and website project requirements</li>
                <li>Any optional links or project notes you provide in your message</li>
              </ul>
              <p className="text-xs sm:text-sm text-[#484469] dark:text-[#a39fd4]">
                We do not sell, rent, trade, or distribute your contact details to third-party advertisers or data brokers under any circumstances.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                3. How We Use Your Information
              </h2>
              <p>
                We use the information collected strictly for legitimate business purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>To evaluate your project requirements and prepare estimates or proposals</li>
                <li>To contact you directly regarding your inquiry via email or WhatsApp</li>
                <li>To deliver custom website design, development, and technical support services</li>
                <li>To maintain business records and fulfill contractual obligations</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                4. Cookies &amp; Analytics
              </h2>
              <p>
                Our website utilizes standard, privacy-respecting analytics and local storage strictly to remember user theme preferences (light/dark mode) and optimize page performance. We do not use intrusive tracking pixels, behavioral cross-site trackers, or third-party advertising cookies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                5. Data Security &amp; Retention
              </h2>
              <p>
                We implement industry-standard encryption (HTTPS / SSL) across our website and ensure all project communications are handled through secure communication channels. We retain your contact information only as long as necessary to provide services or communicate regarding ongoing project work.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                6. Your Rights
              </h2>
              <p>
                You have the right to request access to any personal information we hold about you, request corrections, or request that your contact details be deleted from our records. To exercise any of these rights, please email us directly at <strong>{siteConfig.contact.email}</strong>.
              </p>
            </section>

            <section className="space-y-3 pt-4 border-t border-[#dddbff] dark:border-[#221a5a]">
              <h2 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                7. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy, you can reach out to us at:
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
