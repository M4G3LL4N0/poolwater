import Link from "next/link";
import SiteShell from "../components/site-shell";
import {
  differenceCards,
  experienceCards,
  heroPills,
  homeStats,
} from "../lib/poolwater-content";

const showcaseTiles = [
  {
    chip: "Pool floor",
    title: "Blue Felt Rows",
    body: "Long table lines, chrome edges, reflected light, and motion everywhere you look.",
    artClass:
      "bg-[radial-gradient(circle_at_20%_18%,rgba(89,215,255,0.25),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(124,109,255,0.18),transparent_18%),linear-gradient(145deg,#0d1d2e,#050911)]",
  },
  {
    chip: "Arcade heat",
    title: "Game Center Pulse",
    body: "Cabinets glowing in the dark, side-game noise, and that old-school late-night electricity.",
    artClass:
      "bg-[radial-gradient(circle_at_24%_28%,rgba(255,122,162,0.18),transparent_18%),radial-gradient(circle_at_80%_22%,rgba(60,123,255,0.22),transparent_20%),linear-gradient(145deg,#17111b,#06080d)]",
  },
  {
    chip: "Fast edges",
    title: "Air Hockey Sparks",
    body: "Reflective surfaces, speed bursts, leaning bodies, and little flashes of competition all night.",
    artClass:
      "bg-[radial-gradient(circle_at_30%_20%,rgba(76,224,198,0.2),transparent_18%),radial-gradient(circle_at_72%_35%,rgba(89,215,255,0.16),transparent_20%),linear-gradient(145deg,#0f1b22,#04080c)]",
  },
  {
    chip: "Late food",
    title: "Heat In The Room",
    body: "Real food, grease-paper texture, trays, wrappers, and the feeling that the room is built to hold people.",
    artClass:
      "bg-[radial-gradient(circle_at_26%_18%,rgba(255,160,80,0.22),transparent_18%),radial-gradient(circle_at_78%_20%,rgba(255,122,162,0.12),transparent_18%),linear-gradient(145deg,#1e1310,#08090d)]",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero hero-gradient">
          <div className="page-hero-inner">
            <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
              <div>
                <p className="section-kicker">Late-night social playground</p>

                <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl">
                  Don’t just go out.
                  <br />
                  <span className="text-cyan-200">Jump in.</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/68 md:text-xl">
                  Pool tables. Arcade glow. Fast side games. Real food. A room built to pull you in
                  the second you walk through the door.
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

              <div className="hero-panel p-4 md:p-5">
                <div className="hero-orbit p-6">
                  <div className="hero-ring left-[10%] top-[10%] h-28 w-28" />
                  <div className="hero-ring left-[32%] top-[18%] h-40 w-40" />
                  <div className="hero-ring right-[12%] top-[16%] h-24 w-24" />
                  <div className="hero-ring bottom-[14%] left-[14%] h-20 w-20" />
                  <div className="hero-ring bottom-[10%] right-[18%] h-36 w-36" />

                  <div className="absolute left-[12%] top-[18%] h-16 w-16 rounded-full bg-cyan-300/22 blur-2xl" />
                  <div className="absolute right-[18%] top-[20%] h-20 w-20 rounded-full bg-violet-400/20 blur-2xl" />
                  <div className="absolute bottom-[16%] left-[36%] h-20 w-20 rounded-full bg-teal-300/18 blur-2xl" />

                  <div className="relative flex h-full min-h-[360px] items-end">
                    <div className="grid w-full gap-4 sm:grid-cols-2">
                      {homeStats.map((stat) => (
                        <div key={stat.label} className="metric-card">
                          <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                            {stat.label}
                          </p>
                          <p className="metric-value">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="stack-lg">
            <div className="section-intro">
              <p className="section-kicker">What it feels like</p>
              <h2 className="section-title mt-4">
                More like stepping into a live game floor than another forgettable night out.
              </h2>
              <p className="section-body mt-5">
                The visual language should feel colder, glossier, darker, and sharper than typical
                nightlife. Blue felt energy. Chrome reflections. Glassy overlays. Motion in every
                direction.
              </p>
            </div>

            <div className="grid grid-gap md:grid-cols-2">
              {showcaseTiles.map((tile) => (
                <article key={tile.title} className="card min-h-[320px]">
                  <div className={`absolute inset-0 ${tile.artClass}`} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
                  <div className="absolute left-6 top-6">
                    <span className="tile-chip">{tile.chip}</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="tile-kicker">Pool Water</p>
                    <h3 className="tile-title mt-2">{tile.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/66">{tile.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="section-intro">
            <p className="section-kicker">Built for the room</p>
            <h2 className="section-title mt-4">
              Designed around movement, competition, and staying longer than planned.
            </h2>
          </div>

          <div className="feature-grid mt-12">
            {experienceCards.map((card) => (
              <article key={card.title} className="feature-card">
                <p className="feature-card-title">{card.title}</p>
                <p className="feature-card-body">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="why-grid">
            <div className="why-lead-card">
              <p className="section-kicker">Why it lands</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                The room gives people something to lock into immediately.
              </h2>
              <p className="mt-5 text-sm leading-8 text-white/64 md:text-base">
                That is the difference between a place that looks busy and a place that feels alive.
                The layout, the games, the surfaces, the food, and the sound all work together so
                the night starts fast and keeps opening up.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/gallery" className="primary-btn">
                  See the mood
                </Link>
                <Link href="/about" className="secondary-btn">
                  Read the story
                </Link>
              </div>
            </div>

            <div className="why-side-grid">
              {differenceCards.map((card) => (
                <article key={card.title} className="why-side-card">
                  <p className="text-lg font-semibold tracking-[-0.04em] text-white">{card.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell section-block">
          <div className="cta-panel">
            <p className="section-kicker">The next move</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.06em] text-white md:text-5xl">
              Step into the room before everyone else does.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              Early drops, first access, private updates, and the strongest nights before they get
              crowded out.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="primary-btn">
                Join first access
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
