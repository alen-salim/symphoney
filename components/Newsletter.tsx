"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  }

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #B5620F 0%, #8B4A09 100%)" }}
    >
      {/* Subtle honeycomb bg */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hcn"
              x="0"
              y="0"
              width="60"
              height="104"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="30,2 58,17 58,47 30,62 2,47 2,17"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <polygon
                points="30,54 58,69 58,99 30,114 2,99 2,69"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <polygon
                points="60,28 88,43 88,73 60,88 32,73 32,43"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hcn)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <MailIcon />
        </div>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-cream mb-4">
          A Little Sweetness
          <br />
          in Your Inbox
        </h2>
        <p className="text-cream/75 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Be the first to know about new varieties, seasonal offerings, and
          exclusive deals for our community.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2.5 bg-white/15 text-cream px-8 py-4 rounded-full text-base font-semibold border border-white/25">
            <CheckIcon />
            You&apos;re in! Welcome to the hive.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-white/15 text-cream placeholder-cream/50 border border-white/25 focus:outline-none focus:border-white/60 text-base"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-cream text-honey font-semibold rounded-full hover:bg-honey-tint transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-cream/50 text-xs mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={1.8}
    >
      <rect x="2" y="4" width="20" height="16" rx="3" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
