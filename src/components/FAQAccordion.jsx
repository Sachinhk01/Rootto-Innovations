import { useState } from "react";
import Reveal from "./Reveal";

export default function FAQAccordion({ faqs }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => setOpenIdx(openIdx === idx ? -1 : idx);

  return (
    <div className="faq-list">
      {faqs.map((item, idx) => {
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
  );
}
