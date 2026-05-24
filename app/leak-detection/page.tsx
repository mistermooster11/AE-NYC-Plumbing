import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Leak Detection & Repair NYC | A&E NYC Plumbing",
  description:
    "Expert leak detection and pipe repair in Manhattan and all NYC boroughs. Hidden leaks behind walls, under floors, and in ceilings found and fixed fast. Call (646) 392-7164.",
};

export default function LeakDetectionPage() {
  return (
    <>
      <PageHeroSection
        title="Leak Detection & Repair"
        subtitle="Professional leak detection for hidden pipe leaks throughout Manhattan and all NYC boroughs — accurate diagnosis, minimal disruption."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Leak Detection & Repair" },
        ]}
      />
      <ServiceDetailSection
        activeService="Leak Detection & Repair"
        sidebarImage="/images/service-leak-detection.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Leak Detection & Pipe Repair in NYC"
        intro={[
          "Hidden leaks cause serious structural damage in NYC buildings — water stains, mold, and weakened walls often appear long after the leak began. A&E NYC Plumbing locates the source accurately so we can fix it right, without unnecessary demolition.",
          "Our licensed technicians use professional detection equipment to pinpoint leaks behind walls, under floors, and in ceilings across Manhattan and all five boroughs.",
        ]}
        whatWeDo={[
          "Hidden pipe leak detection behind walls, ceilings, and floors",
          "Water line leak location and repair",
          "Slab leak diagnosis and remediation",
          "Pipe repair and replacement once leak is confirmed",
          "Post-repair inspection to verify full resolution",
        ]}
        whyChooseUs={[
          "Accurate detection — minimal demolition",
          "Licensed & insured NYC plumbers",
          "Upfront pricing before work starts",
          "Serving all five NYC boroughs, Mon–Sun 9am–9pm",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
