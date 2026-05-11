import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Quote",
  description:
    "Contact A&E NYC Plumbing for a free quote or to schedule service. Call (646) 392-7164 or fill out our online form. Available Mon–Sun, 9am–9pm across all NYC boroughs.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
