"use client";

import { Product, getDefaultVariant } from "@/lib/supabase";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
  label = "Add to Cart",
}: {
  product: Product;
  label?: string;
}) {
  const { addItem } = useCart();

  return (
    <button
      onClick={() => addItem(product, getDefaultVariant(product))}
      className="w-full bg-navy text-white font-body font-semibold rounded-md py-3 px-6 hover:bg-teal transition-colors"
    >
      {label}
    </button>
  );
}
