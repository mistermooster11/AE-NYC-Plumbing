import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing FAQs",
  description:
    "Common questions about A&E NYC Plumbing services — licensing, service area, free quotes, turnaround times, gas line work, and more. Licensed & insured NYC plumbers.",
  alternates: { canonical: "/general-faqs" },
};

export default function FAQsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
