"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { BUSINESS } from "@/lib/config";
import { US_STATES } from "@/lib/states";
import PaymentIcons from "@/components/PaymentIcons";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const total = subtotal + (items.length > 0 ? BUSINESS.shippingFlatRate : 0);
  const hasSupplement = items.some((i) => i.slug === "male-fertility-support");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!agreed || items.length === 0) return;
    setSubmitting(true);
    clearCart();
    router.push("/order-confirmation");
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold text-navy mb-4">Your Cart is Empty</h1>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-body font-semibold rounded-md py-3 px-8 hover:bg-accent/90 transition-colors"
        >
          Shop At-Home Test Kit
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="font-heading font-semibold text-navy text-lg mb-4">Contact Information</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="email" placeholder="Email address" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm sm:col-span-2" />
              <input required type="text" placeholder="First name" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
              <input required type="text" placeholder="Last name" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
            </div>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-navy text-lg mb-4">Shipping Address</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="text" placeholder="Street address" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm sm:col-span-2" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm sm:col-span-2" />
              <input required type="text" placeholder="City" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
              <select required defaultValue="" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm bg-white">
                <option value="" disabled>State</option>
                {US_STATES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input required type="text" placeholder="ZIP code" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
              <select disabled defaultValue="USA" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm bg-offwhite text-navy/70">
                <option value="USA">United States</option>
              </select>
            </div>
          </section>

          <section>
            <h2 className="font-heading font-semibold text-navy text-lg mb-4">Payment</h2>
            <div className="mb-4">
              <PaymentIcons size="h-10" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <input required type="text" inputMode="numeric" placeholder="Card number" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm sm:col-span-2" />
              <input required type="text" placeholder="MM / YY" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
              <input required type="text" inputMode="numeric" placeholder="CVC" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm" />
              <input required type="text" placeholder="Name on card" className="border border-teal/30 rounded-md px-4 py-3 font-body text-sm sm:col-span-2" />
            </div>
          </section>

          <section className="space-y-3 border-t border-teal/10 pt-6">
            <label className="flex items-start gap-3 font-body text-sm text-navy">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 h-4 w-4"
              />
              <span>
                I have read and agree to the{" "}
                <Link href="/terms" className="font-bold underline text-teal">Terms &amp; Conditions</Link>,{" "}
                <Link href="/privacy" className="font-bold underline text-navy">Privacy Policy</Link>, and{" "}
                <Link href="/refund" className="font-bold underline text-accent">Refund Policy</Link>.
              </span>
            </label>

            <p className="text-base font-semibold text-navy">
              I agree to be billed ${total.toFixed(2)}.
            </p>
            <p className="text-base font-bold text-navy">
              Your credit card will be charged ${total.toFixed(2)}.
            </p>
            <p className="text-sm font-bold text-navy">
              Charges will appear as PrecisionFertilityLab on your statement.
            </p>
            <p className="text-sm font-semibold text-navy">
              Personal information will not be shared with Third Parties.
            </p>
            <p className="text-sm font-bold text-red-600">
              ⚠️ Individuals under 18 are not permitted to purchase.
            </p>
          </section>

          <button
            type="submit"
            disabled={!agreed || submitting}
            className="w-full bg-accent text-white font-body font-semibold rounded-md py-4 hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {submitting ? "Placing Order..." : `Place Order — $${total.toFixed(2)}`}
          </button>
        </div>

        <aside className="bg-white rounded-lg border border-teal/10 p-6 h-fit space-y-4">
          <h2 className="font-heading font-semibold text-navy text-lg">Order Summary</h2>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.productId}>
                <div className="flex justify-between font-body text-sm text-navy">
                  <span>{item.name} × {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                {item.slug === "male-fertility-support" && (
                  <p className="text-xs text-navy/50 font-body mt-1 leading-relaxed">
                    These statements have not been evaluated by the FDA. This product is not
                    intended to diagnose, treat, cure, or prevent any disease.
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-teal/10 pt-4 space-y-2">
            <div className="flex justify-between font-body text-sm text-navy/70">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-body text-sm text-navy/70">
              <span>Shipping</span>
              <span>${BUSINESS.shippingFlatRate.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-heading font-bold text-navy text-lg pt-2 border-t border-teal/10">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          {hasSupplement && (
            <p className="text-xs text-navy/50 font-body leading-relaxed border-t border-teal/10 pt-4">
              Individual results may vary. Consult your physician before beginning any new
              supplement.
            </p>
          )}
        </aside>
      </form>
    </div>
  );
}
