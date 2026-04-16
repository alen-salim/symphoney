export default function StorySection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="our-story">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative">
            <div
              className="rounded-3xl h-[420px] overflow-hidden relative"
              style={{
                background:
                  "linear-gradient(145deg, #FEF9C3 0%, #FDE68A 40%, #D97706 100%)",
              }}
            >
              {/* Honeycomb accent */}
              <div className="absolute inset-0 opacity-10">
                <SmallHoneycomb />
              </div>
              {/* Centre text art */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <BeeIcon />
                <p className="font-display text-2xl lg:text-3xl font-bold italic text-amber-900 mt-6 leading-snug">
                  &ldquo;From hive<br />to home&rdquo;
                </p>
                <p className="text-amber-800/70 text-sm mt-3">
                  Small-batch. Zero additives. Pure love.
                </p>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-white/20" />
              <div className="absolute bottom-10 left-8 w-12 h-12 rounded-full bg-white/15" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-cream rounded-2xl p-5 shadow-xl border border-border-warm max-w-[200px]">
              <p className="font-display text-2xl font-bold text-honey">
                Est. 2020
              </p>
              <p className="text-warm-brown text-xs mt-1 leading-relaxed">
                Crafting pure honey with love, one jar at a time
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-4">
              Our Story
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
              Born from a Love of{" "}
              <span className="text-honey italic">Pure Things</span>
            </h2>
            <div className="space-y-4 text-warm-brown text-base leading-relaxed">
              <p>
                Symphoney was born when we realised that most commercially sold
                honey had lost its soul — filtered, heated, and stripped of
                everything that makes it special.
              </p>
              <p>
                We partnered with small-scale beekeepers from India&apos;s most
                pristine apiaries: the Nilgiris, Sundarbans, and Himalayan
                foothills — places where bees roam free and flowers bloom wild.
              </p>
              <p>
                Every jar of Symphoney honey is raw, cold-processed, and bottled
                without additives. What you receive is exactly what the bee
                intended.
              </p>
            </div>

            {/* Milestones */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border-warm">
              {[
                { value: "5+", label: "Apiaries" },
                { value: "8", label: "Varieties" },
                { value: "0%", label: "Additives" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-bold text-honey">
                    {value}
                  </p>
                  <p className="text-xs text-soft-gray mt-1 tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeeIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#92400E"
      strokeWidth={1.5}
    >
      <path d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
      <path d="M12 8v4M8 12h8" />
      <path d="M8.5 8.5c-1-1-1-2.5 0-3.5s2.5-1 3.5 0" />
      <path d="M15.5 8.5c1-1 1-2.5 0-3.5s-2.5-1-3.5 0" />
    </svg>
  );
}

function SmallHoneycomb() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hc2"
          x="0"
          y="0"
          width="50"
          height="86"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="25,2 48,14 48,38 25,50 2,38 2,14"
            fill="none"
            stroke="#92400E"
            strokeWidth="1.5"
          />
          <polygon
            points="25,52 48,64 48,88 25,100 2,88 2,64"
            fill="none"
            stroke="#92400E"
            strokeWidth="1.5"
          />
          <polygon
            points="50,27 73,39 73,63 50,75 27,63 27,39"
            fill="none"
            stroke="#92400E"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc2)" />
    </svg>
  );
}
