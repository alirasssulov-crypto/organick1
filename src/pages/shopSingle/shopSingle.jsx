import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import Stars from "../../shared/ui/Stars";
import ProductCard from "../../shared/ui/ProductCard";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { shopSingle } from "../../shared/assets/img";
import { products } from "../../shared/data/shop";
import { addToCartSchema } from "../../shared/lib/schemas";
import { useCart } from "../../shared/lib/cart";

export default function ShopSingle() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id) ?? products[0];
  const { add } = useCart();
  const [tab, setTab] = useState("desc");
  const [added, setAdded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(addToCartSchema), defaultValues: { quantity: "1" } });

  const onSubmit = ({ quantity }) => {
    add(product, Number(quantity));
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <>
      <PageHero title="Shop Single" image={shopSingle} />

      <section className="mx-auto grid max-w-[1000px] items-center gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal>
          <div className="rounded-2xl bg-gray-50 p-8">
            <img src={product.img} alt={product.title} className="mx-auto w-full max-w-sm animate-float object-contain" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <span className="rounded bg-ink px-3 py-1 text-xs font-semibold text-white">{product.tag}</span>
          <h1 className="mt-3 text-3xl font-bold text-ink">{product.title}</h1>
          <div className="mt-2"><Stars value={product.rating} /></div>
          <p className="mt-3 text-xl">
            <span className="mr-2 text-mute line-through">${product.old.toFixed(2)}</span>
            <b className="text-ink">${product.price.toFixed(2)}</b>
          </p>
          <p className="mt-4 text-sm leading-7 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6">
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-ink">Quantity:</label>
              <input
                inputMode="numeric"
                {...register("quantity")}
                className="w-20 rounded-lg border border-gray-200 px-3 py-2 text-center text-sm outline-none transition focus:border-leaf focus:ring-4 focus:ring-leaf/20"
              />
              <button className="rounded-lg bg-ink px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95">
                {added ? "Added ✓" : "Add To Cart"}
              </button>
            </div>
            {errors.quantity && <p className="mt-2 text-xs text-red-500">{errors.quantity.message}</p>}
          </form>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[800px] px-4">
        <div className="flex justify-center gap-3">
          {[["desc", "Product Description"], ["info", "Additional Info"]].map(([k, t]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition duration-300 ${
                tab === k ? "bg-ink text-white" : "bg-gray-100 text-ink hover:bg-gray-200"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <p key={tab} className="mt-8 animate-fade-up text-center text-sm leading-7 text-mute">
          {tab === "desc"
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            : "Weight: 1 kg · Origin: Organic farm · Storage: keep in a cool, dry place · Shelf life: 12 months."}
        </p>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-ink">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.filter((p) => p.id !== product.id).slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} p={p} delay={i * 100} />
          ))}
        </div>
        <Link to="/shop" className="mt-10 block text-center font-semibold text-ink transition hover:text-leaf">
          ← Back to shop
        </Link>
      </section>

      <SubscribeBlock />
    </>
  );
}