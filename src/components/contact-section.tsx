"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { siteConfig } from "@/config/site";
import { 
  Send, 
  MessageSquare, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ShieldCheck
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

  const serviceOptions = [
    "New Business Website",
    "Landing Page",
    "Website Redesign",
    "E-commerce",
    "Custom Web Application",
    "Website Maintenance",
    "Not Sure Yet",
  ];

  const businessTypeOptions = [
    "Restaurant / Cafe / Hotel",
    "Retail & E-commerce",
    "Gym / Fitness / Salon",
    "Travel & Tourism",
    "Coach / Consultant",
    "Professional Services (Law, Medical, Agency)",
    "Startup / Tech Company",
    "Other Business",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2f27ce", "#443dff", "#dddbff", "#050316", "#10b981"],
        });
      } catch (err) {
        console.error("Confetti error", err);
      }
    }, 800);
  };

  const createWhatsAppInquiry = () => {
    const text = `Hi TechBuddyStudio, I'm ${formData.name || "a business owner"}${
      formData.businessName ? ` from ${formData.businessName}` : ""
    }. I'm looking for ${formData.serviceNeeded}.${
      formData.message ? ` Details: ${formData.message}` : ""
    }`;
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#fbfbfe] dark:bg-[#050316] relative border-t border-[#dddbff]/50 dark:border-[#221a5a]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md border border-[#dddbff] dark:border-[#221a5a] bg-[#dddbff]/50 dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#443dff]" />
            <span>Get in Touch</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#050316] dark:text-[#fbfbfe] tracking-tight">
            Let&apos;s build something for your business.
          </h2>

          <p className="text-base sm:text-lg text-[#050316]/75 dark:text-[#dddbff]/80">
            Tell us a little about your business and what you&apos;re looking for. We&apos;ll get back to you within 24 hours with ideas and a straightforward plan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Quick WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-sm space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#050316] dark:text-[#fbfbfe]">
                  Direct Contact Channels
                </h3>
                <p className="text-sm text-[#050316]/70 dark:text-[#dddbff]/70 leading-relaxed font-normal">
                  Prefer instant messaging? Chat with us directly on WhatsApp or drop us an email anytime.
                </p>
              </div>

              {/* WhatsApp Card Highlight */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 hover:border-emerald-500/40 transition-all flex items-start gap-4 block shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                      Fastest Response
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#050316] dark:text-[#fbfbfe] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp
                  </h4>
                  <p className="text-xs text-[#050316]/70 dark:text-[#dddbff]/70 font-medium">
                    {siteConfig.contact.displayPhone} • Average reply: under 1 hour
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={siteConfig.contact.mailtoUrl}
                className="group p-5 rounded-2xl bg-[#f0effe] dark:bg-[#120e36] border border-[#dddbff] dark:border-[#221a5a] hover:border-[#443dff]/40 transition-all flex items-start gap-4 block shadow-xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#dddbff] dark:bg-[#19134a] text-[#2f27ce] dark:text-[#dddbff] flex items-center justify-center flex-shrink-0 border border-[#dddbff] dark:border-transparent">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#050316]/50 dark:text-[#dddbff]/50">
                    Official Business Email
                  </span>
                  <h4 className="text-sm font-bold text-[#050316] dark:text-[#fbfbfe] group-hover:text-[#2f27ce] dark:group-hover:text-[#443dff] transition-colors">
                    {siteConfig.contact.email}
                  </h4>
                  <p className="text-xs text-[#050316]/60 dark:text-[#dddbff]/60 font-medium">
                    Click to compose message
                  </p>
                </div>
              </a>

              {/* Location & Response Info */}
              <div className="space-y-3 pt-4 border-t border-[#dddbff]/50 dark:border-[#221a5a]">
                <div className="flex items-center gap-3 text-xs text-[#050316]/80 dark:text-[#dddbff]/80 font-medium">
                  <MapPin className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
                  <span>Based in {siteConfig.founder.location} • Working with businesses worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#050316]/80 dark:text-[#dddbff]/80 font-medium">
                  <Clock className="w-4 h-4 text-[#2f27ce] dark:text-[#443dff] flex-shrink-0" />
                  <span>Response time: Within 24 hours (usually faster)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#050316]/80 dark:text-[#dddbff]/80 font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-500 flex-shrink-0" />
                  <span>No obligation, no spam, 100% confidential</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c0827] border border-[#dddbff] dark:border-[#221a5a] shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-500 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-500/20 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#050316] dark:text-[#fbfbfe]">
                      Thank You, {formData.name || "Friend"}!
                    </h3>
                    <p className="text-sm text-[#050316]/75 dark:text-[#dddbff]/80 max-w-md mx-auto leading-relaxed font-normal">
                      We received your project inquiry for <strong className="text-[#2f27ce] dark:text-[#443dff] font-bold">{formData.serviceNeeded}</strong>. We&apos;ll review your requirements and reach out to you shortly via email or WhatsApp.
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={createWhatsAppInquiry()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Send Quick Note on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
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
                      className="text-xs font-semibold text-[#050316]/60 hover:text-[#050316] dark:text-[#dddbff]/60 dark:hover:text-[#fbfbfe] underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Haven Cafe & Roasters"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                      />
                    </div>

                    {/* WhatsApp / Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        WhatsApp / Phone <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Business Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm font-medium text-[#050316] dark:text-[#fbfbfe] focus:outline-none focus:ring-2 focus:ring-[#443dff] cursor-pointer"
                      >
                        {businessTypeOptions.map((type) => (
                          <option key={type} value={type} className="dark:bg-[#0c0827] text-[#050316] dark:text-[#fbfbfe]">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* What do you need? */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                        What do you need? <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm font-medium text-[#050316] dark:text-[#fbfbfe] focus:outline-none focus:ring-2 focus:ring-[#443dff] cursor-pointer"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="dark:bg-[#0c0827] text-[#050316] dark:text-[#fbfbfe]">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Existing Website (Optional) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                      Existing Website or Instagram Link <span className="text-[#050316]/50 dark:text-[#dddbff]/50 font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.existingWebsite}
                      onChange={(e) => setFormData({ ...formData, existingWebsite: e.target.value })}
                      placeholder="e.g. www.yourbusiness.com or @instagramhandle"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#050316] dark:text-[#fbfbfe]">
                      Project Details / Goals <span className="text-[#050316]/50 dark:text-[#dddbff]/50 font-normal">(optional)</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a little about your goals, specific features you have in mind, or your target timeline..."
                      className="w-full px-4 py-2.5 rounded-xl border border-[#dddbff] dark:border-[#221a5a] bg-[#fbfbfe] dark:bg-[#120e36] text-sm text-[#050316] dark:text-[#fbfbfe] placeholder-[#050316]/40 dark:placeholder-[#dddbff]/40 focus:outline-none focus:ring-2 focus:ring-[#443dff]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold rounded-lg bg-[#2f27ce] hover:bg-[#251ea8] dark:bg-[#443dff] dark:hover:bg-[#342de6] text-white shadow-md shadow-[#2f27ce]/20 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Start a Conversation</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#050316]/50 dark:text-[#dddbff]/50 font-medium">
                    We respect your privacy. Your information is strictly used to discuss your website project.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
