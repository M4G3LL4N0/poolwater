import SiteShell from "../../components/site-shell";
import { galleryMoodCards } from "../../lib/poolwater-content";

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Gallery</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              The visual language of the room.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Premium, dark, reflective, game-heavy, and colder than a typical nightlife build.
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryMoodCards.map((card, index) => (
              <article key={card.title} className="overflow-hidden rounded-[30px] soft-card">
                <div
                  className={[
                    "h-56 border-b border-white/10",
                    index % 6 === 0 ? "bg-[radial-gradient(circle_at_25%_20%,rgba(89,215,255,0.28),transparent_28%),linear-gradient(135deg,#0b1624,#050911)]" : "",
                    index % 6 === 1 ? "bg-[radial-gradient(circle_at_70%_25%,rgba(124,109,255,0.26),transparent_30%),linear-gradient(135deg,#0d1523,#03070d)]" : "",
                    index % 6 === 2 ? "bg-[radial-gradient(circle_at_30%_30%,rgba(76,224,198,0.25),transparent_30%),linear-gradient(135deg,#102031,#060b11)]" : "",
                    index % 6 === 3 ? "bg-[radial-gradient(circle_at_80%_20%,rgba(255,122,162,0.22),transparent_30%),linear-gradient(135deg,#170d14,#08090d)]" : "",
                    index % 6 === 4 ? "bg-[radial-gradient(circle_at_50%_25%,rgba(60,123,255,0.25),transparent_30%),linear-gradient(135deg,#0c1420,#05070c)]" : "",
                    index % 6 === 5 ? "bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_22%),linear-gradient(135deg,#10151b,#06080d)]" : "",
                  ].join(" ")}
                >
                  <div className="flex h-full items-end p-5">
                    <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/80 backdrop-blur">
                      Mood tile
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xl font-semibold tracking-[-0.04em] text-white">{card.title}</p>
                  <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
