import { problem } from "../content";
import SectionHeader from "../components/SectionHeader";

export default function Problem() {
  return (
    <section aria-labelledby="problem-title" className="section-y border-t border-border bg-surface">
      <div className="container-x">
        <SectionHeader id="problem-title" eyebrow={problem.eyebrow} title={problem.title} intro={problem.intro} />
        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {problem.points.map(({ icon: Icon, title, body }, i) => (
            <li key={i} className="card group relative p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span aria-hidden="true" className="font-display text-sm font-bold tabular-nums text-primary/40">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
