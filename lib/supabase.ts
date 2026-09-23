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
      { key: "single", label: "1 Thermometer Options" },
      { key: "double", label: "2 Thermometer Options" },
      { key: "triple", label: "3 Thermometer Options" },
    ],
    variants: [
      { id: "1kit-none", label: "1 Basal Body Thermometer", price: 47.89, image: "/images/products/thermometer-1x.jpg", group: "single" },
      { id: "1kit-30", label: "1 Basal Body Thermometer + Fertility Tracking Journal", price: 49.76, image: "/images/products/thermometer-1x.jpg", group: "single", meta: "Includes 1 Fertility Tracking Journal", bundle: true },
      { id: "1kit-60", label: "1 Basal Body Thermometer + 2 Fertility Tracking Journals", price: 53.45, image: "/images/products/thermometer-1x.jpg", group: "single", meta: "Includes 2 Fertility Tracking Journals", bundle: true },
      { id: "1kit-90", label: "1 Basal Body Thermometer + 3 Fertility Tracking Journals — Complete Kit", price: 54.95, image: "/images/products/thermometer-1x.jpg", group: "single", meta: "Includes 3 Fertility Tracking Journals — best value", bundle: true },
      { id: "2kit-none", label: "2 Thermometers", price: 86.88, image: "/images/products/thermometer-2x.jpg", group: "double" },
      { id: "2kit-30", label: "2 Thermometers + Fertility Tracking Journal", price: 87.64, image: "/images/products/thermometer-2x.jpg", group: "double", meta: "Includes 1 Fertility Tracking Journal", bundle: true },
      { id: "2kit-60", label: "2 Thermometers + 2 Fertility Tracking Journals", price: 87.76, image: "/images/products/thermometer-2x.jpg", group: "double", meta: "Includes 2 Fertility Tracking Journals", bundle: true },
      { id: "2kit-90", label: "2 Thermometers + 3 Fertility Tracking Journals — Complete Kit", price: 94.82, image: "/images/products/thermometer-2x.jpg", group: "double", meta: "Includes 3 Fertility Tracking Journals — best value", bundle: true },
      { id: "3kit-none", label: "3 Thermometers", price: 96.95, image: "/images/products/thermometer-3x.jpg", group: "triple" },
    ],
    image: {
      src: "/images/products/thermometer-1x.jpg",
      alt: "Basal Body Thermometer",
    },
  },
  {
    id: "2",
    slug: "male-fertility-support",
    href: "/product/male-fertility-support",
    category: "Wellness Accessory",
    name: "Fertility Tracking Journal & BBT Charting Kit",
    caption: "A dedicated paper journal for charting your daily basal body temperature and cycle notes.",
    tagline: "Simple, Paper-Based Cycle Charting",
    description:
      "A dedicated paper journal for logging your daily basal body temperature readings alongside notes on your cycle. Includes month-at-a-glance charting pages so you can observe patterns over several cycles at a glance. This is a physical journal only — it does not test, analyze, or store any biological data.",
    features: [
      "12-month charting layout",
      "Daily temperature log grid for each morning's reading",
      "Note space for symptoms and observations",
      "Compact, bedside-friendly size",
      "Pairs naturally with your Basal Body Thermometer readings",
    ],
    whatsIncluded: [
      "1 or more charting journals, per selected option",
      "Discreet, unmarked outer packaging",
    ],
    highlights: [
      { title: "Simple to Use", desc: "A plain paper journal — no setup, no batteries, no account." },
      { title: "Built for Daily Use", desc: "One page per day makes it easy to build a consistent charting habit." },
      { title: "Complements the Thermometer", desc: "A natural next step alongside your daily temperature readings." },
      { title: "Discreetly Shipped", desc: "Arrives in plain, unmarked packaging like every order." },
    ],
    disclaimer:
      "This product is a paper journal intended for general note-taking and personal record-keeping. It does not test, diagnose, or analyze any biological sample, and it is not a substitute for professional medical advice. Always consult a qualified healthcare provider regarding any health or fertility concerns.",
    keywords: [
      "fertility journal", "BBT charting", "cycle tracking journal", "temperature log",
      "charting kit", "period tracker journal", "paper journal",
    ],
    defaultVariantId: "1x60",
    variants: [
      { id: "1x30", label: "1 Charting Journal — Standard", price: 9.99, image: "/images/products/journal-1x.jpg" },
      { id: "1x60", label: "1 Charting Journal — Plus", price: 13.95, image: "/images/products/journal-1x.jpg" },
      { id: "1x90", label: "1 Charting Journal — Premium", price: 14.75, image: "/images/products/journal-1x.jpg" },
      { id: "1x120", label: "1 Charting Journal — Complete", price: 17.95, image: "/images/products/journal-1x.jpg" },
      { id: "2x60", label: "2 Charting Journals", price: 18.75, image: "/images/products/journal-2x.jpg" },
      { id: "3x60", label: "3 Charting Journals", price: 28.76, image: "/images/products/journal-3x.jpg" },
      { id: "4x60", label: "4 Charting Journals", price: 38.64, image: "/images/products/journal-4x.jpg" },
    ],
    image: {
      src: "/images/products/journal-1x.jpg",
      alt: "Fertility Tracking Journal & BBT Charting Kit",
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
