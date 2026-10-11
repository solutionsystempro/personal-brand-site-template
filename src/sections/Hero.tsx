import { hero } from "../content";
import Button from "../components/Button";

export default function Hero() {
  const hasImage = Boolean(hero.image);

  return (
    <section aria-labelledby="hero-title" className="relative -mt-16 overflow-hidden pt-16 lg:-mt-[72px] lg:pt-[72px]">
      {/* Backdrop: blueprint grid fading out, plus a soft blue glow. Decorative only. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="grid-paper absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,#000_30%,transparent_75%)]" />
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-primary-soft blur-3xl" />
      </div>

      <div
        className={`container-x relative grid items-center gap-14 pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20 ${
          hasImage ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className={hasImage ? "" : "mx-auto max-w-3xl text-center"}>
          {hero.eyebrow && (
            <p
              className="inline-flex animate-rise items-center gap-2 rounded-full border border-border bg-white/80 px-3.5 py-1.5 text-sm font-medium text-primary-dark shadow-sm"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              {hero.eyebrow}
            </p>
          )}

          <h1
            id="hero-title"
            className="mt-6 animate-rise text-[40px] font-extrabold leading-[1.04] tracking-[-0.035em] [animation-delay:80ms] sm:text-6xl lg:text-[68px]"
          >
            {hero.headline}{" "}
            <span className="box-decoration-clone bg-[linear-gradient(transparent_64%,theme(colors.primary/16%)_64%,theme(colors.primary/16%)_92%,transparent_92%)] px-1 text-primary">
              {hero.highlight}
            </span>
          </h1>

          <p
            className={`mt-7 max-w-xl animate-rise text-lg leading-relaxed text-muted [animation-delay:160ms] sm:text-xl ${
              hasImage ? "" : "mx-auto"
            }`}
          >
            {hero.subhead}
          </p>

          <div
            className={`mt-9 flex animate-rise flex-col gap-3 [animation-delay:240ms] sm:flex-row ${
              hasImage ? "" : "justify-center"
            }`}
          >
            <Button href={hero.primaryCta.href} arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {hero.note && <p className="mt-5 animate-rise text-sm text-muted [animation-delay:320ms]">{hero.note}</p>}
        </div>

        {hasImage && (
          <div className="relative mx-auto w-full max-w-[420px] animate-rise [animation-delay:200ms] lg:max-w-none">
            {/* Offset frame behind the portrait */}
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-primary/25" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-primary-soft shadow-lift">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                width={480}
                height={560}
                className="aspect-[6/7] w-full object-cover"
                fetchPriority="high"
              />
            </div>

            {/* Floating proof chips */}
            {hero.chips.map((chip, i) => (
              <div
                key={chip.label}
                className={`absolute flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-card animate-floaty ${
                  i === 0
                    ? "-left-3 top-[34%] sm:-left-8"
                    : "-right-2 bottom-10 [animation-delay:-3s] sm:-right-6"
                }`}
              >
                <span className="font-display text-2xl font-extrabold tracking-tight text-primary">{chip.value}</span>
                <span className="max-w-[6rem] text-xs font-medium leading-tight text-muted">{chip.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
