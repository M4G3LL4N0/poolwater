import Link from "next/link";
import SiteShell from "../components/site-shell";
import {
  differenceCards,
  experienceCards,
  heroPills,
  homeStats,
} from "../lib/poolwater-content";

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_60%)] opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(89,215,255,0.12),transparent_40%)] opacity-20" />
          <div className="page-hero-inner">
            <div className="max-w-5xl">
              <p className="section-kicker">Pool tables everywhere</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                Constant motion. <span className="text-cyan-200">Zero waiting.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-xl">
                Every element forces movement - pool cues swing, foosball rods spin, air hockey paddles 
                snap. The room is engineered so standing still isn't an option.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {heroPills.map((pill) => (
                  <span key={pill} className="pill">
                    {pill}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/events" className="primary-btn">
                  See the nights
                </Link>
                <Link href="/join" className="secondary-btn">
                  Get first access
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
              {homeStats.map((stat) => (
                <div key={stat.label} className="metric-card hover:border-white/20 transition-all duration-300">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">{stat.label}</p>
                  <p className="metric-value">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="section-kicker">What it feels like</p>
            <h2 className="section-title mt-4">
              Built for people who want the night to actually start.
            </h2>
            <p className="section-body mt-5">
              No standing around. No dead corners. No waiting for the room to become interesting.
              POOL WATER is designed so the second you get in, you already have somewhere to move,
              something to do, and a reason to stay.
            </p>
          </div>

          <div className="grid-cards mt-12">
            {experienceCards.map((card) => (
              <article key={card.title} className="soft-card rounded-[28px] p-6">
                <p className="text-lg font-medium text-white">{card.title}</p>
                <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="container-shell py-20 md:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">Why it hits different</p>
                <h2 className="section-title mt-4">More alive than a club. Better than just a bar.</h2>
                <p className="section-body mt-5">
                  The room works because the format works. Games create movement. Movement creates
                  interaction. Interaction makes the whole night feel bigger.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {differenceCards.map((card) => (
                  <article key={card.title} className="soft-card rounded-[28px] p-6">
                    <p className="text-lg font-medium text-white">{card.title}</p>
                    <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="glass-panel rounded-[36px] p-8 md:p-12 hover:shadow-[0_0_80px_rgba(89,215,255,0.12)] transition-all duration-500">
            <p className="section-kicker">The room</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Pool tables anchor the room. Everything else amplifies it.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              The clack of cues keeps the energy alive. Blue felt glows under neon. Chrome rails 
              catch reflections. The room is designed around pool first, with everything else 
              amplifying the experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/gallery" className="primary-btn">
                See the visual direction
              </Link>
              <Link href="/about" className="secondary-btn">
                Read the story
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
