import { Link } from "react-router-dom";

const variants = {
  dark: "bg-ink text-white hover:bg-ink/90",
  sun: "bg-sun text-ink hover:bg-sun/80",
  outline: "border border-ink/30 text-ink hover:bg-ink hover:text-white",
};

export default function Btn({ to, variant = "dark", className = "", children, ...rest }) {
  const cls = `inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${variants[variant]} ${className}`;
  return to ? (
    <Link to={to} className={cls}>{children}</Link>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  );
}