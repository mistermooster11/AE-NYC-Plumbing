import type { ReactNode } from "react";

export type ServiceNavItem = { href: string; label: string };

export type ServicePageData = {
  title: string;
  bgColor: string;
  navItems: ServiceNavItem[];
  overviewContent: ReactNode;
  overviewQuickLinks: { label: string; href: string }[];
  sections: { id: string; heading: string; content: ReactNode }[];
  relatedServices: { label: string; href: string }[];
};

export const servicePages: Record<string, ServicePageData> = {

  "drain-repair": {
    title: "Drain Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Drain problems are one of the most common plumbing calls in Manhattan
          and across NYC. Whether it&apos;s a slow kitchen sink, a completely blocked
          bathroom drain, or a sewer line backup affecting the whole building —
          A&amp;E NYC Plumbing has the tools and experience to diagnose and fix
          it fast.
        </p>
        <p>
          Our licensed technicians perform sewer line repair and drain clearing
          for all types of drain issues in residential and commercial buildings
          throughout New York City.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Drain Repair?",
        content: (
          <>
            <p>
              Slow drains, recurring backups, gurgling sounds from multiple
              fixtures, or sewage odors are all signs your drainage system
              needs attention. These issues rarely resolve on their own.
            </p>
            <p>
              If multiple drains in your home or building are slow or backing
              up simultaneously, the problem is likely in the main sewer line
              and requires professional equipment to properly diagnose and clear.
            </p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess the drain issue and identify the right approach.</p>
            <p><strong>Step 2 — Free Quote.</strong> We give you a clear price before any work begins. No hidden fees.</p>
            <p><strong>Step 3 — Clear &amp; Repair.</strong> Our technicians use professional-grade equipment to fully clear the blockage.</p>
            <p><strong>Step 4 — Confirm &amp; Clean Up.</strong> We test the drain before leaving and clean up the work area completely.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Leak Detection",       href: "/craft-catalog/leak-detection"       },
      { label: "Piping & Re-piping",   href: "/craft-catalog/piping-and-repiping"  },
      { label: "Water Line Services",  href: "/craft-catalog/water-line-services"  },
      { label: "Residential Plumbing", href: "/craft-catalog/residential-plumbing" },
    ],
  },

  "faucets-and-sinks": {
    title: "Faucets & Sinks",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A damaged or malfunctioning faucet can translate into extremely high
          water bills. A&amp;E NYC Plumbing repairs and installs all types of
          faucets and sinks for kitchens, bathrooms, and utility areas throughout
          Manhattan and NYC.
        </p>
        <p>
          From a simple washer replacement to a full kitchen faucet installation,
          we get it done right the first time with licensed technicians and upfront pricing.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Faucet or Sink Service?",
        content: (
          <>
            <p>Dripping faucets, low water pressure at a specific fixture, a faucet handle that won&apos;t shut off, or a sink that drains slowly are all reasons to call.</p>
            <p>Ignoring a dripping faucet can waste thousands of gallons of water per year and significantly inflate your water bill. A fast repair pays for itself quickly.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess the faucet or sink and confirm what&apos;s needed — repair or replacement.</p>
            <p><strong>Step 2 — Free Quote.</strong> Price confirmed before any work starts.</p>
            <p><strong>Step 3 — Repair or Install.</strong> We handle the full job including testing for leaks.</p>
            <p><strong>Step 4 — Clean Up.</strong> We leave your sink in better shape than we found it.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Kitchen & Bath Plumbing", href: "/craft-catalog/kitchen-and-bath-plumbing" },
      { label: "Plumbing Fixtures",       href: "/craft-catalog/plumbing-fixtures"         },
      { label: "Drain Repair",            href: "/craft-catalog/drain-repair"              },
      { label: "Leak Detection",          href: "/craft-catalog/leak-detection"            },
    ],
  },

  "leak-detection": {
    title: "Leak Detection",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A water leak you can&apos;t see can cause serious structural damage and
          sky-high utility bills before you even know it exists. A&amp;E NYC Plumbing
          provides professional leak detection throughout Manhattan and NYC.
        </p>
        <p>
          Detecting the leak is the first and most essential step to fixing it.
          Our licensed technicians identify hidden leaks in pipes, walls, and under floors.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs You Have a Hidden Leak",
        content: (
          <>
            <p>Unexplained increases in your water bill, water stains on walls or ceilings, the sound of running water when nothing is on, or mold in unexpected areas are signs of a hidden leak.</p>
            <p>In NYC apartment buildings, a leak in one unit can damage multiple floors below. Early detection protects your space and limits your liability.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess visible signs and use professional methods to pinpoint the source.</p>
            <p><strong>Step 2 — Free Quote.</strong> Once we know the cause, we give you a clear quote for the repair.</p>
            <p><strong>Step 3 — Repair.</strong> We make the repair using quality materials that hold up long term.</p>
            <p><strong>Step 4 — Verify &amp; Clean Up.</strong> We confirm the leak is resolved before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Drain Repair",          href: "/craft-catalog/drain-repair"         },
      { label: "Water Line Services",   href: "/craft-catalog/water-line-services"  },
      { label: "Piping & Re-piping",    href: "/craft-catalog/piping-and-repiping"  },
      { label: "Water Pressure Repair", href: "/craft-catalog/water-pressure-repair"},
    ],
  },

  "toilet-repair": {
    title: "Toilet Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          From a running toilet wasting water to a complete blockage — A&amp;E NYC
          Plumbing handles all toilet repair and installation throughout Manhattan
          and New York City.
        </p>
        <p>
          Our service covers everything from internal mechanism repair and pipe
          maintenance to full toilet replacement when needed.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Toilet Service?",
        content: (
          <>
            <p>A constantly running toilet can waste hundreds of gallons per day. Other issues include slow flushing, leaking at the base, unusual sounds, or a toilet that won&apos;t flush.</p>
            <p>Toilet backups in multi-story buildings can also indicate a blocked sewer line — especially if multiple units are affected.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We identify whether the issue is with the mechanism, wax seal, supply line, or a deeper drain problem.</p>
            <p><strong>Step 2 — Free Quote.</strong> You get the price upfront before any work begins.</p>
            <p><strong>Step 3 — Repair or Replace.</strong> We fix or recommend replacement if the toilet is beyond repair.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We test before leaving and clean up completely.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Drain Repair",      href: "/craft-catalog/drain-repair"    },
      { label: "Plumbing Fixtures", href: "/craft-catalog/plumbing-fixtures"},
      { label: "Leak Detection",    href: "/craft-catalog/leak-detection"   },
      { label: "Shower & Tub",      href: "/craft-catalog/shower-and-tub"  },
    ],
  },

  "shower-and-tub": {
    title: "Shower & Tub",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing handles shower repairs, tub installations, fixture
          upgrades, and drain clearing for bathrooms throughout Manhattan and NYC.
        </p>
        <p>
          Whether you have a slow draining tub, a leaking shower valve, or need
          a full tub installation — our licensed technicians are ready to help.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Shower or Tub Service?",
        content: (
          <>
            <p>A slow-draining tub, a shower that pools water, a valve that drips, inconsistent water temperature, or low showerhead pressure are all reasons to call.</p>
            <p>Leaking shower valves cause water damage to floors and ceilings in apartments below — in NYC buildings, early attention is critical.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We identify the issue — drain, valve, supply line, or fixture.</p>
            <p><strong>Step 2 — Free Quote.</strong> Clear price before any work begins.</p>
            <p><strong>Step 3 — Repair or Install.</strong> We handle the repair or installation with quality materials.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We run the shower or tub to confirm everything works before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Toilet Repair",           href: "/craft-catalog/toilet-repair"            },
      { label: "Faucets & Sinks",         href: "/craft-catalog/faucets-and-sinks"        },
      { label: "Kitchen & Bath Plumbing", href: "/craft-catalog/kitchen-and-bath-plumbing" },
      { label: "Leak Detection",          href: "/craft-catalog/leak-detection"            },
    ],
  },

  "water-heater-installation": {
    title: "Water Heater Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing provides water heater repair and new installation
          services throughout Manhattan and New York City — including tankless
          water heater installations.
        </p>
        <p>
          Our licensed technicians handle all water heater brands and types,
          ensuring safe installation with proper connections and code compliance.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "Signs Your Water Heater Needs Service",
        content: (
          <>
            <p>Running out of hot water faster than usual, inconsistent temperature, rumbling sounds from the tank, rusty hot water, or visible corrosion are all signs of a problem.</p>
            <p>Most tank water heaters last 8–12 years. If yours is in that range and having issues, replacement often makes more financial sense than repair.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate the unit and recommend repair or replacement based on age, condition, and your needs.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full price — parts and labor — before we begin.</p>
            <p><strong>Step 3 — Install or Repair.</strong> Safe installation including gas or electrical connections and pressure relief valves.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We confirm hot water is flowing before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Gas Line Services",    href: "/craft-catalog/gas-line-services"         },
      { label: "Piping & Re-piping",   href: "/craft-catalog/piping-and-repiping"       },
      { label: "Plumbing Fixtures",    href: "/craft-catalog/plumbing-fixtures"         },
      { label: "Residential Plumbing", href: "/craft-catalog/residential-plumbing"      },
    ],
  },

  "gas-line-services": {
    title: "Gas Line Installation & Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Your home&apos;s gas infrastructure must be maintained safely at all times.
          A&amp;E NYC Plumbing provides gas line maintenance, repair, and installation
          throughout Manhattan and NYC — handled by licensed, insured technicians.
        </p>
        <p>
          Whether you need a new gas line run for an appliance, a repair to an
          existing line, or emergency leak response — we have the expertise and
          licensing to do it right.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Gas Line Service?",
        content: (
          <>
            <p>If you smell gas, hear hissing near a gas appliance, or notice appliances underperforming — call immediately. Gas leaks are emergencies.</p>
            <p>You also need gas line service when adding new gas appliances, upgrading existing lines, or when an NYC inspection requires work to bring your system up to code.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assessment.</strong> We inspect the infrastructure, identify the issue, and confirm NYC code requirements.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full price before any work begins.</p>
            <p><strong>Step 3 — Repair or Install.</strong> All gas work performed by licensed technicians following NYC safety standards.</p>
            <p><strong>Step 4 — Test &amp; Verify.</strong> We pressure-test the line and confirm no leaks before closing out.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Water Heater Installation", href: "/craft-catalog/water-heater-installation" },
      { label: "Piping & Re-piping",        href: "/craft-catalog/piping-and-repiping"       },
      { label: "Residential Plumbing",      href: "/craft-catalog/residential-plumbing"      },
      { label: "Plumbing Fixtures",         href: "/craft-catalog/plumbing-fixtures"         },
    ],
  },

  "piping-and-repiping": {
    title: "Piping & Re-piping",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing handles full repiping projects for aging buildings,
          targeted pipe repairs, and new pipe installation for additions and
          renovations throughout Manhattan and NYC.
        </p>
        <p>
          Whether you need improvements, maintenance work, or just new pipes —
          our licensed team is the right crew for the job.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Repiping?",
        content: (
          <>
            <p>Older NYC buildings often have galvanized steel or lead pipes that corrode over time. Signs include rusty water, frequent leaks in multiple locations, low building-wide pressure, or a history of repeated pipe failures.</p>
            <p>Repiping with modern copper or PEX pipe eliminates recurring repair costs and ensures long-term reliability.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate the pipe system and determine whether targeted repair or full repipe is needed.</p>
            <p><strong>Step 2 — Free Quote.</strong> Detailed quote before work begins.</p>
            <p><strong>Step 3 — Install.</strong> New pipe installed with quality materials, coordinating access to minimize disruption.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> Pressure testing confirms all connections. Work area cleaned completely.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Water Line Services",  href: "/craft-catalog/water-line-services"  },
      { label: "Leak Detection",       href: "/craft-catalog/leak-detection"       },
      { label: "Gas Line Services",    href: "/craft-catalog/gas-line-services"    },
      { label: "Residential Plumbing", href: "/craft-catalog/residential-plumbing" },
    ],
  },

  "water-line-services": {
    title: "Water Line Repair & Installation",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing handles water line repair, replacement, and new
          installation throughout Manhattan and NYC. From a line break to an
          aging supply line losing pressure — our licensed technicians handle
          the work from start to finish.
        </p>
        <p>
          Having suitable water line installation work is essential if you want
          to save on repair costs in the long run.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Water Line Service?",
        content: (
          <>
            <p>Unexplained pressure drops, water discoloration, unusually high bills, wet spots in walls, or a complete loss of water to part of your building all point to a water line issue.</p>
            <p>Water line damage worsens over time — a slow leak becomes a burst. Early intervention saves money and prevents building damage.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Locate &amp; Assess.</strong> We identify the damaged section accurately before opening walls or floors.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full price before work begins.</p>
            <p><strong>Step 3 — Repair or Replace.</strong> Quality materials, proper connections, and shut-off valves installed correctly.</p>
            <p><strong>Step 4 — Pressure Test &amp; Clean Up.</strong> Full water flow confirmed with zero leaks before closing the job.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Leak Detection",        href: "/craft-catalog/leak-detection"        },
      { label: "Piping & Re-piping",    href: "/craft-catalog/piping-and-repiping"   },
      { label: "Water Pressure Repair", href: "/craft-catalog/water-pressure-repair" },
      { label: "Drain Repair",          href: "/craft-catalog/drain-repair"          },
    ],
  },

  "water-pressure-repair": {
    title: "Water Pressure Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          High water pressure is very likely to lead to water leak problems and
          possible broken pipes. A&amp;E NYC Plumbing diagnoses and corrects water
          pressure issues throughout Manhattan and NYC — preventing damage before
          it happens.
        </p>
        <p>
          Whether your pressure is too high, too low, or inconsistent — our
          licensed plumbers identify the cause and fix it.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Pressure Service?",
        content: (
          <>
            <p>Low pressure at fixtures, pressure that fluctuates significantly, banging pipes (water hammer), or a pressure gauge over 80 PSI are all signs of a problem.</p>
            <p>In older NYC buildings, pressure regulators often fail over time — and without one working correctly, excess pressure stresses every pipe joint and appliance in the system.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We check system pressure, inspect the PRV, and assess the supply line.</p>
            <p><strong>Step 2 — Free Quote.</strong> Price confirmed before work begins.</p>
            <p><strong>Step 3 — Correct.</strong> We calibrate or replace the pressure regulator or address whatever is causing the issue.</p>
            <p><strong>Step 4 — Verify.</strong> We recheck pressure at multiple points to confirm the system is within the correct range.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Water Line Services", href: "/craft-catalog/water-line-services" },
      { label: "Leak Detection",      href: "/craft-catalog/leak-detection"      },
      { label: "Piping & Re-piping",  href: "/craft-catalog/piping-and-repiping" },
      { label: "Drain Repair",        href: "/craft-catalog/drain-repair"        },
    ],
  },

  "water-filtration": {
    title: "Water Filter & Purification",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing installs, repairs, and services all types of water
          filtration and purification systems throughout Manhattan and NYC —
          restoring your access to clean water effectively.
        </p>
        <p>
          We handle everything from simple under-sink units to whole-building
          filtration solutions for residential and commercial properties.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Filtration Service?",
        content: (
          <>
            <p>If your filtered water tastes or smells off, your system is overdue for service, your under-sink filter is leaking, or you want to add a whole-home filtration system — we handle all of it.</p>
            <p>Many NYC residents prefer an additional layer of filtration for taste and peace of mind. We install and service the full range of systems.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We evaluate your current system or help select the right solution for your needs.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full price before work begins.</p>
            <p><strong>Step 3 — Install or Service.</strong> Proper plumbing connections with no leaks.</p>
            <p><strong>Step 4 — Test.</strong> We run water through the system and confirm it&apos;s operating correctly.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Water Line Services",   href: "/craft-catalog/water-line-services"  },
      { label: "Water Pressure Repair", href: "/craft-catalog/water-pressure-repair"},
      { label: "Plumbing Fixtures",     href: "/craft-catalog/plumbing-fixtures"    },
      { label: "Residential Plumbing",  href: "/craft-catalog/residential-plumbing" },
    ],
  },

  "kitchen-and-bath-plumbing": {
    title: "Kitchen & Bath Plumbing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Your kitchen and bathroom are the most plumbing-intensive spaces in your
          home. A&amp;E NYC Plumbing handles all kitchen and bath plumbing work
          throughout Manhattan and NYC — from routine repairs to full renovation-
          ready installations.
        </p>
        <p>
          Our licensed technicians install everything correctly with quality
          materials and no leaks, whether you need a single fixture repaired or
          multiple elements upgraded.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Kitchen or Bath Plumbing?",
        content: (
          <>
            <p>Leaking under the kitchen sink, low pressure at faucets, a slow tub drain, a dishwasher connection issue, or any plumbing tied to a kitchen or bath renovation are all reasons to call.</p>
            <p>We work alongside renovation contractors or independently — handling the full plumbing scope so you don&apos;t have to coordinate multiple subcontractors.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Scope the Work.</strong> We assess what&apos;s needed — repair, upgrade, or full installation.</p>
            <p><strong>Step 2 — Free Quote.</strong> Clear price before work begins.</p>
            <p><strong>Step 3 — Install or Repair.</strong> All connections — supply lines, drain lines, fixtures, and valves — installed correctly.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We run everything and confirm zero leaks before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Faucets & Sinks",   href: "/craft-catalog/faucets-and-sinks"         },
      { label: "Shower & Tub",      href: "/craft-catalog/shower-and-tub"            },
      { label: "Garbage Disposal",  href: "/craft-catalog/garbage-disposal"          },
      { label: "Plumbing Fixtures", href: "/craft-catalog/plumbing-fixtures"         },
    ],
  },

  "garbage-disposal": {
    title: "Garbage Disposal",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing handles garbage disposal repair and installation
          throughout Manhattan and NYC. Whether your disposal has stopped working,
          is leaking, or needs replacement — our licensed plumbers take care of
          it quickly and correctly.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Disposal Service?",
        content: (
          <>
            <p>A disposal that hums but doesn&apos;t grind, leaks from the bottom, trips its reset repeatedly, or has completely stopped responding — all signs you need service.</p>
            <p>Garbage disposals also cause drain blockages when food passes through without being fully ground — if your kitchen sink is slow after running the disposal, the issues may be related.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess whether the unit can be repaired or needs replacement.</p>
            <p><strong>Step 2 — Free Quote.</strong> Full price before any work begins.</p>
            <p><strong>Step 3 — Repair or Replace.</strong> We handle the full job including removing the old unit and ensuring proper drain connections.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We run the disposal and check for leaks before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Kitchen & Bath Plumbing", href: "/craft-catalog/kitchen-and-bath-plumbing" },
      { label: "Drain Repair",            href: "/craft-catalog/drain-repair"              },
      { label: "Faucets & Sinks",         href: "/craft-catalog/faucets-and-sinks"         },
      { label: "Dishwasher Repair",       href: "/craft-catalog/dishwasher-repair"         },
    ],
  },

  "dishwasher-repair": {
    title: "Dishwasher Repair",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          Your dishwasher may be affected by a wide range of plumbing situations
          that only experienced technicians can effectively resolve. A&amp;E NYC
          Plumbing provides dishwasher repair services in the Manhattan area.
        </p>
        <p>
          From water supply connections and drain line issues to leaking door
          seals and water inlet valve failures — our licensed plumbers fix it.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Dishwasher Service?",
        content: (
          <>
            <p>Water pooling under the dishwasher, dishes coming out dirty, the unit not filling with water, or water not draining after a cycle are the most common plumbing-related dishwasher issues.</p>
            <p>Many dishwasher problems stem from the drain line connection to the kitchen sink — a clogged drain or improper connection causes backup into the dishwasher basin.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess the dishwasher&apos;s plumbing connections to identify the issue.</p>
            <p><strong>Step 2 — Free Quote.</strong> Price confirmed before work begins.</p>
            <p><strong>Step 3 — Repair.</strong> We correct the plumbing issue — drain connection, supply line, or inlet valve.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We run a cycle to confirm the repair before leaving.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Kitchen & Bath Plumbing", href: "/craft-catalog/kitchen-and-bath-plumbing" },
      { label: "Garbage Disposal",        href: "/craft-catalog/garbage-disposal"          },
      { label: "Drain Repair",            href: "/craft-catalog/drain-repair"              },
      { label: "Faucets & Sinks",         href: "/craft-catalog/faucets-and-sinks"         },
    ],
  },

  "plumbing-fixtures": {
    title: "Plumbing Fixtures",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing has a proven history of providing plumbing fixture
          work of all types throughout Manhattan and NYC. We repair water pipes,
          handle drain cleaning, and perform a full range of work that leaves
          your plumbing fixtures in the best and most functional condition.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Fixture Service?",
        content: (
          <>
            <p>Dripping faucets, leaking supply valves, worn shutoff valves, fixture upgrades during renovation, or any situation where a plumbing fitting or fixture needs professional installation or repair.</p>
            <p>Properly installed fixtures last for decades. Improperly installed ones leak slowly — causing hidden water damage far more expensive than the original installation.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Assess.</strong> We identify what&apos;s needed — repair, replacement, or new installation.</p>
            <p><strong>Step 2 — Free Quote.</strong> Clear price before work begins.</p>
            <p><strong>Step 3 — Install or Repair.</strong> Proper connections and leak-free installation guaranteed.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We verify the fixture works correctly and leave the area clean.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Faucets & Sinks",         href: "/craft-catalog/faucets-and-sinks"         },
      { label: "Kitchen & Bath Plumbing", href: "/craft-catalog/kitchen-and-bath-plumbing" },
      { label: "Piping & Re-piping",      href: "/craft-catalog/piping-and-repiping"       },
      { label: "Residential Plumbing",    href: "/craft-catalog/residential-plumbing"      },
    ],
  },

  "residential-plumbing": {
    title: "Residential Plumbing",
    bgColor: "#101d2b",
    navItems: [
      { href: "#overview",         label: "Overview"         },
      { href: "#when_you_need_it", label: "When You Need It" },
      { href: "#our_process",      label: "Our Process"      },
      { href: "#related_services", label: "Related Services" },
    ],
    overviewContent: (
      <>
        <p>
          A&amp;E NYC Plumbing provides the best residential plumbing services in
          Manhattan and surrounding NYC boroughs. From clogged drain cleaning and
          faucet repair to frozen pipe fixes, leak repairs, and full plumbing
          installation — we handle it all.
        </p>
        <p>
          Licensed, insured, and available Monday through Sunday, 9am–9pm.
          Whatever the job, we show up prepared and get it done right.
        </p>
      </>
    ),
    overviewQuickLinks: [
      { label: "Call (646) 392-7164", href: "tel:6463927164" },
      { label: "Contact Us Online",   href: "/contact-us"    },
    ],
    sections: [
      {
        id: "when_you_need_it",
        heading: "When Do You Need Residential Plumbing?",
        content: (
          <>
            <p>Any plumbing issue in your home — a clogged drain, leaking pipe, broken fixture, low water pressure, running toilet, or failed water heater — is a job for a licensed residential plumber.</p>
            <p>A&amp;E NYC Plumbing covers the full range: routine maintenance, emergency repairs, fixture installation, and major system work — Mon–Sun, 9am–9pm.</p>
          </>
        ),
      },
      {
        id: "our_process",
        heading: "How We Handle It",
        content: (
          <>
            <p><strong>Step 1 — Diagnose.</strong> We assess the issue fully and explain what needs to be done before picking up a tool.</p>
            <p><strong>Step 2 — Free Quote.</strong> Parts and labor price before we start.</p>
            <p><strong>Step 3 — Fix It Right.</strong> Licensed technicians with quality materials and proper installation.</p>
            <p><strong>Step 4 — Test &amp; Clean Up.</strong> We confirm the repair is complete and leave your home clean.</p>
          </>
        ),
      },
    ],
    relatedServices: [
      { label: "Drain Repair",              href: "/craft-catalog/drain-repair"              },
      { label: "Leak Detection",            href: "/craft-catalog/leak-detection"            },
      { label: "Water Heater Installation", href: "/craft-catalog/water-heater-installation" },
      { label: "Piping & Re-piping",        href: "/craft-catalog/piping-and-repiping"       },
    ],
  },

};
