"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Menu,
  X,
  ArrowRight,
  MessageSquare,
  ChevronDown,
  Globe,
  AppWindow,
  ShoppingBag,
  Sparkles,
  Building2,
  Compass,
  Store,
  PhoneCall
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#000d28]/92 backdrop-blur-xl border-b border-white/10 shadow-md ${
        isScrolled ? "py-3 bg-[#00081a]/96" : "py-4 sm:py-4.5"
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#eae8ff] rounded-full"
            aria-label="TechBuddyStudio - Home"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 bg-[#0b1126] flex-shrink-0 p-1 group-hover:scale-105 transition-transform duration-200 shadow-sm">
              <Image
                src="/newlogo.png"
                alt="TechBuddyStudio Official Logo"
                fill
                sizes="40px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#eae8ff] transition-colors leading-tight font-heading">
                TechBuddy<span className="text-[#eae8ff] font-extrabold">Studio</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-300/80">
                Web &amp; Digital Solutions
              </span>
            </div>
          </Link>

          {/* Centered Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-2.5 2xl:gap-3.5">
            {/* About Pill */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/about"
                className="px-5 py-2.5 2xl:px-6 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>About</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </Link>

              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#001238] border border-white/15 p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-1">
                    <Link
                      href="/about"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">Who We Are</span>
                        <span className="text-[11px] text-slate-300 block">Studio background &amp; ethos</span>
                      </div>
                    </Link>
                    <Link
                      href="/process"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">Our Process</span>
                        <span className="text-[11px] text-slate-300 block">4-step agile delivery</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products / Work Pill */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/work"
                className="px-5 py-2.5 2xl:px-6 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </Link>

              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#001238] border border-white/15 p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-1">
                    <a
                      href="https://hotel-fawn-seven.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Building2 className="w-4 h-4 text-[#c6cbfb] mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">DirectStay</span>
                        <span className="text-[11px] text-slate-300 block">Hotel &amp; Resort Booking Engine</span>
                      </div>
                    </a>
                    <a
                      href="https://traveller-alpha-sable.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Compass className="w-4 h-4 text-[#ffd3b6] mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">WanderTribe</span>
                        <span className="text-[11px] text-slate-300 block">Travel Expedition Platform</span>
                      </div>
                    </a>
                    <a
                      href="https://managemyshop.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <Store className="w-4 h-4 text-[#b5e1fb] mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">ShopManager</span>
                        <span className="text-[11px] text-slate-300 block">Omnichannel Retail POS</span>
                      </div>
                    </a>
                    <Link
                      href="/work"
                      onClick={closeMenu}
                      className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-[#eae8ff] mt-2 transition-colors group/all"
                    >
                      <span>View All Platforms</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/all:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Pill */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/solutions"
                className="px-5 py-2.5 2xl:px-6 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Solutions</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </Link>

              {activeDropdown === "solutions" && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-[#001238] border border-white/15 p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-1">
                    <Link
                      href="/solutions#hospitality"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">For Hospitality &amp; Stays</span>
                        <span className="text-[11px] text-slate-300 block">Hotels, resorts, and villas</span>
                      </div>
                    </Link>
                    <Link
                      href="/solutions#retail"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">For Retail &amp; Brands</span>
                        <span className="text-[11px] text-slate-300 block">E-commerce and POS stores</span>
                      </div>
                    </Link>
                    <Link
                      href="/solutions#startups"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">For Startups &amp; SaaS</span>
                        <span className="text-[11px] text-slate-300 block">Full-stack web applications</span>
                      </div>
                    </Link>
                    <Link
                      href="/solutions#business"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">For Business Websites</span>
                        <span className="text-[11px] text-slate-300 block">Brand-aligned, high speed</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Resources / Services Pill */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href="/services"
                className="px-5 py-2.5 2xl:px-6 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>Resources</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-80" />
              </Link>

              {activeDropdown === "resources" && (
                <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl bg-[#001238] border border-white/15 p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="space-y-1">
                    <Link
                      href="/services"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">Engineering Scope</span>
                        <span className="text-[11px] text-slate-300 block">Services &amp; deliverables</span>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      onClick={closeMenu}
                      className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-white/10 transition-colors"
                    >
                      <div>
                        <span className="text-xs font-bold text-white block">FAQ &amp; Delivery</span>
                        <span className="text-[11px] text-slate-300 block">Pricing, timeline, ownership</span>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Contact Us Direct Link */}
            <Link
              href="/contact"
              className="px-4.5 py-2.5 2xl:px-5 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all inline-flex items-center gap-1.5"
            >
              <span>Contact</span>
            </Link>

            {/* Discovery Call Primary Button */}
            <Link
              href="/discovery-call"
              className="px-6 py-2.5 2xl:px-7 2xl:py-2.5 rounded-full text-sm 2xl:text-[15px] font-bold text-[#001c55] bg-[#eae8ff] hover:bg-white transition-all shadow-md inline-flex items-center gap-2 cursor-pointer group"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4 text-[#001c55] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 bg-[#24232a] text-white focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#050711]/95 backdrop-blur-2xl px-6 pt-4 pb-8 animate-in slide-in-from-top duration-300 shadow-2xl mt-3">
          <nav className="flex flex-col space-y-2">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 text-base font-semibold text-white/90 hover:text-white rounded-xl hover:bg-white/10 transition-colors font-heading"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-5 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/discovery-call"
                onClick={closeMenu}
                className="w-full studio-btn-primary justify-center py-3.5"
              >
                <span>Book Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="w-full studio-btn-secondary justify-center py-3.5"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
