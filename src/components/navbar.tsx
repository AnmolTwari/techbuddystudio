"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { useTheme } from "@/components/theme-provider";
import {
  Sun,
  Moon,
  Menu,
  X,
  ArrowRight
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#fbfbfe]/85 dark:bg-[#050316]/85 backdrop-blur-md border-b border-[#dddbff]/80 dark:border-[#221a5a]/80 shadow-sm"
        : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Official Logo & Brand */}
          <Link
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#443dff] rounded-xl p-1"
            aria-label="TechBuddyStudio - Home"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-[#221a5a] bg-white dark:bg-[#0c0827] flex-shrink-0 p-1">
              <Image
                src="/newlogo.png"
                alt="TechBuddyStudio Official Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-[#050316] dark:text-[#fbfbfe] group-hover:text-[#2f27ce] dark:group-hover:text-[#443dff] transition-colors leading-tight">
                TechBuddy<span className="text-[#2f27ce] dark:text-[#443dff]">Studio</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#484469] dark:text-[#a39fd4]">
                Web &amp; Digital Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-[#050316]/80 hover:text-[#2f27ce] dark:text-[#dddbff]/90 dark:hover:text-white rounded-lg hover:bg-[#dddbff]/40 dark:hover:bg-[#19134a]/60 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions: Theme Toggle & Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center border border-[#dddbff] dark:border-[#221a5a] bg-white/60 dark:bg-[#0c0827]/60 text-[#050316] dark:text-[#dddbff] hover:bg-[#dddbff]/40 dark:hover:bg-[#19134a] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#443dff] cursor-pointer"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 scale-100" />
              ) : (
                <Moon className="w-4 h-4 text-[#2f27ce] transition-transform rotate-0 scale-100" />
              )}
            </button>

            {/* Primary CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/25 hover:shadow-[#2f27ce]/40 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#443dff]"
            >
              <span>Get a Website</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-lg flex items-center justify-center border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] text-[#050316] dark:text-[#dddbff]"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-[#2f27ce]" />
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] text-[#050316] dark:text-[#dddbff] focus:outline-none"
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
        <div className="md:hidden border-b border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe]/95 dark:bg-[#050316]/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-1.5">
            {siteConfig.navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 text-base font-medium text-[#050316] hover:text-[#2f27ce] dark:text-[#dddbff] dark:hover:text-white rounded-xl hover:bg-[#dddbff]/30 dark:hover:bg-[#19134a]/60 transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#dddbff] dark:border-[#221a5a] flex flex-col gap-2.5">
              <Link
                href="#contact"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-xl bg-[#2f27ce] dark:bg-[#443dff] text-white shadow-md shadow-[#2f27ce]/25"
              >
                <span>Get a Website</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-colors"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
