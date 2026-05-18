import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import SiteShell from "@/components/site-shell";
import { aboutBlocks } from "@/lib/poolwater-content";

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="about" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">About</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            A night out should feel like you stepped into something.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            POOL WATER is a late-night adult social game floor built for people who are bored with
            passive bars, stale pool halls, corporate arcades, and nights that never really start.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {aboutBlocks.map((block) => (
              <article key={block.title} className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{block.title}</h2>
                <p className="mt-5 text-sm leading-7 text-white/62">{block.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">Purpose</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Make going out participatory again.
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/12 bg-black/25 p-8 text-base leading-8 text-white/66 backdrop-blur-xl">
              The room is designed around activity, not posturing. Games create movement, movement
              creates energy, and energy makes interaction feel natural. POOL WATER is for nights
              that feel active, social, sharp, and worth remembering.
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-8 sm:p-12">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Learn the room before you step into it.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/energy" className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950">
                Read The Current
              </Link>
              <Link href="/events" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
                Explore events
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
