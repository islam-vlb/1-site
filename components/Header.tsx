"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import SearchOverlay from "./SearchOverlay";
import { NAV_LINKS, TEST_KIT_HREF } from "@/lib/config";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/supabase";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();
  const productsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-offwhite/90 backdrop-blur-md border-b border-navy/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9 font-body text-sm">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={productsRef}
                  className="relative"
                >
                  <button
                    onClick={() => setProductsOpen((v) => !v)}
                    className="relative flex items-center gap-1 text-navy/75 hover:text-navy transition-colors tracking-wide group"
                  >
                    {link.label}
                    <svg
                      className={`h-3.5 w-3.5 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                      >
                        <div className="w-[420px] bg-white rounded-xl border border-navy/10 shadow-xl overflow-hidden">
                          <div className="p-2">
                            {PRODUCTS.map((product) => (
                              <Link
                                key={product.id}
                                href={product.href}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-center gap-4 p-3 rounded-lg hover:bg-offwhite transition-colors group"
                              >
                                <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden bg-offwhite border border-navy/10">
                                  <Image
                                    src={product.image.src}
                                    alt={product.image.alt}
                                    width={48}
                                    height={48}
                                    className="object-contain p-1.5"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-body uppercase tracking-wide text-teal mb-0.5">
                                    {product.category}
                                  </p>
                                  <p className="font-heading text-navy group-hover:text-teal transition-colors text-sm leading-tight">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-navy/55 font-body mt-0.5 line-clamp-1">
                                    {product.caption}
                                  </p>
                                </div>
                                <span className="text-sm font-body font-semibold text-navy shrink-0">
                                  ${product.price.toFixed(2)}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-navy/10 p-2">
                            <Link
                              href="/product/at-home-semen-test-kit"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-center justify-center w-full bg-navy text-white font-body text-sm font-medium rounded-lg py-2.5 hover:bg-teal transition-colors"
                            >
                              Browse All Products
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-navy/75 hover:text-navy transition-colors tracking-wide group"
                >
                  {link.label}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-navy/70 hover:text-teal transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={openDrawer}
              aria-label="Open cart"
              className="relative p-2 text-navy/70 hover:text-teal transition-colors"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 flex items-center justify-center rounded-full bg-teal text-white text-[10px] font-bold">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href={TEST_KIT_HREF}
              className="hidden md:inline-block ml-2 bg-navy text-white font-body text-sm font-medium rounded-full px-5 py-2.5 hover:bg-teal transition-colors"
            >
              Explore Test Kit
            </Link>

            <button
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                {mobileOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-5 font-body">
                {NAV_LINKS.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="flex items-center justify-between w-full py-2.5 text-navy/80 font-medium"
                      >
                        {link.label}
                        <svg
                          className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-4"
                          >
                            {PRODUCTS.map((product) => (
                              <Link
                                key={product.id}
                                href={product.href}
                                className="block py-2 text-navy/70 hover:text-teal"
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileProductsOpen(false);
                                }}
                              >
                                {product.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block py-2.5 text-navy/80 hover:text-teal font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href={TEST_KIT_HREF}
                  className="mt-3 inline-block bg-navy text-white font-body text-sm font-medium rounded-full px-5 py-2.5"
                  onClick={() => setMobileOpen(false)}
                >
                  Explore Test Kit
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
