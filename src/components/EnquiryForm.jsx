import { useState } from "react";
import { siteConfig } from "../data/siteData";

const INITIAL_FORM = { name: "", email: "", phone: "", service: "", message: "" };

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

export default function EnquiryForm({ defaultService = "" }) {
  const [values, setValues] = useState({ ...INITIAL_FORM, service: defaultService });
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

  if (submissionSuccess) {
    return (
      <div className="form-wrap">
        <div className="form__success" role="alert">
          <div className="form__success-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" fill="var(--green-100)" />
              <path d="M7 12l3.5 3.5L17 8" stroke="var(--green-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3>Thank you! Our team will contact you soon.</h3>
          <p>For urgent matters, call {siteConfig.contact.phone}.</p>
          <button className="btn btn--outline-dark" onClick={() => setSubmissionSuccess(false)}>
            Send another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="form-wrap">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form__field">
          <label htmlFor="enquiry-name">Full name</label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Your full name"
            className={fieldError("name") ? "is-error" : ""}
            aria-invalid={!!fieldError("name")}
          />
          {fieldError("name") && <span className="form__error">{fieldError("name")}</span>}
        </div>

        <div className="form__row">
          <div className="form__field">
            <label htmlFor="enquiry-email">Work email</label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              className={fieldError("email") ? "is-error" : ""}
              aria-invalid={!!fieldError("email")}
            />
            {fieldError("email") && <span className="form__error">{fieldError("email")}</span>}
          </div>

          <div className="form__field">
            <label htmlFor="enquiry-phone">Phone number</label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={siteConfig.contact.phone}
              className={fieldError("phone") ? "is-error" : ""}
              aria-invalid={!!fieldError("phone")}
            />
            {fieldError("phone") && <span className="form__error">{fieldError("phone")}</span>}
          </div>
        </div>

        <div className="form__field">
          <label htmlFor="enquiry-service">Service</label>
          <select
            id="enquiry-service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="">Select a service</option>
            {siteConfig.contactFormServices.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
        </div>

        <div className="form__field">
          <label htmlFor="enquiry-message">Message</label>
          <textarea
            id="enquiry-message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us about your requirements..."
            className={fieldError("message") ? "is-error" : ""}
            aria-invalid={!!fieldError("message")}
          />
          {fieldError("message") && <span className="form__error">{fieldError("message")}</span>}
        </div>

        {submissionError && (
          <div className="form__server-error" role="alert">
            {submissionError}
          </div>
        )}

        <button type="submit" className="btn btn--primary btn--lg form__submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <span className="form__spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
        <p className="form__hint">
          Prefer to talk? Call{" "}
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a> or email{" "}
          <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
        </p>
      </form>
    </div>
  );
}
