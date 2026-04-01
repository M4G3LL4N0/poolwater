import SiteShell from "../../components/site-shell";
import {
  investorMetrics,
  investorDeck,
  viralLaunchPlan,
  firstThreeEvents,
  portfolioUiStructure,
} from "../../lib/investor-data";

function InvestorCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <article className="soft-card rounded-[30px] p-7">
      <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{title}</p>
      <ul className="mt-5 list-tight text-sm leading-7 text-white/64">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </article>
  );
}

export default function InvestorsPage() {
  return (
    <SiteShell accent="investor">
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Investors</p>
            <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              The strategic layer behind the room.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              This page holds the private company narrative: the deck, the launch motion, the event
              system, and the structure that makes the brand scalable.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {investorMetrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">{metric.label}</p>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <p className="section-kicker">Pitch deck</p>
          <h2 className="section-title mt-4 max-w-4xl">
            Full deck content for a Sequoia / a16z-level narrative.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {investorDeck.map((slide) => (
              <article key={slide.title} className="soft-card rounded-[30px] p-7">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{slide.title}</p>
                <ul className="mt-5 list-tight text-sm leading-7 text-white/64">
                  {slide.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="container-shell py-20 md:py-24">
            <p className="section-kicker">Viral launch campaign</p>
            <h2 className="section-title mt-4 max-w-4xl">
              How the brand spreads: signal, density, recap, repeat.
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {viralLaunchPlan.map((phase) => (
                <article key={phase.title} className="soft-card rounded-[30px] p-7">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{phase.title}</p>
                  <ul className="mt-5 list-tight text-sm leading-7 text-white/64">
                    {phase.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <p className="section-kicker">First 3 event execution blueprint</p>
          <h2 className="section-title mt-4 max-w-4xl">
            Exact event progression: prove the room, tighten the room, own the room.
          </h2>

          <div className="mt-12 grid gap-6">
            {firstThreeEvents.map((event) => (
              <article key={event.title} className="glass-panel rounded-[34px] p-8 md:p-10">
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{event.title}</p>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">{event.goal}</p>
                <ul className="mt-7 list-tight text-sm leading-7 text-white/64">
                  {event.timeline.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>


        <section className="container-shell py-20 md:py-24">
          <div className="glass-panel rounded-[36px] p-8 md:p-12">
            <p className="section-kicker">Summary</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              The bet is simple: own a repeatable format, not a random night.
            </h2>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 md:text-base">
              The brand wins if the room becomes legible, repeatable, and worth returning to. Publicly,
              it should feel cultural and magnetic. Privately, it should operate like a disciplined
              experience company with real rollout logic.
            </p>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
