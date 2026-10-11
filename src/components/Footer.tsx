import { community, footer, site } from "../content";
import Logo from "./Logo";
import SmartLink from "./SmartLink";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 leading-relaxed text-muted">{footer.blurb}</p>
          <ul className="mt-6 flex gap-2" aria-label="Social links">
            {community.links.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                <SmartLink
                  href={href}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
        {footer.columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.12em] text-ink">{col.title}</h2>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.href}>
                  <SmartLink href={l.href} className="inline-block py-1.5 text-muted hover:text-primary-dark">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="container-x flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. {footer.legal}
          </p>
          <SmartLink href={`mailto:${site.email}`} className="hover:text-primary-dark">
            {site.email}
          </SmartLink>
        </div>
      </div>
    </footer>
  );
}
