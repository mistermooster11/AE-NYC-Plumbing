import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Toilet Repair & Replacement NYC | A&E NYC Plumbing",
  description:
    "Toilet repair and replacement in Manhattan and all NYC boroughs. Running toilets, blockages, valve replacements, full installations. Call (646) 392-7164.",
};

export default function ToiletRepairPage() {
  return (
    <>
      <PageHeroSection
        title="Toilet Repair & Replacement"
        subtitle="Running toilets, blockages, valve replacements, and full installations — handled fast and at upfront pricing across all NYC boroughs."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Toilet Repair & Replacement" },
        ]}
      />
      <ServiceDetailSection
        activeService="Toilet Repair & Replacement"
        sidebarImage="/images/service-toilet-repair.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Toilet Repair & Replacement in NYC"
        intro={[
          "A running toilet can waste thousands of gallons of water per month — and a blocked toilet in an NYC apartment or building is an immediate problem. A&E NYC Plumbing handles every toilet-related plumbing scenario from simple mechanism repairs to complete replacements.",
          "Our licensed technicians serve Manhattan and all five NYC boroughs with same-day availability and transparent pricing.",
        ]}
        whatWeDo={[
          "Running toilet repair — fill valves, flappers, flush mechanisms",
          "Toilet blockage and clog removal",
          "Full toilet replacement and installation",
          "Wax ring replacement and base re-seating",
          "Shut-off valve repair and replacement",
        ]}
        whyChooseUs={[
          "Same-day service for most toilet repairs",
          "Licensed & insured NYC plumbing contractors",
          "Upfront pricing — no surprise charges",
          "Available Monday–Sunday, 9am–9pm",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
