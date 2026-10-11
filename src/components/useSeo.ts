import { useEffect } from "react";
import { site, type Seo } from "../content";

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/** Sets the page title, description, Open Graph and Twitter tags from content.ts. */
export function useSeo({ title, description }: Seo, path = "/") {
  useEffect(() => {
    const url = `${site.url}${path}`;
    const image = site.ogImage.startsWith("http") ? site.ogImage : `${site.url}${site.ogImage}`;
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
    setCanonical(url);
  }, [title, description, path]);
}
