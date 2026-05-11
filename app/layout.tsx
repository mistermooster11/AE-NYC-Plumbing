import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "@/styles/homepage.css";
import "@/styles/contact.css";
import "@/styles/channel.css";
import "@/styles/faq.css";
import "@/styles/craft-catalog.css";
import "@/styles/programs.css";
import Header from "@/components/custom/header/Header";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://aenycplumbing.com";

export const metadata: Metadata = {
  title: {
    default: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & All NYC Boroughs",
    template: "%s | A&E NYC Plumbing",
  },
  description:
    "A&E NYC Plumbing — licensed & insured plumbers serving Manhattan and all NYC boroughs. Drain repair, gas lines, water heaters, repiping & more. Free quotes. Call (646) 392-7164.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "A&E NYC Plumbing",
    title: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & All NYC Boroughs",
    description:
      "Licensed & insured NYC plumbers. Drain repair, gas lines, water heaters, repiping & more. Free quotes. Call (646) 392-7164.",
    images: [
      {
        url: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg",
        width: 1024,
        height: 683,
        alt: "A&E NYC Plumbing — Licensed NYC Plumbers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&E NYC Plumbing | Licensed Plumbers in Manhattan & All NYC Boroughs",
    description:
      "Licensed & insured NYC plumbers. Drain repair, gas lines, water heaters & more. Free quotes. Call (646) 392-7164.",
    images: ["https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "A&E NYC Plumbing",
  url: SITE_URL,
  telephone: "+16463927164",
  email: "support@topplumbernyc.com",
  image: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "40 Fulton St.",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10038",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7075,
    longitude: -74.0073,
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
