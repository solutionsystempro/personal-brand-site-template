import { useState, type FormEvent, type ReactNode } from "react";
import { Info } from "lucide-react";

/**
 * A plain HTML form that POSTs straight to a third-party form provider
 * (Formspree, ConvertKit, Tally, etc). No backend, no API keys.
 *
 * If `action` is empty, submitting shows `notConnectedMessage` instead,
 * so a fresh clone never posts anywhere by accident.
 */
export default function ProviderForm({
  action,
  notConnectedMessage,
  className = "",
  children,
}: {
  action: string;
  notConnectedMessage: string;
  className?: string;
  children: ReactNode;
}) {
  const [notice, setNotice] = useState(false);
  const connected = action.trim().length > 0;

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (!connected) {
      e.preventDefault();
      setNotice(true);
    }
  }

  return (
    <form action={connected ? action : undefined} method="POST" onSubmit={onSubmit} className={className}>
      {children}
      <div aria-live="polite">
        {notice && (
          <p className="mt-4 flex gap-2.5 rounded-xl border border-primary/30 bg-primary-soft px-4 py-3 text-sm leading-relaxed text-primary-dark">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            {notConnectedMessage}
          </p>
        )}
      </div>
    </form>
  );
}
