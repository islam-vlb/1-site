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
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center border-2 border-navy/15 rounded-full">
          <button
            className="h-11 w-11 text-navy hover:bg-offwhite transition-colors duration-150 rounded-l-full font-body text-lg"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center font-body text-sm font-semibold">{quantity}</span>
          <button
            className="h-11 w-11 text-navy hover:bg-offwhite transition-colors duration-150 rounded-r-full font-body text-lg"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={() => addItem(product, quantity)}
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
          <span>Subtotal ({quantity} × ${product.price.toFixed(2)})</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="font-medium">${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-navy pt-2.5 border-t border-navy/10">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
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
