"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

// [TODO: Replace all posts below with real blog content from A&E NYC Plumbing]
const posts = [
  {
    id: "post-1",
    title: "5 Signs Your Faucet Needs Replacing — Not Just Repairing",
    excerpt:
      "A dripping faucet isn't always a simple washer swap. Here's how to tell when your Manhattan faucet is past the point of a quick fix and needs a full replacement.",
    date: "May 2026",
    slug: "#",
  },
  {
    id: "post-2",
    title: "Why NYC Apartments Get More Water Pressure Problems — And What Causes Them",
    excerpt:
      "High-rise buildings in Manhattan face unique water pressure challenges. We break down the most common causes and when to call a licensed plumber.",
    date: "April 2026",
    slug: "#",
  },
  {
    id: "post-3",
    title: "Tankless vs. Tank Water Heaters: What Makes Sense for a NYC Apartment?",
    excerpt:
      "Limited utility closet space changes the calculus on water heater selection in New York City. Here's how to think through the decision for your home.",
    date: "March 2026",
    slug: "#",
  },
  {
    id: "post-4",
    title: "Gas Line Safety for NYC Homeowners: What You Should Know",
    excerpt:
      "Gas leaks are among the most serious home emergencies. This guide covers the warning signs, what to do immediately, and why licensed installation matters.",
    date: "February 2026",
    slug: "#",
  },
  {
    id: "post-5",
    title: "How to Find a Reliable Plumber in Manhattan (Without Getting Burned)",
    excerpt:
      "Not all plumbers in NYC are created equal. Here's what to look for — licensing, insurance, pricing transparency — and the questions to ask before you hire.",
    date: "January 2026",
    slug: "#",
  },
  {
    id: "post-6",
    title: "What to Do When Your Drain Backs Up in a NYC Apartment Building",
    excerpt:
      "Drain backups in multi-unit buildings can affect multiple apartments at once. Here's what to check first, when it's a building issue vs. a unit issue, and when to call.",
    date: "December 2025",
    slug: "#",
  },
];

export default function BlogPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Plumbing Tips & Resources"
        bgImage="https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"
        breadcrumbs={[{ label: "Blog" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">From the A&amp;E NYC Plumbing Team</div>
            <h1 className="h2">NYC Plumbing Tips &amp; Guides</h1>
            <p className="p2">
              Practical advice for New York City homeowners and building managers — from
              our licensed plumbing team.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "3rem",
              marginTop: "3rem",
            }}
            className="max-[700px]:grid-cols-1"
          >
            {posts.map((post, i) => (
              <div
                key={post.id}
                className={`fadeInUpS wow${vis}`}
                style={{
                  animationDelay: `${i * 0.08}s`,
                  borderBottom: "2px solid #101d2b",
                  paddingBottom: "2rem",
                }}
              >
                <p className="p3 ia-medium" style={{ marginBottom: "0.75rem" }}>
                  {post.date}
                </p>
                <h2 className="h4" style={{ marginBottom: "1rem" }}>
                  {post.title}
                </h2>
                <p className="p2 ia-dark">
                  {post.excerpt}
                </p>
                {/* [TODO: Link to actual post once published] */}
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
