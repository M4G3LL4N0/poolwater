import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export function getSupabaseClient() {
  if (!url || !anonKey) {
    console.error("Missing Supabase environment variables.");
    return null;
  }

  try {
    return createClient(url, anonKey, {
      db: { schema: "poolwater" },
      auth: {
        persistSession: false,
      },
    });
  } catch (error) {
    console.error("Failed to initialize Supabase client:", error);
    return null;
  }
}

export async function getWaitlistCount() {
  const supabase = getSupabaseClient();
  const { count, error } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });

  if (error) throw error;
  return count || 0;
}
