import LegalPage from "@/components/LegalPage";
import { BUSINESS } from "@/lib/config";

export default function RefundPage() {
  const sections = [
    {
      heading: "30-Day Return Window",
      body: [
        "You may return your order within 30 days of the date it was received for a refund, subject to the conditions below.",
      ],
    },
    {
      heading: "Eligibility for Return",
      body: [
        "To be eligible for a return, items must be unused, in their original packaging, and accompanied by proof of purchase.",
      ],
    },
    {
      heading: "How to Start a Return",
      body: [
        `To initiate a return, contact us at ${BUSINESS.email} with your order number and reason for return. We will provide instructions for returning your item.`,
      ],
    },
    {
      heading: "Return Shipping",
      body: [
        "Return shipping costs are the responsibility of the customer unless the return is due to a defective or incorrect item.",
      ],
    },
    {
      heading: "Refund Processing",
      body: [
        "Once your return is received and inspected, we will notify you of the approval or rejection of your refund. Approved refunds are processed to your original payment method within 5–10 business days.",
      ],
    },
    {
      heading: "Non-Returnable Situations",
      body: [
        "Items returned outside the 30-day window, or that are used, damaged, or missing original packaging, may not be eligible for a full refund.",
      ],
    },
    {
      heading: "Damaged or Incorrect Orders",
      body: [
        `If your order arrives damaged or you receive an incorrect item, contact us within 30 days of receipt at ${BUSINESS.email} and we will make it right.`,
      ],
    },
    {
      heading: "Return Address",
      body: [
        `Approved returns should be sent to ${BUSINESS.legalName}, ${BUSINESS.fulfillmentAddress.line1}, ${BUSINESS.fulfillmentAddress.city}, ${BUSINESS.fulfillmentAddress.state} ${BUSINESS.fulfillmentAddress.zip} — see our Fulfillment Address page for details.`,
      ],
    },
    {
      heading: "Contact Us",
      body: [
        `Questions about returns or refunds can be directed to ${BUSINESS.email} or ${BUSINESS.legalName}, ${BUSINESS.address.line1}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}.`,
      ],
    },
  ];

  return <LegalPage title="Refund Policy" updated="August 16, 2026" sections={sections} />;
}
