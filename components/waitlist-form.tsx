"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { waitlistMessages } from "@/lib/poolwater-content";

type FormStatus = "idle" | "loading" | "success" | "error";

const isValidEmail = (email: string): boolean => 
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    if (status === "loading" || !isValidEmail(email)) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          source 
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error || 
          waitlistMessages.errorMessage ||
          "Failed to submit. Please try again."
        );
      }

      setStatus("success");
      setMessage(
        waitlistMessages.successMessage ||
        "You're on the waiting list!"
      );
      setEmail("");
      setPhone("");

      // Analytics event if available
      if (window.gtag) {
        window.gtag("event", "waitlist_signup", {
          event_category: "conversion",
          event_label: source,
        });
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error 
          ? error.message 
          : waitlistMessages.errorMessage ||
            "Failed to submit. Please try again."
      );
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="mt-8 grid gap-4"
      data-testid="waitlist-form"
      data-analytics-source={source}
    >
      <div>
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/30"
          data-cta="waitlist-email"
          aria-invalid={status === "error"} 
        />
        {status === "error" && !isValidEmail(email) && (
          <p className="mt-1 text-xs text-rose-300">
            Please enter a valid email
          </p>
        )}
      </div>

      <input
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone (optional)"
        className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35 transition focus:border-cyan-300/30"
        data-cta="waitlist-phone"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="primary-btn w-full"
        data-cta="waitlist-submit"
        aria-busy={status === "loading"}
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
            Joining...
          </span>
        ) : (
          "Join First Access"
        )}
      </button>

      {message && (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-300" : "text-rose-300"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </form>
  );
}
