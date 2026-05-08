"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import CraftHero from "@/components/custom/craft-catalog/CraftHero";

const areas = [
  {
    slug: "manhattan",
    region: "Manhattan",
    headline: "Licensed Plumbing Services in Manhattan, NYC",
    description:
      "Manhattan is our home base. We serve all Manhattan neighborhoods — from pre-war co-ops on the Upper West Side to modern high-rises in Midtown and townhouses in the Village. Our licensed plumbers know Manhattan's building stock: the old cast-iron pipes, the tight utility access, and the unique challenges of dense urban plumbing.",
    callouts: [
      "Pre-war and post-war apartment buildings",
      "Co-ops, condos, and townhouses",
      "Commercial spaces and restaurants",
      "Emergency response for burst pipes and gas leaks",
    ],
    neighborhoods:
      "Upper West Side • Upper East Side • Harlem • East Harlem • Washington Heights • Inwood • Morningside Heights • Hamilton Heights • Midtown East • Midtown West • Hell's Kitchen • Murray Hill • Kips Bay • Gramercy • Flatiron • Chelsea • Greenwich Village • West Village • SoHo • Tribeca • NoHo • Nolita • Lower East Side • Chinatown • Financial District • Battery Park City • and more",
  },
  {
    slug: "brooklyn",
    region: "Brooklyn",
    headline: "Licensed Plumbing Services in Brooklyn, NYC",
    description:
      "Brooklyn has one of the most varied housing stocks in New York — brownstones, row houses, multi-family walk-ups, and new construction all present different plumbing challenges. Our team handles all of them across every Brooklyn neighborhood, from Williamsburg to Bay Ridge.",
    callouts: [
      "Brownstone and row house plumbing",
      "Multi-family building drain and sewer work",
      "Gas line installation and repair",
      "Water heater and fixture installation",
    ],
    neighborhoods:
      "Williamsburg • Greenpoint • Bushwick • Bed-Stuy • Crown Heights • Park Slope • Gowanus • Carroll Gardens • Red Hook • Cobble Hill • Boerum Hill • DUMBO • Brooklyn Heights • Downtown Brooklyn • Sunset Park • Bay Ridge • Bensonhurst • Dyker Heights • Gravesend • Sheepshead Bay • Coney Island • Brighton Beach • Flatbush • East Flatbush • East New York • Canarsie • Mill Basin • and more",
  },
  {
    slug: "queens",
    region: "Queens",
    headline: "Licensed Plumbing Services in Queens, NYC",
    description:
      "Queens is the most ethnically diverse borough in the city — and its housing stock is just as varied: detached homes, attached row houses, large apartment complexes, and everything in between. Our licensed plumbers serve all Queens neighborhoods for residential and commercial plumbing.",
    callouts: [
      "Single-family and attached home plumbing",
      "Large apartment building service",
      "Faucet, drain, and fixture repair",
      "Water heater and gas line work",
    ],
    neighborhoods:
      "Astoria • Long Island City • Sunnyside • Woodside • Jackson Heights • Elmhurst • Corona • Flushing • Whitestone • Bayside • Oakland Gardens • Forest Hills • Rego Park • Kew Gardens • Jamaica • South Ozone Park • Ozone Park • Howard Beach • Richmond Hill • Glendale • Middle Village • Ridgewood • Maspeth • Woodhaven • Far Rockaway • and more",
  },
  {
    slug: "the-bronx",
    region: "The Bronx",
    headline: "Licensed Plumbing Services in The Bronx, NYC",
    description:
      "The Bronx has a mix of large apartment buildings, single-family homes, and commercial properties — all of which our licensed team serves. Whether it's a residential plumbing repair in Riverdale or a multi-unit building drain issue in the South Bronx, we respond fast.",
    callouts: [
      "Large residential and commercial buildings",
      "Single-family and row house plumbing",
      "Drain, sewer, and water line repair",
      "Piping and repiping for older buildings",
    ],
    neighborhoods:
      "South Bronx • Mott Haven • Hunts Point • Port Morris • Longwood • Morrisania • Fordham • Tremont • Belmont • Kingsbridge • Riverdale • Spuyten Duyvil • Norwood • Woodlawn • Wakefield • Pelham Bay • Co-op City • Throggs Neck • Morris Park • Parkchester • Soundview • Castle Hill • and more",
  },
  {
    slug: "staten-island",
    region: "Staten Island",
    headline: "Licensed Plumbing Services in Staten Island, NYC",
    description:
      "Staten Island has a large proportion of single-family and two-family homes — along with apartment buildings and commercial properties. Our licensed plumbers serve all Staten Island neighborhoods for the full range of residential and commercial plumbing needs.",
    callouts: [
      "Single-family and two-family home plumbing",
      "Water heater and gas line service",
      "Drain and sewer repair",
      "Kitchen and bath plumbing",
    ],
    neighborhoods:
      "St. George • Stapleton • Tompkinsville • Clifton • Rosebank • Mariners Harbor • Port Richmond • West Brighton • New Brighton • Willowbrook • New Springville • Tottenville • Great Kills • Eltingville • Annadale • Rossville • Woodrow • Charleston • Richmond Valley • and more",
  },
];

function AreaSection({
  area,
  index,
  vis,
}: {
  area: (typeof areas)[number];
  index: number;
  vis: string;
}) {
  return (
    <div
      id={area.slug}
      className={`fadeInUpS wow${vis}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        paddingBottom: "3.5rem",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <h2 className="h3 ia-margin-1">{area.headline}</h2>
      <p className="p2 ia-dark" style={{ marginBottom: "1.5rem" }}>
        {area.description}
      </p>
      <ul style={{ marginBottom: "1.5rem", paddingLeft: "1.5rem" }}>
        {area.callouts.map((c) => (
          <li key={c} className="p2 ia-dark" style={{ marginBottom: "0.5rem" }}>
            {c}
          </li>
        ))}
      </ul>
      <p className="p3 ia-medium">{area.neighborhoods}</p>
    </div>
  );
}

export default function ServiceAreasPage() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const vis = inView ? " is-visible" : "";

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title="Service Areas"
        bgImage="https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg"
        breadcrumbs={[{ label: "Service Areas" }]}
      />

      <div ref={ref} className="content-block-flex flex-module">
        <div className="inner inner--slim-1172">

          <div className={`content-block-head wide fadeInUpS wow${vis}`}>
            <div className="sub-heading">Where We Work</div>
            <h1 className="h2">Licensed NYC Plumbing — All Five Boroughs</h1>
            <p className="p2">
              A&amp;E NYC Plumbing serves Manhattan and all NYC boroughs for residential
              and commercial plumbing. Licensed, insured, and available Mon–Sun 9am–9pm.
              Call <a href="tel:6463927164" className="ia-link">(646) 392-7164</a> to schedule.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
            {areas.map((area, i) => (
              <AreaSection key={area.slug} area={area} index={i} vis={vis} />
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
