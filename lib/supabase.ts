export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  image: string;
  group?: string;
  meta?: string;
  bundle?: boolean;
};

export type Product = {
  id: string;
  slug: string;
  href: string;
  category: string;
  name: string;
  caption: string;
  tagline: string;
  description: string;
  features: string[];
  whatsIncluded: string[];
  highlights: { title: string; desc: string }[];
  disclaimer: string;
  keywords: string[];
  variants: ProductVariant[];
  defaultVariantId: string;
  variantGroups?: { key: string; label: string }[];
  image: {
    src: string;
    alt: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "basal-body-thermometer",
    href: "/product/basal-body-thermometer",
    category: "Fertility Awareness Device",
    name: "Basal Body Thermometer",
    caption: "A precise daily reading to help you track your body's natural patterns.",
    tagline: "Simple, At-Home Cycle Awareness",
    description:
      "A precision digital thermometer designed to track subtle basal body temperature changes as part of a natural cycle-awareness routine. Take your temperature each morning before rising and record the readings to observe your body's natural patterns over time. This device measures temperature only — it does not test, analyze, or process any biological sample.",
    features: [
      "High-precision sensor detects temperature changes to 1/100th of a degree",
      "Fast reading in approximately 60 seconds",
      "Memory recall for your last reading",
      "Simple one-button operation",
      "Compact and travel-friendly design",
      "Battery included",
    ],
    whatsIncluded: [
      "1 digital basal body thermometer",
      "Quick-start guide",
      "Discreet, unmarked outer packaging",
      "Battery, pre-installed",
    ],
    highlights: [
      { title: "Built for Daily Use", desc: "Designed to fit naturally into your morning routine, day after day." },
      { title: "Simple to Follow", desc: "Clear, plain-language instructions guide you through your first reading." },
      { title: "Fast & Precise", desc: "A high-precision sensor delivers a reading in about 60 seconds." },
      { title: "Easy to Track", desc: "Memory recall makes it simple to compare today's reading with your last." },
    ],
    disclaimer:
      "This product is a temperature-measurement device intended for general wellness and informational purposes. It does not test, diagnose, or analyze any biological sample. It is not a substitute for professional medical advice. Always consult a qualified healthcare provider regarding any health or fertility concerns.",
    keywords: [
      "basal body thermometer", "BBT", "cycle tracking", "ovulation awareness",
      "temperature tracking", "fertility awareness", "digital thermometer", "morning temperature",
    ],
    defaultVariantId: "1kit-none",
    variantGroups: [
      { key: "kit-only", label: "Thermometer Only" },
      { key: "bundles", label: "Bundle Offers" },
    ],
    variants: [
      { id: "1kit-none", label: "1 Basal Body Thermometer", price: 47.89, image: "/images/products/thermometer-1x.jpg", meta: "No accessory included", group: "kit-only" },
      { id: "1kit-30", label: "1 Thermometer + 1 Fertility Tracking Journal — Plus", price: 49.76, image: "/images/products/thermometer-1x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "1kit-60", label: "1 Thermometer + 1 Fertility Tracking Journal — Premium", price: 53.45, image: "/images/products/thermometer-1x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "1kit-90", label: "1 Thermometer + 1 Fertility Tracking Journal — Complete", price: 54.95, image: "/images/products/thermometer-1x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "2kit-none", label: "2 Thermometers", price: 86.88, image: "/images/products/thermometer-2x.jpg", meta: "No accessory included", group: "kit-only" },
      { id: "2kit-30", label: "2 Thermometers + 1 Fertility Tracking Journal — Plus", price: 87.64, image: "/images/products/thermometer-2x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "2kit-60", label: "2 Thermometers + 1 Fertility Tracking Journal — Premium", price: 87.76, image: "/images/products/thermometer-2x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "2kit-90", label: "2 Thermometers + 1 Fertility Tracking Journal — Complete", price: 94.82, image: "/images/products/thermometer-2x-journal-combo.jpg", group: "bundles", bundle: true },
      { id: "3kit-none", label: "3 Thermometers", price: 96.95, image: "/images/products/thermometer-3x.jpg", meta: "No accessory included", group: "kit-only" },
    ],
    image: {
      src: "/images/products/thermometer-1x.jpg",
      alt: "Basal Body Thermometer",
    },
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getVariant(product: Product, variantId: string): ProductVariant | undefined {
  return product.variants.find((v) => v.id === variantId);
}

export function getDefaultVariant(product: Product): ProductVariant {
  return getVariant(product, product.defaultVariantId) ?? product.variants[0];
}

export function startingPrice(product: Product): number {
  return Math.min(...product.variants.map((v) => v.price));
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return PRODUCTS.filter((p) => {
    const haystack = [
      p.name,
      p.category,
      p.caption,
      p.description,
      p.tagline,
      ...p.keywords,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
