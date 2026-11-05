export default function Stars({ value = 5 }) {
  return (
    <span className="text-sm tracking-widest text-orange-400">
      {"★".repeat(value)}
      <span className="text-gray-300">{"★".repeat(5 - value)}</span>
    </span>
  );
}