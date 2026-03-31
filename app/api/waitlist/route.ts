import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const source = typeof body.source === "string" ? body.source.trim() : "website";

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
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
      },
    );

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit waitlist request." }, { status: 500 });
  }
}
