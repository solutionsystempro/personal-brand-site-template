import { Check } from "lucide-react";
import { offers } from "../content";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";

export default function Offers() {
  return (
    <section id="offers" aria-labelledby="offers-title" tabIndex={-1} className="section-y focus:outline-none">
      <div className="container-x">
        <SectionHeader id="offers-title" eyebrow={offers.eyebrow} title={offers.title} intro={offers.intro} />

        <ul className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {offers.items.map((o) => (
            <li
              key={o.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition duration-300 ${
                o.featured
                  ? "border-primary bg-white shadow-lift ring-4 ring-primary-soft lg:-my-4 lg:py-12"
                  : "border-border bg-white shadow-card hover:-translate-y-1"
              }`}
            >
              {o.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {offers.featuredLabel}
                </span>
              )}
              <h3 className="text-xl font-bold">{o.name}</h3>
              <p className="mt-3 leading-relaxed text-muted">{o.description}</p>

              <p className="mt-7 flex items-baseline gap-2 border-t border-border pt-7">
                {o.price ? (
                  <span className="font-display text-4xl font-extrabold tracking-tight text-ink">{o.price}</span>
                ) : null}
                <span className={o.price ? "text-sm text-muted" : "font-display text-2xl font-bold text-ink"}>
                  {o.priceNote}
                </span>
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {o.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[15px] text-ink">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <Button href={o.cta.href} variant={o.featured ? "primary" : "secondary"} arrow className="mt-9 w-full">
                {o.cta.label}
                <span className="sr-only">: {o.name}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
