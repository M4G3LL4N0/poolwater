import SiteShell from "@/components/site-shell";
import { AdminOverviewResponse } from "@/lib/types";

type ActivityItem = {
  id?: string;
  email?: string;
  name?: string;
  venue_name?: string;
  contact_name?: string;
  created_at?: string;
};

function MetricCard({
  metric,
}: {
  metric: { label: string; value: string | number };
}) {
  return (
    <div className="soft-card rounded-[24px] p-5">
      <p className="text-xs uppercase tracking-[0.2em] text-white/40">
        {metric.label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
    </div>
  );
}

function ActivityList({
  title,
  items = [],
}: {
  title: string;
  items?: ActivityItem[];
}) {
  if (items.length === 0) {
    return (
      <div className="soft-card rounded-[24px] p-5">
        <p className="text-sm text-white/60">{title}</p>
        <p className="mt-3 text-sm text-white/40">No data yet</p>
      </div>
    );
  }

  return (
    <div className="soft-card rounded-[24px] p-5">
      <p className="text-sm text-white/60">{title}</p>
      <div className="mt-4 space-y-3">
        {items.map((item, i) => (
          <div key={item.id || i} className="text-sm text-white/80">
            {item.email ||
              item.name ||
              item.venue_name ||
              item.contact_name ||
              "Entry"}
          </div>
        ))}
      </div>
    </div>
  );
}

async function getData(): Promise<AdminOverviewResponse> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/admin/overview`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed fetch");
    }

    return res.json();
  } catch {
    return {
      metrics: [],
      latestWaitlist: [],
      latestContacts: [],
      latestVenueInquiries: [],
      source: "fallback",
    };
  }
}

export default async function AdminPage() {
  const data = await getData();

  return (
    <SiteShell>
      <main className="container-shell py-12">
        <h1 className="text-3xl font-semibold text-white mb-8">
          Admin Overview
        </h1>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {(data.metrics || []).map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>

        {/* Activity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ActivityList
            title="Latest Waitlist Entries"
            items={data.latestWaitlist ?? []}
          />
          <ActivityList
            title="Latest Contact Submissions"
            items={data.latestContacts ?? []}
          />
          <ActivityList
            title="Latest Venue Inquiries"
            items={data.latestVenueInquiries ?? []}
          />
        </div>
      </main>
    </SiteShell>
  );
}
