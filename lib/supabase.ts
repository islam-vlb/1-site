export type ProductVariant = {
  id: string;
  label: string;
  price: number;
  image: string;
  meta?: string;
  group?: string;
  bundle?: boolean;
  bottleCount?: number;
  capsuleCount?: number;
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
      "A precision digital thermometer designed to track subtle basal body temperature changes as part of a natural cycle-awareness routine. Take your temperature each morning before rising and log the readings to observe your body's natural patterns over time. This device measures temperature only — it does not test, analyze, or process any biological sample.",
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
      { id: "1kit-none", label: "1 Basal Body Thermometer", price: 47.89, image: "/images/products/thermometer-1x.jpg", meta: "No supplement included", group: "kit-only" },
      { id: "1kit-30", label: "1 Thermometer + 1 Bottle — 30 Capsules", price: 49.76, image: "/images/products/thermometer-1x-supp30.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 30 },
      { id: "1kit-60", label: "1 Thermometer + 1 Bottle — 60 Capsules", price: 53.45, image: "/images/products/thermometer-1x-supp60.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 60 },
      { id: "1kit-90", label: "1 Thermometer + 1 Bottle — 90 Capsules", price: 54.95, image: "/images/products/thermometer-1x-supp90.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 90 },
      { id: "2kit-none", label: "2 Thermometers", price: 86.88, image: "/images/products/thermometer-2x.jpg", meta: "No supplement included", group: "kit-only" },
      { id: "2kit-30", label: "2 Thermometers + 1 Bottle — 30 Capsules", price: 87.64, image: "/images/products/thermometer-2x-supp30.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 30 },
      { id: "2kit-60", label: "2 Thermometers + 1 Bottle — 60 Capsules", price: 87.76, image: "/images/products/thermometer-2x-supp60.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 60 },
      { id: "2kit-90", label: "2 Thermometers + 1 Bottle — 90 Capsules", price: 94.82, image: "/images/products/thermometer-2x-supp90.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 90 },
      { id: "3kit-none", label: "3 Thermometers", price: 96.95, image: "/images/products/thermometer-3x.jpg", meta: "No supplement included", group: "kit-only" },
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
    category: "Wellness Supplement",
    name: "Male Fertility Support Formula",
    caption: "Daily nutrients formulated to support normal nutritional needs.",
    tagline: "Daily Nutritional Support",
    description:
      "A daily nutritional supplement formulated with zinc, folic acid, CoQ10, and other nutrients that provides supplemental support for normal nutritional needs related to male reproductive wellness, as part of a healthy lifestyle. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    features: [
      "Provides supplemental folate and zinc as part of a daily nutritional routine",
      "Formulated with CoQ10 and selenium to support normal nutritional needs",
      "Contains maca root extract, traditionally included in daily wellness routines",
      "Vitamin D3 and Vitamin E included to support general daily nutrition",
      "One capsule serving per day, easy to incorporate into a daily routine",
    ],
    whatsIncluded: [
      "Bottle(s) of vegan capsules, per selected option",
      "Discreet, unmarked outer packaging",
    ],
    highlights: [
      { title: "Daily Simplicity", desc: "One capsule a day fits naturally into an existing routine." },
      { title: "Thoughtful Formula", desc: "Built around nutrients commonly included in daily nutritional routines." },
      { title: "Complements the Kit", desc: "A natural next step alongside the Basal Body Thermometer." },
      { title: "Discreetly Shipped", desc: "Arrives in plain, unmarked packaging like every order." },
    ],
    disclaimer:
      "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication.",
    keywords: [
      "supplement", "wellness", "male fertility support", "zinc", "folic acid",
      "CoQ10", "maca root", "vitamin d3", "vitamin e", "daily vitamin", "daily nutritional support",
    ],
    defaultVariantId: "1x60",
    variants: [
      { id: "1x30", label: "1 Bottle — 30 Capsules", price: 9.99, image: "/images/supplements/1-bottle-30ct.jpg", bottleCount: 1, capsuleCount: 30 },
      { id: "1x60", label: "1 Bottle — 60 Capsules", price: 13.95, image: "/images/supplements/1-bottle-60ct.jpg", bottleCount: 1, capsuleCount: 60 },
      { id: "1x90", label: "1 Bottle — 90 Capsules", price: 14.75, image: "/images/supplements/1-bottle-90ct.jpg", bottleCount: 1, capsuleCount: 90 },
      { id: "1x120", label: "1 Bottle — 120 Capsules", price: 17.95, image: "/images/supplements/1-bottle-120ct.jpg", bottleCount: 1, capsuleCount: 120 },
      { id: "2x60", label: "2 Bottles — 120 Capsules", price: 18.75, image: "/images/supplements/2-bottles-60ct.jpg", bottleCount: 2, capsuleCount: 120 },
      { id: "3x60", label: "3 Bottles — 180 Capsules", price: 28.76, image: "/images/supplements/3-bottles-60ct.jpg", bottleCount: 3, capsuleCount: 180 },
      { id: "4x60", label: "4 Bottles — 240 Capsules", price: 38.64, image: "/images/supplements/4-bottles-60ct.jpg", bottleCount: 4, capsuleCount: 240 },
    ],
    image: {
      src: "/images/supplements/1-bottle-60ct.jpg",
      alt: "Male Fertility Support Formula",
    },
  },
];

export const INGREDIENTS = [
  { name: "Zinc (as Zinc Picolinate)", amount: "30mg" },
  { name: "Folic Acid", amount: "800mcg" },
  { name: "L-Carnitine", amount: "500mg" },
  { name: "Coenzyme Q10 (CoQ10)", amount: "100mg" },
  { name: "Selenium", amount: "200mcg" },
  { name: "Vitamin D3", amount: "2000 IU" },
  { name: "Maca Root Extract", amount: "500mg" },
  { name: "Vitamin E", amount: "200 IU" },
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
