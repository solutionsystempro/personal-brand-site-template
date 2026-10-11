import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import SmartLink from "./SmartLink";

type Variant = "primary" | "secondary" | "inverse" | "ghost-inverse";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white shadow-lift hover:bg-primary-dark hover:-translate-y-0.5 active:translate-y-0",
  secondary: "bg-white text-ink border border-border hover:border-primary hover:text-primary-dark hover:-translate-y-0.5",
  inverse: "bg-white text-primary-dark hover:bg-primary-soft hover:-translate-y-0.5",
  "ghost-inverse": "text-white ring-1 ring-inset ring-white/70 hover:bg-white/10",
};

const sizes = {
  sm: "min-h-[42px] px-5 py-2 text-sm",
  md: "min-h-[50px] px-6 py-3 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <SmartLink
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </SmartLink>
  );
}
