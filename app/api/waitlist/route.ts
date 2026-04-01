import { NextResponse } from "next/server";
import { getSupabaseClient, getWaitlistCount, safeDbQuery } from "@/lib/supabase";
import type { WaitlistEntry, WaitlistResponse } from "@/lib/types";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request): Promise<NextResponse<WaitlistResponse>> {
  try {
    const body = await req.json();
    const email = (typeof body.email === "string" ? body.email.trim().toLowerCase() : "") as Email;
    const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 20) : null;
    const source = typeof body.source === "string" ? body.source.trim().slice(0, 50) : "website";

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const result = await safeDbQuery(async (supabase) => {
      const { error } = await supabase
        .from("waitlist")
        .upsert(
          {
            email,
            phone,
            source,
            updated_at: new Date().toISOString(),
          },
          { onConflict: "email" }
        );

      if (error) throw error;
      
      const { count } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });

      return { success: true, count: count || 0 };
    }, { success: false });

    if (!result.success) {
      return NextResponse.json(
        { error: "Service temporarily unavailable" }, 
        { status: 503 }
      );
    }

    return NextResponse.json({ 
      data: { 
        success: true,
        count: result.count
      } 
    });
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
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
