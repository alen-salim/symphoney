import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group bg-cream rounded-3xl overflow-hidden border border-border-warm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div
        className={`relative h-56 bg-gradient-to-br ${product.gradient} flex items-center justify-center overflow-hidden`}
      >
        {/* Jar illustration */}
        <div className="relative z-10 flex flex-col items-center">
          <JarIllustration color={product.jarColor} />
          <div className="mt-1 text-center">
            <p
              className="text-xs font-semibold tracking-widest uppercase"
              style={{ color: product.jarColor, filter: "brightness(0.6)" }}
            >
              {product.weight}
            </p>
          </div>
        </div>

        {/* Shine overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 55%)",
          }}
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-honey text-cream text-[11px] font-bold px-3 py-1 rounded-full tracking-wide">
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          className="absolute bottom-3 right-3 w-9 h-9 bg-cream rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-honey hover:text-cream text-warm-brown"
          aria-label="Add to wishlist"
        >
          <HeartIcon />
        </button>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] text-honey font-semibold uppercase tracking-[0.18em] mb-1">
          {product.tagline}
        </p>
        <h3 className="font-display text-lg font-bold text-charcoal leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-soft-gray mb-4">{product.weight}</p>

        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="font-display text-xl font-bold text-charcoal">
              &#8377;{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-soft-gray line-through ml-2">
                &#8377;{product.originalPrice}
              </span>
            )}
          </div>
          <button className="px-5 py-2.5 bg-honey text-cream text-xs font-semibold rounded-full hover:bg-honey-dark transition-colors tracking-wide">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

function JarIllustration({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-28"
    >
      {/* Lid */}
      <rect x="22" y="4" width="36" height="10" rx="3" fill="white" fillOpacity={0.7} />
      <rect x="27" y="0" width="26" height="6" rx="2" fill="white" fillOpacity={0.5} />
      {/* Body */}
      <path
        d="M12 20 Q12 16 18 16 L62 16 Q68 16 68 20 L72 82 Q72 92 62 92 L18 92 Q8 92 8 82 Z"
        fill="white"
        fillOpacity={0.3}
      />
      {/* Honey fill */}
      <path
        d="M15 45 Q15 42 18 42 L62 42 Q65 42 65 45 L69 82 Q69 90 62 90 L18 90 Q11 90 11 82 Z"
        fill={color}
        fillOpacity={0.5}
      />
      {/* Label */}
      <rect x="20" y="52" width="40" height="28" rx="5" fill="white" fillOpacity={0.6} />
      {/* Drip */}
      <path
        d="M36 92 Q36 98 32 98 Q28 98 28 94 Q28 90 32 90"
        fill={color}
        fillOpacity={0.6}
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
