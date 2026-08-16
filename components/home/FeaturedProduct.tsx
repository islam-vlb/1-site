import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/supabase";
import AddToCartButton from "@/components/AddToCartButton";
import Reveal from "@/components/Reveal";

const product = PRODUCTS[0];

export default function FeaturedProduct() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <Reveal className="max-w-xl mb-12">
          <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-4">Flagship Product</p>
          <h2 className="font-heading text-3xl sm:text-4xl text-navy leading-tight text-balance">
            The At-Home Semen Test Kit
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-navy/10 bg-white">
            <div className="relative aspect-square lg:aspect-auto bg-grad-teal">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                className="object-contain p-12"
              />
            </div>
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <p className="text-xs font-body uppercase tracking-wide text-teal mb-3">{product.category}</p>
              <h3 className="font-heading text-2xl sm:text-3xl text-navy mb-2">{product.name}</h3>
              <p className="text-navy/55 font-body mb-5">{product.caption}</p>
              <p className="font-heading text-2xl text-navy mb-5">${product.price.toFixed(2)}</p>
              <p className="text-navy/65 font-body leading-relaxed mb-6">
                {product.description}
              </p>
              <ul className="space-y-2.5 mb-8">
                {product.features.slice(0, 4).map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-navy/70 font-body">
                    <svg className="h-4 w-4 text-teal shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={product.href}
                  className="text-center border border-navy/20 text-navy font-body font-medium rounded-full px-6 py-3 hover:border-navy transition-colors"
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
