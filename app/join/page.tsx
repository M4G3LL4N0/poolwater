import SiteShell from "../../components/site-shell";
import WaitlistForm from "../../components/waitlist-form";
import { joinReasons } from "../../lib/poolwater-content";

export default function JoinPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Join</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Be early, not late.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Get first access to drops, dates, and private updates before they hit the main feed.
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel rounded-[36px] p-8 md:p-10">
              <p className="section-kicker">What you get</p>
              <ul className="mt-6 list-tight text-sm leading-7 text-white/66">
                {joinReasons.map((reason) => (
                  <li key={reason}>• {reason}</li>
                ))}
              </ul>
            </div>

            <div className="soft-card rounded-[36px] p-8 md:p-10">
              <p className="section-kicker">Waitlist</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                Lock your place early.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Enter your details for first access to event drops, private updates, and priority
                release windows.
              </p>

              <WaitlistForm source="join-page" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
