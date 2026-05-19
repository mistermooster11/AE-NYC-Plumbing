import { notFound } from "next/navigation";
import CraftHero       from "@/components/custom/craft-catalog/CraftHero";
import ChannelSidebar  from "@/components/custom/channel/ChannelSidebar";
import CraftOverview   from "@/components/custom/craft-catalog/CraftOverview";
import RelatedCrafts   from "@/components/custom/craft-catalog/RelatedCrafts";
import { servicePages } from "@/data/craft-catalog/service-pages";

/** Hero background image per service slug — sourced from topplumbernyc.com */
const SERVICE_BG: Record<string, string> = {
  "drain-repair":             "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Drain-Repair.jpg",
  "faucets-and-sinks":        "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Faucet-Repair.jpg",
  "leak-detection":           "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Leak-Detection.jpg",
  "toilet-repair":            "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Toilet.png",
  "shower-and-tub":           "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Shower-and-Tub.png",
  "water-heater-installation":"https://www.topplumbernyc.com/wp-content/uploads/2025/06/Hot-Water-Heaters-Installations.jpg",
  "gas-line-services":        "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Gas-Line-Repair.jpg",
  "piping-and-repiping":      "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Piping-and-Repiping.jpg",
  "water-line-services":      "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Water-Lines.png",
  "water-pressure-repair":    "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Water-Pressure.png",
  "water-filtration":         "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Water-filter-Purification.png",
  "kitchen-and-bath-plumbing":"https://www.topplumbernyc.com/wp-content/uploads/2025/06/Kitchen-Bath-Installation-Services.jpg",
  "garbage-disposal":         "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Garbage-Disposal.jpg",
  "dishwasher-repair":        "https://www.topplumbernyc.com/wp-content/uploads/2025/06/DIshwasher-repair.png",
  "plumbing-fixtures":        "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Plumbing-Fixture.jpg",
  "residential-plumbing":     "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Residential-Plumbing.jpg",
};
const FALLBACK_BG = "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg";

/* Pre-render all known service slugs at build time */
export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) return {};
  return {
    title: `${data.title} — A&E NYC Plumbing`,
    description: `Professional ${data.title.toLowerCase()} service in Brooklyn, Queens, and Nassau County. Upfront pricing, same-day scheduling, guaranteed results.`,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = servicePages[slug];
  if (!data) notFound();

  return (
    <main className="pt-76 max-[1150px]:pt-[6.2rem]">
      <CraftHero
        title={data.title}
        bgImage={SERVICE_BG[slug] ?? FALLBACK_BG}
        breadcrumbs={[
          { label: "Services", href: "/craft-catalog" },
          { label: data.title },
        ]}
      />

      <div className="channel-wrap">
        <div className="inner">
          <ChannelSidebar navItems={data.navItems} />

          <div className="channel-container">

            {/* ── Overview ─────────────────────────────────────────────── */}
            <div id="overview">
              <CraftOverview
                overviewContent={data.overviewContent}
                quickLinks={data.overviewQuickLinks}
              />
            </div>

            {/* ── Middle sections ──────────────────────────────────────── */}
            {data.sections.map((section) => (
              <div key={section.id} id={section.id} className="section-page">
                <div className="content-block">
                  <div className="inner inner--slim-1172 cleared">
                    <h2 className="h3 fadeInUpS wow is-visible">
                      {section.heading}
                    </h2>
                    <div className="cleared">
                      <div className="content-entry p2 fadeInUpS wow is-visible">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* ── CTA banner ───────────────────────────────────────────── */}
            <div className="banner-craft ia-bg-sky fadeInUp wow is-visible">
              <div className="inner">
                <div className="content-entry p3">
                  <p>
                    <strong>Ready to book?</strong>{" "}
                    Call{" "}
                    <a href="tel:6463927164">(646) 392-7164</a>{" "}
                    for same-day scheduling, or{" "}
                    <a href="/contact-us">send us a message online</a>.
                    We give you a price before we start — no surprises.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Related Services ─────────────────────────────────────── */}
            <div id="related_services">
            <RelatedCrafts
              description={
                <p>
                  A&E NYC Plumbing handles every type of drain and sewer problem
                  across Brooklyn, Queens, and Nassau County. Explore our other
                  services below.
                </p>
              }
              crafts={data.relatedServices}
            />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
