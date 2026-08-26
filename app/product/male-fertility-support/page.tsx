import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, INGREDIENTS } from "@/lib/supabase";
import Breadcrumb from "@/components/Breadcrumb";
import ProductImageSelector from "@/components/ProductImageSelector";
import Highlights from "@/components/product/Highlights";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Male Fertility Support Formula",
  description:
    "A daily supplement with zinc, folic acid, and CoQ10 that may help support male reproductive wellness.",
};

const product = PRODUCTS[1];

const faqItems = [
  {
    q: "How do I take this supplement?",
    a: "Take one capsule per day as part of your daily routine, or as directed by your physician.",
  },
  {
    q: "Can I take this alongside the At-Home Semen Test Kit?",
    a: "Yes. Many customers use the Test Kit to get a first look at fertility indicators and this formula as daily nutritional support.",
  },
  {
    q: "Is this FDA approved?",
    a: "No. As with all dietary supplements, these statements have not been evaluated by the FDA, and this product is not intended to diagnose, treat, cure, or prevent any disease.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day return window from the date received. See our Refund Policy for full details.",
  },
];

export default function SupplementPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Wellness", href: "/product/male-fertility-support" },
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
            <h2 className="font-heading text-2xl text-navy mb-4">Ingredients</h2>
            <div className="bg-offwhite rounded-lg border border-navy/10 overflow-hidden">
              {INGREDIENTS.map((ing, i) => (
                <div
                  key={ing.name}
                  className={`flex justify-between px-6 py-3 font-body text-sm ${
                    i % 2 === 0 ? "bg-white" : "bg-offwhite"
                  }`}
                >
                  <span className="text-navy">{ing.name}</span>
                  <span className="text-navy/55 font-medium">{ing.amount}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">
              <Link href="/ingredients" className="text-teal font-body text-sm font-medium hover:underline">
                View full ingredients page →
              </Link>
            </p>
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
            <div className="bg-offwhite border border-navy/10 rounded-lg p-6">
              <h3 className="font-heading text-navy mb-2 text-sm uppercase tracking-wide">
                FDA Disclosure
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
    </div>
  );
}
