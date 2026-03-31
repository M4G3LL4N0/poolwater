export interface WaitlistEntry {
  id: string;
  email: string;
  phone?: string | null;
  source?: string | null;
  created_at?: string;
}

export interface EventRecord {
  id: string;
  slug: string;
  title: string;
  city: string;
  venue?: string | null;
  date_label?: string | null;
  time_label?: string | null;
  summary?: string | null;
  status?: string | null;
  is_featured?: boolean;
  created_at?: string;
}

export interface ApiSuccess<T> {
  data: T;
}

export interface ApiError {
  error: string;
}

export type WaitlistResponse = ApiSuccess<{ success: boolean }> | ApiError;

export interface InvestorMetric {
  label: string;
  value: string;
}

export interface InvestorSlide {
  title: string;
  points: string[];
}

export interface LaunchPlanPhase {
  title: string;
  items: string[];
}

export interface EventExecutionPlan {
  title: string;
  goal: string;
  timeline: string[];
}

export interface PortfolioUiNote {
  title: string;
  body: string;
}
