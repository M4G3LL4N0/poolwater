import { EventRecord } from "@/lib/types";

export function getMockEvents(): EventRecord[] {
  return [
    {
      id: "1",
      slug: "opening-night",
      title: "Opening Night",
      city: "Los Angeles",
      venue: "Venue announced privately",
      date_label: "TBA",
      time_label: "Late night",
      summary: "The first full-room expression of Pool Water",
      status: "Coming soon",
      is_featured: true,
      created_at: new Date().toISOString(),
    },
    {
      id: "2",
      slug: "tournament-night",
      title: "Tournament Night",
      city: "Los Angeles",
      venue: "Private release first",
      date_label: "TBA",
      time_label: "Late night",
      summary: "A sharper competition format",
      status: "In development",
      is_featured: false,
      created_at: new Date().toISOString(),
    },
    {
      id: "3",
      slug: "arcade-heavy",
      title: "Arcade Heavy",
      city: "Los Angeles",
      venue: "Private release first",
      date_label: "TBA",
      time_label: "Late night",
      summary: "A more kinetic variation",
      status: "Planned",
      is_featured: false,
      created_at: new Date().toISOString(),
    },
  ];
}
