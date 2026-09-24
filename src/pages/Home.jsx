import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import FAQAccordion from "../components/FAQAccordion";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M5 12l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceIcon = ({ idx }) => {
  const icons = [
    <path key="0" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM4 21v-1a8 8 0 0116 0v1" stroke="currentColor" strokeWidth="1.7" />,
    <path key="1" d="M4 6h16v10H4zM8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />,
    <path key="2" d="M4 4h16v6H4zM4 14h16v6H4z" stroke="currentColor" strokeWidth="1.7" />,
    <path key="3" d="M12 2v20M5 9l7-7 7 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
    <path key="4" d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />,
    <path key="5" d="M4 6h16v12H4zM4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.7" />,
    <path key="6" d="M12 2L2 7l10 5 10-5-10-5zM2 7v10l10 5 10-5V7" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />,
    <path key="7" d="M9 11l3 3 8-8M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />,
  ];
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none">{icons[idx % icons.length]}</svg>;
};

export default function Home() {
  return (
    <div className="page-fade">
      {/* ── 4.1 Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="hero__eyebrow">{siteConfig.business.shortLine}</span>
          <h1 className="hero__headline">
            <span className="hero__headline-line">Grow smarter.</span>
            <span className="hero__headline-line">Build stronger.</span>
            <span className="hero__headline-line">Move faster.</span>
          </h1>
          <p className="hero__sub">
            Your trusted partner for talent, technology, and business growth. We help ambitious
            organizations hire better, operate smarter, and grow with confidence.
          </p>
          <div className="hero__ctas">
            <Link to="/contact" className="btn btn--primary btn--lg">Start a Conversation</Link>
            <Link to="/services" className="btn btn--outline btn--lg">Explore Solutions</Link>
          </div>
          <div className="hero__stats">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="hero__stat-item">
                <span className="hero__stat-num">{stat.value}</span>
                <span className="hero__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.2 Who we are ────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <Reveal variant="left">
              <span className="eyebrow">Who we are</span>
              <h2 className="section__title" style={{ textAlign: "left" }}>We make business growth simpler.</h2>
              <p>
                Roottoo Innovation is a Bengaluru-based IT services and business consulting company,
                founded in 2021 and serving organizations across India.
              </p>
              <p>
                From finding exceptional talent to simplifying compliance and accelerating digital
                transformation, we bring practical expertise and dependable execution to every
                engagement.
              </p>
              <div className="check-list">
                {["Solutions built around your goals.", "Flexible support for every stage of growth.", "A partner that works like an extension of your team."].map((item) => (
                  <div key={item} className="check-list__item">
                    <span className="check-list__check" aria-hidden="true"><CheckIcon /></span>
                    {item}
                  </div>
                ))}
              </div>
              <div className="highlight-box">
                <p className="highlight-box__text">Right people. Better systems. Lasting growth.</p>
              </div>
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
              <Link to="/about" className="btn btn--primary btn--lg" style={{ marginTop: "28px" }}>Work With Us</Link>
            </Reveal>

            <Reveal variant="right" delay={150}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Roottoo Innovation team collaboration"
                  style={{ width: "100%", height: "460px", objectFit: "cover", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-lg)" }}
                  loading="lazy"
                />
                <div style={{
                  position: "absolute",
                  right: "-20px",
                  bottom: "-20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "140px",
                  height: "140px",
                  borderRadius: "50%",
                  background: "var(--gradient-cta)",
                  color: "#fff",
                  textAlign: "center",
                  boxShadow: "var(--shadow-xl)",
                  border: "6px solid #fff",
                  padding: "12px",
                }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, lineHeight: 1 }}>2021</span>
                  <span style={{ fontSize: ".72rem", fontWeight: 600, marginTop: "4px" }}>Founded</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4.3 What we do ───────────────────────────────────── */}
      <section className="section section--offwhite">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">What we do</span>
            <h2 className="section__title">Solutions designed around your growth.</h2>
            <p className="section__subtitle">
              One dependable partner for the people, technology, finance, and operational support
              your business needs.
            </p>
          </Reveal>
          <div className="card-grid">
            {siteConfig.whatWeDo.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 90} className="card">
                <div className="card__icon"><ServiceIcon idx={idx} /></div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
                <Link to={item.link} className="card__link">
                  {item.linkText} <ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.4 Solutions by need ─────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <Reveal className="section__head">
            <h2 className="section__title">Choose the support your business needs today.</h2>
          </Reveal>
          <div className="card-grid">
            {siteConfig.solutionsByNeed.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 90} className="card">
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.desc}</p>
                <Link to={item.link} className="card__link">
                  {item.linkText} <ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.5 Why Roottoo Innovation ────────────────────────── */}
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

      {/* ── 4.6 Delivery approach ─────────────────────────────── */}
      <section className="section section--white">
        <div className="container container--narrow">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Our delivery approach</span>
            <h2 className="section__title">Five steps from requirement to results.</h2>
          </Reveal>
          <div className="steps">
            {siteConfig.deliveryApproach.map((step, idx) => (
              <Reveal key={step.title} delay={idx * 120} className={`step ${idx === 0 ? "" : ""}`} as="div">
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

      {/* ── 4.7 Industries marquee ────────────────────────────── */}
      <Marquee />
      <section className="section section--offwhite" style={{ paddingTop: "48px" }}>
        <div className="container text-center">
          <Reveal>
            <Link to="/industries" className="btn btn--outline-dark btn--lg">
              View all industries <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── 4.8 Flexible engagement ──────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Flexible engagement</span>
            <h2 className="section__title">Support that fits your way of working.</h2>
          </Reveal>
          <div className="engagement-grid">
            {siteConfig.engagementModels.map((model, idx) => (
              <Reveal key={model.tag} delay={idx * 100} className="engagement-card">
                <span className="engagement-card__tag">{model.tag}</span>
                <h3 className="engagement-card__title">{model.title}</h3>
                <p className="engagement-card__desc">{model.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4.9 Employers / job seekers ───────────────────────── */}
      <section className="section section--offwhite">
        <div className="container">
          <div className="split-cta">
            <Reveal variant="left" className="split-cta__card">
              <h3 className="split-cta__title">{siteConfig.employerJobSeeker.employer.title}</h3>
              <p className="split-cta__text">{siteConfig.employerJobSeeker.employer.text}</p>
              <Link to={siteConfig.employerJobSeeker.employer.link} className="btn btn--primary">
                {siteConfig.employerJobSeeker.employer.linkText} <ArrowIcon />
              </Link>
            </Reveal>
            <Reveal variant="right" delay={120} className="split-cta__card">
              <h3 className="split-cta__title">{siteConfig.employerJobSeeker.jobSeeker.title}</h3>
              <p className="split-cta__text">{siteConfig.employerJobSeeker.jobSeeker.text}</p>
              <Link to={siteConfig.employerJobSeeker.jobSeeker.link} className="btn btn--outline-dark">
                {siteConfig.employerJobSeeker.jobSeeker.linkText} <ArrowIcon />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4.10 FAQ ──────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">FAQ</span>
            <h2 className="section__title">Frequently Asked Questions</h2>
          </Reveal>
          <FAQAccordion faqs={siteConfig.faqs} />
        </div>
      </section>

      {/* ── 4.11 CTA banner ───────────────────────────────────── */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal>
            <span className="eyebrow eyebrow--light eyebrow--center">Ready to move forward?</span>
            <h2 className="cta-banner__title">
              The right people and support can change how your business grows.
            </h2>
            <p className="cta-banner__text">
              Let's discuss your goals and create a solution that works for you.
            </p>
            <Link to="/contact" className="btn btn--primary btn--lg">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
