import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { AdminOverviewResponse, AdminMetricCard } from "@/lib/types";
import { getMockEvents } from "@/lib/events";

export async function GET(): Promise<NextResponse<AdminOverviewResponse>> {
  const fallbackResponse: AdminOverviewResponse = {
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
    source: "fallback",
  };
  try {
    const supabase = getSupabaseClient();
    
    // Get counts
    const metrics: AdminOverviewResponse["metrics"] = [];
    
    // Waitlist count
    const { count: waitlistCount } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });
    metrics.push({ label: "Waitlist Entries", value: waitlistCount || 0 });

    // Contacts count
    const { count: contactsCount } = await supabase
      .from("contacts")
      .select("*", { count: "exact", head: true });
    metrics.push({ label: "Contact Submissions", value: contactsCount || 0 });

    // Venue inquiries count
    const { count: venueInquiriesCount } = await supabase
      .from("venue_inquiries")
      .select("*", { count: "exact", head: true });
    metrics.push({ label: "Venue Inquiries", value: venueInquiriesCount || 0 });

    // Events count
    const { count: eventsCount } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true });
    metrics.push({ label: "Events", value: eventsCount || 0 });

    // Get latest entries
    const { data: latestWaitlist } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    const { data: latestContacts } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    const { data: latestVenueInquiries } = await supabase
      .from("venue_inquiries")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    const { data: latestEvents } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5);

    const metrics: AdminMetricCard[] = [
      { label: "Waitlist Entries", value: waitlistCount || 0 },
      { label: "Contact Submissions", value: contactsCount || 0 },
      { label: "Venue Inquiries", value: venueInquiriesCount || 0 },
      { label: "Events", value: eventsCount || 0 },
    ];

    const response: AdminOverviewResponse = {
      metrics,
      latestWaitlist: latestWaitlist || [],
      latestContacts: latestContacts || [],
      latestVenueInquiries: latestVenueInquiries || [],
      latestEvents: latestEvents || [],
    });
  } catch (error) {
    // Fallback to local data if Supabase is unavailable
    return NextResponse.json({
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
    });
  }
}
