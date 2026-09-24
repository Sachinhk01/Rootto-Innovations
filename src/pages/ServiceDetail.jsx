import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceBySlug, getRelatedServices } from "../data/services";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";
import FAQAccordion from "../components/FAQAccordion";
import EnquiryForm from "../components/EnquiryForm";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const related = getRelatedServices(service.relatedSlugs);
  const showDisclaimer = service.showDisclaimer;

  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--light">{service.group}</span>
            <h1 className="page-header__title">{service.headline}</h1>
            <p className="page-header__subtitle">{service.value}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "48px", alignItems: "start" }}>
            {/* Main content */}
            <div>
              <Reveal>
                <p className="service-detail__intro">{service.intro}</p>

                {showDisclaimer && (
                  <div className="disclaimer">
                    <p>{siteConfig.disclaimer}</p>
                  </div>
                )}

                <h3 className="service-detail__section-title">{service.offerTitle}</h3>
                <ul className="service-detail__list">
                  {service.offers.map((offer) => (
                    <li key={offer}>{offer}</li>
                  ))}
                </ul>

                {service.process && service.process.length > 0 && (
                  <>
                    <h3 className="service-detail__section-title">{service.processTitle}</h3>
                    <div className="steps">
                      {service.process.map((step, idx) => (
                        <div key={step} className="step" style={{ opacity: 1, transform: "none" }}>
                          <span className="step__num">{idx + 1}</span>
                          <div className="step__body">
                            <p className="step__desc" style={{ fontSize: ".95rem", paddingTop: "12px" }}>{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {service.benefits && service.benefits.length > 0 && (
                  <>
                    <h3 className="service-detail__section-title">Benefits</h3>
                    <div className="service-detail__benefits">
                      {service.benefits.map((benefit) => (
                        <span key={benefit} className="service-detail__benefit">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </>
                )}

                {service.suitedFor && service.suitedFor.length > 0 && (
                  <>
                    <h3 className="service-detail__section-title">Best suited for</h3>
                    <div className="service-detail__suited">
                      {service.suitedFor.map((item) => (
                        <span key={item} className="service-detail__suited-item">{item}</span>
                      ))}
                    </div>
                  </>
                )}

                <h3 className="service-detail__section-title">Common FAQs</h3>
                <FAQAccordion faqs={siteConfig.serviceFaqs} />
              </Reveal>
            </div>

            {/* Sidebar: CTA + Enquiry form */}
            <aside>
              <Reveal variant="right">
                <div style={{ background: "var(--bg-offwhite)", border: "1px solid var(--neutral-200)", borderRadius: "var(--radius-lg)", padding: "28px 24px", marginBottom: "24px" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "10px" }}>{service.cta}</h3>
                  <Link to={service.ctaLink} className="btn btn--primary" style={{ width: "100%", marginTop: "8px" }}>
                    {service.ctaButtonText} <ArrowIcon />
                  </Link>
                </div>
                <EnquiryForm defaultService={service.group} />
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* Related services */}
      {related.length > 0 && (
        <section className="section section--offwhite">
          <div className="container">
            <Reveal className="section__head">
              <span className="eyebrow eyebrow--center">Related services</span>
              <h2 className="section__title">You might also need</h2>
            </Reveal>
            <div className="service-detail__related">
              {related.map((rel, idx) => (
                <Reveal key={rel.slug} delay={idx * 100} className="service-detail__related-card">
                  <Link to={`/services/${rel.slug}`}>
                    <h4>{rel.title}</h4>
                    <p>{rel.value}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
