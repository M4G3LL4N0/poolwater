export type PoolWaterFeature = {
  title: string;
  body: string;
};

export type PoolWaterStat = {
  label: string;
  value: string;
};

export type EcosystemProject = {
  name: string;
  href: string;
  category: string;
  stage: string;
};

export const poolWaterStats: PoolWaterStat[] = [
  { label: "Target attendance", value: "300–400" },
  { label: "Entry range", value: "$5–$15" },
  { label: "Venue model", value: "Partner-first" },
  { label: "Expansion vision", value: "Multi-city" },
];

export const poolWaterFeatures: PoolWaterFeature[] = [
  {
    title: "Activity-driven nightlife",
    body:
      "Pool tables, tournaments, and social competition create a more participatory alternative to passive nightlife.",
  },
  {
    title: "Nostalgic music energy",
    body:
      "A 90s–2000s hip-hop and rock identity makes the room feel familiar, high-energy, and culturally sticky.",
  },
  {
    title: "Food-first late-night experience",
    body:
      "Smash burgers, carne asada fries, and vendor pop-ups turn the venue into an all-night destination, not just a bar stop.",
  },
  {
    title: "Scalable legal format",
    body:
      "Built to operate through compliant venue partnerships first, then evolve into permanent spaces and city-by-city expansion.",
  },
];

export const poolWaterPillars: PoolWaterFeature[] = [
  {
    title: "Brand-first",
    body:
      "POOL WATER is designed as a recognizable nightlife brand, not just a one-off event series.",
  },
  {
    title: "Volume over bottle-service pricing",
    body:
      "Affordable entry and dense attendance create stronger social energy and more repeatable economics.",
  },
  {
    title: "Repeatable event systems",
    body:
      "From venue flow to music programming to content capture, the model is built for repeatability and scale.",
  },
];

export const ecosystemProjects: EcosystemProject[] = [
  {
    name: "NOAERTH",
    href: "#",
    category: "Holding Company",
    stage: "Active",
  },
  {
    name: "FoundersKingdom",
    href: "https://founderskingdom.vercel.app",
    category: "Founder OS",
    stage: "Building",
  },
  {
    name: "DeployLocal",
    href: "https://deploylocal.app",
    category: "Local Business AI",
    stage: "Building",
  },
  {
    name: "Redwoud",
    href: "https://redwoud.vercel.app",
    category: "Global Intelligence",
    stage: "Building",
  },
  {
    name: "LUVPARTNR",
    href: "https://luvpartnr.vercel.app",
    category: "Relationship Intelligence",
    stage: "Building",
  },
  {
    name: "SUNSETX",
    href: "https://sunsetx.vercel.app",
    category: "Consumer Utility",
    stage: "Building",
  },
  {
    name: "AccessXWorld",
    href: "https://accessxworld.com",
    category: "Access Infrastructure",
    stage: "Building",
  },
  {
    name: "POOL WATER",
    href: "#",
    category: "Experiential Entertainment",
    stage: "Launching",
  },
];
