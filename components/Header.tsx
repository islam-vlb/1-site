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
        setMobileOpen(false);
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
    <header className="sticky top-0 z-40 bg-offwhite/92 backdrop-blur-xl border-b border-navy/[0.08]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-10 font-body text-[0.8rem] tracking-wide">
            {NAV_LINKS.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={productsRef}
                  className="relative"
                >
                  <button
                    onClick={() => setProductsOpen((v) => !v)}
                    className="relative flex items-center gap-1.5 text-navy/80 hover:text-navy transition-colors duration-200 py-2 group"
                  >
                    {link.label}
                    <svg
                      className={`h-3 w-3 transition-transform duration-200 ${productsOpen ? "rotate-180 text-teal" : "text-navy/40 group-hover:text-navy"}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -bottom-1 left-0 h-px bg-teal transition-all duration-300 group-hover:w-full w-0" />
                  </button>

                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                      >
                        <div className="w-[440px] bg-white rounded-2xl border border-navy/10 shadow-[0_20px_60px_rgba(20,24,31,0.12)] overflow-hidden">
                          <div className="p-2">
                            {PRODUCTS.map((product) => (
                              <Link
                                key={product.id}
                                href={product.href}
                                onClick={() => setProductsOpen(false)}
                                className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-offwhite transition-colors duration-150 group"
                              >
                                <div className="relative h-14 w-14 shrink-0 rounded-xl overflow-hidden bg-offwhite border border-navy/10">
                                  <Image
                                    src={product.image.src}
                                    alt={product.image.alt}
                                    width={56}
                                    height={56}
                                    className="object-contain p-2"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-[0.7rem] font-body uppercase tracking-widest text-teal mb-1">
                                    {product.category}
                                  </p>
                                  <p className="font-heading text-navy group-hover:text-teal transition-colors duration-150 text-sm leading-tight">
                                    {product.name}
                                  </p>
                                  <p className="text-xs text-navy/55 font-body mt-1 line-clamp-1 leading-relaxed">
                                    {product.caption}
                                  </p>
                                </div>
                                <span className="text-sm font-body font-semibold text-navy shrink-0 ml-2">
                                  ${product.price.toFixed(2)}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="border-t border-navy/8 p-3">
                            <Link
                              href="/product/at-home-semen-test-kit"
                              onClick={() => setProductsOpen(false)}
                              className="flex items-center justify-center w-full bg-navy text-white font-body text-xs font-semibold tracking-wide uppercase rounded-xl py-3 hover:bg-teal transition-colors duration-200"
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
                  className="relative text-navy/75 hover:text-navy transition-colors duration-200 tracking-wide group py-2"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px bg-teal transition-all duration-300 group-hover:w-full w-0" />
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2.5">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="relative p-2.5 text-navy/70 hover:text-teal transition-colors duration-200 rounded-xl hover:bg-navy/5"
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
              </svg>
            </button>

            <button
              onClick={openDrawer}
              aria-label="Open cart"
              className="relative p-2.5 text-navy/70 hover:text-teal transition-colors duration-200 rounded-xl hover:bg-navy/5"
            >
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 h-4 w-4 flex items-center justify-center rounded-full bg-teal text-white text-[10px] font-bold shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>

            <Link
              href={TEST_KIT_HREF}
              className="hidden md:inline-flex ml-1 bg-navy text-white font-body text-xs font-semibold tracking-wide uppercase rounded-full px-5 py-2.5 hover:bg-teal transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Explore Test Kit
            </Link>

            <button
              className="lg:hidden p-2.5 text-navy rounded-xl hover:bg-navy/5 transition-colors duration-200"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
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
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 font-body space-y-1">
                {NAV_LINKS.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label} className="border-b border-navy/5 last:border-0">
                      <button
                        onClick={() => setMobileProductsOpen((v) => !v)}
                        className="flex items-center justify-between w-full py-3.5 text-navy/85 font-medium text-sm tracking-wide"
                      >
                        {link.label}
                        <svg
                          className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-teal" : "text-navy/40"}`}
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
                            className="overflow-hidden pl-4 pb-3"
                          >
                            {PRODUCTS.map((product) => (
                              <Link
                                key={product.id}
                                href={product.href}
                                className="block py-2.5 text-navy/70 hover:text-teal text-sm transition-colors duration-150"
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
                      className="block py-3.5 text-navy/85 hover:text-teal font-medium text-sm tracking-wide border-b border-navy/5 last:border-0 transition-colors duration-150"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Link
                  href={TEST_KIT_HREF}
                  className="mt-4 inline-flex bg-navy text-white font-body text-xs font-semibold tracking-wide uppercase rounded-full px-6 py-3 hover:bg-teal transition-colors duration-200"
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
