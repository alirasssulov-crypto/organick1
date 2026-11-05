import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { ourTeam } from "../../shared/assets/img";
import { team } from "../../shared/data";

export default function Team() {
  return (
    <>
      <PageHero title="Our Team" image={ourTeam} />

      <section className="mx-auto max-w-[1100px] px-4 py-16">
        <Reveal className="mb-12 text-center">
          <p className="font-serif italic text-leaf">Team</p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">Our Organic Experts</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard.
          </p>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 120}>
              <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="aspect-[898/970] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-ink">{m.name}</h3>
                  <p className="text-sm text-mute">{m.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SubscribeBlock />
    </>
  );
}