import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { eventFormats, eventsHighlights } from "../../lib/poolwater-content";
import { getMockEvents } from "../../lib/events";
import { EventRecord } from "../../lib/types";

function getEvents(): EventRecord[] {
  return getMockEvents();
}

export default function EventsPage() {
  const events = getEvents();
  const featuredEvent = events.find((event) => event.is_featured) ?? events[0] ?? null;

  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Events</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Nights built to keep moving.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Different formats. Same principle. The room should already feel alive when you walk in.
            </p>
          </div>
        </section>

        {featuredEvent ? (
          <section className="container-shell section-block">
            <div className="glass-panel rounded-[36px] p-8 md:p-10">
              <p className="section-kicker">Featured Drop</p>
              <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                    {featuredEvent.title}
                  </h2>
                  <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/42">
                    {featuredEvent.city} • {featuredEvent.time_label ?? "Late night"}
                  </p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/64 md:text-base">
                    {featuredEvent.summary ?? "A featured Pool Water event."}
                  </p>
                </div>

                <div className="soft-card rounded-[28px] p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Date</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {featuredEvent.date_label ?? "TBA"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-white/40">Venue</p>
                      <p className="mt-2 text-lg font-semibold text-white">
                        {featuredEvent.venue ?? "Private release first"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/join" className="primary-btn w-full">
                      Get first access
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        <section className="container-shell section-block">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">What to expect</p>
              <h2 className="section-title mt-4">A night with multiple ways to lock in.</h2>
            </div>

            <div className="soft-card rounded-[32px] p-8">
              <ul className="list-tight text-sm leading-7 text-white/66">
                {eventsHighlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="container-shell section-block">
            <p className="section-kicker">Upcoming drops</p>
            <h2 className="section-title mt-4 max-w-3xl">Structured event cards, ready for real dates.</h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {events.map((event) => (
                <article key={event.slug} className="overflow-hidden rounded-[30px] soft-card">
                  <div className="h-44 border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(89,215,255,0.25),transparent_25%),radial-gradient(circle_at_80%_25%,rgba(124,109,255,0.22),transparent_28%),linear-gradient(135deg,#0b1624,#03070d)] p-6">
                    <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80">
                      {event.status ?? "Coming soon"}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">
                          {event.city} • {event.time_label ?? "Late night"}
                        </p>
                      </div>
                      <p className="text-sm text-white/58">{event.date_label ?? "TBA"}</p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/62">
                      {event.summary ?? "Pool Water event"}
                    </p>

                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <p className="text-sm text-white/52">
                        {event.venue ?? "Private release first"}
                      </p>
                      <Link href="/join" className="secondary-btn">
                        Get notified
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell section-block">
          <p className="section-kicker">Formats</p>
          <h2 className="section-title mt-4 max-w-3xl">Different nights, same pull.</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {eventFormats.map((format) => (
              <article key={format.title} className="soft-card rounded-[28px] p-6">
                <p className="text-xl font-semibold tracking-[-0.04em] text-white">{format.title}</p>
                <p className="mt-4 text-sm leading-7 text-white/62">{format.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
