import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import { services } from "../data/services";
import Reveal from "../components/Reveal";

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

const groups = siteConfig.serviceDropdownGroups;

export default function Services() {
  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <h1 className="page-header__title">Solutions designed around your growth.</h1>
            <p className="page-header__subtitle">
              Eight service groups covering the people, technology, finance, and operational
              support your business needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8 group sections */}
      {groups.map((group, groupIdx) => {
        const groupServices = services.filter((s) => s.group === group.label);
        return (
          <section
            key={group.label}
            className={groupIdx % 2 === 0 ? "section section--white" : "section section--offwhite"}
          >
            <div className="container">
              <Reveal className="section__head section__head--left">
                <span className="eyebrow">{group.label}</span>
                <h2 className="section__title">{group.label}</h2>
              </Reveal>
              <div className="card-grid">
                {groupServices.map((service, idx) => (
                  <Reveal key={service.slug} delay={idx * 100} className="card">
                    <h3 className="card__title">{service.title}</h3>
                    <p className="card__desc">{service.value}</p>
                    <Link to={`/services/${service.slug}`} className="card__link">
                      Learn More <ArrowIcon />
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Business support by stage */}
      <section className="section section--navy">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center eyebrow--light">Business support by stage</span>
            <h2 className="section__title">Support for every stage of your business.</h2>
          </Reveal>
          <div className="card-grid">
            {siteConfig.businessSupportByStage.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 90} className="card" >
                <h3 className="card__title" style={{ color: "#fff" }}>{item.title}</h3>
                <p className="card__desc" style={{ color: "rgba(255,255,255,.7)" }}>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section section--offwhite">
        <div className="container">
          <Reveal className="section__head">
            <span className="eyebrow eyebrow--center">Service packages</span>
            <h2 className="section__title">Bundled solutions for common needs.</h2>
          </Reveal>
          <div className="card-grid">
            {siteConfig.packages.map((pkg, idx) => (
              <Reveal key={pkg.title} delay={idx * 90} className="package-card">
                <h3 className="package-card__title">{pkg.title}</h3>
                <p className="package-card__sub">{pkg.sub}</p>
                <ul className="package-card__list">
                  {pkg.items.map((item) => (
                    <li key={item}>
                      <span className="check-list__check" aria-hidden="true" style={{ width: "18px", height: "18px" }}>
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="card__link" style={{ marginTop: "16px" }}>
                  Enquire about this package <ArrowIcon />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container cta-banner__inner">
          <Reveal>
            <h2 className="cta-banner__title">Not sure which service you need?</h2>
            <p className="cta-banner__text">Let's discuss your goals and create a solution that works for you.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">Request a Consultation</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
