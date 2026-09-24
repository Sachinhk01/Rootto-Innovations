import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IndustryIcon = ({ idx }) => {
  const icons = [
    <path key="0" d="M4 6h16v10H4zM8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
    <path key="1" d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5 10-5V7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
    <path key="2" d="M4 4h16v6H4zM4 14h16v6H4z" stroke="currentColor" strokeWidth="1.7" />,
    <path key="3" d="M3 9h18l-2 10H5zM3 9l9-6 9 6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
    <path key="4" d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />,
    <path key="5" d="M12 2C8 7 6 10 6 14a6 6 0 0012 0c0-4-2-7-6-12z" stroke="currentColor" strokeWidth="1.7" />,
    <path key="6" d="M12 3C8 7 6 10 6 14a6 6 0 0012 0c0-4-2-7-6-11z" stroke="currentColor" strokeWidth="1.7" />,
    <path key="7" d="M5 12a7 7 0 0114 0M5 12a7 7 0 0014 0M5 12h14" stroke="currentColor" strokeWidth="1.7" />,
    <path key="8" d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />,
    <path key="9" d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
    <path key="10" d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />,
    <path key="11" d="M3 21h18M5 21V10l7-5 7 5v11" stroke="currentColor" strokeWidth="1.7" />,
  ];
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none">{icons[idx % icons.length]}</svg>;
};

export default function Industries() {
  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <h1 className="page-header__title">Industries We Serve</h1>
            <p className="page-header__subtitle">
              Built for businesses at every stage. We support startups, SMEs, and enterprises across
              diverse industries with flexible solutions that scale.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="industry-grid">
            {siteConfig.industries.map((industry, idx) => (
              <Reveal key={industry.name} delay={idx * 80} className="industry-card">
                <div className="industry-card__icon">
                  <IndustryIcon idx={idx} />
                </div>
                <h3 className="industry-card__title">{industry.name}</h3>
                <p className="industry-card__desc">{industry.line}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Marquee />

      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal>
            <h2 className="cta-banner__title">Looking for industry-specific support?</h2>
            <p className="cta-banner__text">Let's discuss how we can help your business grow.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
