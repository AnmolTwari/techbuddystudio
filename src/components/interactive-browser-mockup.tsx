"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Lock, 
  Smartphone, 
  Calendar, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Zap,
  TrendingUp
} from "lucide-react";

export function InteractiveBrowserMockup() {
  const [activeTab, setActiveTab] = useState<"hotel" | "travel" | "retail">("hotel");
  const [guestCount, setGuestCount] = useState(2);
  const [nights, setNights] = useState(3);
  const [isBooked, setIsBooked] = useState(false);

  const estimatedPrice = nights * 120 * guestCount;

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Decorative ambient background glow */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-sky-500/15 dark:bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Desktop Browser Frame */}
      <div className="relative rounded-2xl border border-slate-300/80 dark:border-slate-800 bg-white dark:bg-[#0c121e] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden">
        {/* Browser Top Navigation Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-100 dark:bg-[#0a0e17] border-b border-slate-200 dark:border-slate-800/80">
          {/* Window action dots */}
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500" />
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>

          {/* URL Search / Address Bar */}
          <div className="flex items-center justify-center flex-1 max-w-md mx-4 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-400 gap-2 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500" />
            <span className="font-mono font-medium truncate">
              {activeTab === "hotel" && "https://directstay.hotel-luxury.com"}
              {activeTab === "travel" && "https://wandertribe.expeditions.com"}
              {activeTab === "retail" && "https://shopmanager.business-pos.com"}
            </span>
            <span className="hidden sm:inline-block ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
              SSL Verified
            </span>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="flex items-center gap-1 bg-slate-200/80 dark:bg-slate-800/60 p-1 rounded-lg">
            <button
              onClick={() => { setActiveTab("hotel"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === "hotel"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => { setActiveTab("travel"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === "travel"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => { setActiveTab("retail"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                activeTab === "retail"
                  ? "bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Business App
            </button>
          </div>
        </div>

        {/* Browser Content Area */}
        <div className="p-4 sm:p-6 lg:p-8 bg-slate-50/70 dark:bg-[#090d16] min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeTab === "hotel" && (
              <motion.div
                key="hotel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Simulated Hotel Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                        Luxury Boutique Resort
                      </span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      The Azure Haven Villa &amp; Spa
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-500/20">
                      ⚡ Direct Booking: 0% Commission
                    </span>
                  </div>
                </div>

                {/* Simulated Interactive Booking Widget */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      Experience ocean-view private suites, chef-crafted dining, and curated wellness retreats. Reserve directly through our official booking engine for guaranteed lowest rates and complimentary breakfast.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                        <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Guests
                        </label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full mt-1 bg-transparent text-sm font-bold text-slate-900 dark:text-slate-200 focus:outline-none cursor-pointer"
                        >
                          <option value={1} className="dark:bg-slate-900">1 Guest</option>
                          <option value={2} className="dark:bg-slate-900">2 Guests</option>
                          <option value={4} className="dark:bg-slate-900">4 Guests (Villa)</option>
                        </select>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                        <label className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Nights
                        </label>
                        <select
                          value={nights}
                          onChange={(e) => setNights(Number(e.target.value))}
                          className="w-full mt-1 bg-transparent text-sm font-bold text-slate-900 dark:text-slate-200 focus:outline-none cursor-pointer"
                        >
                          <option value={1} className="dark:bg-slate-900">1 Night</option>
                          <option value={3} className="dark:bg-slate-900">3 Nights</option>
                          <option value={7} className="dark:bg-slate-900">7 Nights (Week)</option>
                        </select>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/50 shadow-xs">
                        <span className="text-[11px] font-bold text-indigo-700 dark:text-indigo-400">
                          Direct Quote
                        </span>
                        <div className="mt-1 font-extrabold text-base text-indigo-900 dark:text-indigo-200">
                          ${estimatedPrice}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setIsBooked(true)}
                        className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-600/20 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        {isBooked ? (
                          <>
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                            <span>Direct Enquiry Ready!</span>
                          </>
                        ) : (
                          <>
                            <span>Reserve Direct</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </>
                        )}
                      </button>

                      <a
                        href="https://hotel-fawn-seven.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <Globe className="w-3.5 h-3.5 text-sky-600 dark:text-sky-500" />
                        <span>Open Live DirectStay Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Card / Highlights */}
                  <div className="lg:col-span-5 p-4 rounded-xl bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-slate-900/10 dark:from-sky-950/40 dark:via-indigo-950/20 dark:to-slate-900/40 border border-sky-500/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-sky-700 dark:text-sky-400">
                        Conversion Highlights
                      </span>
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <ul className="text-xs space-y-2 text-slate-700 dark:text-slate-300 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                        <span>Instant WhatsApp Booking funnel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                        <span>Dynamic room ROI calculator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                        <span>Banquet &amp; event custom quote builder</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "travel" && (
              <motion.div
                key="travel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                      Curated Group Expeditions
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      WanderTribe Adventures
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-500/20">
                    🏔️ Next Departure: 4 Slots Left
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Featured Route</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mt-1">
                      Spiti Valley High Passes
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      7 Days • 4,500m Altitude • Guided
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Interactive Funnel</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mt-1">
                      WhatsApp Departure Switcher
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Direct 1-tap seat reservation
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Gear Checklist</span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200 mt-1">
                      Interactive Expedition Kit
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Packing checklist &amp; mountain prep
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://traveller-alpha-sable.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-600/20 inline-flex items-center gap-2"
                  >
                    <span>View WanderTribe Platform Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}

            {activeTab === "retail" && (
              <motion.div
                key="retail"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-violet-700 dark:text-violet-400">
                      Enterprise Retail Platform
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      ShopManager Business OS
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-800 dark:text-violet-400 font-bold border border-violet-200 dark:border-violet-500/20">
                    📊 Live Analytics &amp; POS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500 font-medium">Today&apos;s Revenue</span>
                      <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      $4,892.40
                    </div>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                      +18.4% from yesterday
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium">Inventory Status</span>
                    <div className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                      1,420 SKUs
                    </div>
                    <span className="text-[11px] text-slate-600 dark:text-slate-400 font-medium">
                      Multi-branch synchronized
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xs">
                    <span className="text-xs text-slate-500 font-medium">Backend Architecture</span>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      Spring Boot + PostgreSQL
                    </div>
                    <span className="text-[11px] text-violet-700 dark:text-violet-400 font-bold">
                      Multi-tenant security
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://managemyshop.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/20 inline-flex items-center gap-2"
                  >
                    <span>View ShopManager Platform Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Browser Footer Status Bar */}
        <div className="px-4 py-2.5 bg-slate-100 dark:bg-[#0a0e17] border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-600 dark:text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Production Ready
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Mobile-First Layout</span>
          </div>
          <span>TechBuddyStudio Engineered</span>
        </div>
      </div>

      {/* Floating Mobile Companion Mockup */}
      <div className="hidden md:block absolute -bottom-6 -right-6 w-56 rounded-2xl border border-slate-300 dark:border-slate-700/80 bg-white dark:bg-slate-900 shadow-2xl p-3 transform rotate-2 hover:rotate-0 transition-transform duration-300">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-[10px] font-bold text-slate-900 dark:text-slate-200">
              Mobile Experience
            </span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
            Fast
          </span>
        </div>
        <div className="space-y-2 text-[10px]">
          <div className="h-14 rounded-lg bg-gradient-to-r from-indigo-500/15 to-sky-500/15 p-2 flex flex-col justify-center border border-indigo-100 dark:border-transparent">
            <span className="font-bold text-slate-900 dark:text-slate-200 text-[11px]">
              1-Tap WhatsApp
            </span>
            <span className="text-slate-500 text-[9px]">Direct booking funnel</span>
          </div>
          <div className="flex items-center justify-between text-slate-700 dark:text-slate-400 text-[9px] px-1 font-semibold">
            <span>Core Web Vitals</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">99/100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
