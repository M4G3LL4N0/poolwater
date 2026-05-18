import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const email =
      typeof body?.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const phone =
      typeof body?.phone === "string"
        ? body.phone.trim().slice(0, 20)
        : null;

    const source =
      typeof body?.source === "string"
        ? body.source.trim().slice(0, 50)
        : "website";

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const supabase = getSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 500 }
      );
    }

    const { error } = await supabase.from("waitlist").upsert(
      {
        email,
        phone,
        source,
      },
      {
        onConflict: "email",
        ignoreDuplicates: false,
      }
    );

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}

export async function GET() {
  try {
    const supabase = getSupabaseClient();

    if (!supabase) {
      return NextResponse.json({
        count: 0,
        source: "fallback",
        error: "Database not configured",
      });
    }

    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) {
      return NextResponse.json(
        { error: error.message, count: 0 },
        { status: 500 }
      );
    }

    return NextResponse.json({
      count: count ?? 0,
      source: "supabase",
      error: null,
    });
  } catch {
    return NextResponse.json(
      { count: 0, source: "fallback", error: "Unable to fetch waitlist count" },
      { status: 500 }
    );
  }
}
