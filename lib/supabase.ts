export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  disclaimer: string;
  image: {
    src: string;
    alt: string;
  };
};

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "at-home-semen-test-kit",
    name: "At-Home Semen Test Kit",
    price: 44.95,
    tagline: "Private, At-Home Fertility Insight",
    description:
      "An at-home semen analysis kit designed to give men a private, convenient first look at key fertility indicators — including sperm concentration and motility — from the comfort of home. Results are available quickly and can be shared with a healthcare provider for further guidance. This kit is intended as a wellness indicator and does not replace professional medical diagnosis.",
    features: [
      "Private at-home sample collection",
      "Tests key fertility indicators: concentration and motility",
      "Easy-to-follow step-by-step instructions included",
      "Results available quickly at home",
      "Discreet packaging for shipping and storage",
      "Results may be shared with your physician for follow-up guidance",
    ],
    disclaimer:
      "This product is intended for general wellness and informational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider regarding any health concerns or before making decisions related to fertility or reproductive health.",
    image: {
      src: "/images/test-kit-placeholder.svg",
      alt: "At-Home Semen Test Kit — Product Image",
    },
  },
  {
    id: "2",
    slug: "male-fertility-support",
    name: "Male Fertility Support Formula",
    price: 39.95,
    tagline: "Daily Support for Male Reproductive Wellness",
    description:
      "A daily supplement formulated with zinc, folic acid, CoQ10, and other nutrients that may help support male reproductive wellness as part of a healthy lifestyle. This product is not intended to diagnose, treat, cure, or prevent any disease.",
    features: [
      "Formulated with zinc and folic acid, which may help support reproductive wellness",
      "Contains CoQ10 and selenium, antioxidants that may help support overall cellular health",
      "Maca root extract included, traditionally used to support vitality",
      "Vitamin D3 and Vitamin E included to help support general wellness",
      "One capsule serving per day, easy to incorporate into a daily routine",
    ],
    disclaimer:
      "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication.",
    image: {
      src: "/images/supplement-placeholder.svg",
      alt: "Male Fertility Support Formula — Product Image",
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
