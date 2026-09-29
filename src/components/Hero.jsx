import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import "../styles/hero.css";

const cards = [
  {
    title: "Staffing & Recruitment",
    text: "Permanent · Contract · Bulk hiring",
    icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21v-1a8 8 0 0116 0v1" />,
  },
  {
    title: "Technology Solutions",
    text: "Web · Mobile · Managed IT",
    icon: <path d="M4 6h16v10H4zM8 20h8M12 16v4" />,
  },
  {
    title: "Accounting & Tax",
    text: "GST · ITR · Bookkeeping",
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    title: "Payroll & HR",
    text: "Payroll · Onboarding · Records",
    icon: <path d="M3 5h18v14H3zM7 10h5M7 14h10" />,
  },
];

export default function Hero() {
  return (
    <section className="hero2">
      <div className="hero2__bg" aria-hidden="true">
        <span className="hero2__lines" />
        <span className="hero2__blob hero2__blob--a" />
        <span className="hero2__blob hero2__blob--b" />
      </div>

      <div className="container hero2__inner">
        <div className="hero2__copy">
          <span className="hero2__pill">
            <span className="hero2__dot" />
            {siteConfig.business.shortLine}
          </span>
          <h1 className="hero2__title">
            <span className="hero2__line">Grow Smarter</span>
            <span className="hero2__line">Build Stronger</span>
            <span className="hero2__line hero2__line--accent">Move Faster</span>
          </h1>
          <p className="hero2__sub">
            Your trusted partner for talent, technology, and business growth. We help ambitious
            organizations hire better, operate smarter, and grow with confidence.
          </p>
          <div className="hero2__ctas">
            <Link to="/contact" className="btn btn--primary btn--lg">Start a Conversation</Link>
            <Link to="/services" className="btn btn--outline btn--lg">Explore Solutions</Link>
          </div>
        </div>

        <div className="hero2__visual" aria-hidden="true">
          <span className="hero2__ring hero2__ring--1" />
          <span className="hero2__ring hero2__ring--2" />
          <span className="hero2__glow" />
          {cards.map((c) => (
            <div key={c.title} className="hero2__card">
              <span className="hero2__card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {c.icon}
                </svg>
              </span>
              <span>
                <span className="hero2__card-title">{c.title}</span>
                <span className="hero2__card-text">{c.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="hero2__stats">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="hero2__stat">
              <span className="hero2__stat-num">{stat.value}</span>
              <span className="hero2__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}