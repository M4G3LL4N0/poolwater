import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";
import { ContactSubmission, ContactResponse } from "@/lib/types";

export async function POST(request: Request): Promise<NextResponse<ContactResponse>> {
  try {
    const body = await request.json();
    const { name, email, message, source } = body;
    
    // Validate required fields
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Please enter your name", success: false },
        { status: 400 }
      );
    }
    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Please enter your email", success: false },
        { status: 400 }
      );
    }
    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Please enter a message", success: false },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address", success: false },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Database unavailable", success: false },
        { status: 500 }
      );
    }

    const { error } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        source: source?.trim() || "website",
      });

    if (error) {
      console.error("Contact submission error:", error);
      return NextResponse.json(
        { error: "Failed to save submission" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: { success: true }, success: true });
    
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Failed to process contact form" },
      { status: 500 }
    );
  }
}
