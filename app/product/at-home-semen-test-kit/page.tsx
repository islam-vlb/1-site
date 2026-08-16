import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/supabase";
import Breadcrumb from "@/components/Breadcrumb";
import PurchasePanel from "@/components/PurchasePanel";
import Highlights from "@/components/product/Highlights";
import ShippingReturns from "@/components/product/ShippingReturns";
import TrustSection from "@/components/product/TrustSection";
import RelatedProduct from "@/components/product/RelatedProduct";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "At-Home Semen Test Kit",
  description:
    "A private, at-home semen analysis kit for a first look at key fertility indicators — concentration and motility — from home.",
};

const product = PRODUCTS[0];
const supplement = PRODUCTS[1];

const steps = [
  { n: "01", title: "Collect", desc: "Follow the private, at-home collection process included in your kit." },
  { n: "02", title: "Follow the Instructions", desc: "Use the included step-by-step guide to process your sample." },
  { n: "03", title: "Review Your Information", desc: "Review your results at home and share them with your physician if you choose." },
];

const faqItems = [
  {
    q: "Is this diagnostic?",
    a: "No. This kit is intended as a wellness indicator to give you a private first look at key fertility indicators. It does not replace a professional medical diagnosis.",
  },
  {
    q: "How private is this?",
    a: "Your kit ships in discreet packaging with no identifying labels, and your results are only visible to you.",
  },
  {
    q: "How do I get my results?",
    a: "Results are available quickly at home once you complete the included testing process.",
  },
  {
    q: "Can I share results with my doctor?",
    a: "Yes. Your results can be shared with a healthcare provider for further guidance and follow-up.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day return window from the date received. See our Refund Policy for full details.",
  },
];

export default function TestKitPage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Test Kit", href: "/product/at-home-semen-test-kit" },
            { label: product.name },
          ]}
        />
      </div>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-14">
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-navy/10 shadow-sm">
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              priority
              className="object-contain p-10"
            />
          </div>
          <div>
            <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-3">
              {product.category}
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl text-navy leading-tight mb-3">
              {product.name}
            </h1>
            <p className="text-navy/55 font-body mb-5">{product.caption}</p>
            <p className="font-heading text-2xl text-navy mb-8">${product.price.toFixed(2)}</p>
            <PurchasePanel product={product} />
          </div>
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
            <h2 className="font-heading text-2xl text-navy mb-8">How It Works</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.n}>
                  <span className="font-heading text-3xl text-teal/30 block mb-2">{s.n}</span>
                  <h3 className="font-heading text-navy mb-1.5">{s.title}</h3>
                  <p className="text-sm text-navy/55 font-body leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
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
