import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { eventFormats, eventsHighlights } from "../../lib/poolwater-content";

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
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="glass-panel rounded-[36px] p-8 md:p-12">
            <p className="section-kicker">Timing</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Come early enough to settle in. Stay late enough to understand it.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              The room is designed to escalate. The later it gets, the more the whole floor starts
              to connect.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="primary-btn">
                Join the list
              </Link>
              <Link href="/gallery" className="secondary-btn">
                See the mood
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
