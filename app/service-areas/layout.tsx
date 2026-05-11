import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Areas — Manhattan, Brooklyn, Queens, The Bronx & Staten Island",
  description:
    "A&E NYC Plumbing serves all five NYC boroughs — Manhattan, Brooklyn, Queens, The Bronx, and Staten Island. Licensed plumbers available Mon–Sun, 9am–9pm.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
