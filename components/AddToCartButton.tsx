"use client";

import { useState } from "react";
import { Product } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
  label = "Add to Cart",
}: {
  product: Product;
  label?: string;
}) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-teal/30 rounded-md">
        <button
          className="h-11 w-11 text-navy hover:bg-offwhite"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center font-body">{quantity}</span>
        <button
          className="h-11 w-11 text-navy hover:bg-offwhite"
          onClick={() => setQuantity((q) => q + 1)}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addItem(product, quantity)}
        className="flex-1 bg-navy text-white font-body font-semibold rounded-md py-3 px-6 hover:bg-teal transition-colors"
      >
        {label}
      </button>
    </div>
  );
}
