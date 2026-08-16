import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PRODUCTS, INGREDIENTS } from "@/lib/supabase";
import AddToCartButton from "@/components/AddToCartButton";

export const metadata: Metadata = {
  title: "Male Fertility Support Formula",
  description:
    "A daily supplement with zinc, folic acid, and CoQ10 that may help support male reproductive wellness.",
};

const product = PRODUCTS[1];

export default function SupplementPage() {
  return (
    <div>
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-teal/10 shadow-sm order-2 lg:order-1">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                priority
                className="object-contain p-8"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-1 w-16 bg-teal rounded-full mb-6" />
              <h1 className="font-heading text-4xl font-bold text-navy leading-tight">
                {product.name}
              </h1>
              <p className="mt-2 text-teal font-body font-medium">{product.tagline}</p>
              <p className="mt-5 text-lg text-navy/70 font-body leading-relaxed">
                {product.description}
              </p>
              <p className="mt-4 font-heading text-2xl font-bold text-navy">
                ${product.price.toFixed(2)}
              </p>
              <div className="mt-6 max-w-md">
                <AddToCartButton product={product} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy text-center mb-10">
          Why It&apos;s Formulated This Way
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-teal/10">
              <svg className="h-5 w-5 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-navy/80 font-body text-sm leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-teal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-10">
            Ingredients
          </h2>
          <div className="max-w-xl mx-auto bg-offwhite rounded-lg border border-teal/10 overflow-hidden">
            {INGREDIENTS.map((ing, i) => (
              <div
                key={ing.name}
                className={`flex justify-between px-6 py-3 font-body text-sm ${
                  i % 2 === 0 ? "bg-white" : "bg-offwhite"
                }`}
              >
                <span className="text-navy">{ing.name}</span>
                <span className="text-navy/60 font-medium">{ing.amount}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/ingredients" className="text-teal font-body font-medium hover:underline">
              View full ingredients page →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-teal/5 border border-teal/20 rounded-lg p-6">
          <h3 className="font-heading font-semibold text-navy mb-2 text-sm uppercase tracking-wide">
            FDA Disclosure
          </h3>
          <p className="text-sm text-navy/70 font-body leading-relaxed">{product.disclaimer}</p>
        </div>
      </section>
    </div>
  );
}
