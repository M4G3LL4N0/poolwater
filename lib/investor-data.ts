import {
  InvestorMetric,
  InvestorSlide,
  LaunchPlanPhase,
  EventExecutionPlan,
  PortfolioUiNote,
} from "../lib/types";

export const investorMetrics: InvestorMetric[] = [
  { label: "Initial event target", value: "300–400 attendees" },
  { label: "Entry strategy", value: "$5–$15 volume model" },
  { label: "Phase 1 model", value: "Venue partnership" },
  { label: "Phase 2 model", value: "Permanent flagship" },
  { label: "Long-term motion", value: "Multi-city rollout" },
  { label: "Category", value: "Adult social entertainment" },
];

export const investorDeck: InvestorSlide[] = [
  {
    title: "1. Cover",
    points: [
      "POOL WATER",
      "Activity-driven nightlife for people who want more than a bar or a club",
      "A scalable social entertainment brand built for repeat attendance and city-by-city expansion",
    ],
  },
  // ... rest of deck slides
];

export const viralLaunchPlan: LaunchPlanPhase[] = [
  {
    title: "Phase 1 — Signal before launch",
    items: [
      "Build a visual language around chrome, blue felt, wet glass, neon spill, game lights, and dense rooms",
      "Start posting before the first event so the brand feels alive before the brand is proven",
      "Use short clips that make people feel like they are seeing the room mid-story, not hearing an announcement",
    ],
  },
  // ... rest of launch phases
];

export const firstThreeEvents: EventExecutionPlan[] = [
  {
    title: "Event 1 — Controlled chaos",
    goal:
      "Prove the room works. The first job is not perfection. It is density, movement, and visible energy.",
    timeline: [
      "2:00 PM — final floor confirmation, check game placement, confirm food and staff flow",
      "4:00 PM — lighting, sound, game test, line routing, photo angles, staff zones",
      "6:00 PM — content team walks the room and marks six must-capture angles",
      "7:00 PM — staff briefing: entry, table flow, rule tone, cleanup rhythm, crowd touchpoints",
      "8:00 PM — doors open for early arrivals; room should already look half-alive",
      "9:00 PM — open pool-heavy flow, side games lit, food visible, no dead corners",
      "10:30 PM — room push: tournament announcement or challenge-format spike",
      "12:00 AM — hero hour: highest density, strongest content capture, no operational drift",
      "1:30 AM — keep floor hot, tighten cleanup, keep late arrivals from feeling secondary",
      "2:00 AM — controlled close, capture exit reactions, next-drop teaser recorded before teardown",
    ],
  },
  // ... rest of events
];

export const portfolioUiStructure: PortfolioUiNote[] = [
  {
    title: "Noaerth portfolio homepage role",
    body:
      "POOL WATER should appear there as an experiential entertainment company, but only in a clean strategic context. No public party-language should bleed into the parent-company homepage.",
  },
  // ... rest of notes
];
