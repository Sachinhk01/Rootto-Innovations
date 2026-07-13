import { siteConfig } from "../../config/siteConfig";

/**
 * Logo — renders the brand wordmark + leaf icon.
 * variant: "dark" (default, for light backgrounds) | "light" (for dark backgrounds)
 */
export default function Logo({ variant = "dark" }) {
  const isLight = variant === "light";

  return (
    <a href="#home" className="logo" aria-label={siteConfig.business.name}>
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 2C7 2 3 6 3 11c0 5 4.5 9 9 11 4.5-2 9-6 9-11 0-5-4-9-9-9z"
          fill="url(#leafGradient)"
        />
        <defs>
          <linearGradient id="leafGradient" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="var(--orange-400, #f7941d)" />
            <stop offset="100%" stopColor="var(--red-600, #d92d20)" />
          </linearGradient>
        </defs>
      </svg>
      <span className={`logo__text ${isLight ? "logo__text--light" : ""}`}>
        {siteConfig.business.name}
      </span>
    </a>
  );
}