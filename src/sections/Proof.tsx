import { Quote } from "lucide-react";
import { proof } from "../content";
import SectionHeader from "../components/SectionHeader";

export default function Proof() {
  return (
    <section id="proof" aria-labelledby="proof-title" tabIndex={-1} className="section-y border-y border-border bg-surface focus:outline-none">
      <div className="container-x">
        <SectionHeader id="proof-title" eyebrow={proof.eyebrow} title={proof.title} intro={proof.intro} align="center" />

        {/* Stats: one continuous instrument-panel strip rather than four floating boxes */}
        <dl className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {proof.stats.map((s) => (
            <div
              key={s.label}
              className="relative flex flex-col bg-white p-6 before:absolute before:left-6 before:top-0 before:h-1 before:w-10 before:rounded-b-full before:bg-primary sm:p-8 sm:before:left-8"
            >
              <dt className="order-2 mt-2 text-sm font-semibold text-ink sm:text-base">{s.label}</dt>
              <dd className="order-1 font-display text-4xl font-extrabold tracking-[-0.04em] text-primary sm:text-5xl">
                {s.value}
              </dd>
              <dd className="order-3 mt-1 text-sm text-muted">{s.detail}</dd>
            </div>
          ))}
        </dl>

        {/* Testimonials. These are examples: replace with real, permission-given quotes. */}
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {proof.testimonials.map((t, i) => (
            <li key={i} className={`card flex flex-col p-7 ${i === 1 ? "md:-translate-y-4 md:border-primary/30 md:shadow-lift" : ""}`}>
              <div className="flex items-center justify-between gap-3">
                <Quote className="h-8 w-8 fill-primary-soft text-primary" aria-hidden="true" />
                <span className="rounded-full border border-dashed border-primary/40 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-dark">
                  {proof.exampleLabel}
                </span>
              </div>
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink">
                <p>{t.quote}</p>
              </blockquote>
              <div className="mt-6 inline-flex self-start rounded-lg bg-primary-soft px-3 py-1.5 text-sm font-semibold text-primary-dark">
                {t.result}
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary-soft to-white font-display text-sm font-bold text-primary-dark ring-1 ring-border"
                >
                  {t.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
