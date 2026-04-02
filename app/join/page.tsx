import SiteShell from "../../components/site-shell";
import WaitlistForm from "../../components/waitlist-form";
import { joinReasons, waitlistMessages } from "../../lib/poolwater-content";

export default function JoinPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Join</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              {waitlistMessages.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              {waitlistMessages.subtitle}
            </p>
          </div>
        </section>

        <section className="container-shell section-block">
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
                {waitlistMessages.formTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {waitlistMessages.formDescription}
              </p>

              <WaitlistForm source="join-page" />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
