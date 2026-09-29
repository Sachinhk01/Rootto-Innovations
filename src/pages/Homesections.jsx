import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./HomeSections.css";

const SMALL = [
  ["Technology solutions", "Web · Mobile · Managed IT", "Systems built around how your business actually runs."],
  ["Accounting and tax", "GST · ITR · Bookkeeping", "Accurate books and timely filings, explained plainly."],
  ["Payroll and HR", "Payroll · Onboarding · Records", "On-time payroll and everyday HR handled for you."],
];

const FUNNEL = ["Sourced", "Screened", "Shortlisted", "Joined"];

const STEPS = [
  ["Tell us what you need", "A short call or form. No lengthy paperwork."],
  ["We plan and start", "Clear scope, timeline and one point of contact."],
  ["You see progress", "Regular updates while we source, build or process."],
  ["We stay on", "Support continues after delivery."],
];

function useInView() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setSeen(true);
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setSeen(true), io.disconnect()),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export default function HomeSections() {
  const [ref, seen] = useInView();

  // cursor-following glow on the small cards
  const spot = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <>
      {/* ---------- services showcase ---------- */}
      <section className="hm-dark">
        <div className="hm-wrap">
          <h2 className="hm-h2">Everything your next stage needs, in one place</h2>

          <div className="hm-bento">
            <article ref={ref} className={`hm-lead ${seen ? "in" : ""}`}>
              <div>
                <h3>Staffing and recruitment</h3>
                <p className="hm-tags">Permanent · Contract · Bulk hiring</p>
                <p>Skilled professionals sourced and screened against your brief, so you interview fewer people and hire better.</p>
                <Link to="/services" className="hm-link">See all services</Link>
              </div>

              <figure aria-label="How a hiring search narrows down">
                {FUNNEL.map((s, i) => (
                  <div key={s} className="hm-bar" style={{ "--w": `${100 - i * 24}%`, "--d": `${i * 140}ms` }}>
                    <i />
                    <span>{s}</span>
                  </div>
                ))}
                <figcaption>How a search narrows</figcaption>
              </figure>
            </article>

            {SMALL.map(([t, tags, d]) => (
              <article key={t} className="hm-card" onMouseMove={spot}>
                <h3>{t}</h3>
                <p className="hm-tags">{tags}</p>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- how it works ---------- */}
      <section className="hm-light">
        <div className="hm-wrap">
          <h2 className="hm-h2 dark">Easy to start, easy to keep going</h2>
          <ol className="hm-steps">
            {STEPS.map(([t, d], i) => (
              <li key={t}>
                <span>{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- closing CTA ---------- */}
      <section className="hm-wrap hm-ctawrap">
        <div className="hm-cta">
          <div>
            <h2>Ready when you are</h2>
            <p>Reach us any time of day. We'll get back to you promptly.</p>
          </div>
          <div className="hm-btns">
            <Link to="/contact" className="hm-btn solid">Start a conversation</Link>
            <a href="https://wa.me/918147394287" target="_blank" rel="noopener noreferrer" className="hm-btn line">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}