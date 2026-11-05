import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Stars from "./Stars";

export default function ProductCard({ p, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <Link
        to={`/shop/${p.id}`}
        className="group relative block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
      >
        <span className="absolute left-4 top-4 z-10 rounded bg-ink px-2 py-1 text-[10px] font-semibold text-white">
          {p.tag}
        </span>
        <div className="overflow-hidden rounded-xl bg-gray-50">
          <img
            src={p.img}
            alt={p.title}
            className="aspect-square w-full object-contain p-4 transition duration-700 group-hover:scale-110"
          />
        </div>
        <h3 className="mt-4 text-sm font-bold text-ink transition group-hover:text-leaf">{p.title}</h3>
        <div className="mt-2 flex items-center justify-between border-t border-gray-100 pt-2">
          <p className="text-sm">
            <span className="mr-2 text-mute line-through">${p.old.toFixed(2)}</span>
            <span className="font-bold text-ink">${p.price.toFixed(2)}</span>
          </p>
          <Stars value={p.rating} />
        </div>
      </Link>
    </Reveal>
  );
}