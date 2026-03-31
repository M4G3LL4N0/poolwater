import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { eventCards, eventFormats, eventsHighlights } from "../../lib/poolwater-content";

export default function EventsPage() {
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

        <section className="container-shell py-20 md:py-24">
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
          <div className="container-shell py-20 md:py-24">
            <p className="section-kicker">Upcoming drops</p>
            <h2 className="section-title mt-4 max-w-3xl">Structured event cards, ready for real dates.</h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {eventCards.map((event) => (
                <article key={event.slug} className="overflow-hidden rounded-[30px] soft-card">
                  <div className="h-44 border-b border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(89,215,255,0.25),transparent_25%),radial-gradient(circle_at_80%_25%,rgba(124,109,255,0.22),transparent_28%),linear-gradient(135deg,#0b1624,#03070d)] p-6">
                    <span className="rounded-full border border-white/15 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80">
                      {event.status}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/42">
                          {event.city} • {event.timeLabel}
                        </p>
                      </div>
                      <p className="text-sm text-white/58">{event.dateLabel}</p>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-white/62">{event.summary}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {event.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/72"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                      <p className="text-sm text-white/52">{event.venue}</p>
                      <Link href="/join" className="secondary-btn">
                        {event.cta}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
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
