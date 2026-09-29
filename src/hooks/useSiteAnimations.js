import { useEffect } from "react";

// Elements that fade up when scrolled into view. Add your own classes here,
// or put data-reveal on any element in JSX.
const SELECTORS = [
  // home
  ".hm-h2", ".hm-lead", ".hm-card", ".hm-steps li", ".hm-cta",
  // about
  ".ab-hero h1", ".ab-facts", ".ab-story > *", ".ab-h2", ".ab-pillars", ".ab-principles article", ".ab-process li", ".ab-cta",
  // services
  ".sv-hero h1", ".sv-list li", ".sv-detail", ".sv-btns",
  // industries
  ".in-hero h1", ".in-h2", ".in-tile", ".in-note", ".in-approach > div > div", ".in-cta",
  // careers
  ".cr-head > *", ".cr-card",
  "[data-reveal]",
].join(",");

export default function useSiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("js-rv");

    // ---- scroll reveal (attributes, so React re-renders can't wipe them) ----
    const io = typeof IntersectionObserver === "undefined" ? null : new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-rv", "in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    const seen = new WeakSet();
    const scan = () => {
      const counts = new Map();
      document.querySelectorAll(SELECTORS).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        const n = counts.get(el.parentElement) || 0;
        counts.set(el.parentElement, n + 1);
        el.style.setProperty("--rv-d", `${Math.min(n, 6) * 80}ms`);
        el.setAttribute("data-rv", io ? "" : "in");
        io?.observe(el);
      });
    };
    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // The existing ScrollProgress component owns the progress bar.
    const onScroll = () => {
      root.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const updateCardGlow = (event) => {
      const card = event.target instanceof Element ? event.target.closest(".hm-card") : null;
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--my", `${event.clientY - bounds.top}px`);
    };
    const clearCardGlow = (event) => {
      const card = event.target instanceof Element ? event.target.closest(".hm-card") : null;
      if (!card || card.contains(event.relatedTarget)) return;
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    };
    document.addEventListener("pointermove", updateCardGlow, { passive: true });
    document.addEventListener("pointerout", clearCardGlow, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", updateCardGlow);
      document.removeEventListener("pointerout", clearCardGlow);
      root.classList.remove("js-rv");
      root.removeAttribute("data-scrolled");
    };
  }, []);
}