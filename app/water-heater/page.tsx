import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Water Heater Installation & Repair NYC | A&E NYC Plumbing",
  description:
    "Water heater installation, repair, and replacement in Manhattan and all NYC boroughs. Tank and tankless units. Free estimates. Call (646) 392-7164.",
};

export default function WaterHeaterPage() {
  return (
    <>
      <PageHeroSection
        title="Water Heater Installation"
        subtitle="Water heater installation, repair, and replacement for tank and tankless units across Manhattan and all NYC boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Water Heater Installation" },
        ]}
      />
      <ServiceDetailSection
        activeService="Water Heater Installation"
        sidebarImage="/images/service-water-heater.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Water Heater Installation & Repair in NYC"
        intro={[
          "Unreliable hot water or a failing water heater is a major disruption — especially in NYC apartments and multi-unit buildings. A&E NYC Plumbing assesses whether repair or replacement makes more sense and gives you the honest answer.",
          "We install and service all major tank and tankless water heater brands, with licensed technicians and code-compliant work throughout Manhattan and all five boroughs.",
        ]}
        whatWeDo={[
          "Tank and tankless water heater installation",
          "Water heater repair — elements, thermostats, valves",
          "Old unit removal and disposal",
          "Gas and electric water heater service",
          "Assessment and recommendation: repair vs. replace",
        ]}
        whyChooseUs={[
          "Honest assessment — we tell you what you actually need",
          "Licensed & insured for gas and electric water heater work",
          "Free estimates with no hidden fees",
          "Available 7 days a week, 9am–9pm across all NYC boroughs",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
