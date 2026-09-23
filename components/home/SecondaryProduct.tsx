import { PRODUCTS } from "@/lib/supabase";
import RelatedProduct from "@/components/product/RelatedProduct";
import Reveal from "@/components/Reveal";

const accessory = PRODUCTS[1];

export default function SecondaryProduct() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <Reveal>
          <RelatedProduct product={accessory} />
        </Reveal>
      </div>
    </section>
  );
}
