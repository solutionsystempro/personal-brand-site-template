import { contact, seo } from "../content";
import { useSeo } from "../components/useSeo";
import Button from "../components/Button";
import ProviderForm from "../components/ProviderForm";

const field =
  "mt-2 w-full rounded-xl border border-border bg-white px-4 py-3 text-base text-ink shadow-sm placeholder:text-muted/80 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15";

export default function Contact() {
  useSeo(seo.contact, "/contact");
  return (
    <section aria-labelledby="contact-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-x-0 top-0 h-[480px] [mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">{contact.eyebrow}</p>
          <h1 id="contact-title" className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            {contact.title}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">{contact.lead}</p>

          <ul className="mt-10 space-y-4">
            {contact.options.map(({ icon: Icon, title, body, cta }) => (
              <li key={title} className="card flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-bold">{title}</h2>
                  <p className="break-words text-muted">{body}</p>
                </div>
                <Button href={cta.href} variant="secondary" size="sm">
                  {cta.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 sm:p-10">
          <h2 className="text-2xl font-extrabold">{contact.formTitle}</h2>
          <ProviderForm action={contact.formAction} notConnectedMessage={contact.notConnectedMessage} className="mt-6 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="c-name" className="text-sm font-semibold text-ink">
                  Name
                </label>
                <input id="c-name" name="name" type="text" required autoComplete="name" className={field} />
              </div>
              <div>
                <label htmlFor="c-email" className="text-sm font-semibold text-ink">
                  Email
                </label>
                <input id="c-email" name="email" type="email" required autoComplete="email" className={field} />
              </div>
            </div>
            <div>
              <label htmlFor="c-message" className="text-sm font-semibold text-ink">
                How can I help?
              </label>
              <textarea id="c-message" name="message" rows={6} required className={`${field} resize-y`} />
            </div>
            <button
              type="submit"
              className="min-h-[50px] w-full rounded-xl bg-primary px-6 font-semibold text-white shadow-lift transition hover:bg-primary-dark sm:w-auto"
            >
              {contact.submitLabel}
            </button>
          </ProviderForm>
        </div>
      </div>
    </section>
  );
}
