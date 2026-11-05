import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { quality, gardener, flows } from "../../shared/assets/img";

const p =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.";

export default function ServiceSingle() {
  return (
    <>
      <PageHero title="Quality Standard" image={quality} />

      <article className="mx-auto max-w-[850px] px-4 py-16">
        <Reveal>
          <img src={gardener} alt="" className="w-full rounded-2xl object-cover shadow-lg" />
        </Reveal>

        <Reveal className="mt-10">
          <h2 className="text-2xl font-bold text-ink">Organic Store Services</h2>
          <p className="mt-3 text-sm leading-7 text-mute">{p}</p>
          <p className="mt-3 text-sm leading-7 text-mute">{p}</p>
        </Reveal>

        <Reveal className="mt-10 grid items-center gap-6 md:grid-cols-[220px_1fr]">
          <img src={flows} alt="" className="w-full rounded-xl object-cover" />
          <div>
            <h3 className="font-bold text-ink">Why Organick</h3>
            <p className="mt-2 text-sm leading-7 text-mute">{p}</p>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="font-bold text-ink">Specialty Produce</h3>
          <p className="mt-2 text-sm leading-7 text-mute">{p}</p>
        </Reveal>

        <Reveal className="mt-10">
          <h3 className="font-bold text-ink">We farm your land</h3>
          <p className="mt-2 text-sm leading-7 text-mute">{p}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {["Best quality support", "Money back guarantee"].map((t) => (
              <span key={t} className="flex items-center gap-3 rounded-full bg-gray-50 py-2 pl-2 pr-5 text-sm font-semibold text-ink transition hover:bg-leaf/10">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf text-white">✓</span>
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </article>

      <SubscribeBlock />
    </>
  );
}