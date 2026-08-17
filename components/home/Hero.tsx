"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TEST_KIT_HREF } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="absolute inset-0 bg-grid-fine opacity-30 [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-grad-teal blur-3xl opacity-60" />
      <div className="absolute top-48 -left-40 h-[350px] w-[350px] rounded-full bg-teal/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-28 lg:pt-32 lg:pb-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 bg-teal/[0.08] border border-teal/15 rounded-full px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse" />
              <p className="text-[0.7rem] font-body uppercase tracking-[0.18em] text-teal font-semibold">
                At-Home Fertility Wellness
              </p>
            </div>

            <h1 className="font-heading text-[2.75rem] sm:text-6xl lg:text-[3.5rem] xl:text-[3.8rem] leading-[1.05] text-navy text-balance mb-7">
              Private Fertility Insight,{" "}
              <span className="italic text-teal relative">
                From Home.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-teal/20" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-navy/55 font-body leading-relaxed max-w-lg mb-10">
              A discreet, convenient, professionally designed at-home experience —
              built to give you a private first look at your fertility, on your own terms.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={TEST_KIT_HREF}
                className="group relative bg-navy text-white font-body font-semibold text-sm tracking-wide uppercase rounded-full px-8 py-4 hover:bg-teal transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span className="relative z-10">Explore the Test Kit</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal to-teal-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <a
                href="#how-it-works"
                className="group flex items-center gap-2 text-navy font-body font-medium text-sm tracking-wide border-b border-navy/25 pb-1 hover:border-teal hover:text-teal transition-all duration-200"
              >
                How It Works
                <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-square max-w-lg mx-auto w-full"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-navy/10 shadow-2xl">
              <Image
                src="/images/hero-medical.jpg"
                alt="Modern laboratory diagnostic equipment"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/20 via-navy/5 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-offwhite/20 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-navy/10 p-5 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-body font-semibold text-navy">Private</p>
                  <p className="text-[0.65rem] font-body text-navy/55">Discreet packaging</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl border border-navy/10 p-4">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-teal/10 flex items-center justify-center">
                  <svg className="h-4 w-4 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-body font-semibold text-navy">At-Home</p>
                  <p className="text-[0.65rem] font-body text-navy/55">Convenient</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
