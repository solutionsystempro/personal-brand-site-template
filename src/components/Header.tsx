import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../content";
import Logo from "./Logo";
import SmartLink from "./SmartLink";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close the mobile menu whenever the route or hash changes.
  useEffect(() => setOpen(false), [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) => !href.includes("#") && href === location.pathname;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open ? "border-border bg-white/90 backdrop-blur-md" : "border-transparent bg-white/0"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((l) => (
              <li key={l.href}>
                <SmartLink
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`rounded-lg px-3 py-2 text-[15px] font-medium transition-colors hover:text-primary-dark ${
                    isActive(l.href) ? "text-primary-dark" : "text-muted"
                  }`}
                >
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href={nav.cta.href} size="sm">
            {nav.cta.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-border bg-white md:hidden">
        <nav aria-label="Mobile" className="container-x py-4">
          <ul className="flex flex-col">
            {nav.links.map((l) => (
              <li key={l.href}>
                <SmartLink
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[48px] items-center rounded-lg px-2 text-base font-medium text-ink hover:bg-surface"
                >
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
          <Button href={nav.cta.href} className="mt-3 w-full">
            {nav.cta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
