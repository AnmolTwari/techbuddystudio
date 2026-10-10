import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig, SITE_URL } from "@/config/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechBuddyStudio | The Infrastructure Layer for Modern Business",
    template: "%s | TechBuddyStudio",
  },
  description:
    "TechBuddyStudio designs and builds high-performance web platforms, direct booking engines, and custom digital applications for growing businesses and enterprises.",
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "TechBuddyStudio | The Infrastructure Layer for Modern Business",
    description:
      "One platform for custom design, engineering, and conversion. High-performance web applications and booking infrastructure.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/newlogo.png",
        width: 1024,
        height: 1024,
        alt: "TechBuddyStudio Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechBuddyStudio | The Infrastructure Layer for Modern Business",
    description:
      "One platform for custom design, engineering, and conversion. High-performance web applications and booking infrastructure.",
    images: ["/newlogo.png"],
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
    image: `${SITE_URL}/newlogo.png`,
    logo: `${SITE_URL}/newlogo.png`,
    description: siteConfig.description,
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
      className={`${plusJakartaSans.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-[#070708] antialiased selection:bg-[#001c55] selection:text-[#eae8ff]">
        {children}
      </body>
    </html>
  );
}
