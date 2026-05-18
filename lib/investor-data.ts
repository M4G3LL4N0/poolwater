import type {
  InvestorMetric,
  InvestorSlide,
  LaunchPlanPhase,
  EventExecutionPlan,
} from "@/lib/types";

// Core metrics for investor overview
export const investorMetrics: InvestorMetric[] = [
  { label: "Initial event target", value: "300–400 attendees" },
  { label: "Entry strategy", value: "$5–$15 volume model" },
  { label: "Phase 1 model", value: "Venue partnership" },
  { label: "Phase 2 model", value: "Permanent flagship" },
  { label: "Long-term motion", value: "Multi-city rollout" },
  { label: "Category", value: "Adult social entertainment" },
  { label: "Target demo", value: "21–35, social but not club-focused" },
  { label: "Repeat rate goal", value: "40%+ within 90 days" },
];

// Full pitch deck content
export const investorDeck: InvestorSlide[] = [
  {
    title: "1. Cover",
    points: [
      "POOL WATER",
      "Activity-driven nightlife for people who want more than a bar or a club",
      "A scalable social entertainment brand built for repeat attendance and city-by-city expansion",
    ],
  },
  {
    title: "2. The Gap",
    points: [
      "Nightlife has bifurcated into expensive bottle-service theater and dead pool halls",
      "People want social energy without posturing, games without grime, food without settling",
      "The market lacks a repeatable, high-margin format that feels alive every night",
    ],
  },
  {
    title: "3. The Model",
    points: [
      "Pool tables as the anchor, not the afterthought",
      "Arcade energy to keep the room moving",
      "Late food that earns its place",
      "Designed for natural interaction, not forced mingling",
    ],
  },
  {
    title: "4. Unit Economics",
    points: [
      "Phase 1: Pop-up model with venue splits (60/40 door, 20% F&B to venue)",
      "Phase 2: Flagship with $1.2M build, 70% gross margins at scale",
      "Target $250K net per location by Year 2",
    ],
  },
  {
    title: "5. Roadmap",
    points: [
      "Q3 2026: Prove model in LA with 3 event formats",
      "Q1 2027: Expand to 2nd market (Austin or Miami)",
      "Q3 2027: First permanent location",
      "2028: 3–5 city rollout",
    ],
  },
];

// Viral launch strategy
export const viralLaunchPlan: LaunchPlanPhase[] = [
  {
    title: "Phase 1 — Signal before launch",
    items: [
      "Build visual language: chrome, blue felt, wet glass, neon spill, game lights",
      "Start posting 6 weeks pre-launch to establish aesthetic",
      "Use short clips showing room mid-action, not staged announcements",
      "Seed 3 core creators who get the vibe",
    ],
  },
  {
    title: "Phase 2 — First 3 events",
    items: [
      "Event 1: Friends & family soft open (80% capacity)",
      "Event 2: Public debut with paid promotion",
      "Event 3: First tournament format to drive reshare",
      "Capture 5 signature angles every night",
    ],
  },
  {
    title: "Phase 3 — Recap & expand",
    items: [
      "Edit recaps within 48 hours focusing on crowd energy",
      "Run lookalike audiences to first attendees",
      "Add 4th weekly event once demand exceeds capacity",
      "Start teasing next city once LA hits 80% repeat rate",
    ],
  },
];

// First 3 event execution details
export const firstThreeEvents: EventExecutionPlan[] = [
  {
    title: "Event 1 — Controlled chaos",
    goal: "Prove the room works. Focus on density, movement, and visible energy.",
    timeline: [
      "2:00 PM — Final floor confirmation, game placement check",
      "4:00 PM — Lighting/sound test, staff zones marked",
      "6:00 PM — Content team marks must-capture angles",
      "7:00 PM — Staff briefing on flow and tone",
      "8:00 PM — Doors open (room should look half-alive)",
      "9:00 PM — Pool-heavy flow, side games lit",
      "10:30 PM — Tournament announcement spike",
      "12:00 AM — Hero hour (peak density, content capture)",
      "2:00 AM — Controlled close, exit reactions captured",
    ],
  },
  {
    title: "Event 2 — Tighten the room",
    goal: "Refine operations while increasing capacity by 20%.",
    timeline: [
      "Added: Pre-event waitlist management",
      "Added: Designated photo ambassador role",
      "Refined: Food pickup flow to reduce bottlenecks",
      "Refined: Tournament bracket visibility",
    ],
  },
  {
    title: "Event 3 — Own the room",
    goal: "Prove repeatability with 30% returning attendees.",
    timeline: [
      "Added: Loyalty recognition for returning guests",
      "Added: Late-night food specials",
      "Refined: Arcade game rotation timing",
      "Refined: Staff response to peak density",
    ],
  },
];
