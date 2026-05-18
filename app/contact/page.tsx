"use client";

import { useState } from "react";
import { SubpageVisual } from "@/components/SubpageVisual";
import SiteShell from "@/components/site-shell";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit message");
      }
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <SiteShell>
      <main>
      <SubpageVisual variant="contact" />
        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-200/75">Contact</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-7xl">
            Hit us up.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/66">
            Questions, collaborations, venue ideas, or something the room should know about.
          </p>
        </section>

        <section className="mx-auto max-w-3xl px-5 pb-20 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/12 bg-white/[0.055] p-8 backdrop-blur-xl sm:p-10">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={(event) => setForm((value) => ({ ...value, name: event.target.value }))}
                placeholder="Your name"
                required
                className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-200/50"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm((value) => ({ ...value, email: event.target.value }))}
                placeholder="Email"
                required
                className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-200/50"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={(event) => setForm((value) => ({ ...value, message: event.target.value }))}
                placeholder="Your message"
                rows={5}
                required
                className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-cyan-200/50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="rounded-full bg-cyan-200 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-white disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send message"}
              </button>
              {status === "success" ? <p className="text-sm text-emerald-300">Message sent.</p> : null}
              {status === "error" ? <p className="text-sm text-rose-300">{error}</p> : null}
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
