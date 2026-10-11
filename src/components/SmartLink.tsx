import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; children: ReactNode };

/**
 * One link component for everything in content.ts:
 * internal routes ("/about"), home-page sections ("/#faq"),
 * and external URLs ("https://...", "mailto:...").
 */
export default function SmartLink({ href, children, ...rest }: Props) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  if (isExternal) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
        {newTab && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  }
  return (
    <Link to={href} {...rest}>
      {children}
    </Link>
  );
}
