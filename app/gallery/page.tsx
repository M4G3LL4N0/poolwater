import SiteShell from "@/components/site-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import { galleryMoodCards } from "@/lib/poolwater-content";

const tileBackgrounds = [
  "bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,.30),transparent_28%),linear-gradient(135deg,#0b1624,#050911)]",
  "bg-[radial-gradient(circle_at_70%_25%,rgba(139,92,246,.28),transparent_30%),linear-gradient(135deg,#0d1523,#03070d)]",
  "bg-[radial-gradient(circle_at_30%_30%,rgba(45,212,191,.26),transparent_30%),linear-gradient(135deg,#102031,#060b11)]",
  "bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,.24),transparent_30%),linear-gradient(135deg,#081525,#05070d)]",
  "bg-[radial-gradient(circle_at_50%_25%,rgba(147,197,253,.24),transparent_30%),linear-gradient(135deg,#0c1420,#05070c)]",
  "bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,.10),transparent_22%),linear-gradient(135deg,#10151b,#06080d)]",
];

export default function GalleryPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Gallery</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Blue felt, chrome, glass, glow.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            Premium mood tiles for the room: not stock nightlife, not generic arcade, not a dead
            pool hall. Cold, glossy, social, and alive.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {galleryMoodCards.map((card, index) => (
              <article key={card.title} className="overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.055] backdrop-blur-xl">
                <div className={`h-60 border-b border-white/10 ${tileBackgrounds[index % tileBackgrounds.length]}`}>
                  <div className="flex h-full items-end p-5">
                    <span className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/78 backdrop-blur">
                      Mood tile
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{card.title}</h2>
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
