import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SectionTitle from "../../shared/ui/SectionTitle";
import Btn from "../../shared/ui/Btn";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";

const left = ["Dairy Products", "Store Services", "Delivery Services"];
const right = ["Agricultural Services", "Organic Products", "Fresh Vegetables"];
const slug = (s) => s.toLowerCase().replace(/\s+/g, "-");

function Item({ t, align }) {
  return (
    <Reveal>
      <Link
        to={`/service/${slug(t)}`}
        className={`group block rounded-xl p-4 transition duration-300 hover:bg-leaf/10 ${align}`}
      >
        <h3 className="font-bold text-ink transition group-hover:text-leaf">{t}</h3>
        <p className="mt-1 text-sm leading-6 text-mute">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </Link>
    </Reveal>
  );
}

export default function Service() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <PageHero title="Services" />

      <section className="mx-auto max-w-[1100px] px-4 py-16">
        <SectionTitle sub="What we Give" title="Better Agriculture for Better Future" />
        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-x-40">
          <div className="space-y-4 md:text-right">
            {left.map((t) => <Item key={t} t={t} align="md:text-right" />)}
          </div>
          <div className="space-y-4">
            {right.map((t) => <Item key={t} t={t} align="" />)}
          </div>
        </div>
        <div className="mt-10 text-center"><Btn to="/shop" variant="outline">Explore More →</Btn></div>
      </section>

      <section className="bg-sun py-24">
        <Reveal className="mx-auto max-w-xl px-4 text-center">
          <p className="font-serif text-lg italic text-leaf">Organic Only</p>
          <h2 className="mt-1 text-3xl font-bold text-ink md:text-4xl">Everyday Fresh & Clean</h2>
          <p className="mt-3 text-sm text-ink/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <button
            onClick={() => setPlaying((v) => !v)}
            className="relative mt-8 grid h-16 w-16 place-items-center rounded-full bg-leaf text-white transition hover:scale-110"
            aria-label="play"
          >
            {!playing && <span className="absolute inset-0 animate-ping rounded-full bg-leaf/60" />}
            <span className="relative">{playing ? "❚❚" : "▶"}</span>
          </button>
        </Reveal>
      </section>

      <SubscribeBlock />
    </>
  );
}