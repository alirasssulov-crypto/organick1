import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../../shared/ui/Reveal";
import SectionTitle from "../../shared/ui/SectionTitle";
import ProductCard from "../../shared/ui/ProductCard";
import Btn from "../../shared/ui/Btn";
import Stars from "../../shared/ui/Stars";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import {
  organickHero, organick2, organickImg, backgroundImage, garden, sweets,
  lovelyList, nuds1, list, tomat, allen,
} from "../../shared/assets/img";
import { products } from "../../shared/data/shop";

const stats = [["100%", "Organic"], ["285", "Active Product"], ["350+", "Organic Orchard"], ["25+", "Farming Years"]];
const tiles = [["Organic Juice", nuds1], ["Organic Food", lovelyList], ["Nuts Cookies", sweets]];
const offer = [products[0], products[8], products[5], products[3]];
const news = [
  { t: "The Benefits of Vitamin C & How to Get It", img: list },
  { t: "Our Favorite Summertime Tomatoes", img: tomat },
];

export default function Home() {
  const [visible, setVisible] = useState(8);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-paper">
        <img src={organickHero} alt="" className="absolute inset-0 h-full w-full animate-zoom-slow object-cover" />
        <div className="relative mx-auto flex min-h-[520px] max-w-[1100px] items-center px-4 md:min-h-[700px]">
          <div className="max-w-md animate-fade-up">
            <p className="font-serif text-lg italic text-leaf">100% Natural Food</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-ink md:text-6xl">
              Choose the best healthier way of life
            </h1>
            <Btn to="/shop" variant="sun" className="mt-8">Explore Now →</Btn>
          </div>
        </div>
      </section>

      {/* PROMO */}
      <Reveal className="mx-auto max-w-[1100px] px-4 py-14">
        <div className="group relative overflow-hidden rounded-2xl">
          <img src={organick2} alt="" className="w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 grid grid-cols-2">
            <div className="flex flex-col justify-center pl-4 md:pl-12">
              <p className="font-serif text-xs italic text-white md:text-lg">Natural!!</p>
              <h3 className="text-sm font-bold text-white md:text-3xl">Get Garden Fresh Fruits</h3>
            </div>
            <div className="flex flex-col justify-center pl-4 md:pl-12">
              <p className="font-serif text-xs italic text-ink md:text-lg">Offer!!</p>
              <h3 className="text-sm font-bold text-ink md:text-3xl">Get 10% off on Vegetables</h3>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ABOUT */}
      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-14 md:grid-cols-2">
        <Reveal><img src={organickImg} alt="" className="w-full animate-float object-contain" /></Reveal>
        <Reveal delay={150}>
          <p className="font-serif text-lg italic text-leaf">About Us</p>
          <h2 className="mt-1 text-3xl font-bold text-ink md:text-4xl">We Believe in Working Accredited Farmers</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s.
          </p>
          <ul className="mt-6 space-y-5">
            {[["Organic Foods Only", "🌿"], ["Quality Standards", "✅"]].map(([t, i]) => (
              <li key={t} className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-leaf/15 text-xl">{i}</span>
                <div>
                  <h4 className="font-bold text-ink">{t}</h4>
                  <p className="text-sm text-mute">Simply dummy text of the printing and typesetting industry.</p>
                </div>
              </li>
            ))}
          </ul>
          <Btn to="/shop" className="mt-8">Shop Now →</Btn>
        </Reveal>
      </section>

      {/* PRODUCTS */}
      <section className="mx-auto max-w-[1100px] px-4 py-14">
        <SectionTitle sub="Categories" title="Our Products" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, visible).map((p, i) => (
            <ProductCard key={p.id} p={p} delay={(i % 4) * 100} />
          ))}
        </div>
        {visible < products.length && (
          <div className="mt-10 text-center">
            <Btn onClick={() => setVisible(products.length)}>Load More →</Btn>
          </div>
        )}
      </section>

      {/* TESTIMONIAL */}
      <section
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="mx-auto max-w-[800px] px-4 text-center">
          <SectionTitle sub="Testimonial" title="What Our Customer Saying?" />
          <Reveal delay={100} className="mt-8">
            <img src={allen} alt="" className="mx-auto h-16 w-16 rounded-full object-cover ring-4 ring-white" />
            <div className="mt-3"><Stars /></div>
            <p className="mt-4 text-sm leading-7 text-ink">
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </p>
            <p className="mt-4 font-bold text-ink">Sara Taylor</p>
            <p className="text-xs text-mute">Consumer</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(([n, l], i) => (
              <Reveal key={l} delay={i * 100}>
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full border border-ink/20 bg-white/70 text-center transition duration-500 hover:scale-110 hover:border-leaf">
                  <div>
                    <p className="text-lg font-bold text-ink">{n}</p>
                    <p className="text-[10px] text-mute">{l}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1100px] px-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <SectionTitle sub="Offer" title="We Offer Organic For You" center={false} light />
            <Btn to="/shop" variant="sun">View All Product →</Btn>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offer.map((p, i) => (
              <ProductCard key={p.id} p={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* FARM */}
      <section className="grid items-center md:grid-cols-2">
        <Reveal><img src={garden} alt="" className="h-full w-full object-cover" /></Reveal>
        <Reveal delay={150} className="px-6 py-14 md:px-16">
          <p className="font-serif text-lg italic text-leaf">Eco Friendly</p>
          <h2 className="mt-1 text-3xl font-bold text-ink">Econis is a Friendly Organic Store</h2>
          {["Start with Our Company First", "Learn How to Grow Yourself", "Farming Strategies of Today"].map((t) => (
            <div key={t} className="mt-5">
              <h4 className="font-bold text-ink">{t}</h4>
              <p className="text-sm leading-6 text-mute">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard.
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* TILES */}
      <section className="grid md:grid-cols-3">
        {tiles.map(([t, img]) => (
          <div key={t} className="group relative h-64 overflow-hidden">
            <img src={img} alt={t} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-5 py-2 text-sm font-bold text-ink shadow-lg">
              {t}
            </span>
          </div>
        ))}
      </section>

      {/* NEWS */}
      <section className="mx-auto max-w-[1100px] px-4 py-20">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionTitle sub="News" title="Discover weekly content about organic food, & more" center={false} />
          <Btn to="/blog" variant="outline">More News →</Btn>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {news.map((n, i) => (
            <Reveal key={n.t} delay={i * 120}>
              <Link to="/blog" className="group relative block overflow-hidden rounded-2xl">
                <img src={n.img} alt="" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white p-4 shadow-lg">
                  <p className="text-xs text-mute">By Rachel Lee</p>
                  <h3 className="font-bold text-ink">{n.t}</h3>
                  <span className="mt-2 inline-block rounded bg-sun px-3 py-1.5 text-xs font-bold text-ink">Read More →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <SubscribeBlock />
    </>
  );
}
          