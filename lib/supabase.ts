import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

type DbError = {
  message: string;
  details?: string;
  hint?: string;
  code?: string;
};

export function hasSupabaseEnv(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}

let _client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!hasSupabaseEnv()) {
    console.warn("Supabase env vars not configured");
    return null;
  }

  if (!_client) {
    try {
      _client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          db: { schema: "poolwater" },
          auth: { persistSession: false },
        }
      );
      
      // Verify connection
      _client
        .from("waitlist")
        .select("*", { count: "exact", head: true })
        .then(({ error }) => {
          if (error) {
            console.error("Supabase connection test failed:", error);
          }
        });
    } catch (error) {
      console.error("Supabase client init failed:", error);
      return null;
    }
  }

  return _client;
}

export async function getWaitlistCount(): Promise<number> {
  const supabase = getSupabaseClient();
  if (!supabase) return 0;

  try {
    const { count, error } = await supabase
      .from("waitlist")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return count || 0;
  } catch (error) {
    console.error("Waitlist count error:", error);
    return 0;
  }
}

export async function safeDbQuery<T>(
  queryFn: (supabase: SupabaseClient) => Promise<T>,
  fallback: T
): Promise<T> {
  const supabase = getSupabaseClient();
  if (!supabase) return fallback;

  try {
    return await queryFn(supabase);
  } catch (error) {
    console.error("Database query failed:", error);
    return fallback;
  }
}
