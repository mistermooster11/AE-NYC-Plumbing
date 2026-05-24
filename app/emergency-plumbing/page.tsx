import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import ServiceDetailSection from "@/components/custom/service-detail/ServiceDetailSection";
import TestimonialsSection from "@/components/custom/testimonials/TestimonialsSection";
import AboutSection from "@/components/custom/about/AboutSection";
import CTAFormSection from "@/components/custom/cta/CTAFormSection";

export const metadata: Metadata = {
  title: "Emergency Plumbing NYC | A&E NYC Plumbing",
  description:
    "Emergency plumbing service in Manhattan and all NYC boroughs. Burst pipes, severe backups, gas line issues — fast response, Mon–Sun 9am–9pm. Call (646) 392-7164.",
};

export default function EmergencyPlumbingPage() {
  return (
    <>
      <PageHeroSection
        title="Emergency Plumbing"
        subtitle="Fast emergency plumbing response across Manhattan and all NYC boroughs — available Monday through Sunday, 9am to 9pm."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services-page" },
          { label: "Emergency Plumbing" },
        ]}
      />
      <ServiceDetailSection
        activeService="Emergency Plumbing"
        sidebarImage="/images/service-emergency-plumbing.jpg"
        sidebarImageWidth={535}
        sidebarImageHeight={643}
        heading="Emergency Plumbing Service in NYC"
        intro={[
          "Plumbing emergencies can cause thousands of dollars in building damage within hours. A&E NYC Plumbing provides fast emergency response across Manhattan and all five NYC boroughs — with licensed technicians ready to act Monday through Sunday, 9am to 9pm.",
          "Call (646) 392-7164 for same-day emergency service. We'll tell you exactly when we can be there.",
        ]}
        whatWeDo={[
          "Burst pipe emergency repair and water shutoff",
          "Severe drain backup and sewer overflow response",
          "Gas line leak detection and emergency service",
          "Flood mitigation and pipe isolation",
          "Water heater failure emergency replacement",
        ]}
        whyChooseUs={[
          "Fast response — same-day emergency service",
          "Licensed & insured for all emergency plumbing",
          "Available Mon–Sun, 9am–9pm across all NYC boroughs",
          "Upfront pricing even on emergency calls",
        ]}
      />
      <CTAFormSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
}
