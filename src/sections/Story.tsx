import { story } from "../content";
import Button from "../components/Button";

export default function Story() {
  return (
    <section aria-labelledby="story-title" className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div aria-hidden="true" className="grid-paper absolute -inset-6 rounded-[2.5rem] [mask-image:radial-gradient(closest-side,#000,transparent)]" />
          <img
            src={story.image}
            alt={story.imageAlt}
            width={560}
            height={640}
            loading="lazy"
            className="relative aspect-[7/8] w-full rounded-[2rem] border border-border object-cover shadow-card"
          />
          {story.caption && (
            <figcaption className="relative mt-4 text-center text-sm text-muted lg:text-left">{story.caption}</figcaption>
          )}
        </figure>

        <div>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 id="story-title" className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[44px]">
            {story.title}
          </h2>
          <div className="mt-8 space-y-5 border-l-2 border-primary-soft pl-6 text-lg leading-relaxed text-muted">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Button href={story.cta.href} variant="secondary" arrow className="mt-10">
            {story.cta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
