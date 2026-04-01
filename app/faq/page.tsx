import SiteShell from "../../components/site-shell";
import { faqContent } from "../../lib/poolwater-content";

export default function FAQPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">FAQ</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Answers before you arrive.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Everything you need to know about POOL WATER nights.
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="grid gap-8">
            {faqContent.map((item) => (
              <article key={item.question} className="soft-card rounded-[30px] p-7">
                <p className="text-xl font-semibold tracking-[-0.04em] text-white">{item.question}</p>
                <p className="mt-4 text-sm leading-7 text-white/62">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
