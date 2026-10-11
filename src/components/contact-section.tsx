"use client";

import React, { useState } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
import { trackLeadSubmission } from "@/lib/analytics";
import { 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck,
  ArrowRight,
  PhoneCall,
  CalendarCheck,
  Calendar,
  AlertCircle
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "Local Business / Retail",
    serviceNeeded: "New Business Website",
    existingWebsite: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [leadMeta, setLeadMeta] = useState<{ leadId: string; nextSteps: string[] } | null>(null);

  const serviceOptions = [
    "New Business Website",
    "Landing Page",
    "Website Redesign",
    "E-commerce & Booking",
    "Custom Web Application",
    "Website Maintenance",
    "Not Sure Yet",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setLeadMeta({
        leadId: data.leadId,
        nextSteps: data.nextSteps || [],
      });

      setIsSubmitted(true);
      trackLeadSubmission(formData.serviceNeeded);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#001c55", "#eae8ff", "#5030cc", "#10b981"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An error occurred while submitting your inquiry.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 2xl:py-36 3xl:py-44 bg-[#f6fafe] dark:bg-[#070b19] relative transition-colors duration-300">
      <div className="max-w-7xl 2xl:max-w-[1400px] 3xl:max-w-[1720px] 4xl:max-w-[2100px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-12">
        {/* Split Two-Column Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 3xl:gap-16 items-start mb-16 sm:mb-20 3xl:mb-24">
          <div className="lg:col-span-6 space-y-3">
            <span className="inline-flex items-center gap-2 text-xs 3xl:text-sm font-bold uppercase tracking-widest text-[#001c55] dark:text-[#eae8ff]">
              <Sparkles className="w-3.5 h-3.5 text-[#5030cc] dark:text-[#c6cbfb]" />
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold tracking-tight text-[#070708] dark:text-white leading-[1.15] font-heading">
              Let&apos;s Build Something for Your Business.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 pt-1 lg:pt-6 3xl:pt-8">
            <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#646a69] dark:text-[#9ba3b8] leading-relaxed font-normal">
              Tell us a little about your business and what you&apos;re looking for. We&apos;ll get back to you within 24 hours with ideas, fixed estimates, and a straightforward roadmap.
            </p>
            <p className="text-base sm:text-lg 2xl:text-xl 3xl:text-2xl text-[#646a69] dark:text-[#9ba3b8] leading-relaxed font-normal">
              Prefer a direct consultation? You can also book a discovery call with our lead engineers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 2xl:gap-14 3xl:gap-16 4xl:gap-20 items-start">
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 2xl:p-12 3xl:p-16 rounded-3xl bg-white dark:bg-[#0b1126] border border-slate-200/80 dark:border-slate-800/80 shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl 2xl:text-3xl 3xl:text-4xl font-bold text-[#070708] dark:text-white font-heading">
                  Direct Contact Channels
                </h3>
                <p className="text-sm 2xl:text-base text-[#646a69] dark:text-[#9ba3b8] leading-relaxed font-normal">
                  Connect directly with our engineering studio or submit your specifications below.
                </p>
              </div>

              {/* Consultation Call Card */}
              <Link
                href="/discovery-call"
                className="group p-5.5 rounded-2xl bg-[#f8f9fc] dark:bg-[#121936] border border-slate-200/80 dark:border-slate-800 hover:border-[#001c55] dark:hover:border-[#eae8ff] transition-all flex items-start gap-4 block shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eae8ff] dark:bg-[#001c55] text-[#001c55] dark:text-[#eae8ff] flex items-center justify-center flex-shrink-0 border border-slate-200/80 dark:border-transparent group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] dark:text-[#001c55] px-2 py-0.5 rounded-full">
                    1-on-1 Strategy
                  </span>
                  <h4 className="text-base 2xl:text-lg font-bold text-[#070708] dark:text-white group-hover:text-[#001c55] dark:group-hover:text-[#eae8ff] transition-colors font-heading">
                    Book a Discovery Call
                  </h4>
                  <p className="text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-medium">
                    Discuss scope, architecture &amp; timelines directly
                  </p>
                </div>
              </Link>

              {/* Email Card */}
              <a
                href={siteConfig.contact.mailtoUrl}
                className="group p-5.5 rounded-2xl bg-[#f8f9fc] dark:bg-[#121936] border border-slate-200/80 dark:border-slate-800 hover:border-[#001c55] dark:hover:border-[#eae8ff] transition-all flex items-start gap-4 block shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-[#eae8ff] dark:bg-[#001c55] text-[#001c55] dark:text-[#eae8ff] flex items-center justify-center flex-shrink-0 border border-slate-200/80 dark:border-transparent group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#001c55] bg-[#eae8ff] dark:text-[#001c55] px-2 py-0.5 rounded-full">
                    Official Business Inbox
                  </span>
                  <h4 className="text-base 2xl:text-lg font-bold text-[#070708] dark:text-white group-hover:text-[#001c55] dark:group-hover:text-[#eae8ff] transition-colors font-heading">
                    {siteConfig.contact.email}
                  </h4>
                  <p className="text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-medium">
                    Send RFP, links, or project specifications
                  </p>
                </div>
              </a>

              {/* Location & Guarantee Info */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex items-center gap-3 text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-medium">
                  <MapPin className="w-4 h-4 text-[#001c55] dark:text-[#eae8ff] flex-shrink-0" />
                  <span>Based in {siteConfig.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-medium">
                  <Clock className="w-4 h-4 text-[#001c55] dark:text-[#eae8ff] flex-shrink-0" />
                  <span>Response time: Within 2 hours (business days)</span>
                </div>
                <div className="flex items-center gap-3 text-xs 2xl:text-sm text-[#646a69] dark:text-[#9ba3b8] font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>No obligation, 100% confidential discussion</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 2xl:p-14 rounded-3xl bg-white dark:bg-[#0b1126] border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    {leadMeta?.leadId && (
                      <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#eae8ff] text-[#001c55] inline-block mb-1">
                        Reference: {leadMeta.leadId}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#070708] dark:text-white font-heading">
                      Thank You, {formData.name || "Friend"}!
                    </h3>
                    <p className="text-sm sm:text-base text-[#646a69] dark:text-[#9ba3b8] max-w-md mx-auto leading-relaxed">
                      Your inquiry for <strong className="text-[#001c55] dark:text-[#eae8ff] font-bold">{formData.serviceNeeded}</strong> has been logged directly with our engineering team.
                    </p>
                  </div>

                  {/* What Happens Next Checklist */}
                  <div className="max-w-md mx-auto text-left p-5 rounded-2xl bg-[#f8f9fc] dark:bg-[#121936] border border-slate-200 dark:border-slate-800 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#001c55] dark:text-[#eae8ff] block">
                      What Happens Next:
                    </span>
                    <ul className="space-y-2 text-xs text-[#4a4f5c] dark:text-slate-300">
                      {(leadMeta?.nextSteps || [
                        "A senior web engineer is reviewing your project details.",
                        "You will receive an architectural roadmap and estimated timeline via email within 2 business hours.",
                        "We will schedule a 1-on-1 discovery call to finalize technical scope."
                      ]).map((step, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={siteConfig.contact.mailtoUrl}
                      className="inline-flex items-center justify-center gap-2 bg-[#001c55] hover:bg-[#00287a] text-white font-heading font-semibold text-xs 2xl:text-sm py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email Our Lead Engineer Directly</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setErrorMessage(null);
                        setFormData({
                          name: "",
                          businessName: "",
                          email: "",
                          phone: "",
                          businessType: "Local Business / Retail",
                          serviceNeeded: "New Business Website",
                          existingWebsite: "",
                          message: "",
                        });
                      }}
                      className="text-xs font-semibold text-[#646a69] hover:text-[#070708] dark:text-[#9ba3b8] dark:hover:text-white underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f7f8fa] dark:bg-[#121936] text-sm 2xl:text-base text-[#070708] dark:text-white placeholder-[#646a69]/60 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#001c55] dark:focus:ring-[#eae8ff]"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-2">
                      <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Acme Studio"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f7f8fa] dark:bg-[#121936] text-sm 2xl:text-base text-[#070708] dark:text-white placeholder-[#646a69]/60 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#001c55] dark:focus:ring-[#eae8ff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@business.com"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f7f8fa] dark:bg-[#121936] text-sm 2xl:text-base text-[#070708] dark:text-white placeholder-[#646a69]/60 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#001c55] dark:focus:ring-[#eae8ff]"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f7f8fa] dark:bg-[#121936] text-sm 2xl:text-base text-[#070708] dark:text-white placeholder-[#646a69]/60 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#001c55] dark:focus:ring-[#eae8ff]"
                      />
                    </div>
                  </div>

                  {/* Service Needed Pill Selection */}
                  <div className="space-y-2">
                    <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                      Service Needed
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((opt) => (
                        <button
                          type="button"
                          key={opt}
                          onClick={() => setFormData({ ...formData, serviceNeeded: opt })}
                          className={`px-3.5 py-1.5 rounded-full text-xs 2xl:text-sm font-bold transition-all cursor-pointer ${
                            formData.serviceNeeded === opt
                              ? "bg-[#001c55] text-[#eae8ff] dark:bg-[#eae8ff] dark:text-[#001c55] shadow-xs"
                              : "bg-[#f7f8fa] dark:bg-[#121936] text-[#646a69] dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-[#001c55]/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message / Scope Details */}
                  <div className="space-y-2">
                    <label className="text-xs 2xl:text-sm font-bold text-[#070708] dark:text-white block font-heading">
                      Project Notes &amp; Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you'd like to achieve, any reference links, or questions..."
                      className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-[#f7f8fa] dark:bg-[#121936] text-sm 2xl:text-base text-[#070708] dark:text-white placeholder-[#646a69]/60 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#001c55] dark:focus:ring-[#eae8ff]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-[#001c55] hover:bg-[#00287a] text-[#eae8ff] font-heading font-semibold text-base 2xl:text-lg py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Start Your Project</span>
                        <div className="w-6 h-6 rounded-full bg-[#eae8ff] text-[#001c55] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
