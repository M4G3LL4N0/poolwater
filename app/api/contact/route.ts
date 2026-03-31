import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ContactSubmission, ContactResponse } from "@/lib/types";

export async function POST(request: Request): Promise<NextResponse<ContactResponse>> {
  try {
    const body = await request.json();
    const { name, email, message, source } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
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
      .from("contact_submissions")
      .insert({
        name,
        email,
        message,
        source: source || "website",
      });

    if (error) {
      throw error;
    }

    return NextResponse.json({ data: { success: true } });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
