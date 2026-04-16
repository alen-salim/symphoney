import Link from "next/link";
import ProductCard from "./ProductCard";
import { signatureProducts } from "@/lib/products";

export default function SignatureSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-3">
            Bestsellers
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-4">
            Signature Collection
          </h2>
          <p className="text-warm-brown text-lg max-w-xl mx-auto leading-relaxed">
            Each jar is crafted with intention — from the hive to your home,
            nothing is added and nothing is taken away.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-honey font-semibold text-sm hover:gap-3 transition-all group"
          >
            View All Products
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
