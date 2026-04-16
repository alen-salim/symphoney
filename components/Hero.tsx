import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-honey-bg">
      {/* Honeycomb SVG background */}
      <div className="absolute inset-0 opacity-[0.07]" aria-hidden="true">
        <HoneycombBg />
      </div>

      {/* Warm glow orb */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-3xl max-h-3xl rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,160,32,0.18) 0%, rgba(181,98,15,0.06) 60%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-5">
              Pure &middot; Raw &middot; Artisanal
            </p>
            <h1 className="font-display text-5xl lg:text-[5.5rem] font-bold text-charcoal leading-[1.05] mb-6">
              Nature&apos;s Finest{" "}
              <span className="italic text-honey">Honey,</span>
              <br />
              Crafted with Care
            </h1>
            <p className="text-warm-brown text-lg lg:text-xl leading-relaxed mb-10 max-w-lg">
              From untouched apiaries across India to your table — small-batch
              honey that carries the essence of every flower it was born from.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="px-8 py-4 bg-honey text-cream font-semibold rounded-full hover:bg-honey-dark transition-colors text-sm tracking-wide"
              >
                Shop Collection
              </Link>
              <Link
                href="#our-story"
                className="px-8 py-4 border-2 border-honey text-honey font-semibold rounded-full hover:bg-honey hover:text-cream transition-colors text-sm tracking-wide"
              >
                Our Story
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-10 mt-12 pt-10 border-t border-border-warm">
              {[
                { value: "100%", label: "Raw & Unfiltered" },
                { value: "8+", label: "Honey Varieties" },
                { value: "0", label: "Additives" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl lg:text-3xl font-bold text-honey">
                    {value}
                  </p>
                  <p className="text-xs text-soft-gray mt-1 tracking-wide">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual side — stacked jar cards */}
          <div className="relative hidden lg:flex items-center justify-center h-[520px]">
            {/* Back jar (flavoured) */}
            <div
              className="absolute right-4 top-16 w-52 h-64 rounded-3xl shadow-xl overflow-hidden flex flex-col items-center justify-end pb-8"
              style={{
                background:
                  "linear-gradient(145deg, #FDBA74 0%, #EA580C 60%, #9A3412 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <JarSvg opacity={0.25} />
              </div>
              <div className="relative text-center">
                <p className="text-white/70 text-xs tracking-widest uppercase">
                  Flavoured
                </p>
                <p className="text-white font-display font-bold text-lg leading-tight">
                  Cinnamon Honey
                </p>
                <p className="text-white/80 font-semibold mt-1">&#8377;649</p>
              </div>
            </div>

            {/* Front jar (pure — main) */}
            <div
              className="relative w-64 h-80 rounded-3xl shadow-2xl overflow-hidden flex flex-col items-center justify-end pb-10 z-10"
              style={{
                background:
                  "linear-gradient(145deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <JarSvg opacity={0.2} />
              </div>
              {/* Shine */}
              <div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 50%)",
                }}
              />
              {/* Label strip */}
              <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 text-center border border-white/30">
                <p className="text-white/80 text-xs tracking-widest uppercase">
                  Signature
                </p>
                <p className="text-white font-display font-bold text-xl leading-tight">
                  Wildflower Honey
                </p>
                <p className="text-white/90 font-semibold mt-1">&#8377;599</p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute left-6 top-8 bg-cream rounded-2xl px-4 py-3 shadow-lg border border-border-warm">
              <div className="flex items-center gap-1.5 mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-xs font-semibold text-charcoal">
                4.9 · Most Loved
              </p>
            </div>

            {/* Info pill */}
            <div className="absolute bottom-6 left-6 bg-cream rounded-2xl px-4 py-3 shadow-lg border border-border-warm">
              <p className="text-xs text-soft-gray">Cold processed</p>
              <p className="text-sm font-semibold text-charcoal">
                Zero additives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-soft-gray">
        <span className="text-[10px] tracking-[0.25em] uppercase">Scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #9B8B7A, transparent)",
          }}
        />
      </div>
    </section>
  );
}

function HoneycombBg() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="hc"
          x="0"
          y="0"
          width="60"
          height="104"
          patternUnits="userSpaceOnUse"
        >
          <polygon
            points="30,2 58,17 58,47 30,62 2,47 2,17"
            fill="none"
            stroke="#B5620F"
            strokeWidth="1.5"
          />
          <polygon
            points="30,54 58,69 58,99 30,114 2,99 2,69"
            fill="none"
            stroke="#B5620F"
            strokeWidth="1.5"
          />
          <polygon
            points="60,28 88,43 88,73 60,88 32,73 32,43"
            fill="none"
            stroke="#B5620F"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hc)" />
    </svg>
  );
}

function JarSvg({ opacity }: { opacity: number }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "80%", height: "80%", opacity }}
    >
      <rect x="35" y="8" width="50" height="14" rx="4" fill="white" />
      <rect x="40" y="2" width="40" height="9" rx="3" fill="white" />
      <path
        d="M18 32 Q18 24 28 24 L92 24 Q102 24 102 32 L108 132 Q108 148 92 148 L28 148 Q12 148 12 132 Z"
        fill="white"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="#E8A020">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
