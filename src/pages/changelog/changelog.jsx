import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";

const log = [
  { v: "V.1", date: "Nov 2022", text: "Initial release of the Organick template with all pages and components." },
];

export default function Changelog() {
  return (
    <>
      <PageHero title="Changelog" />
      <section className="mx-auto max-w-[700px] px-4 py-16">
        {log.map((l) => (
          <Reveal key={l.v}>
            <div className="flex items-center gap-5 rounded-2xl bg-white p-6 shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-leaf/15 font-bold text-ink">{l.v}</span>
              <div>
                <p className="text-xs text-mute">{l.date}</p>
                <p className="text-sm text-ink">{l.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <SubscribeBlock />
    </>
  );
}