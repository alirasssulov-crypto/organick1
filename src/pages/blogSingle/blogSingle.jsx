import { useParams } from "react-router-dom";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { blogSingle } from "../../shared/assets/img";
import { posts } from "../../shared/data";

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.";

export default function BlogSingle() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  return (
    <>
      <PageHero image={blogSingle} tall />

      <article className="mx-auto -mt-14 max-w-[900px] px-4">
        <div className="animate-fade-up rounded-2xl bg-white p-6 shadow-xl md:p-10">
          <p className="text-xs text-mute">
            {post?.date ?? "25 Nov"} · By {post?.author ?? "Rachel Lee"}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-ink md:text-4xl">
            {post?.title ?? "Research More Organic Food"}
          </h1>
        </div>

        <Reveal className="mt-10">
          <p className="text-sm leading-7 text-mute">{text}</p>
        </Reveal>

        <Reveal className="mt-10">
          <h2 className="text-2xl font-bold text-ink">Preferred Form of Vitamin D?</h2>
          <p className="mt-3 text-sm leading-7 text-mute">{text}</p>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-mute marker:text-leaf">
            <li>Everything you need to know about organic food</li>
            <li>Healthy habits start from the farm</li>
            <li>Fresh, local, seasonal produce</li>
          </ul>
        </Reveal>

        <Reveal className="mt-10">
          <blockquote className="rounded-xl border-l-4 border-leaf bg-gray-100 p-6 text-sm italic text-ink">
            “The first rule of any technology used in a business is that automation applied to an
            efficient operation will magnify the efficiency.”
          </blockquote>
        </Reveal>

        <Reveal className="mt-10">
          <h2 className="text-2xl font-bold text-ink">Make perfect organic product with us</h2>
          <p className="mt-3 text-sm leading-7 text-mute">{text}</p>
        </Reveal>
      </article>

      <SubscribeBlock />
    </>
  );
}