import { CheckCircle2 } from "lucide-react";
import { leadMagnet } from "../content";
import ProviderForm from "../components/ProviderForm";

export default function LeadMagnet() {
  return (
    <section id="guide" aria-labelledby="guide-title" tabIndex={-1} className="pb-20 sm:pb-24 lg:pb-28 focus:outline-none">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface">
          <div aria-hidden="true" className="grid-paper absolute inset-0 opacity-70 [mask-image:linear-gradient(to_left,#000,transparent_70%)]" />
          <div className="relative grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:p-14">
            <div>
              <p className="eyebrow">{leadMagnet.eyebrow}</p>
              <h2 id="guide-title" className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl">
                {leadMagnet.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{leadMagnet.body}</p>
              <ul className="mt-6 space-y-2.5">
                {leadMagnet.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-ink">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <ProviderForm action={leadMagnet.formAction} notConnectedMessage={leadMagnet.notConnectedMessage} className="mt-8 max-w-lg">
                <label htmlFor="lead-email" className="block text-sm font-semibold text-ink">
                  Email address
                </label>
                <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                  <input
                    id="lead-email"
                    type="email"
                    name={leadMagnet.emailFieldName}
                    required
                    autoComplete="email"
                    placeholder={leadMagnet.placeholder}
                    aria-describedby="lead-privacy"
                    className="min-h-[50px] w-full flex-1 rounded-xl border border-border bg-white px-4 text-base text-ink shadow-sm placeholder:text-muted/80 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                  />
                  <button
                    type="submit"
                    className="min-h-[50px] rounded-xl bg-primary px-6 font-semibold text-white shadow-lift transition hover:bg-primary-dark"
                  >
                    {leadMagnet.button}
                  </button>
                </div>
                <p id="lead-privacy" className="mt-3 text-sm text-muted">
                  {leadMagnet.privacyNote}
                </p>
              </ProviderForm>
            </div>

            <div className="relative mx-auto w-full max-w-[300px] lg:max-w-[340px]">
              <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rotate-3 rounded-2xl bg-primary/15" />
              <img
                src={leadMagnet.image}
                alt={leadMagnet.imageAlt}
                width={340}
                height={440}
                loading="lazy"
                className="relative aspect-[17/22] w-full -rotate-2 rounded-2xl border border-border shadow-lift transition duration-500 hover:rotate-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
