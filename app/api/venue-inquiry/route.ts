import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { VenueInquiry, VenueInquiryResponse } from "@/lib/types";

export async function POST(request: Request): Promise<NextResponse<VenueInquiryResponse>> {
  try {
    const body = await request.json();
    const { venue_name, contact_name, email, phone, city, notes } = body;
    
    // Validate required fields
    if (!venue_name || !contact_name || !email || !city) {
      return NextResponse.json(
        { error: "Venue name, contact name, email, and city are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    const { error } = await supabase
      .from("venue_inquiries")
      .insert({
        venue_name,
        contact_name,
        email,
        phone: phone || null,
        city,
        notes: notes || null,
      });

    if (error) {
      throw error;
    }

    return NextResponse.json({ data: { success: true } });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit venue inquiry" },
      { status: 500 }
    );
  }
}
