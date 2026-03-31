import Link from "next/link";
import SiteShell from "../../components/site-shell";
import { currentPrinciples } from "../../lib/poolwater-content";

export default function EnergyPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">The Current</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              The rules the room runs on.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Not a manifesto. Not a lecture. Just the energy the night is built to hold.
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="stack-grid">
            {currentPrinciples.map((item, index) => (
              <article key={item.title} className="soft-card rounded-[30px] p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/75">
                  {index + 1}
                </div>
                <p className="mt-5 text-xl font-semibold tracking-[-0.04em] text-white">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10">
          <div className="container-shell py-20 md:py-24">
            <div className="glass-panel rounded-[36px] p-8 md:p-12">
              <p className="section-kicker">Next</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                The room means more once you know how it is supposed to feel.
              </h2>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/gallery" className="primary-btn">
                  See the visual language
                </Link>
                <Link href="/join" className="secondary-btn">
                  Get first access
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
