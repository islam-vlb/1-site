import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { searchProducts } from "@/lib/supabase";

export const metadata: Metadata = {
  title: "Search",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-body uppercase tracking-widest text-teal mb-2">Search</p>
      <h1 className="font-heading text-3xl text-navy mb-2">
        {q ? (
          <>Results for &ldquo;{q}&rdquo;</>
        ) : (
          <>Search NuressaIndividualInsight</>
        )}
      </h1>
      <p className="text-navy/50 font-body mb-10">
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} found.` : "Enter a search term to find our products."}
      </p>

      {q && results.length === 0 && (
        <div className="border border-navy/10 rounded-lg p-10 text-center">
          <p className="text-navy/60 font-body mb-4">
            No products matched your search. Try a different term, or browse our two products directly.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/product/at-home-semen-test-kit" className="text-teal font-body font-medium hover:underline">
              At-Home Semen Test Kit
            </Link>
            <Link href="/product/male-fertility-support" className="text-teal font-body font-medium hover:underline">
              Male Fertility Support Formula
            </Link>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {results.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="group border border-navy/10 rounded-lg overflow-hidden bg-white hover:border-teal/40 transition-colors"
          >
            <div className="relative aspect-[4/3] bg-offwhite">
              <Image src={product.image.src} alt={product.image.alt} fill className="object-contain p-6" />
            </div>
            <div className="p-5">
              <p className="text-xs font-body uppercase tracking-wide text-teal mb-1">{product.category}</p>
              <h2 className="font-heading text-lg text-navy group-hover:text-teal transition-colors">
                {product.name}
              </h2>
              <p className="text-sm text-navy/55 font-body mt-1 mb-3">{product.caption}</p>
              <p className="font-body font-semibold text-navy">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
