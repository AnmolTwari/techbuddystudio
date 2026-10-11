import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { articlesData, getArticleBySlug } from "@/data/insights";
import { ArrowLeft, ArrowRight, Clock, Calendar, CheckCircle2, BookOpen } from "lucide-react";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | TechBuddyStudio",
    };
  }

  return {
    title: `${article.title} | TechBuddyStudio Insights`,
    description: article.metaDescription,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const otherArticles = articlesData.filter((a) => a.slug !== article.slug);

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Editorial Article Header */}
        <section className="pt-28 pb-12 sm:pt-36 sm:pb-16 3xl:pt-48 3xl:pb-24 bg-[#000d28] text-white border-b border-white/10">
          <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
            <div className="mb-6 3xl:mb-8">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs sm:text-sm 3xl:text-base font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4 3xl:w-5 3xl:h-5" />
                <span>All Engineering Insights</span>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3 3xl:gap-4 mb-4 3xl:mb-6">
              <span className="text-xs 3xl:text-sm font-bold uppercase tracking-wider px-3 3xl:px-4 py-1 3xl:py-1.5 rounded-full bg-white/10 text-[#eae8ff] border border-white/15">
                {article.category}
              </span>
              <span className="text-xs 3xl:text-sm text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                {article.readTime}
              </span>
              <span className="text-xs 3xl:text-sm text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 3xl:w-4 3xl:h-4" />
                {article.publishedAt}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl 3xl:text-6xl font-extrabold tracking-tight font-heading leading-tight mb-6 3xl:mb-8">
              {article.title}
            </h1>

            <p className="text-base sm:text-xl 3xl:text-2xl text-slate-300 leading-relaxed font-normal">
              {article.summary}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <article className="py-12 sm:py-16 2xl:py-20 3xl:py-28">
          <div className="max-w-4xl 2xl:max-w-5xl 3xl:max-w-6xl 4xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12 space-y-12 3xl:space-y-16">
            
            {/* Key Takeaways Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#001c55] block">
                Executive Summary &amp; Key Takeaways
              </span>
              <ul className="space-y-2.5">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-3 text-xs sm:text-sm text-[#4a4f5c]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sections */}
            <div className="space-y-10">
              {article.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#070708] tracking-tight">
                    {section.heading}
                  </h2>

                  <div className="space-y-4 text-base sm:text-lg text-[#4a4f5c] leading-relaxed">
                    {section.body.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {section.callout && (
                    <div className="p-5 sm:p-6 rounded-2xl bg-[#eae8ff]/40 border-l-4 border-[#001c55] text-xs sm:text-sm text-[#001c55] font-medium leading-relaxed my-6">
                      {section.callout}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Related Case Study Reference */}
            {article.relatedCaseStudy && (
              <div className="p-8 rounded-3xl bg-[#001c55] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
                <div className="space-y-1.5">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#eae8ff]">
                    Applied Architecture
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                    See This Architecture in Action: {article.relatedCaseStudy.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Explore the production case study and launch the interactive live demo.
                  </p>
                </div>
                <Link
                  href={article.relatedCaseStudy.url}
                  className="px-6 py-3 rounded-full bg-[#eae8ff] hover:bg-white text-[#001c55] font-bold text-xs sm:text-sm inline-flex items-center gap-2 group flex-shrink-0"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )}

            {/* Other Articles */}
            <div className="pt-8 border-t border-slate-200 space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#070708]">
                More Articles &amp; Guides
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {otherArticles.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/insights/${other.slug}`}
                    className="p-6 rounded-2xl bg-[#f8f9fc] border border-slate-200 hover:border-[#001c55] transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#001c55]">
                        {other.category}
                      </span>
                      <h4 className="text-base font-bold text-[#070708] group-hover:text-[#001c55] font-heading mt-1 leading-snug">
                        {other.title}
                      </h4>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#001c55]">
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </article>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
