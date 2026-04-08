export interface ApiSuccess<T> {
  data: T;
  success: boolean;
}

export interface ApiError {
  error: string;
  code?: string;
  success: false;
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;

export function isApiError(response: unknown): response is ApiError {
  return typeof response === 'object' && response !== null && 'error' in response;
}

type Email = `${string}@${string}.${string}`;

// Database Entities
export interface WaitlistEntry {
  id: string;
  email: Email;
  phone?: string | null;
  source?: string | null;
  created_at: string;
  updated_at?: string;
}

export interface EventRecord {
  id: string;
  slug: string;
  title: string;
  city: string;
  venue: string;
  dateLabel: string;
  timeLabel: string;
  summary: string;
  features: string[];
  cta: string;
  is_featured?: boolean;
  created_at?: string;
  updated_at?: string;
  status: 'Coming soon' | 'Live' | 'Past' | 'Cancelled' | string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: Email;
  message: string;
  source?: string | null;
  created_at: string;
}

export interface VenueInquiry {
  id: string;
  venue_name: string; 
  contact_name: string;
  email: Email;
  phone?: string | null;
  city: string;
  notes?: string | null;
  created_at: string;
}

// API Response Types
export interface WaitlistPostResponse {
  success: boolean;
  count?: number;
}

export type WaitlistResponse = ApiResponse<WaitlistPostResponse>;
export type ContactResponse = ApiResponse<{ success: boolean }>;
export type VenueInquiryResponse = ApiResponse<{ success: boolean }>;
export type EventsResponse = ApiResponse<EventRecord[]>;

// Investor Content Types
export interface InvestorMetric {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'neutral';
}

export interface InvestorSlide {
  title: string;
  points: string[];
  image?: string;
  order?: number;
}

export interface LaunchPlanPhase {
  title: string;
  items: string[];
  timeline?: string;
}

export interface EventExecutionPlan {
  title: string;
  goal: string;
  timeline: string[];
  kpis?: string[];
}

export interface PortfolioUiNote {
  title: string;
  body: string;
  priority?: number;
}

// Admin Types
export interface AdminMetricCard {
  label: string;
  value: number; // Changed from string | number since all our metrics are numbers
  helperText?: string;
  loading?: boolean;
  error?: string;
}

export interface AdminOverviewResponse {
  metrics: AdminMetricCard[];
  latestWaitlist: Array<{
    id: string;
    email: string;
    created_at: string;
  }>;
  latestContacts: Array<{
    id: string;
    name: string;
    email: string;
    created_at: string;
  }>;
  latestVenueInquiries: Array<{
    id: string;
    venue_name: string;
    contact_name: string;
    email: string;
    created_at: string;
  }>;
  latestEvents: Array<{
    id: string;
    title: string;
    created_at: string;
  }>;
  source: "supabase" | "fallback";
  error?: string | null;
}

export interface ActivityItem {
  id: string;
  email?: string;
  name?: string;
  venue_name?: string;
  title?: string;
  created_at?: string;
}

export type AdminActivityType = 'waitlist' | 'contact' | 'venue' | 'event';

export interface AdminActivityItem {
  type: AdminActivityType;
  id: string;
  title: string;
  timestamp: string;
  metadata?: Record<string, unknown>;
}

// Content Types
export interface ContentBlock {
  title: string;
  body: string;
  image?: string;
}

export interface ContentSection {
  title: string;
  items: ContentBlock[];
}
