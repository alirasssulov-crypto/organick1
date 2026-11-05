import { Link } from "react-router-dom";
import Logo from "../../shared/ui/Logo";

const utility = [
  ["Style Guide", "/"],
  ["Password Protected", "/protected"],
  ["404 Not Found", "/404"],
  ["Licenses", "/licenses"],
  ["Changelog", "/changelog"],
];

const socials = ["f", "in", "tw", "yt"];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <h4 className="mb-4 font-bold text-ink">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li><p className="font-semibold text-ink">Email</p><p className="text-mute">needhelp@organick.com</p></li>
            <li><p className="font-semibold text-ink">Phone</p><p className="text-mute">666 888 888</p></li>
            <li><p className="font-semibold text-ink">Address</p><p className="text-mute">88 road, borklyn street, USA</p></li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-center md:text-center">
          <Logo />
          <p className="max-w-xs text-sm leading-6 text-mute">
            Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of
            the printing.
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-gray-100 text-xs font-bold text-ink transition duration-300 hover:-translate-y-1 hover:bg-leaf hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="md:text-right">
          <h4 className="mb-4 font-bold text-ink">Utility Pages</h4>
          <ul className="space-y-2 text-sm text-mute">
            {utility.map(([name, to]) => (
              <li key={name}>
                <Link to={to} className="transition hover:text-leaf">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="border-t border-gray-100 py-5 text-center text-xs text-mute">
        Copyright © <b className="text-ink">Organick</b> | Designed by Figma
      </p>
    </footer>
  );
}