import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let _client: SupabaseClient | null = null;

export function hasSupabaseEnv(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!url || !key) {
    console.warn('Supabase environment variables not configured');
    return false;
  }

  try {
    new URL(url);
    return true;
  } catch {
    console.warn('Invalid Supabase URL');
    return false;
  }
}

export function getSupabaseClient(): SupabaseClient | null {
  if (!hasSupabaseEnv()) {
    return null;
  }

  if (_client) {
    return _client;
  }

  try {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: false,
        },
      }
    );
    return _client;
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error);
    return null;
  }
}
