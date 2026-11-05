export default function PageHero({ title, image, tall = false }) {
  return (
    <section
      className={`relative flex items-center justify-center overflow-hidden bg-gray-100 ${
        tall ? "h-[320px] md:h-[520px]" : "h-[200px] md:h-[300px]"
      }`}
    >
      {image && (
        <img src={image} alt="" className="absolute inset-0 h-full w-full animate-zoom-slow object-cover" />
      )}
      {title && (
        <h1 className="relative animate-fade-up px-4 text-center text-4xl font-bold text-ink md:text-5xl">
          {title}
        </h1>
      )}
    </section>
  );
}