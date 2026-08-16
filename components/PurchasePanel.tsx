"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";
import { BUSINESS } from "@/lib/config";

const trustItems = [
  { label: "Private Experience", icon: "M12 2a5 5 0 015 5v3h1a2 2 0 012 2v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7a2 2 0 012-2h1V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v3h6V7a3 3 0 00-3-3z" },
  { label: "Secure Checkout", icon: "M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" },
  { label: "Discreet Packaging", icon: "M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7" },
  { label: "Reliable Delivery", icon: "M13 2L3 14h7l-1 8 11-13h-7l1-7z" },
];

export default function PurchasePanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const subtotal = product.price * quantity;
  const shipping = BUSINESS.shippingFlatRate;
  const total = subtotal + shipping;

  function handleBuyNow() {
    addItem(product, quantity);
    router.push("/checkout");
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-navy/20 rounded-full">
          <button
            className="h-12 w-12 text-navy hover:bg-offwhite rounded-l-full"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center font-body">{quantity}</span>
          <button
            className="h-12 w-12 text-navy hover:bg-offwhite rounded-r-full"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addItem(product, quantity)}
          className="flex-1 border border-navy text-navy font-body font-medium rounded-full py-3 hover:bg-navy hover:text-white transition-colors"
        >
          Add to Cart
        </button>
      </div>
      <button
        onClick={handleBuyNow}
        className="mt-3 w-full bg-navy text-white font-body font-medium rounded-full py-3.5 hover:bg-teal transition-colors"
      >
        Buy Now
      </button>

      <div className="mt-6 space-y-2 text-sm font-body text-navy/70">
        <div className="flex justify-between">
          <span>Subtotal ({quantity} × ${product.price.toFixed(2)})</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-navy pt-2 border-t border-navy/10">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-teal shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-body text-navy/60">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
