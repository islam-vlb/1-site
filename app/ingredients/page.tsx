import { INGREDIENTS, PRODUCTS } from "@/lib/supabase";

const supplement = PRODUCTS[1];

export default function IngredientsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="font-heading text-3xl font-bold text-navy mb-2">
        Ingredients — {supplement.name}
      </h1>
      <p className="text-navy/60 font-body mb-10">
        Full ingredient list and amounts per daily serving (one capsule).
      </p>

      <div className="bg-white rounded-lg border border-teal/10 overflow-hidden">
        <div className="grid grid-cols-2 bg-navy text-white font-heading text-sm font-semibold px-6 py-3">
          <span>Ingredient</span>
          <span className="text-right">Amount</span>
        </div>
        {INGREDIENTS.map((ing, i) => (
          <div
            key={ing.name}
            className={`grid grid-cols-2 px-6 py-3 font-body text-sm ${
              i % 2 === 0 ? "bg-white" : "bg-offwhite"
            }`}
          >
            <span className="text-navy">{ing.name}</span>
            <span className="text-navy/60 font-medium text-right">{ing.amount}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-teal/5 border border-teal/20 rounded-lg p-6">
        <h3 className="font-heading font-semibold text-navy mb-2 text-sm uppercase tracking-wide">
          FDA Disclosure
        </h3>
        <p className="text-sm text-navy/70 font-body leading-relaxed">{supplement.disclaimer}</p>
      </div>
    </div>
  );
}
