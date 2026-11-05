import { Link } from "react-router-dom";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { portfolioBanner } from "../../shared/assets/img";
import { portfolio } from "../../shared/data";

export default function Portfolio() {
  return (
    <>
      <PageHero title="Portfolio Standard" image={portfolioBanner} />

      <section className="mx-auto grid max-w-[1100px] gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 120}>
            <Link to={`/portfolio/${p.id}`} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="aspect-square w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>
              <h3 className="mt-4 font-bold text-ink transition group-hover:text-leaf">{p.title}</h3>
              <p className="text-sm text-mute">{p.category}</p>
            </Link>
          </Reveal>
        ))}
      </section>

      <SubscribeBlock />
    </>
  );
}