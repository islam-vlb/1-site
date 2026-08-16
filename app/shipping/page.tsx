import { BUSINESS } from "@/lib/config";

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">Shipping Policy</h1>

      <div className="space-y-6 text-navy/70 font-body leading-relaxed">
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Shipping Area</h2>
          <p>We currently ship to addresses within the United States only.</p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Shipping Method &amp; Rate</h2>
          <p>
            All orders ship via USPS Priority Mail at a flat rate of $
            {BUSINESS.shippingFlatRate.toFixed(2)}, regardless of order size.
          </p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Processing Time</h2>
          <p>Orders are processed within 1–2 business days of purchase.</p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Delivery Time</h2>
          <p>Once shipped, orders typically arrive within 3–5 business days.</p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Discreet Packaging</h2>
          <p>
            All orders are shipped in plain, unmarked packaging with no product names or
            identifying information on the exterior, to protect your privacy.
          </p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Order Tracking</h2>
          <p>
            A tracking number will be provided via email once your order has shipped.
          </p>
        </div>
        <div>
          <h2 className="font-heading font-semibold text-navy text-lg mb-2">Contact Us</h2>
          <p>
            Questions about shipping can be directed to{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-teal hover:underline">
              {BUSINESS.email}
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
