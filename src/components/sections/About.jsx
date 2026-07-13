import Reveal from "../ui/Reveal";
import "./About.css";

export default function About() {
  return (
    <section id="who-we-are" className="section section--white">
      <div className="container about">
        <Reveal variant="left" className="about__media">
          <div className="about__image-wrap">
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Roottoo Innovation accounting team at work"
              loading="lazy"
            />
            <div className="about__badge">
              <span className="about__badge-num">7+</span>
              <span className="about__badge-label">Years of Experience</span>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={150} className="about__content">
          <span className="eyebrow">Who We Are</span>
          <h2 className="about__title">Your Trusted Partner in Financial Compliance</h2>
          <p>
            Roottoo Innovation is a multi-disciplinary group spanning Staffing, IT Managed
            Services, Payroll, and Accounting &amp; Taxation. This site represents the{" "}
            <strong>RI ACC &amp; TAX</strong> division — delivering high-precision financial
            compliance for business owners, salaried professionals, and freelancers across
            Bengaluru.
          </p>
          <p>
            With over seven years of hands-on experience, our team combines deep regulatory
            knowledge with a practical, client-first approach — so you stay compliant without
            the stress.
          </p>

          <div className="about__rating">
            <div className="about__stars" aria-label="4.7 out of 5 star rating">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.3l1.6-6.8L2.2 8.9l6.9-.6z"
                    fill="#fbbf24"
                  />
                </svg>
              ))}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.3 5.8 20.3l1.6-6.8L2.2 8.9l6.9-.6z"
                  fill="#fbbf24"
                  fillOpacity="0.7"
                />
              </svg>
            </div>
            <span className="about__rating-text">
              <strong>4.7</strong> Client Ratings
            </span>
          </div>

          <a href="#contact" className="btn btn--primary btn--lg about__cta">
            Get Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
