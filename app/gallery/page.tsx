"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const galleryItems = [
  {
    label: "Drain Repair — Manhattan Apartment",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with real A&E NYC Plumbing drain repair job photo]
  },
  {
    label: "Water Heater Installation — NYC Residential",
    image: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with real A&E NYC Plumbing water heater photo]
  },
  {
    label: "Faucet & Sink Repair — Manhattan Kitchen",
    image: "/images/IMG_9688-1024x682.jpg",
    // [TODO: Replace with real A&E NYC Plumbing faucet repair photo]
  },
  {
    label: "Gas Line Installation — NYC Building",
    image: "/images/IMG_9750-1024x683.jpg",
    // [TODO: Replace with real A&E NYC Plumbing gas line photo]
  },
];

export default function GalleryPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Our Work"
        bgImage="https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"
        breadcrumbs={[{ label: "Gallery" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">
          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Job Gallery</div>
            <h1 className="h2">Plumbing Work Across NYC</h1>
            <p className="p2">
              A sample of plumbing jobs completed by A&amp;E NYC Plumbing throughout
              Manhattan and NYC. From routine repairs to full installations — every
              job is handled by licensed technicians with upfront pricing.
            </p>
          </div>

          {/* 2-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "2rem",
              marginTop: "3rem",
            }}
            className="max-[600px]:grid-cols-1"
          >
            {galleryItems.map((item, i) => (
              <div
                key={item.label}
                className={`fadeInUpS wow${vis}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  style={{
                    aspectRatio: "4/3",
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundColor: "#101d2b",
                    borderRadius: "4px",
                    marginBottom: "1rem",
                  }}
                />
                <p className="p3 ia-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div
            className={`fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.4s", marginTop: "4rem", textAlign: "center" }}
          >
            <p className="p2" style={{ marginBottom: "2rem" }}>
              Want to see more of our work? Call us at{" "}
              <a href="tel:6463927164" className="ia-link">(646) 392-7164</a> — we&apos;re
              happy to discuss your project and what we&apos;ve done for similar jobs.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
