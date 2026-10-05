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
      {/* Main Desktop Browser Frame */}
      <div className="relative rounded-2xl border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] shadow-xl overflow-hidden">
        {/* Browser Top Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 px-3.5 sm:px-4 py-3 bg-[#f0effe] dark:bg-[#09061e] border-b border-[#dddbff] dark:border-[#221a5a]">
          {/* Top sub-row: window dots + address bar */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {/* Window action dots */}
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>

            {/* URL Search / Address Bar */}
            <div className="flex items-center flex-1 max-w-full sm:max-w-md mx-1 sm:mx-3 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] text-xs text-[#050316] dark:text-[#dddbff] gap-2 shadow-xs min-w-0">
              <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              <span className="font-mono font-medium truncate text-[11px] sm:text-xs">
                {activeTab === "hotel" && "https://directstay.hotel-luxury.com"}
                {activeTab === "travel" && "https://wandertribe.expeditions.com"}
                {activeTab === "retail" && "https://shopmanager.business-pos.com"}
              </span>
              <span className="hidden md:inline-block ml-auto text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold flex-shrink-0">
                SSL Verified
              </span>
            </div>
          </div>

          {/* Interactive Showcase Tabs */}
          <div className="flex items-center justify-center gap-1 bg-[#dddbff]/50 dark:bg-[#19134a]/60 p-1 rounded-lg flex-shrink-0 overflow-x-auto">
            <button
              onClick={() => { setActiveTab("hotel"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "hotel"
                  ? "bg-white dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] shadow-xs"
                  : "text-[#484469] dark:text-[#a39fd4] hover:text-[#050316] dark:hover:text-white"
              }`}
            >
              Hospitality
            </button>
            <button
              onClick={() => { setActiveTab("travel"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "travel"
                  ? "bg-white dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] shadow-xs"
                  : "text-[#484469] dark:text-[#a39fd4] hover:text-[#050316] dark:hover:text-white"
              }`}
            >
              Travel
            </button>
            <button
              onClick={() => { setActiveTab("retail"); setIsBooked(false); }}
              className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "retail"
                  ? "bg-white dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] shadow-xs"
                  : "text-[#484469] dark:text-[#a39fd4] hover:text-[#050316] dark:hover:text-white"
              }`}
            >
              Business App
            </button>
          </div>
        </div>

        {/* Browser Content Area */}
        <div className="p-4 sm:p-6 lg:p-8 bg-[#fbfbfe] dark:bg-[#050316] min-h-[380px]">
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#dddbff] dark:border-[#221a5a]">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#2f27ce] dark:text-[#443dff]">
                        Premier Luxury Resort
                      </span>
                      <div className="flex text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                      The Azure Haven Villa &amp; Spa
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold border border-emerald-200 dark:border-emerald-500/20 inline-flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      <span>Direct Booking: 0% Commission</span>
                    </span>
                  </div>
                </div>

                {/* Simulated Interactive Booking Widget */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-[#050316]/80 dark:text-[#dddbff]/90 leading-relaxed font-normal">
                      Experience ocean-view private suites, chef-crafted dining, and curated wellness retreats. Reserve directly through our official booking engine for guaranteed lowest rates and complimentary breakfast.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                        <label className="text-[11px] font-semibold text-[#484469] dark:text-[#a39fd4] flex items-center gap-1.5">
                          <Users className="w-3 h-3 text-[#2f27ce] dark:text-[#443dff]" /> Guests
                        </label>
                        <select
                          value={guestCount}
                          onChange={(e) => setGuestCount(Number(e.target.value))}
                          className="w-full mt-1 bg-transparent text-sm font-bold text-[#050316] dark:text-[#dddbff] focus:outline-none cursor-pointer"
                        >
                          <option value={1} className="dark:bg-[#0c0827]">1 Guest</option>
                          <option value={2} className="dark:bg-[#0c0827]">2 Guests</option>
                          <option value={4} className="dark:bg-[#0c0827]">4 Guests (Villa)</option>
                        </select>
                      </div>

                      <div className="p-3 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                        <label className="text-[11px] font-semibold text-[#484469] dark:text-[#a39fd4] flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-[#2f27ce] dark:text-[#443dff]" /> Nights
                        </label>
                        <select
                          value={nights}
                          onChange={(e) => setNights(Number(e.target.value))}
                          className="w-full mt-1 bg-transparent text-sm font-bold text-[#050316] dark:text-[#dddbff] focus:outline-none cursor-pointer"
                        >
                          <option value={1} className="dark:bg-[#0c0827]">1 Night</option>
                          <option value={3} className="dark:bg-[#0c0827]">3 Nights</option>
                          <option value={7} className="dark:bg-[#0c0827]">7 Nights (Week)</option>
                        </select>
                      </div>

                      <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-[#dddbff]/40 dark:bg-[#19134a] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                        <span className="text-[11px] font-bold text-[#2f27ce] dark:text-[#dddbff]">
                          Direct Quote
                        </span>
                        <div className="mt-1 font-extrabold text-base text-[#2f27ce] dark:text-white">
                          ${estimatedPrice}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        onClick={() => setIsBooked(true)}
                        className="px-4 py-2.5 text-xs font-semibold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 transition-all flex items-center gap-2 cursor-pointer"
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
                        className="px-3.5 py-2 text-xs font-semibold rounded-lg border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] text-[#050316] dark:text-[#dddbff] hover:bg-[#dddbff]/30 dark:hover:bg-[#19134a] transition-colors inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#2f27ce] dark:text-[#443dff]" />
                        <span>Open Live DirectStay Demo</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Card / Highlights */}
                  <div className="lg:col-span-5 p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#2f27ce] dark:text-[#dddbff]">
                        Conversion Highlights
                      </span>
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                    </div>
                    <ul className="text-xs space-y-2 text-[#050316]/80 dark:text-[#dddbff]/90 font-medium">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>Instant WhatsApp Booking funnel</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                        <span>Dynamic room ROI calculator</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#dddbff] dark:border-[#221a5a]">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                      Curated Group Expeditions
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                      WanderTribe Adventures
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-400 font-bold border border-amber-200 dark:border-amber-500/20">
                    Next Departure: 4 Slots Left
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Featured Route</span>
                    <h4 className="font-bold text-sm text-[#050316] dark:text-[#dddbff] mt-1">
                      Spiti Valley High Passes
                    </h4>
                    <p className="text-xs text-[#484469] dark:text-[#a39fd4] mt-1">
                      7 Days • 4,500m Altitude • Guided
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Interactive Funnel</span>
                    <h4 className="font-bold text-sm text-[#050316] dark:text-[#dddbff] mt-1">
                      WhatsApp Departure Switcher
                    </h4>
                    <p className="text-xs text-[#484469] dark:text-[#a39fd4] mt-1">
                      Direct 1-tap seat reservation
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Gear Checklist</span>
                    <h4 className="font-bold text-sm text-[#050316] dark:text-[#dddbff] mt-1">
                      Interactive Expedition Kit
                    </h4>
                    <p className="text-xs text-[#484469] dark:text-[#a39fd4] mt-1">
                      Packing checklist &amp; mountain prep
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://traveller-alpha-sable.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-white shadow-md shadow-amber-600/20 inline-flex items-center gap-2 cursor-pointer"
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
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-[#dddbff] dark:border-[#221a5a]">
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#2f27ce] dark:text-[#443dff]">
                      Enterprise Retail Platform
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#050316] dark:text-white">
                      ShopManager Business OS
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] font-bold border border-[#dddbff] dark:border-[#221a5a]">
                    Live Analytics &amp; POS
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Daily Revenue Tracking</span>
                      <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="text-lg font-bold text-[#050316] dark:text-white mt-1">
                      Multi-Currency Sync
                    </div>
                    <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-bold">
                      Realtime order updates
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Inventory Status</span>
                    <div className="text-lg font-bold text-[#050316] dark:text-white mt-1">
                      Multi-Branch Stock
                    </div>
                    <span className="text-[11px] text-[#484469] dark:text-[#a39fd4] font-medium">
                      Multi-branch synchronized
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xs">
                    <span className="text-xs text-[#484469] dark:text-[#a39fd4] font-medium">Backend Architecture</span>
                    <div className="text-sm font-bold text-[#050316] dark:text-white mt-1">
                      Spring Boot + PostgreSQL
                    </div>
                    <span className="text-[11px] text-[#2f27ce] dark:text-[#443dff] font-bold">
                      Multi-tenant security
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="https://managemyshop.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 inline-flex items-center gap-2 cursor-pointer"
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
        <div className="px-4 py-2.5 bg-[#f0effe] dark:bg-[#09061e] border-t border-[#dddbff] dark:border-[#221a5a] flex items-center justify-between text-[11px] text-[#484469] dark:text-[#a39fd4] font-medium">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              100% Production Ready
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Mobile-First Layout</span>
          </div>
          <span>Engineered by TechBuddyStudio</span>
        </div>
      </div>

      {/* Floating Mobile Companion Mockup */}
      <div className="hidden md:block absolute -bottom-6 -right-6 w-56 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-white dark:bg-[#0c0827] shadow-xl p-3">
        <div className="flex items-center justify-between border-b border-[#dddbff] dark:border-[#221a5a] pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-[#2f27ce] dark:text-[#443dff]" />
            <span className="text-[10px] font-bold text-[#050316] dark:text-[#dddbff]">
              Mobile Experience
            </span>
          </div>
          <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 font-bold">
            Optimized
          </span>
        </div>
        <div className="space-y-2 text-[10px]">
          <div className="h-14 rounded-lg bg-[#dddbff]/40 dark:bg-[#19134a] p-2 flex flex-col justify-center border border-[#dddbff] dark:border-transparent">
            <span className="font-bold text-[#050316] dark:text-[#dddbff] text-[11px]">
              1-Tap WhatsApp
            </span>
            <span className="text-[#484469] dark:text-[#a39fd4] text-[9px]">Direct booking funnel</span>
          </div>
          <div className="flex items-center justify-between text-[#484469] dark:text-[#a39fd4] text-[9px] px-1 font-semibold">
            <span>Core Web Vitals</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">Passed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
