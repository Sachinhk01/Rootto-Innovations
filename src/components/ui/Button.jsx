/**
 * Button — shared CTA/button primitive.
 * variant: "primary" | "outline-dark" | "outline-light" (default "primary")
 * size: "md" | "lg" (default "md")
 * as: "button" | "a" — renders an <a> when href is provided
 */
export default function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}