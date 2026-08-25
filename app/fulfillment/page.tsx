import { BUSINESS } from "@/lib/config";

export default function FulfillmentPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">Fulfillment Address</h1>
      <p className="text-navy/70 font-body leading-relaxed mb-6">
        All orders are fulfilled from, and returns should be sent to, the following address:
      </p>
      <div className="bg-white rounded-lg border border-teal/10 p-6 font-body text-navy">
        <p className="font-semibold">{BUSINESS.legalName}</p>
        <p>{BUSINESS.fulfillmentAddress.line1}</p>
        <p>
          {BUSINESS.fulfillmentAddress.city}, {BUSINESS.fulfillmentAddress.state}{" "}
          {BUSINESS.fulfillmentAddress.zip}
        </p>
        <p>
          {BUSINESS.fulfillmentAddress.country === "USA"
            ? "United States"
            : BUSINESS.fulfillmentAddress.country}
        </p>
      </div>
      <p className="text-sm text-navy/50 font-body mt-6">
        Please do not send returns without first contacting {BUSINESS.email} for return
        instructions — see our Refund Policy for details.
      </p>
    </div>
  );
}
