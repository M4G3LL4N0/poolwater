import SiteShell from "@/components/site-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import { firstThreeEvents, investorDeck, investorMetrics, viralLaunchPlan } from "@/lib/investor-data";

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl">
      <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{title}</h2>
      {children}
    </article>
  );
}

export default function InvestorsPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Investors</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            A repeatable late-night social entertainment format.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            POOL WATER turns passive nightlife into an activity-driven game floor with a scalable
            operating model, brand system, and event-to-venue expansion path.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {investorMetrics.map((metric) => (
              <div key={metric.label} className="rounded-3xl border border-white/12 bg-black/25 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-white/40">{metric.label}</p>
                <p className="mt-3 text-xl font-black text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">Pitch narrative</p>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {investorDeck.map((slide) => (
                <Card key={slide.title} title={slide.title}>
                  <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/64">
                    {slide.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Go-to-market</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
            Signal, density, recap, repeat.
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {viralLaunchPlan.map((phase) => (
              <Card key={phase.title} title={phase.title}>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-white/64">
                  {phase.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">First 3 events</p>
          <div className="mt-10 grid gap-5">
            {firstThreeEvents.map((event) => (
              <article key={event.title} className="rounded-[2.5rem] border border-white/12 bg-black/25 p-8 backdrop-blur-xl">
                <h2 className="text-3xl font-black tracking-[-0.05em] text-white">{event.title}</h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">{event.goal}</p>
                <ul className="mt-7 grid gap-2 text-sm leading-7 text-white/62">
                  {event.timeline.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
