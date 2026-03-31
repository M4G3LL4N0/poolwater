"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "../lib/poolwater-content";

export default function SiteShell({
  children,
  accent = "default",
}: {
  children: ReactNode;
  accent?: "default" | "investor";
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pool-orb left-[-120px] top-[120px] h-[260px] w-[260px] bg-cyan-400" />
      <div className="pool-orb right-[-100px] top-[220px] h-[280px] w-[280px] bg-blue-500" />
      <div className="pool-orb bottom-[120px] left-[18%] h-[220px] w-[220px] bg-violet-500" />

      <header className="site-header">
        <div className="container-shell">
          <div className="site-header-bar">
            <Link href="/" className="site-logo">
              <span className="site-logo-mark" />
              <span>POOL WATER</span>
            </Link>

            <nav className="site-nav-desktop">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="site-nav-link">
                  {link.label}
                </Link>
              ))}
              <Link
                href="/investors"
                className={
                  accent === "investor"
                    ? "site-nav-investors site-nav-investors--active"
                    : "site-nav-investors"
                }
              >
                Investors
              </Link>
            </nav>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
              className="site-menu-button"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-[2px] w-5 rounded bg-white transition ${
                    menuOpen ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-[2px] w-5 rounded bg-white transition ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-[2px] w-5 rounded bg-white transition ${
                    menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>

          {menuOpen ? (
            <div className="site-menu-sheet">
              <div className="site-menu-sheet-inner">
                <nav className="site-menu-nav">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="site-menu-link"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/investors"
                    onClick={() => setMenuOpen(false)}
                    className="site-menu-link"
                  >
                    Investors
                  </Link>
                </nav>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container-shell site-footer-inner">
          <div>
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">POOL WATER</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/55">
              A late-night social playground built around games, movement, food, and a room that
              actually feels alive.
            </p>
          </div>

          <div className="site-footer-links">
            <Link href="/about">About</Link>
            <Link href="/energy">The Current</Link>
            <Link href="/events">Events</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/join">Join</Link>
            <Link href="/investors">Investors</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
