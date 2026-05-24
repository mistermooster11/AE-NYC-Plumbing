export type BlogPost = {
  slug: string;
  image: string;
  date: string;
  monthYear: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "/blog/signs-you-need-a-plumber-nyc",
    image: "/images/blog-2.png",
    date: "15",
    monthYear: "May '26",
    category: "Plumbing Tips",
    categoryHref: "/blog",
    title: "5 Signs Your NYC Apartment Needs a Plumber Right Now",
    excerpt:
      "Slow drains, water stains on ceilings, and rising water bills are warning signs NYC residents often ignore. Here's what to watch for and when to call a licensed plumber before small issues become expensive repairs.",
  },
  {
    slug: "/blog/water-heater-lifespan-nyc",
    image: "/images/blog-3.png",
    date: "01",
    monthYear: "Apr '26",
    category: "Water Heaters",
    categoryHref: "/blog",
    title: "How Long Should a Water Heater Last in a New York Building?",
    excerpt:
      "Hard water, high usage, and older building infrastructure all shorten water heater lifespan in NYC. Learn the average replacement timeline, warning signs of a failing unit, and why timely replacement saves money.",
  },
];
