export const latestEpisodes = [
  {
    number: "85",
    tag: "AI engineering",
    title: "Writing Code Was Never the Bottleneck",
    guest: "Moritz Plassnig, CloudBees",
    image: "/images/home.jpg",
    duration: "54 min",
  },
  {
    number: "84",
    tag: "Open source AI",
    title: "This is the worst AI tutor we’ll ever have",
    guest: "DataCamp",
    image: "/images/episode-82.webp",
    duration: "54 min",
  },
  {
    number: "83",
    tag: "AI agents",
    title: "The Infrastructure Behind Agents That Run for Months",
    guest: "Tony Holdstock-Brown, Inngest",
    image: "/images/episode-83.webp",
    duration: "53 min",
  },
] as const;

export const topics = [
  "AI agents",
  "AI infrastructure",
  "Evaluation",
  "Open source",
  "RAG & retrieval",
  "AI engineering",
] as const;

export const navLinks = [
  { label: "Episodes", href: "#episodes" },
  { label: "AI, decoded", href: "#decoded" },
  { label: "About", href: "#about" },
];
