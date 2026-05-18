import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import SiteShell from "@/components/site-shell";
import { eventFormats, eventsHighlights } from "@/lib/poolwater-content";
import { getMockEvents } from "@/lib/events";

export default function EventsPage() {
  const events = getMockEvents();
  const featured = events[0];

  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Events</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Nights built to keep moving.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            Different formats, same pull: pool tables hot, side games glowing, food moving, and
            a room that does not wait around.
          </p>
        </section>

        {featured ? (
          <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
            <div className="rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-8 shadow-[0_0_70px_rgba(34,211,238,.12)] sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/75">Featured drop</p>
              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-end">
                <div>
                  <h2 className="text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">{featured.title}</h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/48">
                    {featured.city} / {featured.timeLabel}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-white/66">{featured.summary}</p>
                </div>
                <div className="rounded-[2rem] border border-white/12 bg-black/25 p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/42">Date</p>
                      <p className="mt-2 text-xl font-black text-white">{featured.dateLabel}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-white/42">Venue</p>
                      <p className="mt-2 text-xl font-black text-white">{featured.venue}</p>
                    </div>
                  </div>
                  <Link href="/join" className="mt-7 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950">
                    Get first access
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">What to expect</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Multiple ways to lock into the night.
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-black/25 p-7">
              <ul className="grid gap-3 text-sm leading-7 text-white/66">
                {eventsHighlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Upcoming drops</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {events.map((event) => (
              <article key={event.id} className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] backdrop-blur-xl">
                <div className="h-44 border-b border-white/10 bg-[radial-gradient(circle_at_22%_18%,rgba(34,211,238,.28),transparent_28%),radial-gradient(circle_at_82%_26%,rgba(139,92,246,.25),transparent_28%),linear-gradient(135deg,#0b1624,#03070d)] p-5">
                  <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/78">
                    {event.status}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{event.title}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">
                    {event.city} / {event.timeLabel}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-white/62">{event.summary}</p>
                  <Link href="/join" className="mt-7 inline-flex rounded-full border border-white/15 px-5 py-2 text-sm font-bold text-white">
                    Get notified
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {eventFormats.map((format) => (
              <article key={format.title} className="rounded-[2rem] border border-white/12 bg-black/25 p-7">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{format.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{format.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
