"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { searchProducts, startingPrice } from "@/lib/supabase";

export default function SearchOverlay({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = searchProducts(query);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setHighlighted(0);
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  useEffect(() => {
    setHighlighted(0);
  }, [query]);

  function go(href: string) {
    onClose();
    router.push(href);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (results.length > 0) setHighlighted((h) => (h + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length > 0) setHighlighted((h) => (h - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (results[highlighted]) {
        go(results[highlighted].href);
      } else if (query.trim()) {
        go(`/search?q=${encodeURIComponent(query.trim())}`);
      }
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-navy/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="relative mx-auto mt-24 w-full max-w-2xl px-4"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-offwhite rounded-xl shadow-2xl border border-navy/10 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 border-b border-navy/10">
                <svg className="h-5 w-5 text-navy/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
                </svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  type="text"
                  placeholder="Search products, categories, ingredients..."
                  className="flex-1 bg-transparent outline-none font-body text-navy placeholder:text-navy/35 text-base"
                />
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="text-xs font-body text-navy/40 border border-navy/15 rounded px-2 py-1 hover:text-navy transition-colors"
                >
                  ESC
                </button>
              </div>

              {query.trim() && (
                <div className="max-h-96 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="px-5 py-8 text-center text-sm text-navy/50 font-body">
                      No products found for &ldquo;{query}&rdquo;.
                    </p>
                  ) : (
                    <ul>
                      {results.map((product, i) => (
                        <li key={product.id}>
                          <button
                            onClick={() => go(product.href)}
                            onMouseEnter={() => setHighlighted(i)}
                            className={`w-full flex items-center gap-4 px-5 py-3 text-left transition-colors ${
                              highlighted === i ? "bg-teal/8" : ""
                            }`}
                          >
                            <div className="relative h-14 w-14 shrink-0 rounded-md overflow-hidden bg-white border border-navy/10">
                              <Image src={product.image.src} alt={product.image.alt} fill className="object-contain p-1.5" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-body uppercase tracking-wide text-teal">{product.category}</p>
                              <p className="font-heading text-navy leading-tight truncate">{product.name}</p>
                              <p className="text-xs text-navy/50 font-body truncate">{product.caption}</p>
                            </div>
                            <span className="font-body font-semibold text-navy text-sm shrink-0">
                              From ${startingPrice(product).toFixed(2)}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
