import SiteShell from "@/components/site-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import { faqContent } from "@/lib/poolwater-content";

export default function FAQPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">FAQ</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Answers before you arrive.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            The basics for first timers, solo guests, groups, and anyone wondering what kind of
            night POOL WATER is building.
          </p>
        </section>

        <section className="mx-auto max-w-4xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {faqContent.map((item) => (
              <article key={item.question} className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl">
                <h2 className="text-2xl font-black tracking-[-0.04em] text-white">{item.question}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
