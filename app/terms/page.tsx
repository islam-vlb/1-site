import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/config";
import { PRODUCTS } from "@/lib/supabase";

export default function TermsPage() {
  const [kit, supplement] = PRODUCTS;

  const sections = [
    {
      heading: "Acceptance of Terms",
      body: [
        `By accessing or purchasing from ${BUSINESS.storeName}, operated by ${BUSINESS.legalName}, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use this site or purchase our products.`,
      ],
    },
    {
      heading: "Eligibility",
      body: [
        "You must be at least 18 years of age to purchase products from this site. By placing an order, you represent and warrant that you meet this age requirement.",
      ],
    },
    {
      heading: "Products Offered",
      body: [
        `We currently offer two products, each available in multiple bundle and quantity options: the ${kit.name} and the ${supplement.name}. Product descriptions, features, and prices are subject to change without notice.`,
        `${kit.name}:`,
        ...kit.variants.map((v) => `${v.label} — $${v.price.toFixed(2)}`),
        `${supplement.name}:`,
        ...supplement.variants.map((v) => `${v.label} — $${v.price.toFixed(2)}`),
      ],
    },
    {
      heading: "Intended Use",
      body: [
        `The ${kit.name} is intended for general wellness and informational purposes and is not a substitute for professional medical advice, diagnosis, or treatment.`,
        `The ${supplement.name} is a dietary supplement. Statements about this product have not been evaluated by the Food and Drug Administration, and it is not intended to diagnose, treat, cure, or prevent any disease.`,
      ],
    },
    {
      heading: "Orders and Payment",
      body: [
        "All orders are subject to acceptance and availability. We accept Visa and Mastercard. By placing an order, you authorize us to charge your payment method for the total order amount.",
        `Charges will appear on your statement as "${BUSINESS.descriptor}."`,
      ],
    },
    {
      heading: "Pricing",
      body: [
        "All prices are listed in U.S. dollars. Shipping is included at no additional charge.",
      ],
    },
    {
      heading: "Shipping",
      body: [
        "Shipping is included at no additional charge with every order. Orders ship via USPS Priority Mail to all 50 US states and the District of Columbia. See our Shipping Policy for full details.",
      ],
    },
    {
      heading: "Returns and Refunds",
      body: [
        "Returns are accepted within 30 days of the date your order is received, subject to the conditions described in our Refund Policy.",
      ],
    },
    {
      heading: "Privacy",
      body: [
        "Your personal information is handled in accordance with our Privacy Policy. Personal information will not be shared with Third Parties.",
      ],
    },
    {
      heading: "Prohibited Use",
      body: [
        "You may not use this site for any unlawful purpose or in any way that could damage, disable, or impair the site or interfere with any other party's use of it.",
      ],
    },
    {
      heading: "Intellectual Property",
      body: [
        `All content on this site, including text, graphics, logos, and images, is the property of ${BUSINESS.legalName} and is protected by applicable intellectual property laws.`,
      ],
    },
    {
      heading: "Limitation of Liability",
      body: [
        `${BUSINESS.legalName} shall not be liable for any indirect, incidental, or consequential damages arising from your use of our products or this site.`,
      ],
    },
    {
      heading: "Changes to These Terms",
      body: [
        "We may update these Terms & Conditions from time to time. Continued use of the site after changes are posted constitutes acceptance of the revised terms.",
      ],
    },
    {
      heading: "Contact Information",
      body: [
        `Questions about these Terms & Conditions can be directed to ${BUSINESS.email} or ${BUSINESS.legalName}, ${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}.`,
      ],
    },
  ];

  return <LegalPage title="Terms & Conditions" updated="August 16, 2026" sections={sections} />;
}
