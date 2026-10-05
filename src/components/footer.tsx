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
    <footer className="bg-[#050316] text-[#dddbff]/80 pt-16 pb-12 border-t border-[#221a5a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#221a5a]/80">
          {/* Brand Info & Official Logo */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="#home" className="flex items-center gap-3 inline-flex group">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-[#221a5a] bg-white dark:bg-[#0c0827] flex-shrink-0 p-1 group-hover:scale-105 transition-transform">
                <Image
                  src="/newlogo.png"
                  alt="TechBuddyStudio Official Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                TechBuddy<span className="text-[#443dff]">Studio</span>
              </span>
            </Link>

            <p className="text-sm text-[#dddbff]/70 max-w-sm leading-relaxed font-normal">
              Modern websites for growing businesses. We design and develop fast, mobile-first web experiences that build credibility and make customer connection effortless.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#19134a] hover:bg-[#2f27ce] text-[#dddbff] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#19134a] hover:bg-[#2f27ce] text-[#dddbff] hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#19134a] hover:bg-[#2f27ce] text-[#dddbff] hover:text-white flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.founderPortfolio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#19134a] hover:bg-[#2f27ce] text-[#dddbff] hover:text-white flex items-center justify-center transition-colors"
                aria-label="Founder's Technical Portfolio"
                title="Founder's Technical Portfolio"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#dddbff]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#dddbff]/70 hover:text-white transition-colors font-medium"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#dddbff]">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#dddbff]/70 hover:text-white transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-[#dddbff]/70 hover:text-white transition-colors font-medium"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#dddbff]">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm">
              <div>
                <span className="block text-xs text-[#dddbff]/50">Email Inquiries:</span>
                <a
                  href={siteConfig.contact.mailtoUrl}
                  className="text-white hover:text-[#443dff] transition-colors font-medium"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <span className="block text-xs text-[#dddbff]/50">WhatsApp / Call:</span>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#443dff] transition-colors font-medium"
                >
                  {siteConfig.contact.displayPhone}
                </a>
              </div>

              <div className="pt-1 flex items-center gap-2 text-xs text-[#dddbff]/70">
                <MapPin className="w-3.5 h-3.5 text-[#443dff]" />
                <span>{siteConfig.contact.location} (Global Client Support)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dddbff]/50">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>Crafted by {siteConfig.founder.name}</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#dddbff]/60 hover:text-white transition-colors cursor-pointer"
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
