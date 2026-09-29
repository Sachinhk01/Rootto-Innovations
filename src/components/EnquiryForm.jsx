import { useState } from "react";
import emailjs from "@emailjs/browser";
import { siteConfig } from "../data/siteData";

const WHATSAPP_NUMBER = "918147394287";
const INITIAL_FORM = { name: "", email: "", phone: "", service: "", message: "" };
const SERVICES = [
  "Staffing & Recruitment",
  "Workforce Consulting",
  "Payroll Outsourcing",
  "HR Operations",
  "Accounting & Taxation",
  "Compliance",
  "Managed Outsourcing",
  "Technical Training",
  "Co-working Space",
  "Other",
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Enter a valid email.";
  if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim())) errors.phone = "Enter a valid phone number.";
  if (!values.service) errors.service = "Please select a service.";
  if (values.message.trim().length < 10) errors.message = "Please tell us a little more (min 10 characters).";
  return errors;
}

export default function EnquiryForm({ defaultService = "" }) {
  const [values, setValues] = useState({ ...INITIAL_FORM, service: defaultService });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");
  const [waLink, setWaLink] = useState("");

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
    setTouched({ name: true, email: true, phone: true, service: true, message: true });

    if (Object.keys(validationErrors).length > 0) return;

    const text =
      `*New Enquiry - Roottoo Innovation*\n\n` +
      `*Name:* ${values.name}\n` +
      `*Email:* ${values.email}\n` +
      `*Phone:* ${values.phone}\n` +
      `*Service:* ${values.service}\n\n` +
      `*Message:*\n${values.message}`;
    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    setWaLink(link);
    setStatus("sending");
    window.open(link, "_blank", "noopener,noreferrer");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          service: values.service,
          message: values.message,
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );
      setStatus("done");
      setValues({ ...INITIAL_FORM, service: defaultService });
      setTouched({});
    } catch {
      setStatus("error");
    }
  };

  const fieldError = (name) => (touched[name] && errors[name] ? errors[name] : "");

  if (status === "done") {
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
          <p>If WhatsApp didn't open, <a href={waLink} target="_blank" rel="noopener noreferrer">send your enquiry here</a>. For urgent matters, call {siteConfig.contact.phone}.</p>
          <button className="btn btn--outline-dark" onClick={() => setStatus("idle")}>
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
            className={fieldError("service") ? "is-error" : ""}
            aria-invalid={!!fieldError("service")}
          >
            <option value="">Select a service</option>
            {SERVICES.map((svc) => (
              <option key={svc} value={svc}>{svc}</option>
            ))}
          </select>
          {fieldError("service") && <span className="form__error">{fieldError("service")}</span>}
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

        <button type="submit" className="btn btn--primary btn--lg form__submit" disabled={status === "sending"}>
          {status === "sending" ? (
            <>
              <span className="form__spinner" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Enquiry"
          )}
        </button>
        {status === "error" && (
          <div className="form__server-error" role="alert">
            Email couldn't be sent, but your WhatsApp message is ready.{" "}
            <a href={waLink} target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
          </div>
        )}
        <p className="form__hint">
          Prefer to talk? Call{" "}
          <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a> or email{" "}
          <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
        </p>
      </form>
    </div>
  );
}
