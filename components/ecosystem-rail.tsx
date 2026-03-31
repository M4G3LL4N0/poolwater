import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ecosystemProjects } from "@/lib/poolwater-site";

export default function EcosystemRail() {
  return (
    <section className="relative overflow-hidden">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.28em] text-white/45">
            Ecosystem
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Built inside the Noaerth portfolio
          </h2>
        </div>
        <p className="hidden max-w-md text-sm leading-6 text-white/50 md:block">
          POOL WATER is part of a broader ecosystem of ventures spanning
          software, infrastructure, intelligence, and real-world experiences.
        </p>
      </div>

      <div className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="w-1 shrink-0 md:hidden" />
        {ecosystemProjects.map((project) => {
          const isExternal =
            project.href.startsWith("http://") ||
            project.href.startsWith("https://");

          const card = (
            <article className="group flex min-h-[220px] w-[280px] shrink-0 snap-start flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.06]">
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-cyan-200">
                    {project.stage}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/35 transition group-hover:text-white/80" />
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/40">
                  {project.category}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-sm text-white/70">
                  {project.name === "POOL WATER"
                    ? "Late-night social entertainment brand"
                    : "Connected through the Noaerth venture ecosystem"}
                </p>
              </div>
            </article>
          );

          return isExternal ? (
            <Link
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {card}
            </Link>
          ) : (
            <div key={project.name}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
