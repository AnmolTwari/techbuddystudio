import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { articlesData } from "@/data/insights";
import { ArrowRight, BookOpen, Clock, Calendar, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Insights & Business Guides | TechBuddyStudio",
  description:
    "Practical architectural analyses, performance guides, and business strategy articles written by TechBuddyStudio engineers.",
  alternates: {
    canonical: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        <PageHero
          badge="Technical Knowledge & Strategy"
          title="Engineering Insights & Guides"
          subtitle="Practical architectural guides, performance analyses, and digital business strategies written by senior web engineers."
        />

        <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl 4xl:max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 py-12 sm:py-16 2xl:py-20 3xl:py-28 space-y-12 3xl:space-y-16">
          
          {/* Articles List */}
          <div className="space-y-8 3xl:space-y-10">
            {articlesData.map((article) => (
              <article
                key={article.slug}
                className="p-8 sm:p-10 3xl:p-14 rounded-3xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Meta Bar */}
                  <div className="flex flex-wrap items-center gap-3 3xl:gap-4">
                    <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wider px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full bg-[#eae8ff] text-[#001c55]">
                      {article.category}
                    </span>
                    <span className="text-xs 3xl:text-sm text-[#646a69] flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                      {article.readTime}
                    </span>
                    <span className="text-xs 3xl:text-sm text-[#646a69] flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                      {article.publishedAt}
                    </span>
                  </div>

                  {/* Title & Summary */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl 3xl:text-4xl font-bold font-heading text-[#070708] group-hover:text-[#001c55] transition-colors leading-tight">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>
                    <p className="text-sm sm:text-base text-[#4a4f5c] mt-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  {/* Key Takeaways Preview */}
                  <div className="pt-2 border-t border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#001c55] block mb-2">
                      Core Takeaways:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4a4f5c]">
                      {article.keyTakeaways.slice(0, 2).map((takeaway, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Read Action Button */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-[#646a69] font-medium">
                    By {article.author}
                  </span>

                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#001c55] group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
