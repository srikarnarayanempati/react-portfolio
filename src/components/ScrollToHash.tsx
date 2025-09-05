import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;
    let cancelled = false;
    const start = performance.now();
    const timeout = 3000;
    const interval = 50; 

    const tryScroll = () => {
      if (cancelled) return;
      const el = document.querySelector(hash);
      if (el) {
        const header = document.querySelector("header");
        const offset = header ? header.getBoundingClientRect().height : 0;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: "smooth" });
        return;
      }
      if (performance.now() - start < timeout) {
        setTimeout(tryScroll, interval);
      }
    };

    setTimeout(tryScroll, 50);

    return () => {
      cancelled = true;
    };
  }, [hash, pathname]);

  return null;
}
