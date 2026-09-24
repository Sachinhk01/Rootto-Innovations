import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";
import EnquiryForm from "../components/EnquiryForm";

export default function Contact() {
  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <span className="eyebrow eyebrow--light">Get in touch</span>
            <h1 className="page-header__title">Let's start something great.</h1>
            <p className="page-header__subtitle">
              Have a business requirement, hiring need, or operational challenge? Our team is ready
              to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="contact">
            {/* Form */}
            <Reveal variant="left">
              <EnquiryForm />
            </Reveal>

            {/* Details + map */}
            <Reveal variant="right" delay={120}>
              <div className="contact__info">
                <div className="contact__info-item">
                  <span className="contact__info-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact__info-label">Location</span>
                    <p className="contact__info-value">{siteConfig.contact.location}</p>
                  </div>
                </div>

                <div className="contact__info-item">
                  <span className="contact__info-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1L6.6 10.8z" fill="currentColor" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact__info-label">Phone</span>
                    <a href={siteConfig.contact.phoneHref} className="contact__info-value">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="contact__info-item">
                  <span className="contact__info-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </span>
                  <div>
                    <span className="contact__info-label">Email</span>
                    <a href={siteConfig.contact.emailHref} className="contact__info-value">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact__map" style={{ marginTop: "24px" }}>
                <iframe
                  title="Roottoo Innovation location map"
                  src={siteConfig.contact.mapEmbedUrl}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
