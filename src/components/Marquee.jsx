import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";

export default function Marquee() {
  const items = [...siteConfig.industries, ...siteConfig.industries];

  return (
    <div className="marquee">
      <div className="marquee__track">
        {items.map((industry, idx) => (
          <span key={idx} className="marquee__item">
            {industry.name}
          </span>
        ))}
      </div>
    </div>
  );
}
