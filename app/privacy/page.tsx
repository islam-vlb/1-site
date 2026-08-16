import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/config";
import { PRODUCTS } from "@/lib/supabase";

export default function PrivacyPage() {
  const [kit, supplement] = PRODUCTS;

  const sections = [
    {
      heading: "Introduction",
      body: [
        `This Privacy Policy explains how ${BUSINESS.legalName}, operator of ${BUSINESS.storeName}, collects, uses, and protects your personal information when you shop for our products, including the ${kit.name} and ${supplement.name}.`,
      ],
    },
    {
      heading: "Information We Collect",
      body: [
        "We collect information you provide directly, such as your name, email address, shipping address, and payment details, as well as information collected automatically, such as browser type and IP address.",
      ],
    },
    {
      heading: "How We Use Your Information",
      body: [
        "We use your information to process and fulfill orders, communicate with you about your purchase, respond to inquiries, and improve our site and products.",
      ],
    },
    {
      heading: "Third Parties",
      body: [
        "Personal information will not be shared with Third Parties, except as necessary to process payments, fulfill and ship your order, or comply with legal obligations.",
      ],
    },
    {
      heading: "Payment Processing",
      body: [
        "Payment information is processed securely and is not stored on our servers beyond what is necessary to complete your transaction.",
      ],
    },
    {
      heading: "Cookies",
      body: [
        "We use cookies to operate core site functionality, such as your shopping cart, and to understand how visitors use our site.",
      ],
    },
    {
      heading: "Data Security",
      body: [
        "We implement reasonable administrative and technical safeguards designed to protect your personal information from unauthorized access, use, or disclosure.",
      ],
    },
    {
      heading: "Data Retention",
      body: [
        "We retain your personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required by law.",
      ],
    },
    {
      heading: "Your Rights",
      body: [
        "You may request access to, correction of, or deletion of your personal information by contacting us using the details below.",
      ],
    },
    {
      heading: "Children's Privacy",
      body: [
        "Our products and site are intended for individuals 18 years of age and older. We do not knowingly collect personal information from anyone under 18.",
      ],
    },
    {
      heading: "Changes to This Policy",
      body: [
        "We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.",
      ],
    },
    {
      heading: "Contact Us",
      body: [
        `For questions about this Privacy Policy, contact us at ${BUSINESS.email} or ${BUSINESS.legalName}, ${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}.`,
      ],
    },
  ];

  return <LegalPage title="Privacy Policy" updated="August 16, 2026" sections={sections} />;
}
