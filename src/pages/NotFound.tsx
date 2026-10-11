import { useEffect } from "react";
import { notFound, seo } from "../content";
import { useSeo } from "../components/useSeo";
import Button from "../components/Button";

export default function NotFound() {
  useSeo(seo.notFound, "/404");

  // Ask search engines not to index the 404 page. Removed again when you navigate away.
  useEffect(() => {
    const m = document.createElement("meta");
    m.name = "robots";
    m.content = "noindex";
    document.head.appendChild(m);
    return () => m.remove();
  }, []);

  return (
    <section aria-labelledby="nf-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="grid-paper pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
      <div className="container-x relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-[120px] font-extrabold leading-none tracking-[-0.06em] text-primary/15 sm:text-[180px]" aria-hidden="true">
          404
        </p>
        <h1 id="nf-title" className="-mt-6 text-3xl font-extrabold sm:-mt-10 sm:text-5xl">
          {notFound.title}
        </h1>
        <p className="mt-5 max-w-md text-lg text-muted">{notFound.body}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href={notFound.primary.href} arrow>
            {notFound.primary.label}
          </Button>
          <Button href={notFound.secondary.href} variant="secondary">
            {notFound.secondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
