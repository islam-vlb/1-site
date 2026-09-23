import Image from "next/image";
import Link from "next/link";
import { Product, startingPrice } from "@/lib/supabase";

export default function RelatedProduct({ product }: { product: Product }) {
  return (
    <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-center bg-white border border-navy/10 rounded-2xl p-6 sm:p-10 max-w-3xl mx-auto">
      <div className="relative h-28 w-28 sm:h-32 sm:w-32 mx-auto shrink-0 rounded-xl overflow-hidden bg-offwhite border border-navy/10">
        <Image src={product.image.src} alt={product.image.alt} fill className="object-contain p-4" />
      </div>
      <div className="text-center sm:text-left">
        <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-2">You Might Also Like</p>
        <h3 className="font-heading text-xl sm:text-2xl text-navy mb-2">{product.name}</h3>
        <p className="text-sm text-navy/55 font-body leading-relaxed mb-4 max-w-md mx-auto sm:mx-0">
          {product.caption}
        </p>
        <p className="font-heading text-lg text-navy mb-4">From ${startingPrice(product).toFixed(2)}</p>
        <Link
          href={product.href}
          className="inline-block text-teal font-body font-medium border-b border-teal/40 pb-0.5 hover:border-teal transition-colors"
        >
          View Product →
        </Link>
      </div>
    </div>
  );
}
