import type { Metadata } from "next";
import "./globals.css";
import "@/styles/common.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/footer/Footer";
import PageTransition from "@/components/custom/page-transition/PageTransition";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Script from "next/script";
import SalePopup from "@/components/custom/popup/SalePopup"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const SITE_URL = "https://aenycplumbing.com";

export const metadata: Metadata = {
  title: {
    default: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & NYC",
    template: "%s | A&E NYC Plumbing",
  },
  description:
    "Manhattan's licensed plumbing specialists. Available 7 days a week, 9am–9pm. Serving all NYC boroughs. Call (646) 392-7164 for fast, upfront service.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "A&E NYC Plumbing",
    title: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & NYC",
    description:
      "Manhattan's licensed plumbing specialists. Available 7 days a week, 9am–9pm. Serving all NYC boroughs. Call (646) 392-7164.",
    images: [{ url: "/images/hero-bg-plumbing.jpg", width: 1200, height: 630, alt: "A&E NYC Plumbing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & NYC",
    description: "Manhattan's licensed plumbing specialists. Call (646) 392-7164.",
    images: ["/images/hero-bg-plumbing.jpg"],
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "A&E NYC Plumbing",
  url: SITE_URL,
  telephone: "+16463927164",
  email: "support@topplumbernyc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 Fulton St.",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10038",
    addressCountry: "US",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "09:00",
    closes: "21:00",
  },
  areaServed: [
    { "@type": "City", name: "Manhattan" },
    { "@type": "City", name: "Brooklyn" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "The Bronx" },
    { "@type": "City", name: "Staten Island" },
  ],
  priceRange: "$$",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <PageTransition />
        <SalePopup businessName="A&E NYC Plumbing" expiryDate="June 15, 2026" trade="plumbers" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
