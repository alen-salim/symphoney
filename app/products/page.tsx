import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Products — Symphoney",
  description:
    "Browse our full collection of pure and flavoured artisanal honey.",
};

const filters = [
  { label: "All Honey", value: "" },
  { label: "Pure Honey", value: "pure" },
  { label: "Flavoured Honey", value: "flavoured" },
];

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const category =
    typeof params.category === "string" ? params.category : undefined;

  const filtered =
    category === "pure" || category === "flavoured"
      ? products.filter((p) => p.category === category)
      : products;

  const heading =
    category === "pure"
      ? "Pure Honey Collection"
      : category === "flavoured"
        ? "Flavoured Honey Collection"
        : "All Honey";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream pt-20">
        {/* Page header */}
        <div className="bg-honey-bg border-b border-border-warm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 text-center">
            <p className="text-honey font-semibold text-xs tracking-[0.25em] uppercase mb-3">
              Symphoney Collection
            </p>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-charcoal mb-2">
              {heading}
            </h1>
            <p className="text-warm-brown text-base">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Filter tabs */}
          <div className="flex gap-2.5 mb-10 flex-wrap">
            {filters.map(({ label, value }) => {
              const active = (category ?? "") === value;
              return (
                <a
                  key={label}
                  href={value ? `/products?category=${value}` : "/products"}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                    active
                      ? "bg-honey text-cream"
                      : "bg-cream-dark text-warm-brown border border-border-warm hover:border-honey hover:text-honey"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
