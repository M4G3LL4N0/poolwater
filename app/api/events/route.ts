import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { EventRecord } from "@/lib/types";
import { getMockEvents } from "@/lib/events";

export async function GET(): Promise<NextResponse<EventRecord[]>> {
  try {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("is_featured", { ascending: false })
      .order("created_at", { ascending: true });

    if (error || !data) {
      return NextResponse.json(getMockEvents(), { status: 200 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(getMockEvents(), { status: 200 });
  }
}
