"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { ArrowUp, Globe, MapPin } from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#000a1f] text-slate-300 pt-20 2xl:pt-24 pb-12 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 2xl:gap-14 pb-16 border-b border-white/10">
          {/* Brand Info & Studio Tagline */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 inline-flex group">
              <div className="relative w-10 h-10 2xl:w-12 2xl:h-12 rounded-full overflow-hidden border border-white/20 bg-[#001238] flex-shrink-0 p-1 group-hover:scale-105 transition-transform">
                <Image
                  src="/newlogo.png"
                  alt="TechBuddyStudio Official Logo"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-bold text-xl 2xl:text-2xl text-white tracking-tight font-heading">
                TechBuddy<span className="text-[#eae8ff]">Studio</span>
              </span>
            </Link>

            <p className="text-sm 2xl:text-base text-slate-400 max-w-sm leading-relaxed font-normal">
              TechBuddyStudio provides bespoke digital engineering, with custom design, performance optimization, and conversion built into one platform.
            </p>

            {/* Social Icons (Pill Buttons) */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#eae8ff] text-slate-300 hover:text-[#001c55] border border-white/10 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#eae8ff] text-slate-300 hover:text-[#001c55] border border-white/10 flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#eae8ff] text-slate-300 hover:text-[#001c55] border border-white/10 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* About TechBuddyStudio */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs 2xl:text-sm uppercase font-extrabold tracking-wider text-white font-heading">
              About Studio
            </h4>
            <ul className="space-y-2.5 text-sm 2xl:text-base">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-slate-400 hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/discovery-call" className="text-slate-400 hover:text-white transition-colors font-semibold text-[#eae8ff]">
                  Book Discovery Call
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs 2xl:text-sm uppercase font-extrabold tracking-wider text-white font-heading">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm 2xl:text-base">
              <li>
                <Link href="/solutions#hospitality" className="text-slate-400 hover:text-white transition-colors">
                  For Hospitality &amp; Stays
                </Link>
              </li>
              <li>
                <Link href="/solutions#retail" className="text-slate-400 hover:text-white transition-colors">
                  For Retail &amp; Brands
                </Link>
              </li>
              <li>
                <Link href="/solutions#startups" className="text-slate-400 hover:text-white transition-colors">
                  For Startups &amp; SaaS
                </Link>
              </li>
              <li>
                <Link href="/solutions#business" className="text-slate-400 hover:text-white transition-colors">
                  For Business Websites
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Platforms */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs 2xl:text-sm uppercase font-extrabold tracking-wider text-white font-heading">
              Products
            </h4>
            <ul className="space-y-2.5 text-sm 2xl:text-base">
              <li>
                <a href="https://hotel-fawn-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  DirectStay (Hotel Engine)
                </a>
              </li>
              <li>
                <a href="https://traveller-alpha-sable.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  WanderTribe (Expeditions)
                </a>
              </li>
              <li>
                <a href="https://managemyshop.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  ShopManager (Retail POS)
                </a>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  All Live Platforms
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs 2xl:text-sm uppercase font-extrabold tracking-wider text-white font-heading">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm 2xl:text-base">
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Engineering Scope
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ &amp; Delivery
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="text-slate-400 hover:text-white transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs 2xl:text-sm text-slate-500">
          <p>TechBuddyStudio © 2026 All Rights Reserved</p>

          <div className="flex items-center gap-6">
            <span>Crafted with precision by TechBuddyStudio</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer border border-white/10"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

