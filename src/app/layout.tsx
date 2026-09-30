import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig, SITE_URL } from "@/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechBuddyStudio — Modern Websites for Growing Businesses",
    template: "%s | TechBuddyStudio",
  },
  description:
    "TechBuddyStudio designs and builds modern, fast, mobile-friendly websites and web experiences for small businesses, startups, and growing brands.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.founder.name, url: siteConfig.founder.portfolioUrl }],
  creator: siteConfig.founder.name,
  publisher: siteConfig.name,
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "TechBuddyStudio — Modern Websites for Growing Businesses",
    description:
      "TechBuddyStudio designs and builds modern, fast, mobile-friendly websites and web experiences for small businesses, startups, and growing brands.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1024,
        height: 1024,
        alt: "TechBuddyStudio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBuddyStudio — Modern Websites for Growing Businesses",
    description:
      "Modern websites and web experiences for businesses that want to stand out online.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    image: `${SITE_URL}/og-image.png`,
    logo: `${SITE_URL}/logo.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      sameAs: [
        siteConfig.founder.portfolioUrl,
        siteConfig.founder.githubUrl,
        siteConfig.founder.linkedinUrl,
      ],
    },
    url: SITE_URL,
    telephone: siteConfig.contact.displayPhone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    priceRange: "$$",
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-indigo-600 selection:text-white">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
