import SiteShell from "../../components/site-shell";
import { joinReasons } from "../../lib/poolwater-content";

export default function JoinPage() {
  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Join</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              Get VIP access to your new favorite nights.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              Be first in line for exclusive events, special perks, and the chance to shape 
              the future of nightlife.
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
                Contact capture block
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                Wire this next to Supabase or your preferred capture flow. For now, this page gives
                you the layout and the copy without risking build issues from unfinished backend work.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/60">
                  Email input goes here
                </div>
                <div className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white/60">
                  Phone input goes here
                </div>
                <div className="primary-btn w-full">Request first access</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
