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
    <section className="bg-white border-y border-navy/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-navy/10 shadow-xl">
              <Image
                src="/images/diagnostic-test.jpg"
                alt="Diagnostic test tube analysis"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/15 to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-5 font-semibold">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.5rem] text-navy leading-[1.15] text-balance mb-6">
              Built Around Better Information
            </h2>
            <p className="text-navy/60 font-body leading-relaxed text-lg mb-8">
              We designed the At-Home Semen Test Kit to give you a private, convenient first look at
              key fertility indicators — without requiring a clinic visit. Easy-to-follow guidance,
              discreet packaging, and results available at home.
            </p>
            <ul className="space-y-4 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3.5 text-[0.95rem] text-navy/70 font-body">
                  <div className="h-6 w-6 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="h-3.5 w-3.5 text-teal" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={TEST_KIT_HREF}
              className="group relative inline-flex bg-navy text-white font-body font-semibold text-sm tracking-wide uppercase rounded-full px-8 py-4 hover:bg-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore the Test Kit</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal to-teal-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
