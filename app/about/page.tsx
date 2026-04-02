import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { aboutBlocks } from "../../lib/poolwater-content";

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">About</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              A space designed for you to shine.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              POOL WATER is built around one idea: your night should be about connection, 
              competition, and creating memories that last.
            </p>
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="grid grid-gap lg:grid-cols-3">
            {aboutBlocks.map((block) => (
              <article key={block.title} className="soft-card rounded-[30px] p-7">
                <p className="text-2xl font-semibold tracking-[-0.04em] text-white">{block.title}</p>
                <p className="mt-5 text-sm leading-7 text-white/62">{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="container-shell section-block">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="section-kicker">The idea</p>
                <h2 className="section-title mt-4">Make going out feel participatory again.</h2>
              </div>

              <div className="glass-panel rounded-[34px] p-8">
                <p className="text-sm leading-8 text-white/68 md:text-base">
                  The room is designed around activity, not posturing. It gives people a reason to
                  move, something to react to, and a natural way to interact without the whole night
                  feeling forced. That is the difference between a room that looks busy and a room
                  that feels alive.
                </p>
                <p className="mt-6 text-sm leading-8 text-white/68 md:text-base">
                  POOL WATER is for people who want more from a night out: more motion, more texture,
                  more fun, better food, better interaction, and a place that keeps earning the next
                  hour. The room is designed to feel alive from the moment you walk in until the last
                  game ends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="glass-panel rounded-[36px] p-8 md:p-12">
            <p className="section-kicker">Keep going</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
              Learn the room before you step into it.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/energy" className="primary-btn">
                Read The Current
              </Link>
              <Link href="/events" className="secondary-btn">
                Explore events
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
