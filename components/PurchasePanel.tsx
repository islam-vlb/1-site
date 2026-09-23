"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product, getDefaultVariant } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";

const trustItems = [
  { label: "Private Experience", icon: "M12 2a5 5 0 015 5v3h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z" },
  { label: "Secure Checkout", icon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" },
  { label: "Discreet Packaging", icon: "M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7" },
  { label: "Reliable Delivery", icon: "M13 2L3 14h7l-1 8 11-13h-7l1-7z" },
];

export default function PurchasePanel({ product, selectedVariantId, onVariantChange }: { product: Product, selectedVariantId?: string, onVariantChange?: (id: string) => void }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [internalId, setInternalId] = useState(getDefaultVariant(product).id);
  const variantId = selectedVariantId ?? internalId;
  const setVariantId = onVariantChange ?? setInternalId;

  const selected = product.variants.find((v) => v.id === variantId) ?? getDefaultVariant(product);
  const groups = product.variantGroups;

  function handleAddToCart() {
    addItem(product, selected);
  }

  function handleBuyNow() {
    addItem(product, selected);
    router.push("/checkout");
  }

  function renderVariantCard(variant: typeof product.variants[number]) {
    const isSelected = variant.id === selected.id;
    return (
      <button
        key={variant.id}
        type="button"
        onClick={() => setVariantId(variant.id)}
        className={`w-full flex items-center gap-4 rounded-xl border-2 px-4 py-3.5 text-left transition-colors duration-150 ${
          isSelected ? "border-teal bg-teal/[0.06]" : "border-navy/10 bg-white hover:border-navy/25"
        }`}
      >
        <span
          className={`h-5 w-5 shrink-0 rounded-full border-2 flex items-center justify-center ${
            isSelected ? "border-teal" : "border-navy/25"
          }`}
        >
          {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-teal" />}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-body text-sm font-medium text-navy leading-snug">{variant.label}</span>
          {variant.bundle && (
            <span className="inline-block mt-1 px-2 py-0.5 bg-teal/10 text-teal text-[0.7rem] font-bold uppercase tracking-wider rounded-full">Bundle Offer</span>
          )}
          {variant.meta && !variant.bundle && (
            <span className="block font-body text-xs text-navy/50 mt-0.5">{variant.meta}</span>
          )}
        </span>
        <span className="font-heading text-navy font-semibold shrink-0">${variant.price.toFixed(2)}</span>
      </button>
    );
  }

  return (
    <div>
      <div className="space-y-6 mb-6">
        {groups ? (
          groups.map((group) => (
            <div key={group.key}>
              <p className="text-xs font-body uppercase tracking-[0.15em] text-navy/50 mb-2.5 font-semibold">
                {group.label}
              </p>
              <div className="space-y-2.5">
                {product.variants.filter((v) => v.group === group.key).map(renderVariantCard)}
              </div>
            </div>
          ))
        ) : (
          <div className="space-y-2.5">{product.variants.map(renderVariantCard)}</div>
        )}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 border-2 border-navy text-navy font-body font-semibold text-sm tracking-wide uppercase rounded-full py-3 hover:bg-navy hover:text-white transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
      <button
        onClick={handleBuyNow}
        className="w-full bg-navy text-white font-body font-semibold text-sm tracking-wide uppercase rounded-full py-3.5 hover:bg-teal transition-all duration-300 shadow-md hover:shadow-lg mb-6"
      >
        Buy Now
      </button>

      <div className="bg-offwhite rounded-xl border border-navy/10 p-5 space-y-2.5 text-sm font-body text-navy/70 mb-8">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${selected.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">Included</span>
        </div>
        <div className="flex justify-between font-semibold text-navy pt-2.5 border-t border-navy/10">
          <span>Total</span>
          <span>${selected.price.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-body text-navy/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
