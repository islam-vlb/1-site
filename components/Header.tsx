"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { NAV_LINKS, PRODUCTS_MENU } from "@/lib/config";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-teal/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 font-body">
            <Link href="/" className="text-navy hover:text-teal transition-colors font-medium">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="text-navy hover:text-teal transition-colors font-medium flex items-center gap-1">
                Products
                <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full w-72 bg-white rounded-lg shadow-lg border border-teal/10 py-2">
                  {PRODUCTS_MENU.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-3 text-sm text-navy hover:bg-offwhite hover:text-teal transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy hover:text-teal transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={openDrawer}
              aria-label="Open cart"
              className="relative p-2 text-navy hover:text-teal transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center rounded-full bg-accent text-white text-xs font-bold">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden p-2 text-navy"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 font-body">
            <Link
              href="/"
              className="block py-2 text-navy hover:text-teal font-medium"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <button
              className="w-full flex items-center justify-between py-2 text-navy font-medium"
              onClick={() => setMobileProductsOpen((v) => !v)}
            >
              Products
              <svg className={`h-3 w-3 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 border-l-2 border-teal/20 ml-1 mb-2">
                {PRODUCTS_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-sm text-navy hover:text-teal"
                    onClick={() => {
                      setMobileOpen(false);
                      setMobileProductsOpen(false);
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            {NAV_LINKS.filter((l) => l.label !== "Home").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-navy hover:text-teal font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
