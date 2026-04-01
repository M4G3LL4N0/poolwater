export interface WaitlistEntry {
  id: string;
  email: string;
  phone?: string | null;
  source?: string | null;
  created_at?: string;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export type WaitlistResponse = ApiResponse<{ success: boolean }>;
export type ContactResponse = ApiResponse<{ success: boolean }>;
export type VenueInquiryResponse = ApiResponse<{ success: boolean }>;

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

export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  message: string;
  source?: string | null;
  created_at?: string;
}

export interface VenueInquiry {
  id?: string;
  venue_name: string;
  contact_name: string;
  email: string;
  phone?: string | null;
  city: string;
  notes?: string | null;
  created_at?: string;
}

export interface ContactResponse extends ApiSuccess<{ success: boolean }> {}
export interface VenueInquiryResponse extends ApiSuccess<{ success: boolean }> {}

export interface AdminMetricCard {
  label: string;
  value: number;
  loading?: boolean;
}

export interface AdminOverviewResponse {
  metrics: AdminMetricCard[];
  latestWaitlist?: WaitlistEntry[];
  latestContacts?: ContactSubmission[];
  latestVenueInquiries?: VenueInquiry[];
  latestEvents?: EventRecord[];
}

export interface AdminLatestActivity {
  type: 'waitlist' | 'contact' | 'venue' | 'event';
  id: string;
  title: string;
  timestamp: string;
}
