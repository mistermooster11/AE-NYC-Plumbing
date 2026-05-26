import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plumbing Tips & Resources",
  description:
    "NYC plumbing tips, guides, and resources from A&E NYC Plumbing — covering drain care, water heaters, gas lines, and how to handle common plumbing emergencies.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
