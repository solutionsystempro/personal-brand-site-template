import { ArrowUpRight } from "lucide-react";
import { community } from "../content";
import SectionHeader from "../components/SectionHeader";
import SmartLink from "../components/SmartLink";

export default function Community() {
  return (
    <section aria-labelledby="community-title" className="section-y">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <SectionHeader id="community-title" eyebrow={community.eyebrow} title={community.title} intro={community.body} />
        <ul className="grid gap-4 sm:grid-cols-2">
          {community.links.map(({ icon: Icon, label, handle, href }) => (
            <li key={label}>
              <SmartLink
                href={href}
                className="card group flex h-full items-center gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-ink">{label}</span>
                  <span className="block truncate text-sm text-muted">{handle}</span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </SmartLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
