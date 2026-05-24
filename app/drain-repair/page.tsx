import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Drain Repair & Unclogging NYC | A&E NYC Plumbing",
  description:
    "Professional drain repair and unclogging in Manhattan and all NYC boroughs. Slow drains, recurring backups, sewer line issues — fixed fast with upfront pricing. Call (646) 392-7164.",
};

export default function DrainRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Drain Repair & Unclogging"
        subtitle="Professional drain repair and unclogging for Manhattan and all NYC boroughs — upfront pricing, same-day service."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Drain Repair & Unclogging" },
        ]}
      />
      <ServiceDetailSection
        activeService="Drain Repair & Unclogging"
        sidebarImage="/images/service-drain-repair.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Drain Repair & Unclogging Services in NYC"
        intro={[
          "Slow drains and recurring backups are more than an inconvenience — they signal underlying pipe problems that worsen over time. A&E NYC Plumbing diagnoses the root cause and fixes it properly, not just temporarily.",
          "We serve residential and commercial clients across Manhattan and all five NYC boroughs with professional-grade equipment, licensed technicians, and transparent pricing.",
        ]}
        whatWeDo={[
          "Clearing clogged kitchen, bathroom, and floor drains",
          "Main sewer line diagnosis and repair",
          "Hydro-jetting for stubborn grease and debris buildup",
          "Camera inspection to locate blockages without guesswork",
          "Emergency drain repair for severe backups",
        ]}
        whyChooseUs={[
          "Licensed & insured NYC plumbing contractors",
          "Upfront pricing — no surprise invoices",
          "Same-day service across all NYC boroughs",
          "Available Monday–Sunday, 9am–9pm",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
