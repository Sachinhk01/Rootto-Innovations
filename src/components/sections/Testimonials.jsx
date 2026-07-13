import Reveal from "../ui/Reveal";
import useScrollReveal from "../../hooks/useScrollReveal";
import useCountUp from "../../hooks/useCountUp";
import "./Testimonials.css";

const STATS = [
  { value: 480, suffix: "+", label: "Happy Clients" },
  { value: 1200, suffix: "+", label: "Projects Done" },
  { value: 15, suffix: "+", label: "Professionals" },
  { value: 4.7, suffix: "★", label: "Client Rating", decimals: 1 },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    rating: 5,
    quote:
      "Roottoo Innovation handled our GST registration and monthly filings flawlessly. Their 24-hour turnaround is real — fast, professional, and reliable.",
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    rating: 5,
    quote:
      "As a freelancer, tax filing was always confusing. The team made it simple and helped me optimize my refund legally. Highly recommended.",
  },
  {
    name: "Mohammed Iqbal",
    role: "Restaurant Owner",
    rating: 5,
    quote:
      "They managed our FSSAI license renewal and compliance audits end-to-end. Zero paperwork stress for us. Truly a one-roof compliance partner.",
  },
  {
    name: "Anitha Reddy",
    role: "Salaried Professional",
    rating: 4,
    quote:
      "Quick and accurate ITR filing. The team is responsive and explains everything clearly. Will continue using their services every year.",
  },
];

function StatItem({ stat, delay }) {
  const { ref, isVisible } = useScrollReveal();
  const count = useCountUp(stat.value, isVisible);
  const display = stat.decimals ? count.toFixed(1) : count;

  return (
    <div
      ref={ref}
      className={`stat ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="stat__num">
        {display}
        <span className="stat__suffix">{stat.suffix}</span>
      </span>
      <span className="stat__label">{stat.label}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      {/* Stats strip */}
      <section className="stats">
        <div className="container stats__inner">
          {STATS.map((stat, idx) => (
            <StatItem key={stat.label} stat={stat} delay={idx * 120} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section section--white">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Testimonials</span>
            <h2 className="section__title">Client Feedback &amp; Reviews</h2>
            <p className="section__subtitle">
              What our clients say about working with Roottoo Innovation.
            </p>
          </Reveal>

          <Reveal variant="right" className="testimonials__scroll">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="testimonial-card">
                <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill={i < t.rating ? "none" : "none"}
                    >
                      <path
                        d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.3l1.6-6.8L2.2 8.9l6.9-.6z"
                        fill={i < t.rating ? "#fbbf24" : "#e5e7eb"}
                      />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <span className="testimonial-card__name">{t.name}</span>
                    <span className="testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Banner strip */}
      <section className="banner">
        <div className="banner__overlay" />
        <div className="container banner__inner">
          <Reveal className="banner__content">
            <h2 className="banner__title">
              Get in Touch Today to Stay Tax-Compliant and Stress-Free
            </h2>
            <p className="banner__text">
              Let our experts handle your compliance so you can focus on growing your business.
            </p>
            <a href="#contact" className="btn btn--primary btn--lg banner__cta">
              Contact Us
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
