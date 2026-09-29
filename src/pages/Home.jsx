import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";
import Hero from "../components/Hero";
import HomeSections from "./HomeSections";
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

export default function Home() {
  return (
    <div className="page-fade">
      {/* ── 4.1 Hero ─────────────────────────────────────────── */}
      <Hero />
      <HomeSections />

      {/* ── 4.2 Who we are ────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="home-about__grid">
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
              <div className="home-about__visual">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Roottoo Innovation team collaboration"
                  className="home-about__image"
                  loading="lazy"
                />
                <div className="home-about__badge">
                  <span className="home-about__badge-year">2021</span>
                  <span className="home-about__badge-label">Founded</span>
                </div>
              </div>
            </Reveal>
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

    </div>
  );
}
