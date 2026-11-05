import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";

const rows = [
  ["Icon & Graphics", "All icons and graphics used in this template are free for personal and commercial use. Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  ["Photography", "Photos are provided by Unsplash and Pixel. Unsplash: Image 1, Image 2, Image 3. Pixel: Image 4, Image 5, Image 6."],
  ["Font", "Typefaces are provided by Google Fonts and are free to use under the Open Font License."],
];

export default function Licenses() {
  return (
    <>
      <PageHero title="Licenses" />
      <section className="mx-auto max-w-[900px] px-4 py-16">
        {rows.map(([t, d], i) => (
          <Reveal key={t} delay={i * 100} className="grid gap-3 border-b border-gray-100 py-8 md:grid-cols-[200px_1fr]">
            <h3 className="font-bold text-ink">{t}</h3>
            <p className="text-sm leading-7 text-mute">{d}</p>
          </Reveal>
        ))}
      </section>
      <SubscribeBlock />
    </>
  );
}