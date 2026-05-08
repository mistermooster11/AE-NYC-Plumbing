"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

/* ── Service Area Data ───────────────────────────────────────── */

const serviceAreas = [
  {
    region: "Manhattan",
    description:
      "Our home base. We serve all Manhattan neighborhoods — from the Upper West Side and Harlem to Midtown, Chelsea, the Village, and Lower Manhattan. Pre-war buildings, co-ops, condos, and commercial spaces.",
    neighborhoods:
      "Upper West Side • Upper East Side • Harlem • East Harlem • Washington Heights • Inwood • Morningside Heights • Hamilton Heights • Midtown • Hell's Kitchen • Murray Hill • Gramercy • Chelsea • Greenwich Village • West Village • SoHo • Tribeca • Lower East Side • Financial District • and more",
  },
  {
    region: "Brooklyn",
    description:
      "We serve all Brooklyn neighborhoods — from dense brownstone blocks in Park Slope and Bed-Stuy to waterfront buildings in DUMBO and Red Hook, and residential streets throughout South Brooklyn.",
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Gowanus • Carroll Gardens • Red Hook • DUMBO • Downtown Brooklyn • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • Flatbush • East Flatbush • Canarsie • and more",
  },
  {
    region: "Queens",
    description:
      "Queens has one of the most diverse housing stocks in NYC — from attached single-family homes in Bayside and Forest Hills to large apartment buildings in Astoria and Flushing. Our licensed plumbers serve them all.",
    neighborhoods:
      "Astoria • Long Island City • Maspeth • Sunnyside • Woodside • Jackson Heights • Elmhurst • Flushing • Whitestone • Bayside • Forest Hills • Rego Park • Jamaica • South Ozone Park • Ozone Park • Howard Beach • Middle Village • Ridgewood • Glendale • Kew Gardens • and more",
  },
  {
    region: "The Bronx",
    description:
      "We cover all Bronx neighborhoods for residential and commercial plumbing work — from large apartment buildings in the South Bronx to single-family homes in Riverdale and Pelham Bay.",
    neighborhoods:
      "South Bronx • Mott Haven • Hunts Point • Fordham • Tremont • Belmont • Riverdale • Kingsbridge • Norwood • Woodlawn • Pelham Bay • Co-op City • Throggs Neck • Morris Park • Soundview • and more",
  },
  {
    region: "Staten Island",
    description:
      "We serve Staten Island for all residential and commercial plumbing needs — including the North Shore, Mid-Island, and South Shore neighborhoods.",
    neighborhoods:
      "St. George • Stapleton • Tompkinsville • Clifton • Rosebank • New Brighton • West Brighton • Port Richmond • Mariners Harbor • New Springville • Willowbrook • Tottenville • Great Kills • Eltingville • Annadale • and more",
  },
];

/* ── Stacked area section ────────────────────────────────────── */

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof serviceAreas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "2.5rem",
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <h3 className="h4 ia-margin-1">{area.region}</h3>
      <p className="p2 ia-dark" style={{ marginBottom: "0.75rem" }}>
        {area.description}
      </p>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

/* ── Styled submit button ── */

function SubmitBtn() {
  const btnRef = useWowAnimation<HTMLButtonElement>("contact-submit-btn", true);
  return (
    <button
      ref={btnRef}
      type="submit"
      className="ia-btn wow"
      style={{ cursor: "pointer", fontFamily: "inherit" }}
    >
      <em className="ia-b ia-b-1" />
      <em className="ia-b ia-b-2" />
      <em className="ia-b ia-b-3" />
      <em className="ia-b ia-b-4" />
      <span>Send Message</span>
    </button>
  );
}

/* ── Page ────────────────────────────────────────────────────── */

export default function ContactPage() {
  const formRef  = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const mapRef   = useRef<HTMLDivElement>(null);

  const formInView  = useInView(formRef,  { once: true, margin: "0px 0px -60px 0px" });
  const areasInView = useInView(areasRef, { once: true, margin: "0px 0px -60px 0px" });
  const mapInView   = useInView(mapRef,   { once: true, margin: "0px 0px -60px 0px" });

  const formVis  = formInView  ? " is-visible" : "";
  const areasVis = areasInView ? " is-visible" : "";
  const mapVis   = mapInView   ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form ── */}
      <div ref={formRef} className={`content-block-flex flex-module fadeIn wow${formVis}`}>
        <div className="inner inner--slim-1172">
          <div className="content-block-head wide">
            <h2
              id="getstarted"
              className={`h3 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.1s" }}
            >
              Schedule Service or Ask a Question
            </h2>
            <p
              className={`p2 fadeInUpS wow${formVis}`}
              style={{ animationDelay: "0.15s" }}
            >
              Fill out the form below or call us directly at{" "}
              <strong>(646) 392-7164</strong>. We follow up fast — usually
              within the hour. Available Mon–Sun, 9am–9pm.
            </p>
          </div>

          <div className="content-block-in wide">
            <div className="content-block-text content-entry p2 full-width">
              {/*
                TODO: Replace this form with A&E NYC Plumbing's preferred form solution
                (Gravity Forms, JotForm, HubSpot, etc.).
              */}
              <form
                action="#"
                method="POST"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  maxWidth: "680px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="name" className="p3 ia-medium">Name *</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your full name"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="phone" className="p3 ia-medium">Phone *</label>
                  <input
                    id="phone" name="phone" type="tel" required
                    placeholder="(555) 000-0000"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="email" className="p3 ia-medium">Email</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem" }}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="service" className="p3 ia-medium">Service Needed</label>
                  <select
                    id="service" name="service"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", background: "white" }}
                  >
                    <option value="">Select a service…</option>
                    <option>Drain Repair</option>
                    <option>Faucets &amp; Sinks</option>
                    <option>Leak Detection</option>
                    <option>Toilet Repair</option>
                    <option>Shower &amp; Tub</option>
                    <option>Water Heater Installation</option>
                    <option>Gas Line Services</option>
                    <option>Piping &amp; Re-piping</option>
                    <option>Water Line Repair &amp; Installation</option>
                    <option>Water Pressure Repair</option>
                    <option>Water Filter &amp; Purification</option>
                    <option>Kitchen &amp; Bath Plumbing</option>
                    <option>Garbage Disposal</option>
                    <option>Dishwasher Repair</option>
                    <option>Plumbing Fixtures</option>
                    <option>Residential Plumbing</option>
                    <option>Not Sure / Other</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", gridColumn: "1 / -1" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Describe the issue — what's happening and where?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1" }}>
                  <SubmitBtn />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Areas ── */}
      <div ref={areasRef} className={`content-block-flex flex-module fadeIn wow${areasVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Service Areas
          </h2>
          <div
            className={`content-entry fadeInUpS wow${areasVis}`}
            style={{ animationDelay: "0.2s", marginBottom: "3rem" }}
          >
            <p>
              We cover all five NYC boroughs. If you&apos;re not sure whether we serve
              your specific neighborhood, call us — we almost certainly do.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {serviceAreas.map((area, i) => (
              <AreaSection key={area.region} area={area} index={i} vis={areasVis} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Google Map ── */}
      <div ref={mapRef} className={`flex-module fadeIn wow${mapVis}`}>
        <div className="inner inner--slim-1172">
          <h2
            className={`h3 ia-margin-2 fadeInUpS wow${mapVis}`}
            style={{ animationDelay: "0.1s" }}
          >
            Our Service Area
          </h2>
          <div className={`fadeInUpS wow${mapVis}`} style={{ animationDelay: "0.2s" }}>
            {/* [TODO: Replace with Google Maps embed centered on A&E NYC Plumbing service area or business address] */}
            <iframe
              title="A&E NYC Plumbing Service Area — Manhattan and All NYC Boroughs"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d96922.64072865752!2d-74.00594200000001!3d40.7127281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0, display: "block", borderRadius: "4px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

    </main>
  );
}
