import { AdminMetricCard } from "@/lib/types";

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

export default async function AdminPage() {
  const data = await getAdminData();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Overview</h1>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {data.metrics.map((metric) => (
          <div key={metric.label} className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500">{metric.label}</div>
            <div className="text-2xl font-bold">
              {metric.loading ? "..." : metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Latest Activity Sections */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Latest Waitlist Entries</h2>
          <div className="space-y-2">
            {data.latestWaitlist.map((entry) => (
              <div key={entry.id} className="p-2 border-b">
                <div>{entry.email}</div>
                <div className="text-sm text-gray-500">
                  {new Date(entry.created_at || "").toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Latest Contact Submissions</h2>
          <div className="space-y-2">
            {data.latestContacts.map((contact) => (
              <div key={contact.id} className="p-2 border-b">
                <div>{contact.name} - {contact.email}</div>
                <div className="text-sm text-gray-500">
                  {new Date(contact.created_at || "").toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Latest Venue Inquiries</h2>
          <div className="space-y-2">
            {data.latestVenueInquiries.map((inquiry) => (
              <div key={inquiry.id} className="p-2 border-b">
                <div>{inquiry.venue_name} - {inquiry.contact_name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(inquiry.created_at || "").toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Latest Events</h2>
          <div className="space-y-2">
            {data.latestEvents.map((event) => (
              <div key={event.id} className="p-2 border-b">
                <div>{event.title} - {event.city}</div>
                <div className="text-sm text-gray-500">
                  {new Date(event.created_at || "").toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
