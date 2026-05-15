"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";

const faqItems = [
  {
    id: "faq-1",
    question: "What areas do you serve?",
    answer:
      "A&E NYC Plumbing serves Manhattan and all five NYC boroughs — including Brooklyn, Queens, The Bronx, and Staten Island. If you're not sure we cover your neighborhood, just call us at (646) 392-7164 and we'll confirm right away.",
  },
  {
    id: "faq-2",
    question: "Do you offer free quotes?",
    answer:
      "Yes. We provide free quotes over the phone for most jobs, and free onsite estimates for more complex projects. You'll know the full price — parts and labor — before any work begins. We don't start without your approval.",
  },
  {
    id: "faq-3",
    question: "Are you licensed and insured?",
    answer:
      "Yes. A&E NYC Plumbing is fully licensed and insured. Our team handles all types of residential and commercial plumbing work in compliance with NYC codes and standards. Licensed plumbers on every job — no exceptions.",
  },
  {
    id: "faq-4",
    question: "What are your hours?",
    answer:
      "We're available Monday through Sunday, 9am to 9pm. Call us at (646) 392-7164 to schedule service or get a free quote.",
  },
  {
    id: "faq-5",
    question: "Do you handle commercial plumbing as well as residential?",
    answer:
      "Yes. We work in apartments, homes, multi-unit buildings, and commercial spaces across NYC. Our team is technically prepared to install or repair gas lines, water lines, heating systems, and all plumbing structures in both residential and commercial properties.",
  },
  {
    id: "faq-6",
    question: "How quickly can you come out?",
    answer:
      "We offer fast turnaround and work within your schedule. For most jobs, we can get someone out the same day or the next day. Call us directly at (646) 392-7164 and we'll give you an honest timeframe based on current availability.",
  },
  {
    id: "faq-7",
    question: "Can you handle gas line work?",
    answer:
      "Yes. Our licensed technicians handle gas line installation, repair, and maintenance. All gas work is performed in compliance with NYC safety standards and code requirements. If you smell gas or suspect a leak, call us immediately — gas issues are treated as emergencies.",
  },
  {
    id: "faq-8",
    question: "What should I do if I have a plumbing emergency?",
    answer:
      "Call us at (646) 392-7164. For gas leaks, turn off your gas supply valve if accessible and leave the building before calling. For water leaks, shut off the main water valve if you can locate it. We'll walk you through immediate steps over the phone and get a technician dispatched as quickly as possible.",
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Help Center</div>
            <h1 className="h2">Frequently Asked Questions</h1>
            <p className="p2">
              Answers to the most common questions about A&amp;E NYC Plumbing services,
              pricing, and coverage. Don&apos;t see your question?{" "}
              <a href="tel:6463927164" className="ia-link">Call us at (646) 392-7164</a>.
            </p>
          </div>

          <div className="content-block-in wide">
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {faqItems.map((item, i) => (
                <div
                  key={item.id}
                  className={`fadeInUpS wow${vis}`}
                  style={{
                    animationDelay: `${i * 0.06}s`,
                    borderBottom: "1px solid #e0e0e0",
                  }}
                >
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "2rem 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "1.5rem",
                    }}
                  >
                    <span className="p1" style={{ fontWeight: 600 }}>
                      {item.question}
                    </span>
                    <span
                      style={{
                        fontSize: "2rem",
                        color: "#50B6EA",
                        flexShrink: 0,
                        transform: openId === item.id ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                        lineHeight: 1,
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openId === item.id && (
                    <div className="content-entry p2 ia-dark" style={{ paddingBottom: "2rem" }}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* CTA strip */}
      <div className="flex-module ia-bg-sky" style={{ padding: "5rem 0" }}>
        <div className="inner inner--slim-1172" style={{ textAlign: "center" }}>
          <div className="sub-heading">Still Have Questions?</div>
          <h2 className="h3" style={{ marginBottom: "1.5rem" }}>
            Call Us — We&apos;re Here Mon–Sun, 9am–9pm
          </h2>
          <p className="p2" style={{ marginBottom: "2.5rem" }}>
            Our team is happy to answer any question over the phone and provide
            a free quote for your job.
          </p>
          <a href="tel:6463927164" className="ia-btn">
            <em className="ia-b ia-b-1" /><em className="ia-b ia-b-2" />
            <em className="ia-b ia-b-3" /><em className="ia-b ia-b-4" />
            <span>Call (646) 392-7164</span>
          </a>
        </div>
      </div>
    </main>
  );
}
