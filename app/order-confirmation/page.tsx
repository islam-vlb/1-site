import Link from "next/link";
import { BUSINESS } from "@/lib/config";

export default function OrderConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="mx-auto h-16 w-16 rounded-full bg-teal/10 flex items-center justify-center mb-6">
        <svg className="h-8 w-8 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12l6 6L20 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="font-heading text-3xl font-bold text-navy mb-4">Order Confirmed</h1>
      <p className="text-navy/70 font-body leading-relaxed mb-2">
        Thank you for your order. A confirmation email will be sent to you shortly with your
        order details.
      </p>
      <p className="text-navy/70 font-body leading-relaxed mb-8">
        Your order will ship in discreet packaging within 1–2 business days.
      </p>
      <div className="bg-white rounded-lg border border-teal/10 p-6 text-left text-sm font-body text-navy/70 space-y-2 mb-8">
        <p>Questions about your order? Contact us at{" "}
          <a href={`mailto:${BUSINESS.email}`} className="text-teal hover:underline">{BUSINESS.email}</a>.
        </p>
        <p>Charges will appear as PrecisionFertilityLab on your statement.</p>
      </div>
      <Link
        href="/"
         className="inline-block bg-navy text-white font-body font-semibold rounded-md py-3 px-8 hover:bg-teal transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
