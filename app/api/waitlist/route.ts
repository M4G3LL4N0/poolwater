import { NextResponse } from "next/server";
import { getSupabaseClient, getWaitlistCount } from "@/lib/supabase";
import type { WaitlistResponse } from "@/lib/types";

export async function POST(req: Request): Promise<NextResponse<WaitlistResponse>> {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "website";

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        { error: "Service temporarily unavailable" },
        { status: 503 }
      );
    }

    const { error } = await supabase
      .from("waitlist")
      .upsert(
        {
          email,
          phone: phone || null,
          source,
          updated_at: new Date().toISOString(),
        },
        {
          onConflict: "email",
        }
      );

    if (error) {
      console.error("Supabase waitlist error:", error);
      return NextResponse.json(
        { error: "Failed to process request" },
        { status: 500 }
      );
    }

    return NextResponse.json({ data: { success: true } });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse<{ count: number }>> {
  try {
    const count = await getWaitlistCount();
    return NextResponse.json({ count });
  } catch (error) {
    console.error("Waitlist count error:", error);
    return NextResponse.json({ count: 0 }, { status: 200 });
  }
}
