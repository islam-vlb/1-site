import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/supabase";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImageSelector from "@/components/ProductImageSelector";
import Highlights from "@/components/product/Highlights";
import ShippingReturns from "@/components/product/ShippingReturns";
import TrustSection from "@/components/product/TrustSection";
import RelatedProduct from "@/components/product/RelatedProduct";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Basal Body Thermometer",
  description:
    "A precision digital basal body thermometer for tracking morning temperature changes as part of a natural cycle-awareness routine.",
};

const product = PRODUCTS[0];
const supplement = PRODUCTS[1];

const faqItems = [
  {
    q: "How accurate are the readings?",
    a: "The device uses a high-precision sensor that detects temperature changes to 1/100th of a degree, giving you a consistent, precise reading each morning.",
  },
  {
    q: "When should I take my temperature?",
    a: "For the most consistent results, take your temperature each morning before rising, at roughly the same time each day, before eating, drinking, or getting out of bed.",
  },
  {
    q: "How long does a reading take?",
    a: "A full reading takes approximately 60 seconds. The device also recalls your last reading so you can quickly compare day to day.",
  },
  {
    q: "Is this a substitute for professional fertility testing?",
    a: "No. This is a temperature-tracking device only — it does not test, diagnose, or analyze any biological sample. It's intended to help you observe general patterns over time, not to replace professional medical advice or testing.",
  },
  {
    q: "How long does the battery last?",
    a: "The included battery is designed for extended daily use. The device ships with the battery already installed and ready to go.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day return window from the date received. See our Refund Policy for full details.",
  },
];

export default function ThermometerPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Thermometer", href: "/product/basal-body-thermometer" },
            { label: product.name },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-14">
          <ProductImageSelector product={product} />
        </div>
      </section>

      <section className="bg-white border-y border-navy/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-14">
          <Reveal>
            <h2 className="font-heading text-2xl text-navy mb-4">About This Product</h2>
            <p className="text-navy/65 font-body leading-relaxed">{product.description}</p>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl text-navy mb-4">What&apos;s Included</h2>
            <ul className="space-y-3">
              {product.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3 text-navy/70 font-body">
                  <svg className="h-4 w-4 text-teal shrink-0 mt-1" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl text-navy mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.features.map((f) => (
                <div key={f} className="border border-navy/10 rounded-lg p-4 text-sm text-navy/70 font-body leading-relaxed">
                  {f}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="font-heading text-2xl text-navy mb-4">How It Works</h2>
            <p className="text-navy/65 font-body leading-relaxed">
              Each morning before rising, place the sensor tip under your tongue and hold until it
              signals a completed reading in about 60 seconds. Log the number, then use the
              device&apos;s memory recall to compare it with your previous reading over time.
            </p>
          </Reveal>

          <Reveal>
            <div className="bg-offwhite border border-navy/10 rounded-lg p-6">
              <h3 className="font-heading text-navy mb-2 text-sm uppercase tracking-wide">
                Important Information
              </h3>
              <p className="text-sm text-navy/65 font-body leading-relaxed">{product.disclaimer}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal className="mb-10">
          <h2 className="font-heading text-2xl text-navy">Product Highlights</h2>
        </Reveal>
        <Highlights items={product.highlights} />
      </section>

      <section className="bg-white border-y border-navy/8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-heading text-2xl text-navy mb-8">Frequently Asked Questions</h2>
          <Faq items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="font-heading text-2xl text-navy mb-8">Shipping &amp; Returns</h2>
        <ShippingReturns />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <TrustSection />
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <RelatedProduct product={supplement} />
      </section>
    </div>
  );
}
