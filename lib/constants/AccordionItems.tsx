
type AccordionStep = { label: string; body: string };

export const accordionItems = [
  {
    id: "accordion-0",
    title: "Drain Repair",
    image: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Drain-Repair.jpg",
    description:
      "From slow kitchen sinks to full sewer line backups — A&E NYC Plumbing clears and repairs drains in Manhattan apartments, multi-unit buildings, and commercial spaces across all NYC boroughs.",
    learnHref: "/craft-catalog/drain-repair",
    steps: [
      { label: "Diagnose", body: "We assess the blockage and confirm the right approach before any tools go in." },
      { label: "Free Quote", body: "Price confirmed upfront — no hidden fees, no surprises. What we quote is what you pay." },
      { label: "Clear & Repair", body: "Professional-grade equipment fully clears the blockage and addresses the underlying issue." },
      { label: "Confirm & Clean Up", body: "We test the drain before leaving and clean up the work area completely." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-1",
    title: "Leak Detection",
    image: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Leak-Detection.jpg",
    description:
      "Hidden leaks cause serious structural damage before you know they exist. Our licensed technicians locate leaks accurately in walls, floors, and ceilings — so we can fix the right spot without unnecessary demolition.",
    learnHref: "/craft-catalog/leak-detection",
    steps: [
      { label: "Assess", body: "We evaluate visible signs and use professional methods to pinpoint the leak source." },
      { label: "Free Quote", body: "Clear repair price before any work begins." },
      { label: "Repair", body: "We fix the source using quality materials that hold up long term." },
      { label: "Verify & Clean Up", body: "We confirm the leak is fully resolved before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-2",
    title: "Water Heater Installation",
    image: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Hot-Water-Heaters-Installations.jpg",
    description:
      "Is your hot water unreliable or your energy bills climbing? A&E NYC Plumbing repairs and installs tank and tankless water heaters throughout Manhattan and NYC — with safe, code-compliant installation.",
    learnHref: "/craft-catalog/water-heater-installation",
    steps: [
      { label: "Assess", body: "We evaluate your unit and recommend repair or replacement based on age, condition, and your needs." },
      { label: "Free Quote", body: "Full price — parts and labor — before we begin." },
      { label: "Install or Repair", body: "Safe installation with proper gas or electrical connections and pressure relief valve." },
      { label: "Test & Clean Up", body: "We confirm hot water is flowing before leaving." },
    ] as AccordionStep[],
  },
  {
    id: "accordion-3",
    title: "Gas Line Services",
    image: "https://www.topplumbernyc.com/wp-content/uploads/2025/06/Gas-Line-Repair.jpg",
    description:
      "Gas line maintenance, repair, and installation — handled by licensed, insured technicians. Whether you need a new line run for an appliance or an emergency leak response, we prioritize safety and NYC code compliance.",
    learnHref: "/craft-catalog/gas-line-services",
    steps: [
      { label: "Assessment", body: "We inspect the infrastructure, identify the issue, and confirm NYC code requirements." },
      { label: "Free Quote", body: "Full price before any work begins." },
      { label: "Repair or Install", body: "All gas work performed by licensed technicians following NYC safety standards." },
      { label: "Pressure Test", body: "We pressure-test the line and confirm no leaks before closing the job." },
    ] as AccordionStep[],
  },
];
