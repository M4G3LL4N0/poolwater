export interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
  source: string | null;
  phone?: string | null;
}

export type WaitlistResponse = {
  success?: boolean;
  error?: string;
};
