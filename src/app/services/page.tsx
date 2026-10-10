"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import {
  Globe,
  AppWindow,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  CalendarCheck,
  Sparkles,
  Layers,
  Cpu,
  LineChart,
  Store,
  Clock,
  Check,
  X,
  ExternalLink,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: "all" | "webapps" | "brand" | "hospitality" | "speed";
  title: string;
  badge: string;
  tagline: string;
  description: string;
  timeline: string;
  techStack: string[];
  deliverables: string[];
  idealFor: string;
  icon: React.ElementType;
  demoUrl?: string;
  demoLabel?: string;
  accentColor: string;
  borderHover: string;
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Engineering Services" },
    { id: "brand", label: "Brand & Corporate Sites" },
    { id: "hospitality", label: "Hospitality & Booking Portals" },
    { id: "webapps", label: "Custom SaaS & Web Apps" },
    { id: "speed", label: "Speed & Performance Redesign" },
  ];

  const servicesList: ServiceItem[] = [
    {
      id: "brand-cms",
      category: "brand",
      title: "Brand Websites & Custom CMS",
      badge: "High-Credibility Web Presence",
      tagline: "Tailored digital homes engineered for speed, brand prestige, and search ranking.",
      description:
        "Bespoke websites designed specifically around your brand identity. Engineered with Next.js 16, optimized for mobile viewports, sub-second page loads, and Google Local/Global SEO discovery.",
      timeline: "1–2 Weeks",
      techStack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vercel Edge", "Custom CMS"],
      deliverables: [
        "Bespoke UI/UX design aligned with brand guidelines",
        "Mobile-first responsive fluid engineering",
        "Technical SEO, OpenGraph cards & Sitemap generator",
        "100% full code ownership & zero vendor lock-in",
      ],
      idealFor: "Hotels, corporate firms, clinics, agencies, law firms, and consulting brands",
      icon: Globe,
      accentColor: "bg-[#001c55] text-white",
      borderHover: "hover:border-[#001c55]",
    },
    {
      id: "booking-portals",
      category: "hospitality",
      title: "Direct Booking Engines & Hospitality Portals",
      badge: "0% Commission Infrastructure",
      tagline: "Cut out 15-25% OTA commissions with high-converting direct guest reservation channels.",
      description:
        "Custom booking interfaces with live calendars, room & villa inventory, instant multi-channel inquiry routing, banquet quote builders, and automated payment gateway sync.",
      timeline: "2–3 Weeks",
      techStack: ["React 19", "Next.js", "Tailwind", "Stripe API", "Availability Engine"],
      deliverables: [
        "Real-time room, villa & package inventory display",
        "1-click inquiry routing with pre-filled guest details",
        "Multi-currency payment integration & deposit collection",
        "Banquet, event & corporate group quote builder",
      ],
      idealFor: "Luxury hotels, boutique resorts, homestays, tour operators & expedition organizers",
      icon: CalendarCheck,
      demoUrl: "https://hotel-fawn-seven.vercel.app/",
      demoLabel: "Live Demo: DirectStay",
      accentColor: "bg-[#5030cc] text-white",
      borderHover: "hover:border-[#5030cc]",
    },
    {
      id: "custom-webapps",
      category: "webapps",
      title: "Custom Full-Stack SaaS & Web Applications",
      badge: "Scalable Architecture",
      tagline: "Tailored business logic, role-based admin panels, and real-time interactive dashboards.",
      description:
        "Enterprise-grade web applications engineered with secure user authentication, relational database sync, granular permissions, background workers, and documented API endpoints.",
      timeline: "3–5 Weeks",
      techStack: ["Next.js 16", "Node.js", "PostgreSQL", "FastAPI / Python", "Docker", "Tailwind"],
      deliverables: [
        "React frontend & scalable backend architecture",
        "PostgreSQL / MongoDB database with automated backups",
        "Role-based access control (RBAC) & admin dashboards",
        "Continuous CI/CD deployment & cloud hosting setup",
      ],
      idealFor: "Tech startups, retail businesses, multi-branch management, and workflow automation",
      icon: AppWindow,
      demoUrl: "https://managemyshop.vercel.app/",
      demoLabel: "Live Demo: ShopManager",
      accentColor: "bg-[#001c55] text-white",
      borderHover: "hover:border-[#001c55]",
    },
    {
      id: "speed-redesign",
      category: "speed",
      title: "Website Redesign & Lighthouse 99+ Optimization",
      badge: "Performance Overhaul",
      tagline: "Modernize outdated or slow legacy websites into blazing-fast web applications.",
      description:
        "Transform slow WordPress, Wix, or bloated template sites into ultra-fast Next.js applications that rank significantly higher on Google search results and reduce customer bounce rates.",
      timeline: "1–2 Weeks",
      techStack: ["Next.js Turbopack", "Asset Optimization", "Global CDN", "Core Web Vitals"],
      deliverables: [
        "Complete visual & UX modernization without downtime",
        "99+ Google Lighthouse score upgrade across mobile viewports",
        "Asset compression, WebP/AVIF images & edge caching",
        "Strict SEO preservation and legacy URL redirects",
      ],
      idealFor: "Businesses losing customers to slow loading times or clunky legacy templates",
      icon: Zap,
      accentColor: "bg-emerald-700 text-white",
      borderHover: "hover:border-emerald-600",
    },
    {
      id: "landing-funnels",
      category: "brand",
      title: "High-Converting Campaign & Landing Funnels",
      badge: "Growth & Conversion",
      tagline: "Single-page campaign funnels engineered for maximum return on ad spend (ROAS).",
      description:
        "Friction-free sales and inquiry landing pages designed with behavioral UX, clear value propositions, trust signals, and direct conversion capture for Google & Meta ad traffic.",
      timeline: "3–5 Days",
      techStack: ["Next.js", "Tailwind CSS", "Analytics Events", "Lead Automation", "Edge Routing"],
      deliverables: [
        "Sub-second First Contentful Paint (FCP)",
        "Strategically placed high-intent conversion forms",
        "UTM parameter tracking & Google Analytics 4 integration",
        "Automated inquiry notification to email & CRM",
      ],
      idealFor: "Product launches, real estate projects, promotions, event registration, and PPC campaigns",
      icon: LineChart,
      accentColor: "bg-[#9a5b18] text-white",
      borderHover: "hover:border-[#9a5b18]",
    },
    {
      id: "retail-ecommerce",
      category: "webapps",
      title: "Omnichannel E-Commerce & Retail POS Portals",
      badge: "Retail Operations",
      tagline: "Modern storefronts, volume wholesale catalogs, and internal inventory management.",
      description:
        "End-to-end commerce infrastructure connecting modern web storefronts with point-of-sale receipt generation, inventory sync, and multi-currency billing.",
      timeline: "2–4 Weeks",
      techStack: ["Next.js", "PostgreSQL", "Stripe Checkout", "Thermal Receipt API", "Tailwind"],
      deliverables: [
        "High-speed mobile product catalog & checkout",
        "Inventory tracking & companion POS receipt generator",
        "Wholesale B2B volume pricing & quote builder",
        "Automated sales analytics & tax reporting summaries",
      ],
      idealFor: "Direct-to-consumer brands, retail shops, wholesale distributors, and boutique stores",
      icon: Store,
      accentColor: "bg-[#5030cc] text-white",
      borderHover: "hover:border-[#5030cc]",
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

  const comparisonData = [
    {
      feature: "Technology Stack",
      traditional: "Generic WordPress, PHP, heavy theme builders",
      techbuddy: "Modern Next.js 16, TypeScript, Tailwind CSS, Edge CDN",
    },
    {
      feature: "Mobile Loading Speed",
      traditional: "3.5s – 6s+ (bloated plugins & uncompressed scripts)",
      techbuddy: "Sub-second (< 0.8s), 99+ Google Lighthouse score",
    },
    {
      feature: "Code Ownership & Lock-in",
      traditional: "Trapped in proprietary builders or monthly hostage fees",
      techbuddy: "100% full source code ownership with zero vendor lock-in",
    },
    {
      feature: "Direct Hospitality Bookings",
      traditional: "15%–25% commission lost on every OTA booking",
      techbuddy: "0% commission direct booking engine with instant sync",
    },
    {
      feature: "Development Velocity",
      traditional: "Months of back-and-forth communication delays",
      techbuddy: "Structured 1–3 week sprint delivery with live staging previews",
    },
    {
      feature: "Direct Communication",
      traditional: "Junior account managers & slow ticketing systems",
      techbuddy: "Direct access to senior full-stack software engineers",
    },
  ];

  const deliverySteps = [
    {
      step: "01",
      title: "Discovery & Architecture",
      duration: "Days 1–3",
      desc: "We analyze your target market, map user conversion funnels, and define the technical architecture and data models.",
      deliverable: "Technical Scope Document & Wireframe Roadmap",
    },
    {
      step: "02",
      title: "UX Design & Interactive Prototype",
      duration: "Week 1",
      desc: "We craft custom, modern UI layouts with polished typography, cohesive palettes, and high-converting interaction flows.",
      deliverable: "High-Fidelity Interactive Design Prototype",
    },
    {
      step: "03",
      title: "Full-Stack Engineering & Integration",
      duration: "Weeks 2–3",
      desc: "We write clean, modular Next.js and TypeScript code, integrate databases, secure payment gateways, and connect inquiry APIs.",
      deliverable: "Password-Protected Live Staging Deployment",
    },
    {
      step: "04",
      title: "QA, Lighthouse 99+ Polish & Launch",
      duration: "Week 3–4",
      desc: "Rigorous cross-device testing, Core Web Vitals optimization, domain configuration, and seamless production handover.",
      deliverable: "Production Launch & Complete Code Repository Transfer",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Enterprise Web Engineering"
          title="Full-Cycle Web Services & Engineering Scope"
          subtitle="From high-speed brand digital homes and commission-free booking engines to custom full-stack SaaS portals — we engineer web applications that drive real business growth."
        />

        {/* Studio Highlights Ribbon */}
        <section className="border-b border-slate-200/80 bg-[#f8f9fc] py-6">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 2xl:gap-8 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#001c55]/10 text-[#001c55] flex items-center justify-center flex-shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs 2xl:text-sm font-bold text-[#070708]">Next.js 16 &amp; TypeScript</div>
                  <div className="text-[11px] 2xl:text-xs text-[#646a69]">Modern Architecture</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs 2xl:text-sm font-bold text-[#070708]">99+ Lighthouse Speed</div>
                  <div className="text-[11px] 2xl:text-xs text-[#646a69]">Sub-Second Performance</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-[#5030cc]/10 text-[#5030cc] flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs 2xl:text-sm font-bold text-[#070708]">100% Code Ownership</div>
                  <div className="text-[11px] 2xl:text-xs text-[#646a69]">Zero Lock-in Guarantee</div>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-amber-600/10 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs 2xl:text-sm font-bold text-[#070708]">1–3 Week Delivery</div>
                  <div className="text-[11px] 2xl:text-xs text-[#646a69]">Agile Sprint Cadence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Category Filter & Services Bento Grid */}
        <section className="py-10 sm:py-14 2xl:py-16">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            {/* Header & Filter Controls */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
              <div className="max-w-2xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eae8ff] text-[#001c55] text-xs 2xl:text-sm font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#5030cc]" />
                  <span>Engineering Capabilities</span>
                </div>
                <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold font-heading text-[#070708] tracking-tight">
                  Engineered for Performance, Built for Scalability
                </h2>
                <p className="text-sm sm:text-base 2xl:text-lg text-[#646a69] leading-relaxed">
                  Select a category below to explore specific technical deliverables, timelines, and live project references.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#f0f2f8] border border-slate-200">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-[#001c55] text-white shadow-sm font-bold"
                        : "text-[#4a4f5c] hover:text-[#070708] hover:bg-white/60"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Asymmetric Modern Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {filteredServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.id}
                    className={`group relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 2xl:p-9 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${svc.borderHover}`}
                  >
                    <div className="space-y-5">
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#f0f2f8] group-hover:bg-[#001c55] text-[#001c55] group-hover:text-white flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] 2xl:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-[#4a4f5c] border border-slate-200">
                            {svc.timeline}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <span className="text-xs font-bold text-[#5030cc] block mb-1">
                          {svc.badge}
                        </span>
                        <h3 className="text-xl 2xl:text-2xl font-bold font-heading text-[#070708] tracking-tight group-hover:text-[#001c55] transition-colors duration-200">
                          {svc.title}
                        </h3>
                        <p className="text-xs 2xl:text-sm font-medium text-[#4a4f5c] mt-2 leading-relaxed">
                          {svc.tagline}
                        </p>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {svc.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[#f8f9fc] text-[#4a4f5c] border border-slate-200/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Deliverables List */}
                      <div className="pt-4 border-t border-slate-100 space-y-2.5">
                        <span className="text-xs font-bold text-[#070708] uppercase tracking-wider block">
                          Core Deliverables:
                        </span>
                        <ul className="space-y-2">
                          {svc.deliverables.map((item, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2 text-xs 2xl:text-sm text-[#4a4f5c]">
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ideal For Target Box */}
                      <div className="p-3.5 rounded-2xl bg-[#f8f9fc] border border-slate-200/80 text-xs 2xl:text-[13px] text-[#4a4f5c]">
                        <span className="font-bold text-[#070708] block mb-0.5">Target Audience:</span>
                        <span>{svc.idealFor}</span>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                      {svc.demoUrl ? (
                        <a
                          href={svc.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-bold text-[#5030cc] hover:underline"
                        >
                          <span>{svc.demoLabel || "View Live Demo"}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-xs text-[#8c92a4] font-medium">Bespoke Production</span>
                      )}

                      <Link
                        href="/discovery-call"
                        className="inline-flex items-center gap-1.5 text-xs 2xl:text-sm font-bold text-[#001c55] group-hover:translate-x-0.5 transition-transform duration-200"
                      >
                        <span>Request Scope</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Matrix Section: Traditional Agencies vs TechBuddyStudio */}
        <section className="py-12 sm:py-16 bg-[#f8f9fc] border-y border-slate-200/80">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eae8ff] text-[#001c55] text-xs 2xl:text-sm font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#5030cc]" />
                <span>The Studio Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold font-heading text-[#070708] tracking-tight">
                Why Industry Leaders Choose TechBuddyStudio
              </h2>
              <p className="text-sm sm:text-base 2xl:text-lg text-[#646a69]">
                Compare the difference between traditional agency template bloat and modern high-performance web engineering.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70">
                    <th className="py-4 px-6 text-sm 2xl:text-base font-bold text-[#070708] w-1/4">Evaluation Metric</th>
                    <th className="py-4 px-6 text-sm 2xl:text-base font-bold text-rose-800/80 w-3/8">Traditional Agencies / Templates</th>
                    <th className="py-4 px-6 text-sm 2xl:text-base font-bold text-[#001c55] bg-[#001c55]/5 w-3/8">TechBuddyStudio Engineering</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm 2xl:text-base">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#070708]">{row.feature}</td>
                      <td className="py-4 px-6 text-[#646a69]">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-[#001c55] font-semibold bg-[#001c55]/[0.02]">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{row.techbuddy}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4-Step Engineering Delivery Process */}
        <section className="py-12 sm:py-16 2xl:py-20">
          <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eae8ff] text-[#001c55] text-xs 2xl:text-sm font-bold">
                <Layers className="w-3.5 h-3.5 text-[#5030cc]" />
                <span>Transparent Delivery Cadence</span>
              </div>
              <h2 className="text-3xl sm:text-4xl 2xl:text-5xl font-bold font-heading text-[#070708] tracking-tight">
                From First Discovery to Production Launch
              </h2>
              <p className="text-sm sm:text-base 2xl:text-lg text-[#646a69]">
                Every project is executed in predictable, transparent milestones with continuous staging visibility.
              </p>
            </div>

            {/* Process Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-8">
              {deliverySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-7 2xl:p-8 rounded-3xl bg-[#f8f9fc] border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl 2xl:text-4xl font-extrabold font-heading text-[#001c55]/20">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold text-[#5030cc] px-2.5 py-1 rounded-full bg-[#eae8ff]">
                        {step.duration}
                      </span>
                    </div>

                    <h3 className="text-lg 2xl:text-xl font-bold font-heading text-[#070708]">
                      {step.title}
                    </h3>

                    <p className="text-xs 2xl:text-sm text-[#4a4f5c] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#001c55] block mb-1">
                      Key Milestone Artifact:
                    </span>
                    <span className="text-xs 2xl:text-sm font-medium text-[#070708]">
                      {step.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery Call CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
