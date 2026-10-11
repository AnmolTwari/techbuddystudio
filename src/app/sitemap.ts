import { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { allProjects } from "@/data/projects";
import { dedicatedServices } from "@/data/services-data";
import { articlesData } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: currentDate, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/work`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/services`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/solutions`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/discovery-call`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.95 },
    { url: `${SITE_URL}/insights`, lastModified: currentDate, changeFrequency: "weekly", priority: 0.85 },
    { url: `${SITE_URL}/about`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/process`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.85 },
    { url: `${SITE_URL}/faq`, lastModified: currentDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-conditions`, lastModified: currentDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Case study routes
  const caseStudyRoutes: MetadataRoute.Sitemap = allProjects.map((p) => ({
    url: `${SITE_URL}/work/${p.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Dedicated service routes
  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(dedicatedServices).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  // Insight article routes
  const insightRoutes: MetadataRoute.Sitemap = articlesData.map((a) => ({
    url: `${SITE_URL}/insights/${a.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...serviceRoutes, ...insightRoutes];
}
