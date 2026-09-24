import { useState } from "react";
import { siteConfig } from "../data/siteData";
import Reveal from "../components/Reveal";

const INITIAL_HIRE = {
  company: "",
  contactPerson: "",
  email: "",
  phone: "",
  role: "",
  positions: "",
  location: "",
  hiringType: "",
  details: "",
};

const INITIAL_RESUME = {
  name: "",
  email: "",
  phone: "",
  location: "",
  skills: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateHire(v) {
  const e = {};
  if (!v.company.trim()) e.company = "Required";
  if (!v.contactPerson.trim()) e.contactPerson = "Required";
  if (!v.email.trim() || !EMAIL_RE.test(v.email.trim())) e.email = "Valid email required";
  if (!v.phone.trim()) e.phone = "Required";
  if (!v.role.trim()) e.role = "Required";
  return e;
}

function validateResume(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Required";
  if (!v.email.trim() || !EMAIL_RE.test(v.email.trim())) e.email = "Valid email required";
  if (!v.phone.trim()) e.phone = "Required";
  return e;
}

export default function Careers() {
  const [hireForm, setHireForm] = useState(INITIAL_HIRE);
  const [hireErrors, setHireErrors] = useState({});
  const [hireSuccess, setHireSuccess] = useState(false);
  const [hireSubmitting, setHireSubmitting] = useState(false);

  const [resumeForm, setResumeForm] = useState(INITIAL_RESUME);
  const [resumeErrors, setResumeErrors] = useState({});
  const [resumeSuccess, setResumeSuccess] = useState(false);
  const [resumeSubmitting, setResumeSubmitting] = useState(false);

  const handleHireChange = (e) => {
    const { name, value } = e.target;
    setHireForm((v) => ({ ...v, [name]: value }));
  };

  const handleResumeChange = (e) => {
    const { name, value } = e.target;
    setResumeForm((v) => ({ ...v, [name]: value }));
  };

  const submitHire = async (e) => {
    e.preventDefault();
    const errors = validateHire(hireForm);
    setHireErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setHireSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setHireSubmitting(false);
    setHireSuccess(true);
    setHireForm(INITIAL_HIRE);
  };

  const submitResume = async (e) => {
    e.preventDefault();
    const errors = validateResume(resumeForm);
    setResumeErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setResumeSubmitting(true);
    await new Promise((r) => setTimeout(r, 1400));
    setResumeSubmitting(false);
    setResumeSuccess(true);
    setResumeForm(INITIAL_RESUME);
  };

  return (
    <div className="page-fade">
      <section className="page-header">
        <div className="container">
          <Reveal>
            <h1 className="page-header__title">Careers</h1>
            <p className="page-header__subtitle">
              Whether you're hiring or looking for your next opportunity, we're here to help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="careers-split">
            {/* Employer form */}
            <Reveal variant="left" className="careers-form-section">
              <h3>{siteConfig.employerJobSeeker.employer.title}</h3>
              <p>{siteConfig.employerJobSeeker.employer.text}</p>

              {hireSuccess ? (
                <div className="form__success" role="alert">
                  <div className="form__success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" fill="var(--green-100)" />
                      <path d="M7 12l3.5 3.5L17 8" stroke="var(--green-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Thank you! Our team will contact you soon.</h3>
                  <button className="btn btn--outline-dark" onClick={() => setHireSuccess(false)}>
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form className="form" onSubmit={submitHire} noValidate>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="hire-company">Company name</label>
                      <input id="hire-company" name="company" type="text" value={hireForm.company} onChange={handleHireChange} placeholder="Company name" className={hireErrors.company ? "is-error" : ""} />
                      {hireErrors.company && <span className="form__error">{hireErrors.company}</span>}
                    </div>
                    <div className="form__field">
                      <label htmlFor="hire-contact">Contact person</label>
                      <input id="hire-contact" name="contactPerson" type="text" value={hireForm.contactPerson} onChange={handleHireChange} placeholder="Contact person" className={hireErrors.contactPerson ? "is-error" : ""} />
                      {hireErrors.contactPerson && <span className="form__error">{hireErrors.contactPerson}</span>}
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="hire-email">Email</label>
                      <input id="hire-email" name="email" type="email" value={hireForm.email} onChange={handleHireChange} placeholder="you@example.com" className={hireErrors.email ? "is-error" : ""} />
                      {hireErrors.email && <span className="form__error">{hireErrors.email}</span>}
                    </div>
                    <div className="form__field">
                      <label htmlFor="hire-phone">Phone</label>
                      <input id="hire-phone" name="phone" type="tel" value={hireForm.phone} onChange={handleHireChange} placeholder={siteConfig.contact.phone} className={hireErrors.phone ? "is-error" : ""} />
                      {hireErrors.phone && <span className="form__error">{hireErrors.phone}</span>}
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="hire-role">Role</label>
                      <input id="hire-role" name="role" type="text" value={hireForm.role} onChange={handleHireChange} placeholder="Role to fill" className={hireErrors.role ? "is-error" : ""} />
                      {hireErrors.role && <span className="form__error">{hireErrors.role}</span>}
                    </div>
                    <div className="form__field">
                      <label htmlFor="hire-positions">Number of positions</label>
                      <input id="hire-positions" name="positions" type="number" value={hireForm.positions} onChange={handleHireChange} placeholder="1" />
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="hire-location">Location</label>
                      <input id="hire-location" name="location" type="text" value={hireForm.location} onChange={handleHireChange} placeholder="Job location" />
                    </div>
                    <div className="form__field">
                      <label htmlFor="hire-type">Hiring type</label>
                      <select id="hire-type" name="hiringType" value={hireForm.hiringType} onChange={handleHireChange}>
                        <option value="">Select type</option>
                        <option value="permanent">Permanent</option>
                        <option value="contract">Contract</option>
                        <option value="contract-to-hire">Contract-to-Hire</option>
                        <option value="bulk">Bulk</option>
                      </select>
                    </div>
                  </div>
                  <div className="form__field">
                    <label htmlFor="hire-details">Details</label>
                    <textarea id="hire-details" name="details" rows="4" value={hireForm.details} onChange={handleHireChange} placeholder="Additional details about the role..." />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg form__submit" disabled={hireSubmitting}>
                    {hireSubmitting ? (
                      <><span className="form__spinner" aria-hidden="true" /> Sending...</>
                    ) : (
                      "Submit a Hiring Requirement"
                    )}
                  </button>
                </form>
              )}
            </Reveal>

            {/* Job seeker form */}
            <Reveal variant="right" delay={120} className="careers-form-section">
              <h3>{siteConfig.employerJobSeeker.jobSeeker.title}</h3>
              <p>{siteConfig.employerJobSeeker.jobSeeker.text}</p>

              {resumeSuccess ? (
                <div className="form__success" role="alert">
                  <div className="form__success-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="11" fill="var(--green-100)" />
                      <path d="M7 12l3.5 3.5L17 8" stroke="var(--green-700)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>Thank you! Our team will contact you soon.</h3>
                  <button className="btn btn--outline-dark" onClick={() => setResumeSuccess(false)}>
                    Submit another resume
                  </button>
                </div>
              ) : (
                <form className="form" onSubmit={submitResume} noValidate>
                  <div className="form__field">
                    <label htmlFor="resume-name">Full name</label>
                    <input id="resume-name" name="name" type="text" value={resumeForm.name} onChange={handleResumeChange} placeholder="Your full name" className={resumeErrors.name ? "is-error" : ""} />
                    {resumeErrors.name && <span className="form__error">{resumeErrors.name}</span>}
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="resume-email">Email</label>
                      <input id="resume-email" name="email" type="email" value={resumeForm.email} onChange={handleResumeChange} placeholder="you@example.com" className={resumeErrors.email ? "is-error" : ""} />
                      {resumeErrors.email && <span className="form__error">{resumeErrors.email}</span>}
                    </div>
                    <div className="form__field">
                      <label htmlFor="resume-phone">Phone</label>
                      <input id="resume-phone" name="phone" type="tel" value={resumeForm.phone} onChange={handleResumeChange} placeholder={siteConfig.contact.phone} className={resumeErrors.phone ? "is-error" : ""} />
                      {resumeErrors.phone && <span className="form__error">{resumeErrors.phone}</span>}
                    </div>
                  </div>
                  <div className="form__row">
                    <div className="form__field">
                      <label htmlFor="resume-location">Current location</label>
                      <input id="resume-location" name="location" type="text" value={resumeForm.location} onChange={handleResumeChange} placeholder="City" />
                    </div>
                    <div className="form__field">
                      <label htmlFor="resume-skills">Skills / Role</label>
                      <input id="resume-skills" name="skills" type="text" value={resumeForm.skills} onChange={handleResumeChange} placeholder="e.g. Java Developer" />
                    </div>
                  </div>
                  <div className="form__field">
                    <label htmlFor="resume-upload">Resume (PDF/DOC)</label>
                    <input id="resume-upload" name="resume" type="file" accept=".pdf,.doc,.docx" style={{ padding: "10px 14px", border: "1.5px solid var(--neutral-300)", borderRadius: "var(--radius-sm)", background: "#fff" }} />
                  </div>
                  <div className="form__field">
                    <label htmlFor="resume-message">Message</label>
                    <textarea id="resume-message" name="message" rows="3" value={resumeForm.message} onChange={handleResumeChange} placeholder="Tell us about your experience..." />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg form__submit" disabled={resumeSubmitting}>
                    {resumeSubmitting ? (
                      <><span className="form__spinner" aria-hidden="true" /> Sending...</>
                    ) : (
                      "Submit Your Resume"
                    )}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
