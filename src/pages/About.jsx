import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function About() {
  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <h1 className="page-header__title">Empowering Businesses with Technology, Talent &amp; Trust</h1>
            <p className="page-header__subtitle">
              Founded in 2021 and headquartered in Bengaluru, Roottoo Innovation is an IT Services
              and Business Consulting company.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container container--narrow">
          <Reveal>
            <p>
              We help businesses streamline operations, build skilled teams and adopt
              technology-driven solutions for sustainable growth.
            </p>
            <p>
              Our approach combines industry experience, practical execution and scalable delivery.
            </p>
            <p>
              We build long-term partnerships through technology, talent and trust.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-card__label">Business</div>
                <div className="info-card__value">IT Services &amp; Consulting</div>
              </div>
              <div className="info-card">
                <div className="info-card__label">Headquarters</div>
                <div className="info-card__value">Bengaluru, Karnataka</div>
              </div>
              <div className="info-card">
                <div className="info-card__label">Founded</div>
                <div className="info-card__value">2021</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Roottoo Innovation */}
      <section className="section section--offwhite">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Why Roottoo Innovation</span>
            <h2 className="section__title">Built around outcomes, not just services.</h2>
          </Reveal>
          <div className="card-grid">
            {siteConfig.whyChooseUs.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 90} className={`card ${idx === 0 ? "card--accent" : ""}`}>
                <div className="card__icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5 10-5V7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery approach */}
      <section className="section section--white">
        <div className="container container--narrow">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Our delivery approach</span>
            <h2 className="section__title">Five steps from requirement to results.</h2>
          </Reveal>
          <div className="steps">
            {siteConfig.deliveryApproach.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 120} as="div" className="step">
                <span className="step__num">{idx + 1}</span>
                <div className="step__body">
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__desc">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <section className="section--soft" style={{ padding: "48px 0" }}>
        <div className="container text-center">
          <Reveal>
            <p style={{ fontSize: "1.1rem", color: "var(--navy-700)", fontWeight: 600, marginBottom: "20px" }}>
              Pan-India delivery with expanding operations
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Request a Consultation <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
