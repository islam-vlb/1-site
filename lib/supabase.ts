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
    slug: "at-home-semen-test-kit",
    href: "/product/at-home-semen-test-kit",
    category: "At-Home Diagnostic Kit",
    name: "At-Home Semen Test Kit",
    caption: "A private first look at key fertility indicators, from home.",
    tagline: "Private, At-Home Fertility Insight",
    description:
      "An at-home semen analysis kit designed to give men a private, convenient first look at key fertility indicators — including sperm concentration and motility — from the comfort of home. The kit arrives in a discreet box with everything needed for at-home collection. Results are available at home and can be shared with a healthcare provider to discuss next steps. This kit is intended as a wellness indicator and does not replace professional medical diagnosis.",
    features: [
      "Private at-home sample collection",
      "Tests key fertility indicators: concentration and motility",
      "Easy-to-follow step-by-step instructions included",
      "Results available at home",
      "Discreet box packaging for shipping and storage",
      "Results can be shared with your physician to discuss next steps",
    ],
    whatsIncluded: [
      "At-home semen test kit box with collection and testing supplies",
      "Step-by-step instruction guide",
      "Discreet, unmarked outer packaging",
      "Access to your results at home",
    ],
    highlights: [
      { title: "Built for Privacy", desc: "Every part of the experience — from packaging to results — is designed to stay private." },
      { title: "Simple to Follow", desc: "Clear, plain-language instructions guide you through the process from start to finish." },
      { title: "No Clinic Visit", desc: "Complete the entire process from home, on your own schedule." },
      { title: "Physician-Shareable", desc: "Take your results to a healthcare provider for further guidance if you choose." },
    ],
    disclaimer:
      "This product is intended for general wellness and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any health concerns or before making decisions related to fertility or reproductive health.",
    keywords: [
      "semen test", "fertility test", "sperm test", "at-home test kit",
      "male fertility", "concentration", "motility", "indicator",
    ],
    defaultVariantId: "1kit-none",
    variantGroups: [
      { key: "kit-only", label: "Test Kit Only" },
      { key: "bundles", label: "Bundle Offers" },
    ],
    variants: [
      { id: "1kit-none", label: "1 Test Kit", price: 47.89, image: "/images/products/1kit-open-contents.jpg", meta: "No supplement included", group: "kit-only" },
      { id: "1kit-30", label: "1 Test Kit + 1 Bottle — 30 Capsules", price: 49.76, image: "/images/products/1kit-30ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 30 },
      { id: "1kit-60", label: "1 Test Kit + 1 Bottle — 60 Capsules", price: 53.45, image: "/images/products/1kit-60ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 60 },
      { id: "1kit-90", label: "1 Test Kit + 1 Bottle — 90 Capsules", price: 54.95, image: "/images/products/1kit-90ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 90 },
      { id: "2kit-none", label: "2 Test Kits", price: 86.88, image: "/images/products/2kit-open-contents.jpg", meta: "No supplement included", group: "kit-only" },
      { id: "2kit-30", label: "2 Test Kits + 1 Bottle — 30 Capsules", price: 87.64, image: "/images/products/2kit-30ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 30 },
      { id: "2kit-60", label: "2 Test Kits + 1 Bottle — 60 Capsules", price: 87.76, image: "/images/products/2kit-60ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 60 },
      { id: "2kit-90", label: "2 Test Kits + 1 Bottle — 90 Capsules", price: 94.82, image: "/images/products/2kit-90ct-bundle.jpg", group: "bundles", bundle: true, bottleCount: 1, capsuleCount: 90 },
      { id: "3kit-none", label: "3 Test Kits", price: 96.95, image: "/images/products/3kit-boxes.jpg", meta: "No supplement included", group: "kit-only" },
    ],
    image: {
      src: "/images/products/1kit-open-contents.jpg",
      alt: "At-Home Semen Test Kit",
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
      { title: "Complements the Kit", desc: "A natural next step alongside the At-Home Semen Test Kit." },
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
