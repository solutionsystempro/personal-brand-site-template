import { Check, X } from "lucide-react";
import { fit } from "../content";
import SectionHeader from "../components/SectionHeader";

export default function Fit() {
  return (
    <section aria-labelledby="fit-title" className="section-y border-t border-border bg-surface">
      <div className="container-x">
        <SectionHeader id="fit-title" eyebrow={fit.eyebrow} title={fit.title} align="center" />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="card border-primary/30 p-8">
            <h3 className="flex items-center gap-3 text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-white">
                <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              </span>
              {fit.forTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {fit.forItems.map((item) => (
                <li key={item} className="flex gap-3 text-ink">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-dashed border-border bg-white/60 p-8">
            <h3 className="flex items-center gap-3 text-xl font-bold">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-muted ring-1 ring-border">
                <X className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
              </span>
              {fit.notForTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {fit.notForItems.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <X className="mt-1 h-4 w-4 shrink-0" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
