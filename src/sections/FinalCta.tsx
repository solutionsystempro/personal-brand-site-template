import { finalCta } from "../content";
import Button from "../components/Button";

/** The single gradient band on the site. */
export default function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-primary-dark px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 id="final-cta-title" className="text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl">
              {finalCta.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/90">{finalCta.body}</p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={finalCta.primary.href} variant="inverse" arrow>
                {finalCta.primary.label}
              </Button>
              <Button href={finalCta.secondary.href} variant="ghost-inverse">
                {finalCta.secondary.label}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
