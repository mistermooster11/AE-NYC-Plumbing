import type { ReactNode } from "react";

export type ProgramItem = {
  title: string;
  content: ReactNode;
  learnMoreHref: string;
};

export type PartnerItem = {
  imgSrc: string;
  alt: string;
  href: string;
};

export type ProgramsPageData = {
  navItems: { href: string; label: string }[];
  hero: {
    title: string;
    bgImage: string;
    description: ReactNode;
    breadcrumbParentLabel: string;
    breadcrumbParentHref: string;
  };
  overview: {
    content: ReactNode;
    quickLinks: { label: string; href: string; icon: string }[];
  };
  programs: ProgramItem[];
  partners: PartnerItem[];
};

const programsData: ProgramsPageData = {
  navItems: [
    { href: "#overview",  label: "Overview"  },
    { href: "#services",  label: "Services"  },
    { href: "#contact",   label: "Contact"   },
  ],

  hero: {
    title: "Our Plumbing Services",
    bgImage: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Licensed-plumber-1024x683.jpg",
    description: (
      <p>
        A&amp;E NYC Plumbing provides a complete range of residential and commercial
        plumbing services throughout Manhattan and all NYC boroughs — handled by
        licensed, insured technicians with upfront pricing on every job.
      </p>
    ),
    breadcrumbParentLabel: "Home",
    breadcrumbParentHref: "/",
  },

  overview: {
    content: (
      <>
        <p>
          From a dripping faucet to a full building repipe — A&amp;E NYC Plumbing
          handles it all. Our team is licensed, insured, and available Monday through
          Sunday, 9am to 9pm. We offer free quotes and free onsite estimates for more
          complex jobs, so you always know the price before we start.
        </p>
        <p>
          Below is our full service offering. If you don&apos;t see your specific need
          listed, call us at (646) 392-7164 — we almost certainly cover it.
        </p>
      </>
    ),
    quickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164", icon: "icon-message" },
      { label: "Contact Us Online",   href: "/contact-us",    icon: "icon-mail"    },
      { label: "Service Areas",       href: "/service-areas", icon: "icon-info"    },
    ],
  },

  programs: [
    {
      title: "Drain Repair",
      content: (
        <p>
          Slow drains, recurring backups, and sewer line issues handled with
          professional-grade equipment. We diagnose the root cause and fix it — not
          just push the clog further down the pipe.
        </p>
      ),
      learnMoreHref: "/craft-catalog/drain-repair",
    },
    {
      title: "Faucets & Sinks",
      content: (
        <p>
          Faucet repair and installation for kitchens, bathrooms, and utility areas.
          A dripping faucet can waste thousands of gallons a year — we fix it fast
          with upfront pricing.
        </p>
      ),
      learnMoreHref: "/craft-catalog/faucets-and-sinks",
    },
    {
      title: "Leak Detection",
      content: (
        <p>
          Professional leak detection for hidden pipe leaks behind walls, under floors,
          and in ceilings. We locate the source accurately so we can fix it right —
          without unnecessary demolition.
        </p>
      ),
      learnMoreHref: "/craft-catalog/leak-detection",
    },
    {
      title: "Toilet Repair",
      content: (
        <p>
          Running toilets, blockages, valve replacements, and full toilet installations.
          From a simple mechanism repair to a complete replacement — we handle every
          toilet-related plumbing scenario.
        </p>
      ),
      learnMoreHref: "/craft-catalog/toilet-repair",
    },
    {
      title: "Shower & Tub",
      content: (
        <p>
          Shower and tub repairs, drain clearing, valve replacement, and full
          installations. Leaking shower connections cause building damage fast —
          our team responds quickly.
        </p>
      ),
      learnMoreHref: "/craft-catalog/shower-and-tub",
    },
    {
      title: "Water Heater Installation",
      content: (
        <p>
          Water heater repair and replacement for tank and tankless units. If
          your hot water is unreliable or your bills are climbing, we assess
          whether repair or replacement makes more sense — and give you the
          honest answer.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-heater-installation",
    },
    {
      title: "Gas Line Installation & Repair",
      content: (
        <p>
          Licensed gas line maintenance, repair, and installation. We handle
          everything from running a new line for an appliance to emergency
          leak response — with full NYC code compliance.
        </p>
      ),
      learnMoreHref: "/craft-catalog/gas-line-services",
    },
    {
      title: "Piping & Re-piping",
      content: (
        <p>
          Full repiping projects for aging buildings, targeted pipe repairs,
          and new pipe installation. Older NYC buildings with galvanized or
          lead pipes benefit most — eliminating recurring repair costs permanently.
        </p>
      ),
      learnMoreHref: "/craft-catalog/piping-and-repiping",
    },
    {
      title: "Water Line Repair & Installation",
      content: (
        <p>
          Water line break repair, replacement, and new installation. A failing
          water line causes serious building damage if caught late — we locate
          and repair it fast.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-line-services",
    },
    {
      title: "Water Pressure Repair",
      content: (
        <p>
          High or low water pressure diagnosis and correction. Unregulated high
          pressure stresses every pipe joint and appliance in your building.
          We calibrate the system and protect your plumbing infrastructure.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-pressure-repair",
    },
    {
      title: "Water Filter & Purification",
      content: (
        <p>
          Installation and service for all water filtration and purification
          systems — from under-sink units to whole-building solutions. Clean
          water, properly plumbed.
        </p>
      ),
      learnMoreHref: "/craft-catalog/water-filtration",
    },
    {
      title: "Kitchen & Bath Plumbing",
      content: (
        <p>
          Full kitchen and bath plumbing — supply lines, drain lines, fixture
          installation, and renovation-ready rough-in. We work independently
          or alongside your renovation contractor.
        </p>
      ),
      learnMoreHref: "/craft-catalog/kitchen-and-bath-plumbing",
    },
    {
      title: "Garbage Disposal",
      content: (
        <p>
          Garbage disposal repair and replacement. Whether the unit has stopped
          grinding, is leaking, or trips its reset repeatedly — we diagnose and
          fix it with proper drain connections.
        </p>
      ),
      learnMoreHref: "/craft-catalog/garbage-disposal",
    },
    {
      title: "Dishwasher Repair",
      content: (
        <p>
          Plumbing-related dishwasher repairs including drain line connections,
          supply line issues, and inlet valve failures. Many dishwasher problems
          are actually plumbing problems — we know the difference.
        </p>
      ),
      learnMoreHref: "/craft-catalog/dishwasher-repair",
    },
    {
      title: "Plumbing Fixtures",
      content: (
        <p>
          Repair and installation of all plumbing fixtures — valves, shutoffs,
          supply connections, and fittings. Properly installed fixtures last
          decades. We install them right the first time.
        </p>
      ),
      learnMoreHref: "/craft-catalog/plumbing-fixtures",
    },
    {
      title: "Residential Plumbing",
      content: (
        <p>
          Full-service residential plumbing for NYC apartments and homes.
          Emergency repairs, routine maintenance, system upgrades — licensed
          and insured, Mon–Sun 9am–9pm.
        </p>
      ),
      learnMoreHref: "/craft-catalog/residential-plumbing",
    },
  ],

  partners: [],
};

export { programsData };
export default programsData;
