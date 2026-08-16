import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "The Science",
  description: "General information on the fertility indicators our At-Home Semen Test Kit looks at.",
};

const indicators = [
  {
    title: "Concentration",
    desc: "A general term referring to how many sperm are present in a sample. It is one of several factors commonly discussed in conversations about male fertility.",
  },
  {
    title: "Motility",
    desc: "A general term referring to the movement of sperm. It is another factor commonly discussed alongside concentration in fertility-related conversations.",
  },
];

export default function SciencePage() {
  return (
    <div>
      <section className="bg-offwhite border-b border-navy/8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">The Science</p>
          <h1 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance mb-5">
            What the At-Home Semen Test Kit Looks At
          </h1>
          <p className="text-navy/60 font-body leading-relaxed max-w-2xl">
            Our At-Home Semen Test Kit gives you a private, at-home first look at two commonly
            discussed fertility indicators: concentration and motility. This page explains, in
            plain terms, what those indicators generally refer to.
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
            <h2 className="font-heading text-lg text-navy mb-3">A Wellness Indicator, Not a Diagnosis</h2>
            <p className="text-sm text-navy/65 font-body leading-relaxed mb-3">
              The At-Home Semen Test Kit is intended for general wellness and informational
              purposes. It is not a substitute for professional medical advice, diagnosis, or
              treatment. Always consult a qualified healthcare provider regarding any health
              concerns or before making decisions related to fertility or reproductive health.
            </p>
            <Link href="/product/at-home-semen-test-kit" className="text-teal font-body text-sm font-medium hover:underline">
              Learn more about the Test Kit →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
