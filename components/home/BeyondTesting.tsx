import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/supabase";
import Reveal from "@/components/Reveal";

const supplement = PRODUCTS[1];

export default function BeyondTesting() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <Reveal>
          <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center bg-white border border-navy/10 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto">
            <div className="relative h-28 w-28 sm:h-32 sm:w-32 mx-auto shrink-0 rounded-xl overflow-hidden bg-offwhite border border-navy/10">
              <Image
                src={supplement.image.src}
                alt={supplement.image.alt}
                fill
                className="object-contain p-4"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-2">
                Supporting Your Wellness Journey
              </p>
              <h3 className="font-heading text-xl sm:text-2xl text-navy mb-2">{supplement.name}</h3>
              <p className="text-sm text-navy/55 font-body leading-relaxed mb-5 max-w-md mx-auto sm:mx-0">
                {supplement.caption}
              </p>
              <Link
                href={supplement.href}
                className="inline-block text-teal font-body font-medium border-b border-teal/40 pb-0.5 hover:border-teal transition-colors"
              >
                Explore Wellness →
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
