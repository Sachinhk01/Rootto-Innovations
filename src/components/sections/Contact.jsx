import { useState } from "react";
import Reveal from "../ui/Reveal";
import "./Contact.css";

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 13) {
      errors.phone = "Please enter a valid phone number (10–13 digits).";
    }
  }
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (touched[name]) {
      setErrors(validate({ ...values, [name]: value }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, phone: true, message: true });
    setSubmissionError("");

    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // Simulate async submission (EmailJS / Formspree integration point).
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setSubmissionSuccess(true);
      setValues(INITIAL_FORM);
      setTouched({});
    } catch {
      setSubmissionError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldError = (name) => (touched[name] && errors[name] ? errors[name] : "");

  return (
    <section id="contact" className="section section--white">
      <div className="container">
        <Reveal className="section__head">
          <span className="eyebrow eyebrow--center">Contact Us</span>
          <h2 className="section__title">Get in Touch</h2>
          <p className="section__subtitle">
            Reach out for a free consultation. We&apos;ll respond within one business day.
          </p>
        </Reveal>

        <div className="contact">
          {/* Form */}
          <Reveal variant="left" className="contact__form-wrap">
            {submissionSuccess ? (
              <div className="contact__success" role="alert">
                <div className="contact__success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="11" fill="var(--green-100)" />
                    <path d="M7 12l3.5 3.5L17 8" stroke="var(--green-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Thank you! Your message has been sent.</h3>
                <p>Our team will get back to you shortly. For urgent matters, call +91 8147394287.</p>
                <button
                  className="btn btn--outline-dark"
                  onClick={() => setSubmissionSuccess(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    className={fieldError("name") ? "is-error" : ""}
                    aria-invalid={!!fieldError("name")}
                  />
                  {fieldError("name") && <span className="contact__error">{fieldError("name")}</span>}
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className={fieldError("email") ? "is-error" : ""}
                      aria-invalid={!!fieldError("email")}
                    />
                    {fieldError("email") && <span className="contact__error">{fieldError("email")}</span>}
                  </div>

                  <div className="contact__field">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 8147394287"
                      className={fieldError("phone") ? "is-error" : ""}
                      aria-invalid={!!fieldError("phone")}
                    />
                    {fieldError("phone") && <span className="contact__error">{fieldError("phone")}</span>}
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about your requirements..."
                    className={fieldError("message") ? "is-error" : ""}
                    aria-invalid={!!fieldError("message")}
                  />
                  {fieldError("message") && <span className="contact__error">{fieldError("message")}</span>}
                </div>

                {submissionError && (
                  <div className="contact__server-error" role="alert">
                    {submissionError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn btn--primary btn--lg contact__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact__spinner" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
                <p className="contact__hint">
                  Prefer to talk? Call{" "}
                  <a href="tel:+918147394287">+91 8147394287</a> or email{" "}
                  <a href="mailto:hr@roottooinnovation.com">hr@roottooinnovation.com</a>
                </p>
              </form>
            )}
          </Reveal>

          {/* Details + map */}
          <Reveal variant="right" delay={120} className="contact__details">
            <div className="contact__info">
              <div className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
                  </svg>
                </span>
                <div>
                  <span className="contact__info-label">Address</span>
                  <p className="contact__info-value">
                    02, Behind Karnataka Bank Road, Hurulichikanahalli, Bengaluru, Karnataka – 560088
                  </p>
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
                  <a href="tel:+918147394287" className="contact__info-value">+91 8147394287</a>
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
                  <a href="mailto:hr@roottooinnovation.com" className="contact__info-value">
                    hr@roottooinnovation.com
                  </a>
                </div>
              </div>

              <div className="contact__info-item">
                <span className="contact__info-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <span className="contact__info-label">Hours</span>
                  <p className="contact__info-value">10:00 AM – 5:00 PM (Mon–Sat, excluding public holidays)</p>
                </div>
              </div>
            </div>

            <div className="contact__map">
             <iframe
              title="Roottoo Innovation location map"
              src="https://www.google.com/maps?q=Roottoo+Innovation,13.1167707,77.4826961&output=embed"
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
  );
}
