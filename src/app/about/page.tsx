import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { siteConfig } from "@/config/site";
import { 
  ShieldCheck, 
  Award, 
  Check, 
  X 
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "About TechBuddyStudio & Our Engineering Ethos",
  description:
    "Learn about TechBuddyStudio, our engineering philosophy, and how we build high-performance web platforms.",
};

export default function AboutPage() {
  const comparisonRows = [
    {
      feature: "Engineering & Architecture",
      techBuddy: "Modern Next.js 16, React, Clean Code",
      traditional: "Clunky Page Builders (Wix, Heavy WP Plugins)",
    },
    {
      feature: "Mobile Speed & Google Lighthouse",
      techBuddy: "98-100/100 score across all devices",
      traditional: "Slow, bloated 40-60 performance scores",
    },
    {
      feature: "Direct Booking & Conversion Funnel",
      techBuddy: "Bespoke direct conversion & reservation workflows",
      traditional: "Third-party embeds with high commissions",
    },
    {
      feature: "Client Communication",
      techBuddy: "Direct 1-on-1 access to software engineers",
      traditional: "Sales reps and multi-day email chains",
    },
    {
      feature: "Asset & Code Ownership",
      techBuddy: "100% intellectual property & code ownership",
      traditional: "Vendor lock-in and ongoing platform restrictions",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="About the Studio"
          title="Engineering Websites that Drive Real Business Growth"
          subtitle="We combine bespoke design, modern web engineering, and direct conversion funnels to build websites that look world-class and deliver results."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-10 sm:py-14 2xl:py-16">

          {/* Studio Profile & Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-10 border-t border-slate-200">
            {/* Left Column: Studio Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-[#f8f9fc] p-8 sm:p-10 text-center space-y-6 shadow-sm">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-slate-200 bg-white p-2 shadow-xs">
                  <Image
                    src="/newlogo.png"
                    alt="TechBuddyStudio Logo"
                    fill
                    sizes="96px"
                    className="object-contain p-1"
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold font-heading text-[#070708]">
                    TechBuddyStudio
                  </h2>
                  <p className="text-xs uppercase tracking-wider font-extrabold text-[#001c55]">
                    Full-Cycle Web &amp; Systems Studio
                  </p>
                  <p className="text-xs text-[#646a69]">
                    India &amp; Worldwide Client Delivery
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#eae8ff] flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-xl bg-[#001c55] text-white flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-[#001c55] uppercase font-bold">
                      Engineering Standard
                    </span>
                    <span className="block text-xs font-bold text-[#070708]">
                      Modern Cloud &amp; High-Performance Architecture
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#646a69] italic bg-white p-4 rounded-2xl border border-slate-200">
                  &ldquo;Engineering high-performance web platforms with clean code, fast load times, and practical business utility.&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Studio Ethos */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-[#070708]">
                Direct Engineering Collaboration.
              </h3>

              <div className="space-y-4 text-base text-[#4a4f5c] leading-relaxed">
                <p>
                  <strong className="text-[#070708] font-bold">TechBuddyStudio</strong> was founded to eliminate the friction, sluggish templates, and inflated retainers of traditional marketing agencies.
                </p>
                <p>
                  When you work with us, you collaborate directly with senior web engineers who build custom, mobile-first websites tailored to your exact industry requirements.
                </p>
                <p>
                  Our technical expertise encompasses the full web lifecycle: bespoke React/Next.js frontends, custom booking engines, POS systems, secure databases, and sub-second performance delivery.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 bg-[#001c55] hover:bg-[#00287a] text-white font-heading font-semibold text-sm py-3 px-6 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Live Platforms</span>
                </Link>

                <Link
                  href="/discovery-call"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-[#001c55] border border-slate-300 font-heading font-semibold text-sm py-3 px-6 rounded-full hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                >
                  <span>Book a Discovery Call</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Comparison Matrix: Why Choose Us */}
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="max-w-3xl mb-8 space-y-2">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#001c55]">
                Why TechBuddyStudio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#070708]">
                How We Compare to Generic Agencies
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-4 px-6 text-sm font-bold text-[#070708] uppercase tracking-wider">
                      Standard
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-[#001c55] bg-[#eae8ff]/40 rounded-t-2xl uppercase tracking-wider">
                      TechBuddyStudio
                    </th>
                    <th className="py-4 px-6 text-sm font-bold text-[#646a69] uppercase tracking-wider">
                      Traditional Agencies / Builders
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="py-4 px-6 text-sm font-bold text-[#070708]">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-sm font-semibold text-[#001c55] bg-[#eae8ff]/20">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{row.techBuddy}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm text-[#646a69]">
                        <div className="flex items-center gap-2">
                          <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quality Commitment Container */}
          <div className="mt-12 rounded-3xl bg-[#001c55] text-white p-8 sm:p-12 shadow-xl">
            <div className="max-w-3xl space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#eae8ff] inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Our Quality Guarantee
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                Three Commitments to Every Project
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#eae8ff]">1. Zero Hidden Fees</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Transparent milestone pricing with fixed upfront scopes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#eae8ff]">2. 100% Ownership</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Full code, domain, and asset handover upon project completion.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-base font-bold text-[#eae8ff]">3. Direct Engineer</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Personalized 1-on-1 technical assistance and live staging demos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
