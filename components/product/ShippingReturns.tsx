import Link from "next/link";

export default function ShippingReturns() {
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="border border-navy/10 rounded-lg p-6 bg-white">
        <h3 className="font-heading text-navy mb-2">Shipping</h3>
        <p className="text-sm text-navy/60 font-body leading-relaxed mb-3">
          Shipping is included at no additional charge. Ships via USPS Priority Mail in discreet,
          unmarked packaging. Orders process within 1–2 business days and typically arrive within
          3–5 business days.
        </p>
        <Link href="/shipping" className="text-teal font-body text-sm font-medium hover:underline">
          Read full Shipping Policy →
        </Link>
      </div>
      <div className="border border-navy/10 rounded-lg p-6 bg-white">
        <h3 className="font-heading text-navy mb-2">Returns</h3>
        <p className="text-sm text-navy/60 font-body leading-relaxed mb-3">
          Returns are accepted within 30 days of the date your order is received, provided the
          item is unused and in its original packaging.
        </p>
        <Link href="/refund" className="text-teal font-body text-sm font-medium hover:underline">
          Read full Refund Policy →
        </Link>
      </div>
    </div>
  );
}
