import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, startingPrice } from "@/lib/supabase";
import AddToCartButton from "@/components/AddToCartButton";
import Reveal from "@/components/Reveal";

const product = PRODUCTS[0];

export default function FeaturedProduct() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-28">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-5 font-semibold">Flagship Product</p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.5rem] text-navy leading-[1.15] text-balance">
            The At-Home Semen Test Kit
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-0 rounded-[1.75rem] overflow-hidden border border-navy/10 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <div className="relative aspect-square lg:aspect-auto bg-grad-teal">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                className="object-contain p-12 lg:p-16"
              />
            </div>
            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <p className="text-xs font-body uppercase tracking-[0.15em] text-teal mb-4 font-semibold">{product.category}</p>
              <h3 className="font-heading text-2xl sm:text-3xl lg:text-[1.75rem] text-navy mb-3 leading-tight">{product.name}</h3>
              <p className="text-navy/55 font-body mb-6 leading-relaxed">{product.caption}</p>
              <div className="flex items-baseline gap-3 mb-6">
                <p className="font-heading text-3xl text-navy">From ${startingPrice(product).toFixed(2)}</p>
              </div>
              <p className="text-navy/65 font-body leading-relaxed mb-8 text-[0.95rem]">
                {product.description}
              </p>
              <ul className="space-y-3 mb-10">
                {product.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-navy/70 font-body">
                    <svg className="h-5 w-5 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={product.href}
                  className="text-center border-2 border-navy/15 text-navy font-body font-semibold text-sm tracking-wide uppercase rounded-full px-7 py-3.5 hover:border-navy hover:bg-navy hover:text-white transition-all duration-300"
                >
                  View Product
                </Link>
                <div className="flex-1">
                  <AddToCartButton product={product} label="Add to Cart" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
