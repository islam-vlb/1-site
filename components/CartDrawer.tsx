"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-navy/40"
        onClick={closeDrawer}
        aria-hidden="true"
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-teal/10">
          <h2 className="font-heading text-lg font-semibold text-navy">Your Cart</h2>
          <button onClick={closeDrawer} aria-label="Close cart" className="p-1 text-navy hover:text-teal">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="text-navy/60 font-body text-center mt-12">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.productId} className="flex gap-4 border-b border-teal/10 pb-4">
                  <div className="relative h-20 w-20 shrink-0 rounded-md overflow-hidden bg-offwhite border border-teal/10">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-1">
                    <p className="font-body font-semibold text-navy text-sm">{item.name}</p>
                    <p className="text-sm text-navy/60 font-body">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="h-7 w-7 rounded border border-teal/30 text-navy hover:bg-offwhite"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm font-body w-6 text-center">{item.quantity}</span>
                      <button
                        className="h-7 w-7 rounded border border-teal/30 text-navy hover:bg-offwhite"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        className="ml-auto text-xs text-navy/50 hover:text-teal font-body"
                        onClick={() => removeItem(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-teal/10 px-6 py-4 space-y-3">
            <div className="flex justify-between font-body text-navy">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="block text-center border border-teal text-teal rounded-md py-2.5 font-body font-medium hover:bg-teal/5 transition-colors"
            >
              View Cart
            </Link>
            <Link
              href="/checkout"
              onClick={closeDrawer}
               className="block text-center bg-navy text-white rounded-md py-2.5 font-body font-semibold hover:bg-teal transition-colors"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
