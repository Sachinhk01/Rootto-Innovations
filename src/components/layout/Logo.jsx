import { useMemo } from "react";
import logoNavy from "../../assets/roottoo-logo.png";
// import logoWhite from "../../assets/roottoo-logo-white.png";


/**
 * Logo — Roottoo Innovation wordmark.
 * variant="dark"  -> navy logo, use on white/light backgrounds (main navbar, mobile menu)
 * variant="light" -> white logo, use on dark/navy backgrounds (footer, dark sections)
 */
export default function Logo({ variant = "light", size = "md" }) {
  const height = size === "lg" ? 44 : size === "sm" ? 30 : 38;
  const src = variant === "dark" ? logoNavy : logoWhite;

  return (
    <a href="#home" className="logo" aria-label="Roottoo Innovation — RI ACC & TAX home">
      <img
        src={src}
        alt="Roottoo Innovation"
        style={{ height, width: "auto", display: "block" }}
        className="logo__img"
      />
    </a>
  );
}