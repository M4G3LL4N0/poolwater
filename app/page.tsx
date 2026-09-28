import Link from "next/link";
import { TrustStrip } from "@/components/TrustStrip";
import SiteShell from "@/components/site-shell";

const pills = [
  "Pool tables everywhere",
  "Arcade glow",
  "Foosball + air hockey",
  "Real late-night food",
  "No standing around",
];

const activityCards = [
  {
    title: "You do not just stand there",
    body: "The room gives you something to do immediately: grab a table, drift into a side game, chase a rematch, or follow the energy.",
  },
  {
    title: "Meeting people feels natural",
    body: "Games remove the weird pressure. Conversation starts because the night is already moving.",
  },
  {
    title: "Better value than the usual night out",
    body: "More play, more texture, better food, and a room that earns the next hour instead of draining it.",
  },
];

const experience = [
  "Pool first, not pool as decoration",
  "Old-school game center feel without the stale carpet",
  "Loud in the right way",
  "Chrome reflections, blue felt, cold glow",
  "Food that actually matters after midnight",
  "A floor built for motion instead of posing",
];

export default function HomePage() {
  return (
    <SiteShell>
      <main>
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
          <TrustStrip />
        </div>

        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-[720px] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.22),transparent_45%)]" />
          <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-cyan-200/80">
                Late-night social game floor
              </p>
              <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
                Don’t just go out.{" "}
                <span className="block bg-gradient-to-r from-cyan-100 via-sky-300 to-violet-300 bg-clip-text text-transparent">
                  Jump in.
                </span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68 sm:text-xl">
                Pool tables. Arcade glow. Fast side games. Real food. A room built to pull you in
                the second you walk through the door.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {pills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,.12)] backdrop-blur"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/join"
                  className="rounded-full bg-cyan-200 px-6 py-3 text-sm font-black text-slate-950 shadow-[0_0_34px_rgba(34,211,238,.28)] transition hover:bg-white"
                >
                  Get first access
                </Link>
                <Link
                  href="/events"
                  className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition hover:bg-white/12"
                >
                  See the nights
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2.5rem] border border-white/12 bg-white/[0.07] p-4 shadow-[0_30px_120px_rgba(8,145,178,.25)] backdrop-blur-2xl">
                <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_25%_18%,rgba(103,232,249,.30),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(139,92,246,.28),transparent_26%),linear-gradient(145deg,#102033,#03070d)]">
                  <div className="absolute inset-x-8 top-16 h-32 rounded-full border border-cyan-200/20 bg-cyan-300/10 blur-sm" />
                  <div className="absolute left-10 right-10 top-28 h-48 rounded-[32px] border border-cyan-100/20 bg-[#0b5b66]/40 shadow-[inset_0_0_60px_rgba(34,211,238,.22)]" />
                  <div className="absolute left-[18%] top-[42%] h-12 w-12 rounded-full bg-cyan-200 shadow-[0_0_28px_rgba(103,232,249,.65)]" />
                  <div className="absolute right-[20%] top-[52%] h-12 w-12 rounded-full bg-violet-300 shadow-[0_0_28px_rgba(167,139,250,.65)]" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-32">
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-100/70">Room pulse</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {["Pool", "Arcade", "Food"].map((label) => (
                        <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.08] p-4 backdrop-blur">
                          <p className="text-xs text-white/42">{label}</p>
                          <p className="mt-2 text-xl font-black text-white">On</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">The fix</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Nightlife gets better when the room gives you something to do.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {activityCards.map((card) => (
              <article key={card.title} className="rounded-[2rem] border border-white/12 bg-white/[0.055] p-7 backdrop-blur-xl">
                <h3 className="text-2xl font-black tracking-[-0.04em] text-white">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">The room</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                Pool first. Arcade heat. Food that keeps the night alive.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/62">
                POOL WATER is built like an adult game-room alternative to clubs, stale bars, and
                dead pool halls. It is premium, playful, social, and always in motion.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {experience.map((item) => (
                <div key={item} className="rounded-3xl border border-white/12 bg-black/24 p-5 text-sm font-semibold text-white/72">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-8 shadow-[0_0_70px_rgba(34,211,238,.14)] sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/80">First access</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
              Be early for the first room.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Get private drops, first event dates, and early windows before the room gets crowded.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/join" className="rounded-full bg-white px-6 py-3 text-sm font-black text-slate-950">
                Join the list
              </Link>
              <Link href="/gallery" className="rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white">
                See the mood
              </Link>
            </div>
          </div>
        </section>
    </main>
    </SiteShell>
  );
}
