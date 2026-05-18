import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { getMockEvents } from "@/lib/events";
import type { EventRecord, EventsResponse } from "@/lib/types";

export async function GET(): Promise<NextResponse<EventsResponse>> {
  try {
    const supabase = getSupabaseClient();
    
    if (!supabase) {
      return NextResponse.json(
        { data: getMockEvents() },
        { status: 200 }
      );
    }

    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("is_featured", { ascending: false })
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Events query error:", error);
      return NextResponse.json(
        { data: getMockEvents() },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { data: data?.length ? (data as EventRecord[]) : getMockEvents() },
      { status: 200 }
    );
  } catch (error) {
    console.error("Events API error:", error);
    return NextResponse.json(
      { data: getMockEvents() },
      { status: 200 }
    );
  }
}
