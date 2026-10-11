import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

/** Scrolls to the top on page change, or to the #section when the URL has a hash. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait a frame so the target section exists after a route change.
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        el.focus({ preventScroll: true });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
