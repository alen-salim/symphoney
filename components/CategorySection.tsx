import Link from "next/link";

export default function CategorySection() {
  return (
    <section className="py-20 bg-honey-bg" id="categories">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-3">
            Collections
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Explore Our Range
          </h2>
          <p className="text-warm-brown text-lg max-w-md mx-auto">
            Two distinct collections, one shared commitment to purity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Pure Honey card */}
          <div className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #FDE68A 0%, #F59E0B 45%, #B45309 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(145deg, #F59E0B 0%, #B45309 50%, #78350F 100%)",
              }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-10">
              <div>
                <LeafIcon />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mt-5 leading-tight">
                  Pure Honey
                </h3>
                <p className="text-white/85 mt-3 text-sm leading-relaxed max-w-xs">
                  Raw, unfiltered, and exactly as nature intended. Wildflower,
                  Forest, and Multifloral varieties from India&apos;s finest
                  apiaries.
                </p>
              </div>
              <Link
                href="/products?category=pure"
                className="self-start bg-white text-honey text-sm font-semibold px-7 py-3 rounded-full hover:bg-honey hover:text-white transition-colors"
              >
                Shop Pure Honey &rarr;
              </Link>
            </div>
          </div>

          {/* Flavoured Honey card */}
          <div className="group relative overflow-hidden rounded-3xl h-80 cursor-pointer">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(145deg, #FED7AA 0%, #FB923C 45%, #C2410C 100%)",
              }}
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(145deg, #FB923C 0%, #C2410C 50%, #7C2D12 100%)",
              }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-10">
              <div>
                <BlossomIcon />
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mt-5 leading-tight">
                  Flavoured Honey
                </h3>
                <p className="text-white/85 mt-3 text-sm leading-relaxed max-w-xs">
                  Pure honey kissed by nature&apos;s finest spices and blooms.
                  Cinnamon, Cardamom, Ginger, Lavender, Turmeric and more.
                </p>
              </div>
              <Link
                href="/products?category=flavoured"
                className="self-start bg-white text-orange-700 text-sm font-semibold px-7 py-3 rounded-full hover:bg-orange-700 hover:text-white transition-colors"
              >
                Shop Flavoured Honey &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeafIcon() {
  return (
    <svg
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={1.5}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

function BlossomIcon() {
  return (
    <svg
      width="36"
      height="36"
      fill="none"
      viewBox="0 0 24 24"
      stroke="white"
      strokeWidth={1.5}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
    </svg>
  );
}
