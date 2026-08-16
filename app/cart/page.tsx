"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { BUSINESS } from "@/lib/config";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-heading text-3xl font-bold text-navy mb-4">Your Cart is Empty</h1>
        <p className="text-navy/60 font-body mb-8">Browse our products to get started.</p>
        <Link
          href="/"
          className="inline-block bg-navy text-white font-body font-semibold rounded-md py-3 px-8 hover:bg-teal transition-colors"
        >
          Shop At-Home Test Kit
        </Link>
      </div>
    );
  }

  const total = subtotal + BUSINESS.shippingFlatRate;

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-8">Your Cart</h1>

      <div className="bg-white rounded-lg border border-teal/10 divide-y divide-teal/10">
        {items.map((item) => (
          <div key={item.productId} className="flex gap-4 p-6">
            <div className="relative h-24 w-24 shrink-0 rounded-md overflow-hidden bg-offwhite border border-teal/10">
              <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
            </div>
            <div className="flex-1">
              <p className="font-body font-semibold text-navy">{item.name}</p>
              <p className="text-sm text-navy/60 font-body">${item.price.toFixed(2)} each</p>
              <div className="flex items-center gap-3 mt-3">
                <button
                  className="h-8 w-8 rounded border border-teal/30 text-navy hover:bg-offwhite"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="text-sm font-body w-6 text-center">{item.quantity}</span>
                <button
                  className="h-8 w-8 rounded border border-teal/30 text-navy hover:bg-offwhite"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
                <button
                  className="ml-4 text-xs text-navy/50 hover:text-teal font-body"
                  onClick={() => removeItem(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="font-body font-semibold text-navy self-center">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 max-w-sm ml-auto bg-white rounded-lg border border-teal/10 p-6 space-y-3">
        <div className="flex justify-between font-body text-navy/70">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-body text-navy/70">
          <span>Shipping</span>
          <span>${BUSINESS.shippingFlatRate.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-heading font-bold text-navy text-lg pt-3 border-t border-teal/10">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <Link
          href="/checkout"
          className="block text-center bg-navy text-white font-body font-semibold rounded-md py-3 hover:bg-teal transition-colors mt-4"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
