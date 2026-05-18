import type { EventRecord } from "@/lib/types";

const MOCK_EVENTS: EventRecord[] = [
  {
    id: "evt_1",
    slug: "opening-night",
    title: "Opening Night",
    city: "Los Angeles",
    venue: "Venue announced privately",
    date_label: "TBA",
    dateLabel: "TBA",
    time_label: "Late night",
    timeLabel: "Late night",
    summary: "The first full-room expression of Pool Water",
    features: ["Games", "Movement", "Food", "Private guest list"],
    cta: "Join the waitlist",
    status: "Coming soon",
    is_featured: true,
    created_at: new Date().toISOString(),
  },
  {
    id: "evt_2",
    slug: "tournament-night",
    title: "Tournament Night",
    city: "Los Angeles",
    venue: "Private release first",
    date_label: "TBA",
    dateLabel: "TBA",
    time_label: "Late night",
    timeLabel: "Late night",
    summary: "A sharper competition format",
    features: ["Tournament format", "Host-led play", "Late-night social energy"],
    cta: "Request an invite",
    status: "In development",
    is_featured: false,
    created_at: new Date().toISOString(),
  },
  {
    id: "evt_3",
    slug: "arcade-heavy",
    title: "Arcade Heavy",
    city: "Los Angeles",
    venue: "Private release first",
    date_label: "TBA",
    dateLabel: "TBA",
    time_label: "Late night",
    timeLabel: "Late night",
    summary: "A more kinetic variation",
    features: ["Arcade-first layout", "Small teams", "Music-led pacing"],
    cta: "Join the list",
    status: "Planned",
    is_featured: false,
    created_at: new Date().toISOString(),
  },
];

export function getMockEvents(): EventRecord[] {
  return [...MOCK_EVENTS];
}

export function getFeaturedEvents(events: EventRecord[]): EventRecord[] {
  return events.filter(e => e.is_featured);
}

export function sortEvents(events: EventRecord[]): EventRecord[] {
  return [...events].sort((a, b) => {
    // Featured first
    if (a.is_featured && !b.is_featured) return -1;
    if (!a.is_featured && b.is_featured) return 1;
    
    // Then by creation date
    return new Date(a.created_at ?? 0).getTime() - new Date(b.created_at ?? 0).getTime();
  });
}
