"use client";

import { useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import SiteShell from "@/components/site-shell";

const benefits = [
  "Activate slower nights with a branded format",
  "Bring game-driven social energy into underused space",
  "Keep food and beverage revenue moving later",
  "Test demand before a longer-term partnership",
];

const fields = [
  { name: "venue_name", placeholder: "Venue name", required: true, type: "text" },
  { name: "contact_name", placeholder: "Your name", required: true, type: "text" },
  { name: "email", placeholder: "Email", required: true, type: "email" },
  { name: "phone", placeholder: "Phone (optional)", required: false, type: "text" },
  { name: "city", placeholder: "City", required: true, type: "text" },
];

export default function VenuesPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const form = new FormData(event.currentTarget);

    const payload = Object.fromEntries(form.entries());
    const response = await fetch("/api/venue-inquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => null);

    setStatus(response?.ok ? "success" : "error");
    if (response?.ok) {
      event.currentTarget.reset();
    }
  }

  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="default" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Venues</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Bring the room to life.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            POOL WATER partners with spaces that can hold late-night game energy, food, and a crowd
            that wants something more active than another bar night.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-20 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
          <div className="rounded-[2.5rem] border border-white/12 bg-black/25 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-200/75">Why partner</p>
            <ul className="mt-7 grid gap-4 text-sm leading-7 text-white/66">
              {benefits.map((benefit) => (
                <li key={benefit} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300/10 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-100/75">Inquiry</p>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              {fields.map((field) => (
                <input
                  key={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-200/50"
                />
              ))}
              <textarea
                name="notes"
                placeholder="Tell us about the space"
                rows={4}
                className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-200/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Submit inquiry"}
              </button>
              {status === "success" ? <p className="text-sm text-emerald-300">Inquiry sent.</p> : null}
              {status === "error" ? <p className="text-sm text-rose-300">Could not send yet. Try again later.</p> : null}
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
