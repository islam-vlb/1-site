"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TEST_KIT_HREF } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="absolute inset-0 bg-grid-fine opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-grad-teal blur-2xl" />
      <div className="absolute top-40 -left-32 h-[300px] w-[300px] rounded-full bg-teal/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-body uppercase tracking-[0.2em] text-teal mb-5">
              At-Home Fertility Wellness
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-navy text-balance">
              Private Fertility Insight, <span className="italic text-teal">From Home.</span>
            </h1>
            <p className="mt-6 text-lg text-navy/60 font-body leading-relaxed max-w-md">
              A discreet, convenient, professionally designed at-home experience —
              built to give you a private first look at your fertility, on your own terms.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href={TEST_KIT_HREF}
                className="bg-navy text-white font-body font-medium rounded-full px-7 py-3.5 hover:bg-teal transition-colors"
              >
                Explore the Test Kit
              </Link>
              <a
                href="#how-it-works"
                className="text-navy font-body font-medium border-b border-navy/30 pb-0.5 hover:border-teal hover:text-teal transition-colors"
              >
                How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-square max-w-md mx-auto w-full"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="170" fill="none" stroke="#0C6B6E" strokeWidth="0.75" opacity="0.35" />
              <circle cx="200" cy="200" r="130" fill="none" stroke="#0C6B6E" strokeWidth="0.75" opacity="0.5" />
              <circle cx="200" cy="200" r="90" fill="none" stroke="#0C6B6E" strokeWidth="1" opacity="0.65" />
              <circle cx="200" cy="200" r="50" fill="#0C6B6E" opacity="0.06" />
              <motion.circle
                cx="245" cy="155" r="10" fill="#14181F"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i / 24) * Math.PI * 2;
                const r1 = 178, r2 = 188;
                return (
                  <line
                    key={i}
                    x1={200 + r1 * Math.cos(angle)}
                    y1={200 + r1 * Math.sin(angle)}
                    x2={200 + r2 * Math.cos(angle)}
                    y2={200 + r2 * Math.sin(angle)}
                    stroke="#0C6B6E"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                );
              })}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
