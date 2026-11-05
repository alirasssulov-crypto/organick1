import Reveal from "./Reveal";

export default function SectionTitle({ sub, title, text, center = true, light = false }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      {sub && <p className="font-serif text-lg italic text-leaf">{sub}</p>}
      <h2 className={`mt-1 text-3xl font-bold md:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && (
        <p className={`mt-3 max-w-xl text-sm leading-6 ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-mute"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}