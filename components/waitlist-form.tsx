"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function WaitlistForm({
  source = "join-page",
}: {
  source?: string;
}) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, source }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("success");
      setMessage("You're on the list!");
      setEmail("");
      setPhone("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error 
          ? error.message 
          : "Failed to submit. Please try again."
      );
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4"
      data-testid="waitlist-form"
    >
      <input
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
        data-cta="waitlist-email"
      />

      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone (optional)"
        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
        data-cta="waitlist-phone"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="primary-btn w-full"
        data-cta="waitlist-submit"
      >
        {status === "loading" ? "Joining..." : "Join First Access"}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
