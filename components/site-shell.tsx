import type { ReactNode } from "react";
import Link from "next/link";
import { navLinks } from "../lib/poolwater-content";

export default function SiteShell({
  children,
  accent = "default",
}: {
  children: ReactNode;
  accent?: "default" | "investor";
}) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pool-orb left-[-120px] top-[120px] h-[260px] w-[260px] bg-cyan-400 animate-orb-pulse-delay" />
      <div className="pool-orb right-[-100px] top-[220px] h-[280px] w-[280px] bg-blue-500 animate-orb-pulse" />
      <div className="pool-orb bottom-[120px] left-[18%] h-[220px] w-[220px] bg-violet-500 animate-orb-pulse-delay" />
      <div className="pool-orb left-[30%] top-[400px] h-[180px] w-[180px] bg-teal-500 animate-orb-pulse-slow" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-b from-[#0b172499] to-[#07111bcc] backdrop-blur-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--glass-edge),_transparent_60%)] opacity-40" />
        <div className="container-shell flex flex-wrap items-center justify-between gap-4 py-4">
          <Link href="/" className="text-xl font-semibold tracking-[-0.04em] text-white">
            POOL WATER
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-white/75">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 transition hover:bg-white/[0.06] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-5 py-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">POOL WATER</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
              A late-night social playground built around games, movement, food, and a room that
              actually feels alive.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-white/60">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/energy" className="hover:text-white">The Current</Link>
            <Link href="/events" className="hover:text-white">Events</Link>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
            <Link href="/join" className="hover:text-white">Join</Link>
            <Link href="/investors" className="hover:text-white">Investors</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
