import { Award } from "lucide-react";
import { about, seo } from "../content";
import { useSeo } from "../components/useSeo";
import Button from "../components/Button";
import FinalCta from "../sections/FinalCta";

export default function About() {
  useSeo(seo.about, "/about");
  return (
    <>
      <section aria-labelledby="about-title" className="relative overflow-hidden">
        <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow">{about.eyebrow}</p>
            <h1 id="about-title" className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
              {about.title}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-muted">{about.lead}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {about.credentials.map((c) => (
                <li key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-ink">
                  <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[2rem] border-2 border-primary/25" />
            <img
              src={about.image}
              alt={about.imageAlt}
              width={480}
              height={560}
              className="relative aspect-[6/7] w-full rounded-[2rem] border border-border object-cover shadow-lift"
            />
          </div>
        </div>
      </section>

      <section aria-label="My story" className="border-t border-border bg-surface py-20 sm:py-24">
        <div className="container-x max-w-3xl">
          {about.sections.map((s) => (
            <div key={s.heading} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-extrabold sm:text-3xl">{s.heading}</h2>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="values-title" className="section-y">
        <div className="container-x">
          <h2 id="values-title" className="text-3xl font-extrabold sm:text-4xl">
            What I believe
          </h2>
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {about.values.map((v, i) => (
              <li key={i} className="card p-7">
                <span aria-hidden="true" className="font-display text-sm font-bold tabular-nums text-primary">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
          <Button href={about.cta.href} arrow className="mt-12">
            {about.cta.label}
          </Button>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
