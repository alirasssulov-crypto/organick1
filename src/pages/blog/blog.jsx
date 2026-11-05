import { Link } from "react-router-dom";
import PageHero from "../../shared/ui/PageHero";
import Reveal from "../../shared/ui/Reveal";
import SubscribeBlock from "../../shared/ui/SubscribeBlock";
import { recent } from "../../shared/assets/img";
import { posts } from "../../shared/data";

export default function Blog() {
  return (
    <>
      <PageHero title="Recent News" image={recent} />

      <section className="mx-auto grid max-w-[1100px] gap-8 px-4 py-16 md:grid-cols-2">
        {posts.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 120}>
            <article className="group relative overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.title}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-xs font-bold text-ink shadow">
                {p.date}
              </span>
              <div className="absolute inset-x-4 bottom-4 rounded-xl bg-white p-5 shadow-lg transition duration-500 group-hover:-translate-y-1">
                <p className="text-xs text-mute">By {p.author}</p>
                <h3 className="mt-1 font-bold text-ink">{p.title}</h3>
                <Link
                  to={`/blog/${p.id}`}
                  className="mt-3 inline-block rounded-md bg-sun px-4 py-2 text-xs font-bold text-ink transition hover:bg-sun/80 active:scale-95"
                >
                  Read More →
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <SubscribeBlock />
    </>
  );
}