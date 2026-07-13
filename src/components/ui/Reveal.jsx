import useScrollReveal from "../../hooks/useScrollReveal";

/**
 * Reveal wraps children with a scroll-triggered reveal animation.
 *
 * Props:
 *  - as: element tag (default "div")
 *  - variant: "up" | "left" | "right" | "scale" (default "up")
 *  - delay: ms transition-delay for staggering (default 0)
 *  - className: extra classes
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) {
  const { ref, isVisible } = useScrollReveal();

  const variantClass =
    variant === "left"
      ? "reveal--left"
      : variant === "right"
      ? "reveal--right"
      : variant === "scale"
      ? "reveal--scale"
      : "";

  return (
    <Tag
      ref={ref}
      className={`reveal ${variantClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}