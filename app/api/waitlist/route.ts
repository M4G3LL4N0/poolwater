import { NextResponse } from "next/server";
import { getSupabaseClient, getWaitlistCount } from "@/lib/supabase";
import { WaitlistResponse } from "@/lib/types";

export async function POST(req: Request): Promise<NextResponse<WaitlistResponse>> {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "website";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }

    const supabase = getSupabaseClient();

    const { error } = await supabase.from("waitlist").upsert(
      {
        email,
        phone: phone || null,
        source,
      },
      {
        onConflict: "email",
        ignoreDuplicates: false,
      }
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to submit waitlist request." },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse<{ count: number }>> {
  try {
    const count = await getWaitlistCount();
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
