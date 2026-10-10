import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FinalCTA } from "@/components/final-cta";
import { 
  Globe, 
  Target, 
  RefreshCw, 
  AppWindow, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  CalendarCheck
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Services & Web Engineering | TechBuddyStudio",
  description:
    "Explore our full-cycle web services: custom website engineering, landing pages, booking portals, and speed redesigns.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const servicesList = [
    {
      title: "Brand Websites & Custom CMS",
      tagline: "Tailored digital homes engineered for speed and conversion.",
      description:
        "Bespoke websites designed specifically around your brand identity. Engineered with Next.js 16, optimized for mobile responsiveness and search engine discovery.",
      deliverables: [
        "Modern typography & custom layout",
        "Mobile-first responsive engineering",
        "Search engine optimization (SEO) setup",
        "Zero vendor lock-in & full code ownership",
      ],
      idealFor: "Hotels, corporate firms, clinics, agencies, and service brands",
      icon: Globe,
      color: "border-[#001c55]",
    },
    {
      title: "Direct Booking Engines & Portals",
      tagline: "Commission-free direct booking channels for hospitality & tours.",
      description:
        "Custom booking interfaces with live calendars, room/slot availability, instant inquiry routing, and automated payment gateways.",
      deliverables: [
        "Live room & package inventory display",
        "Instant booking enquiry with pre-filled details",
        "Multi-currency payment integration",
        "Banquet & group enquiry quote builder",
      ],
      idealFor: "Resorts, boutique stays, travel communities, and tour operators",
      icon: CalendarCheck,
      color: "border-[#5030cc]",
    },
    {
      title: "High-Converting Landing Pages",
      tagline: "Single-page campaign funnels optimized for ad & social traffic.",
      description:
        "Friction-free sales and inquiry pages designed to capture leads, showcase social proof, and maximize return on advertising spend.",
      deliverables: [
        "Ultra-fast sub-second loading time",
        "Clear call-to-action placement",
        "Analytics & conversion event tracking",
        "Mobile-optimized lead forms & instant conversion capture",
      ],
      idealFor: "Product launches, promotions, real estate campaigns, and startups",
      icon: Target,
      color: "border-[#9a5b18]",
    },
    {
      title: "Website Redesign & Speed Optimization",
      tagline: "Modernize outdated or slow websites to 99+ Lighthouse speed.",
      description:
        "Transform slow, outdated WordPress or template websites into ultra-fast, modern web applications that rank higher on Google.",
      deliverables: [
        "Complete visual & UX modernization",
        "99+ Google Lighthouse score upgrade",
        "Asset optimization & global CDN caching",
        "Zero downtime migration & SEO preservation",
      ],
      idealFor: "Businesses losing customers to slow or outdated websites",
      icon: Zap,
      color: "border-emerald-600",
    },
    {
      title: "Custom Full-Stack Web Applications",
      tagline: "Tailored dashboards, POS portals, and internal business logic.",
      description:
        "Robust web applications with secure user authentication, real-time database sync, role permissions, and custom API endpoints.",
      deliverables: [
        "React frontend & scalable backend architecture",
        "PostgreSQL / MongoDB database integration",
        "Role-based access & admin dashboards",
        "Continuous deployment & cloud hosting setup",
      ],
      idealFor: "Tech startups, retail businesses, and multi-branch management",
      icon: AppWindow,
      color: "border-sky-600",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#070708]">
      <Navbar />

      <main className="flex-1">
        {/* Curved Subpage Hero */}
        <PageHero
          badge="Full-Cycle Web Studio"
          title="Services & Engineering Scope"
          subtitle="We design, build, and deploy high-performance digital products that help businesses stand out, attract more inquiries, and scale smoothly."
        />

        <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 py-16 sm:py-20">

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 2xl:gap-10 items-stretch">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 sm:p-10 2xl:p-12 rounded-3xl bg-[#f8f9fc] border ${svc.color} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-2xl bg-[#001c55] text-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 2xl:w-6 2xl:h-6" />
                      </div>
                      <h2 className="text-2xl 2xl:text-3xl font-bold font-heading text-[#070708]">
                        {svc.title}
                      </h2>
                    </div>

                    <p className="text-sm 2xl:text-base font-semibold text-[#001c55]">
                      {svc.tagline}
                    </p>

                    <p className="text-sm 2xl:text-base text-[#4a4f5c] leading-relaxed">
                      {svc.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-xs 2xl:text-sm font-bold text-[#070708] uppercase tracking-wider block mb-3">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2 text-xs 2xl:text-sm text-[#4a4f5c]">
                        {svc.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3.5 2xl:p-4 rounded-2xl bg-white border border-slate-200 text-xs 2xl:text-sm">
                      <span className="font-bold text-[#070708] block mb-0.5">Best For:</span>
                      <span className="text-[#646a69]">{svc.idealFor}</span>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-200 flex items-center justify-between">
                    <Link
                      href="/discovery-call"
                      className="inline-flex items-center gap-1.5 text-sm 2xl:text-base font-bold text-[#001c55] hover:underline cursor-pointer"
                    >
                      <span>Request Scope &amp; Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Discovery Call CTA */}
        <div className="mt-20">
          <FinalCTA />
        </div>
      </main>

      <Footer />
    </div>
  );
}
