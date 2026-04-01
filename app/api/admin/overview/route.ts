import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { AdminOverviewResponse, AdminMetricCard } from "@/lib/types";
import { getMockEvents } from "@/lib/events";

export async function GET(): Promise<NextResponse<AdminOverviewResponse>> {
  const buildFallbackResponse = (): AdminOverviewResponse => ({
    metrics: [
      { label: "Waitlist Entries", value: 0, loading: true },
      { label: "Contact Submissions", value: 0, loading: true },
      { label: "Venue Inquiries", value: 0, loading: true },
      { label: "Events", value: 0, loading: true },
    ],
    latestWaitlist: [],
    latestContacts: [],
    latestVenueInquiries: [],
    latestEvents: [],
    source: "fallback"
  });

  try {
    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json(buildFallbackResponse());
    }

    // Get counts
    const [
      waitlistCount,
      contactsCount, 
      venueInquiriesCount,
      eventsCount
    ] = await Promise.all([
      supabase.from("waitlist").select("*", { count: "exact", head: true }),
      supabase.from("contacts").select("*", { count: "exact", head: true }),
      supabase.from("venue_inquiries").select("*", { count: "exact", head: true }),
      supabase.from("events").select("*", { count: "exact", head: true })
    ]);

    // Get latest entries
    const [
      latestWaitlist,
      latestContacts,
      latestVenueInquiries,
      latestEvents
    ] = await Promise.all([
      supabase.from("waitlist").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("contacts").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("venue_inquiries").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("events").select("*").order("created_at", { ascending: false }).limit(5)
    ]);

    const response: AdminOverviewResponse = {
      metrics: [
        { label: "Waitlist Entries", value: waitlistCount.count || 0 },
        { label: "Contact Submissions", value: contactsCount.count || 0 },
        { label: "Venue Inquiries", value: venueInquiriesCount.count || 0 },
        { label: "Events", value: eventsCount.count || 0 }
      ],
      latestWaitlist: latestWaitlist.data || [],
      latestContacts: latestContacts.data || [],
      latestVenueInquiries: latestVenueInquiries.data || [],
      latestEvents: latestEvents.data || [],
      source: "supabase"
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(buildFallbackResponse());
  }
}
