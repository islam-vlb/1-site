import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Science",
  description: "General information on basal body temperature tracking and what our thermometer measures.",
};

const indicators = [
  {
    title: "Basal Body Temperature",
    desc: "Your body's temperature at rest, typically measured first thing in the morning before any activity. It is one of several factors commonly discussed in conversations about cycle awareness.",
  },
  {
    title: "Temperature Trends",
    desc: "Tracking your readings over time can help you observe general patterns in your body's natural rhythm. It is another factor commonly discussed alongside daily tracking routines.",
  },
];

export default function SciencePage() {
  return (
    <div>
      <section className="bg-offwhite border-b border-navy/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">The Science</p>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance mb-5">
            What the Basal Body Thermometer Tracks
          </h1>
          <p className="text-navy/60 font-body leading-relaxed max-w-2xl">
            Our Basal Body Thermometer gives you a private, at-home way to track your morning
            temperature over time. This page explains, in plain terms, what basal body temperature
            generally refers to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {indicators.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="border border-navy/10 rounded-lg p-7 bg-white h-full">
                <h2 className="font-heading text-xl text-navy mb-3">{item.title}</h2>
                <p className="text-sm text-navy/60 font-body leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bg-offwhite border border-navy/10 rounded-lg p-7">
            <h2 className="font-heading text-lg text-navy mb-3">A Tracking Tool, Not a Diagnosis</h2>
            <p className="text-sm text-navy/65 font-body leading-relaxed mb-3">
              The Basal Body Thermometer is intended for general wellness and informational
              purposes. It measures temperature only and does not test, diagnose, or analyze any
              biological sample. It is not a substitute for professional medical advice, diagnosis,
              or treatment. Always consult a qualified healthcare provider regarding any health
              concerns or before making decisions related to fertility or reproductive health.
            </p>
            <Link href="/product/basal-body-thermometer" className="text-teal font-body text-sm font-medium hover:underline">
              Learn more about the Thermometer →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
