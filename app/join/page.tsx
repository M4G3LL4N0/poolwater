import SiteShell from "@/components/site-shell";
import { SubpageVisual } from "@/components/SubpageVisual";
import WaitlistForm from "@/components/waitlist-form";
import { joinReasons } from "@/lib/poolwater-content";

export default function JoinPage() {
  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Join</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Be early, not late.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            Get first access to drops, dates, and private updates before they hit the main feed.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
            <div className="rounded-[2.5rem] border border-white/12 bg-black/25 p-8 backdrop-blur-xl sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">What you get</p>
              <ul className="mt-7 grid gap-4 text-sm leading-7 text-white/68">
                {joinReasons.map((reason) => (
                  <li key={reason} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    {reason}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-8 shadow-[0_0_70px_rgba(34,211,238,.12)] backdrop-blur-xl sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/75">Waitlist</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white">Lock your place early.</h2>
              <p className="mt-4 text-sm leading-7 text-white/66">
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
