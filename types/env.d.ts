declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Required
      NODE_ENV: 'development' | 'production' | 'test';
      
      // Optional
      NEXT_PUBLIC_API_URL?: string;
      NEXT_PUBLIC_SITE_URL?: string;
      NEXT_PUBLIC_SUPABASE_URL?: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
      VERCEL_PROJECT_PRODUCTION_URL?: string;
      
      // Auth
      NEXT_PUBLIC_AUTH_SECRET?: string;
      
      // Analytics
      NEXT_PUBLIC_GA_MEASUREMENT_ID?: string;
    }
  }
}

// Ensure this file is treated as a module
export {};
