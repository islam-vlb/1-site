import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/supabase";

export default function RelatedProduct({ product }: { product: Product }) {
  return (
    <div>
      <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-5">
        You Might Also Consider
      </p>
      <Link
        href={product.href}
        className="group flex items-center gap-6 border border-navy/10 rounded-xl p-6 bg-offwhite hover:border-teal/40 transition-colors max-w-xl"
      >
        <div className="relative h-20 w-20 shrink-0 rounded-lg overflow-hidden bg-white border border-navy/10">
          <Image src={product.image.src} alt={product.image.alt} fill className="object-contain p-2.5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-body uppercase tracking-wide text-teal mb-1">{product.category}</p>
          <h3 className="font-heading text-navy group-hover:text-teal transition-colors">{product.name}</h3>
          <p className="text-sm text-navy/50 font-body truncate">{product.caption}</p>
        </div>
        <span className="font-body font-semibold text-navy shrink-0">${product.price.toFixed(2)}</span>
      </Link>
    </div>
  );
}
