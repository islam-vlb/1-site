"use client";

import { useState } from "react";
import Image from "next/image";
import { Product, getVariant, getDefaultVariant } from "@/lib/supabase";
import PurchasePanel from "@/components/PurchasePanel";

export default function ProductImageSelector({ product }: { product: Product }) {
  const [selectedVariantId, setSelectedVariantId] = useState(getDefaultVariant(product).id);
  const selected = getVariant(product, selectedVariantId) ?? getDefaultVariant(product);

  return (
    <>
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-navy/10 shadow-sm">
        <Image
          src={selected.image}
          alt={selected.label}
          fill
          priority
          className="object-contain p-10"
        />
      </div>
      <div>
        <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-3">
          {product.category}
        </p>
        <h1 className="font-heading text-3xl sm:text-4xl text-navy leading-tight mb-3">
          {product.name}
        </h1>
        <p className="text-navy/55 font-body mb-5">{product.caption}</p>
        <PurchasePanel product={product} selectedVariantId={selectedVariantId} onVariantChange={setSelectedVariantId} />
      </div>
    </>
  );
}
