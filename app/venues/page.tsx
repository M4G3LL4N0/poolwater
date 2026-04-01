"use client";

import { useState } from "react";
import SiteShell from "../../components/site-shell";
import { venuePartnerContent } from "../../lib/poolwater-content";

export default function VenuesPage() {
  const [form, setForm] = useState({
    venue_name: "",
    contact_name: "",
    email: "",
    phone: "",
    city: "",
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const response = await fetch("/api/venue-inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit inquiry");
      }

      setStatus("success");
      setForm({
        venue_name: "",
        contact_name: "",
        email: "",
        phone: "",
        city: "",
        notes: ""
      });
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
    }
  };

  return (
    <SiteShell>
      <main>
        <section className="page-hero">
          <div className="page-hero-inner">
            <p className="section-kicker">Venue Partnerships</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              {venuePartnerContent.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              {venuePartnerContent.subtitle}
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="glass-panel rounded-[36px] p-8 md:p-10">
              <p className="section-kicker">The model</p>
              
              <div className="space-y-6">
                {venuePartnerContent.description.map((paragraph, i) => (
                  <p key={i} className="text-sm leading-7 text-white/66">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium tracking-[-0.02em] text-white">
                  Benefits for your venue:
                </p>
                <ul className="mt-4 list-tight space-y-2 text-sm leading-7 text-white/66">
                  {venuePartnerContent.benefits.map((benefit, i) => (
                    <li key={i}>• {benefit}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="soft-card rounded-[36px] p-8 md:p-10">
              <p className="section-kicker">Get started</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                {venuePartnerContent.formTitle}
              </h2>

              <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
                <input
                  type="text"
                  name="venue_name"
                  value={form.venue_name}
                  onChange={handleChange}
                  placeholder="Venue name"
                  required
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <input
                  type="text"
                  name="contact_name"
                  value={form.contact_name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone (optional)"
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                  required
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Tell us about your space (optional)"
                  rows={3}
                  className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="primary-btn w-full"
                >
                  {status === "loading" ? "Sending..." : "Submit Inquiry"}
                </button>
                {status === "success" && (
                  <p className="text-sm text-emerald-300">
                    Thank you! We'll be in touch soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-rose-300">
                    {error || "Failed to submit. Please try again."}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
