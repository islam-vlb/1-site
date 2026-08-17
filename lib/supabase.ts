export type Product = {
  id: string;
  slug: string;
  href: string;
  category: string;
  name: string;
  caption: string;
  price: number;
  tagline: string;
  description: string;
  features: string[];
  whatsIncluded: string[];
  highlights: { title: string; desc: string }[];
  disclaimer: string;
  keywords: string[];
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
    price: 44.95,
    tagline: "Private, At-Home Fertility Insight",
    description:
      "An at-home semen analysis kit designed to give men a private, convenient first look at key fertility indicators — including sperm concentration and motility — from the comfort of home. Results are available at home and can be shared with a healthcare provider for further guidance. This kit is intended as a wellness indicator and does not replace professional medical diagnosis.",
    features: [
      "Private at-home sample collection",
      "Tests key fertility indicators: concentration and motility",
      "Easy-to-follow step-by-step instructions included",
      "Results available at home",
      "Discreet packaging for shipping and storage",
      "Results may be shared with your physician for follow-up guidance",
    ],
    whatsIncluded: [
      "One at-home semen collection and testing kit",
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
      "male fertility", "concentration", "motility", "diagnostic",
    ],
    image: {
      src: "/images/test-kit-placeholder.svg",
      alt: "At-Home Semen Test Kit — Product Image",
    },
  },
  {
    id: "2",
    slug: "male-fertility-support",
    href: "/product/male-fertility-support",
    category: "Wellness Supplement",
    name: "Male Fertility Support Formula",
    caption: "Daily nutrients formulated to support male reproductive wellness.",
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
    whatsIncluded: [
      "One-month supply — 30 capsules",
      "One capsule per daily serving",
      "Discreet, unmarked outer packaging",
    ],
    highlights: [
      { title: "Daily Simplicity", desc: "One capsule a day fits naturally into an existing routine." },
      { title: "Thoughtful Formula", desc: "Built around nutrients commonly associated with reproductive wellness." },
      { title: "Complements the Kit", desc: "A natural next step alongside the At-Home Semen Test Kit." },
      { title: "Discreetly Shipped", desc: "Arrives in plain, unmarked packaging like every order." },
    ],
    disclaimer:
      "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Individual results may vary. Consult your physician before beginning any new supplement, especially if you are pregnant, nursing, have a medical condition, or are taking medication.",
    keywords: [
      "supplement", "wellness", "male fertility support", "zinc", "folic acid",
      "CoQ10", "maca root", "vitamin d3", "vitamin e", "daily vitamin",
    ],
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
