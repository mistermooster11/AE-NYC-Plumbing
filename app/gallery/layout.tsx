import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "See A&E NYC Plumbing's work — before and after photos of drain repairs, water heater installations, gas line jobs, and more across Manhattan and NYC.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
