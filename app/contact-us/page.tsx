"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useWowAnimation } from "@/hooks/useWowAnimation";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "0px 0px -60px 0px" });
  const vis = sectionInView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">

      {/* ── Hero ── */}
      <CraftHero
        title="Contact Us"
        bgImage="https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      {/* ── Contact Form + Map ── */}
      <div ref={sectionRef} className={`content-block-flex flex-module fadeIn wow${vis}`}>
        <div className="inner inner--slim-1172">

          <h2
            className={`h3 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.1s", marginBottom: "0.5rem" }}
          >
            Schedule Service or Ask a Question
          </h2>
          <p
            className={`p2 fadeInUpS wow${vis}`}
            style={{ animationDelay: "0.15s", marginBottom: "2.5rem" }}
          >
            Fill out the form below or call us directly at{" "}
            <strong>(646) 392-7164</strong>. We follow up fast — usually
            within the hour. Available Mon–Sun, 9am–9pm.
          </p>

          {/* Two-column: form left, map right. Stacks on mobile. */}
          <div className="contact-layout-grid">

            {/* ── Form ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.2s" }}>
              {/* TODO: Replace with real form backend (Gravity Forms, JotForm, HubSpot, etc.) */}
              <form
                action="#"
                method="POST"
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <div className="form-row-2col">
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
                </div>

                <div className="form-row-2col">
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
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <label htmlFor="message" className="p3 ia-medium">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Describe the issue — what's happening and where?"
                    style={{ padding: "0.75rem 1rem", border: "1px solid #ccc", borderRadius: "4px", fontSize: "1.4rem", resize: "vertical" }}
                  />
                </div>

                <div>
                  <SubmitBtn />
                </div>
              </form>
            </div>

            {/* ── Map ── */}
            <div className={`fadeInUpS wow${vis}`} style={{ animationDelay: "0.3s" }}>
              <iframe
                title="A&E NYC Plumbing — Manhattan, NY"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3!2d-74.0073!3d40.7075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a21c0a7b8c3%3A0x1c0a1b2d3e4f5a6b!2s40%20Fulton%20St%2C%20New%20York%2C%20NY%2010038!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
                width="100%"
                height="340"
                style={{ border: 0, display: "block", borderRadius: "6px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p3 ia-medium" style={{ marginTop: "1.25rem", lineHeight: "1.7" }}>
                <strong>A&amp;E NYC Plumbing</strong><br />
                40 Fulton St., New York, NY 10038<br />
                <a href="tel:6463927164" style={{ color: "inherit" }}>(646) 392-7164</a><br />
                <a href="mailto:support@topplumbernyc.com" style={{ color: "inherit" }}>support@topplumbernyc.com</a><br />
                Mon–Sun: 9am–9pm
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .form-row-2col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 860px) {
          .contact-layout-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .form-row-2col {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

    </main>
  );
}
