import Reveal from "../ui/Reveal";
import "./WhyChooseUs.css";

const FEATURES = [
  {
    title: "Expert Professionals",
    desc: "Experienced tax professionals ensuring compliance.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 21v-1a8 8 0 0116 0v1" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    highlighted: true,
  },
  {
    title: "Timely Filings",
    desc: "Timely filings and updates on tax laws.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Personalized Support",
    desc: "Personalized support for businesses of all sizes.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 11c0 5.5-7 10-7 10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "One-Roof Compliance",
    desc: "Hassle-free statutory compliance under one roof.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M5 21V10l7-5 7 5v11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section section--offwhite">
      <div className="container why">
        <Reveal variant="left" className="why__intro">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="why__title">Your Vision, Our Expertise.</h2>
          <p>
            We combine deep regulatory knowledge with a practical, client-first approach —
            delivering compliance solutions that are accurate, timely, and tailored to your
            business needs.
          </p>
          <a href="#contact" className="btn btn--primary btn--lg why__cta">
            Get Free Consultation
          </a>
        </Reveal>

        <div className="why__grid">
          {FEATURES.map((feature, idx) => (
            <Reveal
              key={feature.title}
              delay={idx * 120}
              className={`why-card ${feature.highlighted ? "why-card--filled" : ""}`}
            >
              <div className="why-card__icon">{feature.icon}</div>
              <h3 className="why-card__title">{feature.title}</h3>
              <p className="why-card__desc">{feature.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
