import { useCallback, useEffect, useRef, useState } from "react";
import "./Hero.css";

const SLIDES = [
  {
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Roottoo Innovation — RI ACC & TAX",
    headline: "We Value Your Demand",
    subhead:
      "Trusted accounting and tax consultancy with 7+ years of expertise executing premium compliance solutions.",
    ctas: [
      { label: "Call Now", href: "tel:+918147394287", variant: "primary" },
      { label: "Email Corporate HQ", href: "mailto:hr@roottooinnovation.com", variant: "outline" },
    ],
  },
  {
    image:
      "https://www.tohme-accounting.com/wp-content/uploads/2026/02/tax-filing-preparation-services-hero.jpg",
    eyebrow: "GST Services",
    headline: "Registrations & Returns Made Simple",
    subhead: "24-Hour turnaround on GST registration and filing.",
    ctas: [{ label: "Get Free Consultation", href: "#contact", variant: "primary" }],
  },
  {
    image:
      "https://taxspecialty.com/wp-content/uploads/2026/02/A-professional-office-environment-featuring-a-cluttered-desk-filled-with-IRS-documents-a-1024x585.png",
    eyebrow: "Income Tax Filing",
    headline: "Fast, Accurate, and Hassle-Free Tax Filing",
    subhead: "For salaried individuals, businesses, and freelancers.",
    ctas: [{ label: "Get Free Consultation", href: "#contact", variant: "primary" }],
  },
  {
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920",
    eyebrow: "Business Compliance",
    headline: "Stay Compliant, Operate with Confidence",
    subhead:
      "FSSAI, MSME/Udyam, and Labour License services to keep your business fully compliant.",
    ctas: [{ label: "Get Free Consultation", href: "#contact", variant: "primary" }],
  },
];

const AUTO_INTERVAL = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = (idx) => setCurrent(idx);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTO_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [next, paused, current]);

  return (
    <section
      id="home"
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured services"
    >
      <div className="hero__track">
        {SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`hero__slide ${idx === current ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={idx !== current}
          >
            <div className="hero__overlay" />
            <div className="container hero__content">
              <span className="hero__eyebrow">{slide.eyebrow}</span>
              <h1 className="hero__headline">{slide.headline}</h1>
              <p className="hero__subhead">{slide.subhead}</p>
              <div className="hero__ctas">
                {slide.ctas.map((cta) => (
                  <a
                    key={cta.label}
                    href={cta.href}
                    className={`btn btn--lg ${
                      cta.variant === "primary" ? "btn--primary" : "btn--outline"
                    }`}
                  >
                    {cta.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dots */}
      <div className="hero__dots" role="tablist" aria-label="Slide selector">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? "is-active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={idx === current}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}
