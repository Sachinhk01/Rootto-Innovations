import useScrollReveal from "../hooks/useScrollReveal";

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
