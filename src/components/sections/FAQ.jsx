import { useState } from "react";
import Reveal from "../ui/Reveal";
import "./FAQ.css";

const FAQS = [
  {
    q: "Why is it important to stay tax-compliant?",
    a: "Staying tax-compliant avoids penalties, legal notices, and reputational damage. It keeps your business eligible for loans, subsidies, and government schemes — and ensures smooth, uninterrupted operations.",
  },
  {
    q: "What happens if I miss my GST or Income Tax filing deadline?",
    a: "Missing deadlines attracts late fees, interest on tax dues, and potential scrutiny from the department. The sooner you file, the lower the impact. Our team can help you regularize any delayed filings quickly.",
  },
  {
    q: "Can you help if I receive a notice from the tax department?",
    a: "Yes. We assist with interpreting the notice, gathering required documents, preparing a response, and representing your case — making the process as stress-free as possible.",
  },
  {
    q: "How can I switch to Roottoo Innovation from my existing tax consultant?",
    a: "It's simple. Reach out for a free consultation, share your previous filings and credentials, and we handle the transition seamlessly — with no disruption to your compliance calendar.",
  },
  {
    q: "How do I get started?",
    a: "Just click 'Get Free Consultation' or call us at +91 8147394287. We'll assess your needs, recommend the right services, and onboard you within 24 hours.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <section className="section section--offwhite">
      <div className="container faq">
        <Reveal className="section__head">
          <span className="eyebrow eyebrow--center">FAQ</span>
          <h2 className="section__title">Frequently Asked Questions (FAQs)</h2>
          <p className="section__subtitle">
            Answers to common questions about our accounting and compliance services.
          </p>
        </Reveal>

        <div className="faq__list">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal
                key={item.q}
                delay={idx * 90}
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                as="div"
              >
                <button
                  className="faq-item__q"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                >
                  <span className="faq-item__q-text">{item.q}</span>
                  <span className={`faq-item__icon ${isOpen ? "is-open" : ""}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className="faq-item__panel"
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  style={{
                    maxHeight: isOpen ? "300px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="faq-item__a">
                    <p>{item.a}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
