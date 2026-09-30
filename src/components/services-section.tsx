"use client";

import React from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { 
  Globe, 
  Target, 
  RefreshCw, 
  ShoppingBag, 
  AppWindow, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from "lucide-react";

export function ServicesSection() {
  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case "Target":
        return <Target className="w-6 h-6 text-rose-600 dark:text-rose-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case "AppWindow":
        return <AppWindow className="w-6 h-6 text-violet-600 dark:text-violet-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-sky-600 dark:text-sky-400" />;
      default:
        return <Globe className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Web Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Everything you need to build a better online presence.
          </h2>

          <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300">
            From focused landing pages to full-scale web platforms, we build digital solutions designed to grow your business and simplify customer interaction.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {service.badge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/60">
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-500 hover:underline transition-colors"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
            Need something tailored or not sure which approach suits your business?{" "}
            <Link
              href="#contact"
              className="text-indigo-600 dark:text-indigo-400 font-bold underline hover:text-indigo-500"
            >
              Get a custom project recommendation →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
