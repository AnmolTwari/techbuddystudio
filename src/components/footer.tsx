"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { 
  Mail, 
  MapPin, 
  ArrowUp, 
  Globe 
} from "lucide-react";
import { InstagramIcon, LinkedinIcon, GithubIcon } from "@/components/icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#05070c] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info & Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-3 inline-flex group">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md border border-slate-700 bg-black flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="TechBuddyStudio Official Logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                TechBuddy<span className="text-sky-400">Studio</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Modern websites for modern businesses. We design and develop fast, mobile-first web experiences that build credibility and make customer connection effortless.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.founderPortfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Founder's Technical Portfolio"
                title="Founder's Technical Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <span className="block text-xs text-slate-500">Email Inquiries:</span>
                <a
                  href={siteConfig.contact.mailtoUrl}
                  className="text-white hover:text-sky-400 transition-colors font-medium"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs text-slate-500">WhatsApp / Call:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-sky-400 transition-colors font-medium"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{siteConfig.contact.location} (Serving Global Clients)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Crafted by {siteConfig.founder.name}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
