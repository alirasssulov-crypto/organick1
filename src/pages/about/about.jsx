import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SectionTitle from "../../shared/ui/SectionTitle";
import Btn from "../../shared/ui/Btn";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { aboutUs, mix, traders, bacardo, loreno, riga, nuds1, nuds2, fruity, vegetables } from "../../shared/assets/img";

const perks = [["Return Policy", "↩️"], ["100% Fresh", "🥬"], ["Support 24/7", "🎧"], ["Secured Payment", "🔒"]];
const experts = [["Gerard Bacardo", "Farmer", bacardo], ["Marianne Lorenz", "Blogger", loreno], ["Riga Peters", "Farmer", riga]];
const offers = [["Spicy", nuds1], ["Nuts & Seed", nuds2], ["Fruits", fruity], ["Vegetables", vegetables]];

export default function About() {
  return (
    <>
      <PageHero title="About Us" image={aboutUs} />

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-16 md:grid-cols-2">
        <Reveal><img src={mix} alt="" className="w-full animate-float object-contain" /></Reveal>
        <Reveal delay={150}>
          <p className="font-serif text-lg italic text-leaf">About Us</p>
          <h2 className="mt-1 text-3xl font-bold text-ink">We do Creative Things for Success</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </p>
          <div className="mt-6 flex gap-8 text-sm font-semibold text-ink">
            <span>🌾 Modern Agriculture Equipment</span>
            <span>🌱 No growth hormones are used</span>
          </div>
          <Btn to="/shop" className="mt-8">Explore More →</Btn>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1100px] items-center gap-10 px-4 py-10 md:grid-cols-2">
        <Reveal>
          <p className="font-serif text-lg italic text-leaf">Why Choose us?</p>
          <h2 className="mt-1 text-3xl font-bold text-ink">We do not buy from the open market & traders.</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text.
          </p>
          {["100% Natural Product", "Increases resistance"].map((t) => (
            <div key={t} className="mt-4 rounded-xl bg-gray-50 p-4 transition duration-300 hover:bg-leaf/10">
              <h4 className="font-bold text-ink">{t}</h4>
              <p className="text-sm text-mute">Simply dummy text of the printing and typesetting industry.</p>
            </div>
          ))}
        </Reveal>
        <Reveal delay={150}>
          <img src={traders} alt="" className="w-full rounded-2xl object-cover" />
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1100px] grid-cols-2 gap-6 px-4 py-14 md:grid-cols-4">
        {perks.map(([t, i], idx) => (
          <Reveal key={t} delay={idx * 100}>
            <div className="rounded-2xl p-6 text-center transition duration-500 hover:-translate-y-2 hover:shadow-xl">
              <span className="text-3xl">{i}</span>
              <h4 className="mt-3 font-bold text-ink">{t}</h4>
              <p className="mt-1 text-xs text-mute">Simply dummy text of the printing.</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1100px] px-4 py-14">
        <SectionTitle sub="Team" title="Our Organic Experts" text="Simply dummy text of the printing and typesetting industry." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {experts.map(([n, r, img], i) => (
            <Reveal key={n} delay={i * 120}>
              <div className="group overflow-hidden rounded-2xl shadow-md">
                <div className="overflow-hidden">
                  <img src={img} alt={n} className="aspect-[898/970] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                <div className="p-4"><h3 className="font-bold text-ink">{n}</h3><p className="text-sm text-mute">{r}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20">
        <div className="mx-auto max-w-[1100px] px-4">
          <SectionTitle sub="About Us" title="What We Offer for You" light />
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {offers.map(([t, img], i) => (
              <Reveal key={t} delay={i * 100}>
                <div className="group rounded-2xl bg-white p-3 text-center transition duration-500 hover:-translate-y-2">
                  <div className="overflow-hidden rounded-xl">
                    <img src={img} alt={t} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110" />
                  </div>
                  <p className="mt-3 text-sm font-bold text-ink">{t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SubscribeBlock />
    </>
  );
}