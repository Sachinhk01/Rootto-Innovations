import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * Observes an element and toggles `is-visible` once it enters the viewport.
 * Fires only once per element (unobserves after triggering).
 *
 * @param {Object} options
 * @param {number} options.threshold  - fraction of element visible to trigger (default 0.18)
 * @param {string} options.rootMargin - root margin (default "0px 0px -40px 0px")
 * @param {boolean} options.once      - unobserve after first reveal (default true)
 * @returns {{ ref, isVisible }}
 */
export default function useScrollReveal({
  threshold = 0.18,
  rootMargin = "0px 0px -40px 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}
