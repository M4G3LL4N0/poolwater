"use client";

import { useState } from "react";

export default function WaitlistForm({ source = "join-page" }: { source?: string }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, source }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("You are on the list.");
      setEmail("");
      setPhone("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/50"
      />
      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone (optional)"
        className="rounded-2xl border border-white/12 bg-black/30 px-5 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-cyan-200/50"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-cyan-200 px-6 py-4 text-sm font-black text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Request first access"}
      </button>
      {message ? (
        <p className={status === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}>
          {message}
        </p>
      ) : null}
    </form>
  );
}
