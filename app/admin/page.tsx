import SiteShell from "@/components/site-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import { getMockEvents } from "@/lib/events";

const metrics = [
  { label: "Waitlist", value: "Pending DB" },
  { label: "Events", value: getMockEvents().length },
  { label: "Status", value: "MVP ready" },
  { label: "Auth", value: "Required later" },
];

export default function AdminPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
      <SubpageVisual variant="default" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Admin</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-[-0.06em] text-white">
          Operations snapshot
        </h1>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-amber-200/75">
          MVP note: protect this page with authentication before using it for real operations.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-white/40">{metric.label}</p>
              <p className="mt-3 text-2xl font-black text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
