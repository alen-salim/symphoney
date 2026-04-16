export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: "pure" | "flavoured";
  flavour?: string;
  weight: string;
  gradient: string;
  jarColor: string;
  badge?: string;
  description: string;
};

export const products: Product[] = [
  {
    id: "wildflower-pure",
    name: "Wildflower Pure Honey",
    tagline: "Raw & Unfiltered",
    price: 599,
    category: "pure",
    weight: "500g",
    gradient: "from-amber-200 via-yellow-300 to-amber-400",
    jarColor: "#E8A020",
    badge: "Bestseller",
    description:
      "Harvested from wildflower meadows, this raw unfiltered honey retains all its natural enzymes, pollen, and nutrients. Every jar is a unique expression of the season.",
  },
  {
    id: "forest-pure",
    name: "Forest Honey",
    tagline: "Dark & Complex",
    price: 749,
    originalPrice: 899,
    category: "pure",
    weight: "500g",
    gradient: "from-amber-600 via-amber-700 to-yellow-900",
    jarColor: "#92400E",
    description:
      "Collected from deep Sundarbans forest flora, this dark honey carries a rich, complex flavour with earthy undertones and a long-lasting finish.",
  },
  {
    id: "multifloral-pure",
    name: "Multifloral Honey",
    tagline: "Balanced & Sweet",
    price: 499,
    category: "pure",
    weight: "500g",
    gradient: "from-yellow-200 via-yellow-300 to-amber-300",
    jarColor: "#F59E0B",
    description:
      "A harmonious blend of nectar from multiple flower sources, delivering a beautifully balanced sweetness that suits every palate.",
  },
  {
    id: "cinnamon-flavoured",
    name: "Cinnamon Honey",
    tagline: "Warmly Spiced",
    price: 649,
    category: "flavoured",
    flavour: "Cinnamon",
    weight: "250g",
    gradient: "from-orange-300 via-orange-400 to-red-500",
    jarColor: "#EA580C",
    badge: "New",
    description:
      "Pure wildflower honey infused with Ceylon cinnamon. Perfect for morning toast, warm drinks, or drizzled on oatmeal.",
  },
  {
    id: "cardamom-flavoured",
    name: "Cardamom Honey",
    tagline: "Aromatic & Exotic",
    price: 699,
    category: "flavoured",
    flavour: "Cardamom",
    weight: "250g",
    gradient: "from-emerald-200 via-green-300 to-teal-400",
    jarColor: "#059669",
    description:
      "A sublime fusion of raw honey and green cardamom, bringing warmth and exotic aroma that elevates everything from chai to desserts.",
  },
  {
    id: "ginger-flavoured",
    name: "Ginger Honey",
    tagline: "Zesty & Invigorating",
    price: 649,
    category: "flavoured",
    flavour: "Ginger",
    weight: "250g",
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    jarColor: "#D97706",
    description:
      "Vibrant raw honey blended with fresh ginger. A powerful wellness elixir and a culinary staple for the mindful kitchen.",
  },
  {
    id: "lavender-flavoured",
    name: "Lavender Honey",
    tagline: "Floral & Calming",
    price: 749,
    category: "flavoured",
    flavour: "Lavender",
    weight: "250g",
    gradient: "from-purple-200 via-violet-300 to-purple-500",
    jarColor: "#7C3AED",
    badge: "Limited",
    description:
      "Delicately infused with Himalayan lavender blossoms. Ethereal, calming, and utterly indulgent — especially wonderful with herbal teas.",
  },
  {
    id: "turmeric-flavoured",
    name: "Turmeric Honey",
    tagline: "Golden Wellness",
    price: 699,
    category: "flavoured",
    flavour: "Turmeric",
    weight: "250g",
    gradient: "from-yellow-400 via-orange-400 to-amber-600",
    jarColor: "#B45309",
    description:
      "A golden elixir combining raw honey with organic turmeric. Nature's anti-inflammatory superfood in a jar — warm, earthy, and deeply nourishing.",
  },
];

export const signatureProducts = products.filter(
  (p) =>
    p.id === "wildflower-pure" ||
    p.id === "forest-pure" ||
    p.id === "cinnamon-flavoured" ||
    p.id === "lavender-flavoured"
);
