import type { Metadata } from "next";
import "@/styles/homepage.css";
import "@/styles/inner-pages.css";
import PageHeroSection from "@/components/custom/page-hero/PageHeroSection";
import BlogSection from "@/components/custom/blog/BlogSection";
import NeedServicesSection from "@/components/custom/need-services/NeedServicesSection";

export const metadata: Metadata = {
  title: "Plumbing Tips & Resources | A&E NYC Plumbing",
  description:
    "NYC plumbing tips, guides, and resources from A&E NYC Plumbing — covering drain care, water heaters, gas lines, and how to handle common plumbing emergencies.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeroSection
        title="Plumbing Tips & Resources"
        subtitle="Practical advice for New York City homeowners and building managers — from our licensed plumbing team."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <BlogSection />
      <NeedServicesSection />
    </>
  );
}
