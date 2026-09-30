"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { MessageSquare, X, ArrowRight } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Quick chat popup box when opened */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm rounded-2xl bg-white dark:bg-[#0e1424] border border-slate-200 dark:border-slate-800 shadow-2xl p-4 text-left animate-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-700 bg-black flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="TechBuddyStudio Avatar"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                  TechBuddyStudio
                </h4>
                <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Typically replies in minutes
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl my-2 border border-slate-100 dark:border-slate-800">
            👋 Hi there! Have a question about building or redesigning a website for your business? Click below to chat directly with us on WhatsApp!
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors"
          >
            <span>Open WhatsApp Chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        {/* Tooltip on hover */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center px-3 py-1.5 rounded-lg bg-slate-900 dark:bg-slate-800 text-white text-xs font-medium whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900 dark:border-l-slate-800" />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp chat with TechBuddyStudio"
          className="relative w-14 h-14 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400 cursor-pointer"
        >
          {/* Notification pulse badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-rose-500 text-[9px] font-bold text-white items-center justify-center">1</span>
          </span>

          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
}
