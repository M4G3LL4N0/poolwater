"use client";

import Link from "next/link";
import type { Route } from "next";
import { useState, type ReactNode, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/energy", label: "The Current" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join" },
  { href: "/investors", label: "Investors" },
];

export default function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#02050a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.20),transparent_30%),radial-gradient(circle_at_82%_24%,rgba(124,58,237,0.18),transparent_28%),linear-gradient(180deg,#02050a_0%,#06101c_48%,#02050a_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:54px_54px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#02050a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-full border border-cyan-200/30 bg-[radial-gradient(circle_at_35%_25%,#b6f4ff,transparent_28%),linear-gradient(135deg,#1fb6ff,#1b3a68_55%,#06101c)] shadow-[0_0_30px_rgba(34,211,238,.35)]" />
            <span className="text-sm font-black tracking-[0.24em] text-white">POOL WATER</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href as Route}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/62 transition hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/join"
            className="hidden rounded-full border border-cyan-200/25 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,.18)] transition hover:bg-cyan-300/20 sm:inline-flex"
          >
            First access
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="border-t border-white/10 bg-[#02050a]/95 px-5 py-4 backdrop-blur-xl md:hidden">
            <nav className="mx-auto grid max-w-7xl gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as Route}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/75"
                >
                  {link.label}
                </Link>
              ))}
              <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] leading-relaxed text-white/45">
                Venue concept and waitlist — not an offer to sell securities. Licensing, zoning, and operations require local counsel.
              </p>
            </nav>
          </div>
        ) : null}
      </header>

      {children}

      <footer className="border-t border-white/10 bg-black/25">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-lg font-black tracking-[0.22em] text-white">POOL WATER</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
              A late-night social game floor built around pool tables, arcade glow, fast side games,
              real food, and a room that makes meeting people feel natural.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-white/50">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href as Route} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
