import { Link, useParams } from "react-router-dom";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { raspberry } from "../../shared/assets/img";
import { portfolio } from "../../shared/data";

export default function PortfolioSingle() {
  const { id } = useParams();
  const item = portfolio.find((p) => p.id === id) ?? portfolio[4];

  return (
    <>
      <PageHero image={raspberry} tall />

      <section className="mx-auto -mt-16 max-w-[1000px] px-4 md:-mt-24">
        <div className="animate-fade-up rounded-2xl bg-white p-6 shadow-xl md:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <div className="max-w-xl">
              <h1 className="text-3xl font-bold text-ink">{item.title}</h1>
              <p className="mt-3 text-sm leading-relaxed text-mute">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
              </p>
            </div>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm">
              <dt className="font-bold text-ink">Date</dt><dd className="text-mute">25 Oct 2022</dd>
              <dt className="font-bold text-ink">Client</dt><dd className="text-mute">Organick</dd>
              <dt className="font-bold text-ink">Category</dt><dd className="text-mute">{item.category}</dd>
              <dt className="font-bold text-ink">Service</dt><dd className="text-mute">Organic Farm</dd>
            </dl>
          </div>
        </div>

        {["About The Farm", "How To Farm", "Conclusion"].map((h, i) => (
          <Reveal key={h} delay={i * 80} className="mt-12">
            <h2 className="text-xl font-bold text-ink">{h}</h2>
            <p className="mt-3 text-sm leading-7 text-mute">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </Reveal>
        ))}

        <Link to="/portfolio" className="mt-12 inline-block font-semibold text-ink transition hover:text-leaf">
          ← Back to portfolio
        </Link>
      </section>

      <SubscribeBlock />
    </>
  );
}