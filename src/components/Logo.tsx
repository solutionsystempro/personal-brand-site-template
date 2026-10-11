import { Link } from "react-router-dom";
import { site } from "../content";

const initials = site.name
  .split(/\s+/)
  .map((w) => w[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export default function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2.5" aria-label={`${site.name}, home`}>
      <span
        aria-hidden="true"
        className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-display text-sm font-extrabold text-white shadow-lift"
      >
        {initials}
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-ink">{site.name}</span>
    </Link>
  );
}
