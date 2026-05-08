export type CraftItem = {
  slug:        string;
  title:       string;
  categories:  string[];
  disciplines: string[];
  hasAssessment:   boolean;
  hasTranslation:  boolean;
};

export const CATEGORIES = ["Plumbing", "Gas & Heating"] as const;
export const DISCIPLINES = ["Residential", "Commercial"] as const;

export const crafts: CraftItem[] = [
  {
    slug: "drain-repair",
    title: "Drain Repair",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "faucets-and-sinks",
    title: "Faucets & Sinks",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "leak-detection",
    title: "Leak Detection",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "toilet-repair",
    title: "Toilet Repair",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "shower-and-tub",
    title: "Shower & Tub",
    categories: ["Plumbing"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-heater-installation",
    title: "Water Heater Installation",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "gas-line-services",
    title: "Gas Line Installation & Repair",
    categories: ["Gas & Heating"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "piping-and-repiping",
    title: "Piping & Re-piping",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-line-services",
    title: "Water Line Repair & Installation",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-pressure-repair",
    title: "Water Pressure Repair",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "water-filtration",
    title: "Water Filter & Purification",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "kitchen-and-bath-plumbing",
    title: "Kitchen & Bath Plumbing",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "garbage-disposal",
    title: "Garbage Disposal",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "dishwasher-repair",
    title: "Dishwasher Repair",
    categories: ["Plumbing"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "plumbing-fixtures",
    title: "Plumbing Fixtures",
    categories: ["Plumbing"],
    disciplines: ["Residential", "Commercial"],
    hasAssessment: false,
    hasTranslation: false,
  },
  {
    slug: "residential-plumbing",
    title: "Residential Plumbing",
    categories: ["Plumbing"],
    disciplines: ["Residential"],
    hasAssessment: false,
    hasTranslation: false,
  },
];
