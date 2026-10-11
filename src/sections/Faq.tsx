import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { faq } from "../content";
import SectionHeader from "../components/SectionHeader";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" aria-labelledby="faq-title" tabIndex={-1} className="section-y border-t border-border bg-surface focus:outline-none">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader id="faq-title" eyebrow={faq.eyebrow} title={faq.title} />

        <div className="divide-y divide-border rounded-2xl border border-border bg-white shadow-card">
          {faq.items.map((item, i) => {
            const open = openIndex === i;
            const buttonId = `${baseId}-q${i}`;
            const panelId = `${baseId}-a${i}`;
            return (
              <div key={item.q}>
                <h3 className="text-base sm:text-lg">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display font-bold text-ink transition-colors hover:text-primary-dark"
                  >
                    {item.q}
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition duration-300 ${
                        open ? "rotate-45 bg-primary text-white" : "bg-primary-soft text-primary"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden" hidden={!open}>
                    <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
