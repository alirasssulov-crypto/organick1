import PageHero from "../../shared/ui/PageHero";
import ProductCard from "../../shared/ui/ProductCard";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { shop } from "../../shared/assets/img";
import { products } from "../../shared/data/shop";

export default function Shop() {
  return (
    <>
      <PageHero title="Shop" image={shop} />
      <section className="mx-auto grid max-w-[1100px] gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <ProductCard key={p.id} p={p} delay={(i % 4) * 100} />
        ))}
      </section>
      <SubscribeBlock />
    </>
  );
}