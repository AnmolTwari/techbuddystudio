/**
 * TechBuddyStudio - Lightweight Conversion Analytics & Event Tracker
 * 
 * Tracks key user actions (Discovery Call clicks, lead submissions, live demo launches,
 * and case study views) without heavy third-party tracker overhead.
 * Works seamlessly with Google Analytics (gtag), Plausible, or internal telemetry.
 */

export type ConversionEvent = 
  | "discovery_call_click"
  | "lead_form_submitted"
  | "live_demo_launched"
  | "case_study_viewed"
  | "service_scope_requested";

interface EventPayload {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export function trackEvent(eventName: ConversionEvent, payload?: EventPayload) {
  if (typeof window === "undefined") return;

  // 1. Log to console in development mode
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event: ${eventName}]`, payload || {});
  }

  // 2. Dispatch to Google Analytics (gtag.js) if available
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
    (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", eventName, payload);
  }

  // 3. Dispatch to Plausible if available
  if (typeof (window as unknown as { plausible?: (name: string, opts?: unknown) => void }).plausible === "function") {
    (window as unknown as { plausible: (name: string, opts?: unknown) => void }).plausible(eventName, { props: payload });
  }

  // 4. Custom window event for internal listeners
  const customEvt = new CustomEvent("techbuddystudio:event", {
    detail: { eventName, payload, timestamp: Date.now() },
  });
  window.dispatchEvent(customEvt);
}

export function trackDiscoveryCall(source: string) {
  trackEvent("discovery_call_click", { category: "Conversion", label: source });
}

export function trackDemoLaunch(projectId: string) {
  trackEvent("live_demo_launched", { category: "Portfolio", label: projectId });
}

export function trackCaseStudyView(slug: string) {
  trackEvent("case_study_viewed", { category: "CaseStudy", label: slug });
}

export function trackLeadSubmission(service: string) {
  trackEvent("lead_form_submitted", { category: "LeadGen", label: service });
}
