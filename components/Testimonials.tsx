const testimonials = [
  {
    id: 1,
    name: "Priya Nair",
    location: "Bangalore",
    product: "Wildflower Pure Honey",
    text: "I've been ordering Symphoney's Wildflower honey for months now. The taste is incomparable — floral, rich, and nothing like the supermarket stuff. My family is completely obsessed.",
    rating: 5,
    initial: "P",
  },
  {
    id: 2,
    name: "Arjun Sharma",
    location: "Delhi",
    product: "Cinnamon Honey",
    text: "The Cinnamon Honey is absolutely divine. I use it in my morning chai and it elevates the whole experience. The packaging is beautiful too — makes a perfect gift.",
    rating: 5,
    initial: "A",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    location: "Chennai",
    product: "Forest Honey",
    text: "Ordered the Forest Honey on a whim and it became a staple. Dark, earthy, complex — perfect with cheese or drizzled on warm bread. Will never go back to regular honey.",
    rating: 5,
    initial: "M",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-honey-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-3">
            Reviews
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-3">
            Loved by Honey Enthusiasts
          </h2>
          <p className="text-warm-brown text-lg">
            Don&apos;t take our word for it — here&apos;s what our customers say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-cream rounded-3xl p-8 border border-border-warm hover:shadow-xl transition-shadow flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarFilled key={i} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-warm-brown leading-relaxed text-base flex-1 mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-border-warm">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #F5C842 0%, #B5620F 100%)",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-soft-gray">{t.location}</p>
                </div>
                <span className="ml-auto text-[10px] text-honey font-medium bg-honey-tint px-2.5 py-1 rounded-full">
                  {t.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarFilled() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="#E8A020">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
