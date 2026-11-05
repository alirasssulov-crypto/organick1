import { Link } from "react-router-dom";
import { notFound } from "../../shared/assets/img";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden md:min-h-[700px]">
      <img src={notFound} alt="" className="absolute inset-0 h-full w-full animate-zoom-slow object-cover" />
      <div className="relative animate-fade-up px-4 text-center">
        <h1 className="text-8xl font-extrabold text-ink/80 md:text-[160px]">404</h1>
        <p className="text-2xl font-bold text-ink">Page not found</p>
        <p className="mx-auto mt-2 max-w-sm text-sm text-mute">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-ink px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg active:scale-95"
        >
          Go Homepage →
        </Link>
      </div>
    </section>
  );
}