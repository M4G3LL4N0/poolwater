import Link from "next/link";
import { SubpageVisual } from "@/components/SubpageVisual";
import SiteShell from "@/components/site-shell";
import { currentPrinciples } from "@/lib/poolwater-content";

export default function EnergyPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">The Current</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            The rules the room runs on.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            Movement, controlled chaos, real interaction, and a floor that pulls people deeper the
            second they arrive.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {currentPrinciples.map((item, index) => (
              <article key={item.title} className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-300/10 text-sm font-black text-cyan-100">
                  {index + 1}
                </div>
                <h2 className="mt-6 text-2xl font-black tracking-[-0.04em] text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/12 bg-black/25 p-8 sm:p-12">
            <h2 className="max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              The room means more once you know how it is supposed to feel.
            </h2>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/gallery" className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-black text-slate-950">
                See the mood
              </Link>
              <Link href="/join" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
                Get first access
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
