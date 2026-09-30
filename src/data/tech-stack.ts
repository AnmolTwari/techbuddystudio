export interface TechCategory {
  category: string;
  description: string;
  technologies: {
    name: string;
    description: string;
    badge: string;
  }[];
}

export const techStackCategories: TechCategory[] = [
  {
    category: "Frontend Architecture",
    description: "Modern, high-performance user interfaces crafted for speed and responsiveness.",
    technologies: [
      { name: "Next.js", description: "React framework for production SSR & SEO", badge: "Primary" },
      { name: "React", description: "Interactive component architecture", badge: "Core" },
      { name: "TypeScript", description: "Type-safe robust frontend code", badge: "Standard" },
      { name: "Tailwind CSS", description: "Modern, utility-first styling system", badge: "Design" },
    ],
  },
  {
    category: "Backend & APIs",
    description: "Scalable application logic, secure APIs, and custom business workflows.",
    technologies: [
      { name: "Java", description: "Enterprise-grade robust backend platform", badge: "Enterprise" },
      { name: "Spring Boot", description: "Microservices, security & business APIs", badge: "Enterprise" },
      { name: "Node.js", description: "Fast event-driven web services & APIs", badge: "Server" },
      { name: "FastAPI", description: "High-performance Python API engine", badge: "API / AI" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Secure, reliable data storage for applications, bookings, and customer records.",
    technologies: [
      { name: "PostgreSQL", description: "Rock-solid relational database engine", badge: "Relational" },
      { name: "MongoDB", description: "Flexible document database for modern apps", badge: "NoSQL" },
      { name: "Supabase", description: "Realtime PostgreSQL backend as a service", badge: "Cloud DB" },
    ],
  },
  {
    category: "Deployment & CI/CD",
    description: "Global edge CDN hosting, automated zero-downtime deployments, and source control.",
    technologies: [
      { name: "Vercel", description: "Global edge deployment network & instant SSL", badge: "Hosting" },
      { name: "GitHub", description: "Source control, versioning & automated CI/CD", badge: "DevOps" },
    ],
  },
];
