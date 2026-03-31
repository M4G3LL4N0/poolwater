"use client";

import { useState } from "react";

export default function WaitlistForm({
  source = "join-page",
}: {
  source?: string;
}) {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          phone,
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("You’re on the list.");
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
        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
      />

      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        placeholder="Phone (optional)"
        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
      />

      <button type="submit" disabled={status === "loading"} className="primary-btn w-full">
        {status === "loading" ? "Submitting..." : "Request first access"}
      </button>

      {message ? (
        <p
          className={
            status === "success"
              ? "text-sm text-emerald-300"
              : "text-sm text-rose-300"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
