import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../shared/ui/Logo";
import { useCart } from "../../shared/lib/cart";

const pages = [
  ["Service", "/service"],
  ["Team", "/team"],
  ["Contact", "/contact"],
  ["Licenses", "/licenses"],
  ["Changelog", "/changelog"],
  ["Protected Page", "/protected"],
  ["404", "/404"],
];

const link = ({ isActive }) =>
  `relative text-sm font-semibold transition hover:text-leaf ${isActive ? "text-leaf" : "text-ink"}`;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1100px] items-center justify-between px-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={link}>Home</NavLink>
          <NavLink to="/about" className={link}>About</NavLink>

          <div className="group relative">
            <button className="text-sm font-semibold text-ink transition hover:text-leaf">Pages ▾</button>
            <ul className="invisible absolute left-0 top-full w-48 translate-y-2 rounded-xl bg-white p-2 opacity-0 shadow-xl ring-1 ring-black/5 transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {pages.map(([name, to]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="block rounded-lg px-3 py-2 text-sm text-ink transition hover:bg-leaf/10 hover:text-leaf"
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/shop" className={link}>Shop</NavLink>
          <NavLink to="/portfolio" className={link}>Projects</NavLink>
          <NavLink to="/blog" className={link}>News</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden h-9 w-9 rounded-full bg-leaf sm:block" />
          <span className="flex items-center gap-2 rounded-full bg-ink py-1 pl-1 pr-4 text-xs font-semibold text-white">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-leaf text-[11px] text-ink">
              {count}
            </span>
            Cart
          </span>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-gray-200 lg:hidden"
            aria-label="menu"
          >
            <span className="space-y-1.5">
              <i className={`block h-0.5 w-5 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <i className={`block h-0.5 w-5 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <i className={`block h-0.5 w-5 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-500 lg:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col gap-1 border-t border-gray-100 px-4 py-4">
            {[["Home", "/"], ["About", "/about"], ...pages, ["Shop", "/shop"], ["Projects", "/portfolio"], ["News", "/blog"]].map(
              ([name, to]) => (
                <NavLink key={to} to={to} className="rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-leaf/10">
                  {name}
                </NavLink>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}