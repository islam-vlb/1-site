import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS } from "@/lib/supabase";
import AddToCartButton from "@/components/AddToCartButton";
import Faq from "@/components/Faq";

export const metadata: Metadata = {
  title: "At-Home Semen Test Kit",
  description:
    "A private, at-home semen analysis kit for a first look at key fertility indicators — concentration and motility — from home.",
};

const product = PRODUCTS[0];

const trustItems = [
  { label: "Discreet Packaging", icon: "M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7" },
  { label: "Private Results", icon: "M12 2a5 5 0 015 5v3h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z" },
  { label: "Ships Fast", icon: "M13 2L3 14h7l-1 8 11-13h-7l1-7z" },
  { label: "Secure Checkout", icon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" },
];

const steps = [
  {
    step: "1",
    title: "Collect Sample",
    desc: "Follow the private, at-home collection process included in your kit.",
  },
  {
    step: "2",
    title: "Follow Instructions",
    desc: "Use the included step-by-step guide to process your sample.",
  },
  {
    step: "3",
    title: "Get Results",
    desc: "Review your results at home and share them with your physician if needed.",
  },
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

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-1 w-16 bg-teal rounded-full mb-6" />
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy leading-tight">
                Private, <span className="text-teal">At-Home</span> Fertility Insight
              </h1>
              <p className="mt-5 text-lg text-navy/70 font-body leading-relaxed max-w-lg">
                A convenient, private at-home semen test kit that gives you a first look at
                key fertility indicators — without the clinic visit.
              </p>
              <div className="mt-8 max-w-md">
                <AddToCartButton product={product} label="Order Your Kit" />
              </div>
              <p className="mt-4 text-sm text-navy/50 font-body">${product.price.toFixed(2)} — one-time purchase</p>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-teal/10 shadow-sm">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                priority
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-y border-teal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <svg className="h-7 w-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm font-body font-medium text-navy">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy text-center mb-10">
          What&apos;s Included
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

      {/* How it works */}
      <section className="bg-white border-y border-teal/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-heading text-3xl font-bold text-navy text-center mb-12">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto h-12 w-12 rounded-full bg-teal text-white font-heading font-bold flex items-center justify-center text-lg mb-4">
                  {s.step}
                </div>
                <h3 className="font-heading font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-navy/60 font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Medical disclaimer */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-teal/5 border border-teal/20 rounded-lg p-6">
          <h3 className="font-heading font-semibold text-navy mb-2 text-sm uppercase tracking-wide">
            Medical Disclaimer
          </h3>
          <p className="text-sm text-navy/70 font-body leading-relaxed">{product.disclaimer}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-3xl font-bold text-navy text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          <Faq items={faqItems} />
        </div>
      </section>
    </div>
  );
}
