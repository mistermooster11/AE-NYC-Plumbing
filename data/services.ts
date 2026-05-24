export type Service = {
  number: string;
  title: string;
  image: string;
  href: string;
  width: number;
  height: number;
};

export type SidebarService = {
  label: string;
  href: string;
};

export const sidebarServices: SidebarService[] = [
  { label: "Drain Repair & Unclogging", href: "/drain-repair" },
  { label: "Leak Detection & Repair", href: "/leak-detection" },
  { label: "Water Heater Installation", href: "/water-heater" },
  { label: "Toilet Repair & Replacement", href: "/toilet-repair" },
  { label: "Emergency Plumbing", href: "/emergency-plumbing" },
];

export const services: Service[] = [
  {
    number: "01",
    title: "Drain Repair & Unclogging",
    image: "/images/service-drain-repair.jpg",
    href: "/drain-repair",
    width: 535,
    height: 643,
  },
  {
    number: "02",
    title: "Leak Detection & Repair",
    image: "/images/service-leak-detection.jpg",
    href: "/leak-detection",
    width: 535,
    height: 643,
  },
  {
    number: "03",
    title: "Water Heater Installation",
    image: "/images/service-water-heater.jpg",
    href: "/water-heater",
    width: 535,
    height: 643,
  },
  {
    number: "04",
    title: "Toilet Repair & Replacement",
    image: "/images/service-toilet-repair.jpg",
    href: "/toilet-repair",
    width: 535,
    height: 643,
  },
  {
    number: "05",
    title: "Emergency Plumbing",
    image: "/images/service-emergency-plumbing.jpg",
    href: "/emergency-plumbing",
    width: 535,
    height: 643,
  },
];
