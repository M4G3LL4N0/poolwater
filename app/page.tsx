import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Music4,
  Sparkles,
  Target,
  Trophy,
  UtensilsCrossed,
} from "lucide-react";
import EcosystemRail from "@/components/ecosystem-rail";
import {
  poolWaterFeatures,
  poolWaterPillars,
  poolWaterStats,
} from "@/lib/poolwater-site";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.14),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.18),transparent_24%),linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.08]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-8 md:py-32">
          <div className="grid items-end gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/60">
                <Sparkles className="h-3.5 w-3.5" />
                POOL WATER
              </div>

              <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                Don’t just go out. Jump in.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
                POOL WATER is an activity-driven nightlife brand built around
                pool tables, nostalgic music, late-night food, and high-energy
                social interaction. It is designed as a legal, scalable
                alternative to passive club nightlife and inconsistent
                underground afters.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
                >
                  Explore the concept
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#ecosystem"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.06]"
                >
                  View ecosystem
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {poolWaterStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-white/40">
                    {stat.label}
                  </p>
                  <p className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </p>
                </div>
              ))}

              <div className="sm:col-span-2 rounded-[28px] border border-emerald-400/15 bg-gradient-to-br from-emerald-400/10 via-white/[0.04] to-blue-500/10 p-6">
                <div className="flex items-center gap-3 text-white/80">
                  <Building2 className="h-5 w-5" />
                  <p className="text-sm font-medium uppercase tracking-[0.24em]">
                    Noaerth ecosystem company
                  </p>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
                  POOL WATER is part of a larger venture portfolio designed to
                  build category-defining companies across software,
                  infrastructure, intelligence, and cultural experience brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl px-6 py-20 md:px-8"
      >
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/45">
            Experience
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            An underground-feeling adult social club built for scale.
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60 md:text-base">
            POOL WATER combines industrial atmosphere, social competition,
            nostalgic music programming, and food-driven nightlife into a
            repeatable entertainment format.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {poolWaterFeatures.map((feature, index) => {
            const icons = [
              Trophy,
              Music4,
              UtensilsCrossed,
              Target,
            ];
            const Icon = icons[index] ?? Sparkles;

            return (
              <article
                key={feature.title}
                className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6"
              >
                <Icon className="h-6 w-6 text-emerald-300" />
                <h3 className="mt-5 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-white/45">
                Principles
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Designed as a scalable nightlife system, not just an event.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                The business model depends on strong brand identity, dense rooms,
                repeatable operations, and a format that can expand city by
                city.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {poolWaterPillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-[#0b0f16] p-6"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/75">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {pillar.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ecosystem" className="mx-auto max-w-7xl px-6 py-20 md:px-8">
        <EcosystemRail />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8">
            <div className="flex items-center gap-3 text-white/80">
              <Target className="h-5 w-5" />
              <p className="text-sm font-medium uppercase tracking-[0.22em]">
                Business model
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white">
              Affordable entry, dense attendance, layered monetization.
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
              POOL WATER is built to monetize across entry fees, pool table
              activity, tournaments, food partnerships, beverage partnerships,
              merchandising, and future sponsorships — while keeping the core
              experience accessible enough to drive volume.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Entry fees",
                "Table rentals",
                "Tournament fees",
                "Food partnerships",
                "Beverage share",
                "Merchandise",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/75"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[32px] border border-white/10 bg-[#0a1019] p-8">
              <Music4 className="h-6 w-6 text-cyan-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">
                Cultural positioning
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                A nightlife brand with a nostalgic, rebellious, memeable tone
                that feels more alive than a corporate arcade and more reliable
                than underground after-hours.
              </p>
            </article>

            <article className="rounded-[32px] border border-white/10 bg-[#100c18] p-8">
              <Trophy className="h-6 w-6 text-violet-300" />
              <h3 className="mt-6 text-xl font-semibold text-white">
                Expansion path
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Start with recurring venue partnerships, validate density and
                retention, then move toward permanent locations and multi-city
                expansion.
              </p>
            </article>

            <article className="md:col-span-2 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                Long-term vision
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                Build a category-defining adult social entertainment company.
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/60">
                POOL WATER is designed to become a national nightlife and social
                gaming brand — a hybrid between nightlife, social clubs,
                competitive entertainment, and cultural community.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-8">
          <div className="rounded-[36px] border border-white/10 bg-gradient-to-br from-emerald-400/10 via-white/[0.04] to-blue-500/10 p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">
              POOL WATER
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">
              Nightlife you can actually participate in.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/65 md:text-base">
              A scalable nightlife brand built on pool, music, food, density,
              and community — launched inside the Noaerth ecosystem for long-term
              expansion.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#experience"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Dive in
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#ecosystem"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 transition hover:bg-white/[0.06]"
              >
                View ecosystem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
