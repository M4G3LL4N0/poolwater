import type { AdminMetricCard, AdminOverviewResponse } from "@/lib/types";

async function getAdminData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/overview`, {
      next: { revalidate: 60 },
    });
    return await response.json();
  } catch (error) {
    return {
      metrics: [
        { label: "Waitlist Entries", value: 0, loading: true },
        { label: "Contact Submissions", value: 0, loading: true },
        { label: "Venue Inquiries", value: 0, loading: true },
        { label: "Events", value: 0, loading: true },
      ],
      latestWaitlist: [],
      latestContacts: [],
      latestVenueInquiries: [],
      latestEvents: [],
    };
  }
}

function MetricCard({ metric }: { metric: AdminMetricCard }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <div className="text-sm text-gray-500 mb-1">{metric.label}</div>
      <div className="text-2xl font-bold">
        {metric.loading ? (
          <div className="h-8 w-12 bg-gray-200 animate-pulse rounded" />
        ) : (
          metric.value.toLocaleString()
        )}
      </div>
    </div>
  );
}

function ActivityList({ 
  title, 
  items 
}: { 
  title: string; 
  items: Array<{ id: string; email?: string; name?: string; venue_name?: string; title?: string; created_at?: string }> 
}) {
  if (!items.length) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-sm text-gray-500">No recent activity</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item.id} className="p-2 border-b">
            <div className="font-medium">
              {item.email || item.name || item.venue_name || item.title}
            </div>
            <div className="text-sm text-gray-500">
              {item.created_at ? new Date(item.created_at).toLocaleString() : "No date"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function AdminPage() {
  const data: AdminOverviewResponse = await getAdminData();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {data.metrics.map((metric: AdminMetricCard) => (
          <MetricCard key={metric.label} metric={metric} />
        ))}
      </div>

      {/* Latest Activity Sections */}
      <div className="grid gap-8 md:grid-cols-2">
        <ActivityList 
          title="Latest Waitlist Entries" 
          items={data.latestWaitlist} 
        />
        <ActivityList 
          title="Latest Contact Submissions" 
          items={data.latestContacts} 
        />
        <ActivityList 
          title="Latest Venue Inquiries" 
          items={data.latestVenueInquiries} 
        />
        <ActivityList 
          title="Latest Events" 
          items={data.latestEvents} 
        />
      </div>
    </div>
  );
}
