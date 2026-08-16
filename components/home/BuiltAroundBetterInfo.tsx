import Image from "next/image";
import Link from "next/link";
import { TEST_KIT_HREF } from "@/lib/config";
import Reveal from "@/components/Reveal";

const features = [
  "Private at-home experience",
  "Clear testing guidance",
  "Designed around convenience",
];

export default function BuiltAroundBetterInfo() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-navy/10 shadow-sm">
              <Image
                src="/images/diagnostic-test.jpg"
                alt="Diagnostic test tube analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/10 to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance mb-5">
              Built Around Better Information
            </h2>
            <p className="text-navy/60 font-body leading-relaxed mb-6">
              We designed the At-Home Semen Test Kit to give you a private, convenient first look at
              key fertility indicators — without requiring a clinic visit. Clear guidance, discreet
              packaging, and results you can review on your own terms.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-navy/70 font-body">
                  <svg className="h-4 w-4 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={TEST_KIT_HREF}
              className="inline-block bg-navy text-white font-body font-medium rounded-full px-7 py-3.5 hover:bg-teal transition-colors"
            >
              Explore the Test Kit
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
