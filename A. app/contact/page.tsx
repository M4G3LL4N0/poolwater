"use client";

import { useState } from "react";
import SiteShell from "../../components/site-shell";
import { contactMessages } from "../../lib/poolwater-content";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to submit message");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: ""
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
            <p className="section-kicker">Contact</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
              {contactMessages.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/68 md:text-xl">
              {contactMessages.subtitle}
            </p>
          </div>
        </section>

        <section className="container-shell py-20 md:py-24">
          <div className="soft-card rounded-[36px] p-8 md:p-10">
            <p className="section-kicker">Get in touch</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              {contactMessages.formTitle}
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
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
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={4}
                required
                className="rounded-[22px] border border-white/10 bg-black/20 px-5 py-4 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="primary-btn w-full"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="text-sm text-emerald-300">
                  {contactMessages.successMessage}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-rose-300">
                  {error || contactMessages.errorMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
