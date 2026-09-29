import { useEffect } from "react";

// Elements that fade up when scrolled into view. Add your own classes here,
// or put data-reveal on any element in JSX.
const SELECTORS = [
  // home
  ".hm-h2", ".hm-lead", ".hm-card", ".hm-steps li", ".hm-cta",
  // about
  ".ab-facts", ".ab-story > *", ".ab-h2", ".ab-pillars", ".ab-principles article", ".ab-process li", ".ab-cta",
  // services
  ".sv-list li", ".sv-btns",
  // industries
  ".in-h2", ".in-tile", ".in-note", ".in-approach > div > div", ".in-cta",
  // careers
  ".cr-card",
  "[data-reveal]",
].join(",");

export default function useSiteAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    root.classList.add("js-rv");

    // ---- scroll reveal (attributes, so React re-renders can't wipe them) ----
    const io = new IntersectionObserver(
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
        el.setAttribute("data-rv", "");
        io.observe(el);
      });
    };
    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // ---- scroll progress bar + "scrolled" flag for the navbar ----
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    document.body.appendChild(bar);

    const onScroll = () => {
      const max = root.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      root.toggleAttribute("data-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      bar.remove();
      root.classList.remove("js-rv");
      root.removeAttribute("data-scrolled");
    };
  }, []);
}