"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import SearchOverlay from "./SearchOverlay";
import { NAV_LINKS, TEST_KIT_HREF } from "@/lib/config";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { itemCount, openDrawer } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-offwhite/90 backdrop-blur-md border-b border-navy/8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-9 font-body text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-navy/75 hover:text-navy transition-colors tracking-wide group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
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
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2.5 text-navy/80 hover:text-teal font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
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
