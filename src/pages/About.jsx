import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./About.css";

const FACTS = [
  ["Business", "IT Services & Consulting"],
  ["Headquarters", "Bengaluru, Karnataka"],
  ["Founded", "2021"],
];

const PILLARS = [
  {
    name: "Technology",
    line: "Systems that fit the way your business actually runs.",
    items: ["IT services and consulting", "Technical training", "Managed business solutions"],
  },
  {
    name: "Talent",
    line: "Skilled people, sourced and screened for your teams.",
    items: ["Staffing and recruitment", "Workforce consulting", "HR operations"],
  },
  {
    name: "Trust",
    line: "Books, payroll and compliance handled in the open.",
    items: ["Accounting and taxation", "Payroll outsourcing", "Compliance support"],
  },
];

const PRINCIPLES = [
  ["Business-focused", "Solutions designed around your outcomes, not just services."],
  ["Agile and scalable", "Flexible capacity that adapts as your requirements change."],
  ["Specialized talent", "Focused sourcing across technology and business functions."],
  ["Integrated services", "Technology, staffing, operations, accounting and compliance under one partner."],
  ["Execution discipline", "Structured screening, coordination and delivery governance."],
  ["Long-term partnership", "Built on transparency, responsiveness and sustainable relationships."],
];

const STEPS = [
  ["Understand", "We start with your goals, constraints and the people involved."],
  ["Plan", "A clear scope, timeline and owner for every piece of work."],
  ["Deliver", "Screened talent and working solutions, coordinated end to end."],
  ["Support", "We stay on after delivery to keep things running and improving."],
];

const HEADLINE = ["Empowering", "businesses", "with", "technology,", "talent", "&", "trust"];

export default function About() {
  const [open, setOpen] = useState(0);

  return (
    <main className="ab">
      {/* ---------- hero ---------- */}
      <section className="ab-hero">
        <div className="ab-wrap">
          <h1 aria-label={HEADLINE.join(" ")}>
            {HEADLINE.map((w, i) => (
              <Fragment key={i}>
                <span className="ab-w" style={{ "--i": i }} aria-hidden="true">
                  <span>{w}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p>
            Founded in 2021 and headquartered in Bengaluru, Roottoo Innovation is an IT services
            and business consulting company.
          </p>
        </div>
      </section>

      {/* ---------- facts ---------- */}
      <section className="ab-wrap ab-facts-wrap">
        <dl className="ab-facts">
          {FACTS.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ---------- story ---------- */}
      <section className="ab-wrap ab-story">
        <h2>We help businesses run better, hire better and grow steadily.</h2>
        <div>
          <p>We help businesses streamline operations, build skilled teams and adopt technology-driven solutions for sustainable growth.</p>
          <p>Our approach combines industry experience, practical execution and scalable delivery.</p>
          <p>We build long-term partnerships through technology, talent and trust.</p>
        </div>
      </section>

      {/* ---------- pillars ---------- */}
      <section className="ab-wrap ab-pillars-sec">
        <h2 className="ab-h2">Three things we do well</h2>
        <div className="ab-pillars" style={{ "--open": open }}>
          {PILLARS.map((p, i) => (
            <div
              key={p.name}
              role="button"
              tabIndex={0}
              className={`ab-pillar ${open === i ? "on" : ""}`}
              aria-expanded={open === i}
              onClick={() => setOpen(i)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), setOpen(i))}
              onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setOpen(i)}
            >
              <span className="ab-pname">{p.name}</span>
              <span className="ab-pline">{p.line}</span>
              <ul>
                {p.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- principles ---------- */}
      <section className="ab-band">
        <div className="ab-wrap">
          <h2 className="ab-h2">Built around outcomes, not just services</h2>
          <div className="ab-principles">
            {PRINCIPLES.map(([t, d]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- process ---------- */}
      <section className="ab-wrap ab-process">
        <h2 className="ab-h2">How we deliver</h2>
        <ol>
          {STEPS.map(([t, d], i) => (
            <li key={t}>
              <span className="ab-n">{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="ab-wrap">
        <div className="ab-cta">
          <div>
            <h2>Have a requirement in mind?</h2>
            <p>Tell us what you need. We're reachable any time of day.</p>
          </div>
          <div className="ab-cta-btns">
            <Link to="/contact" className="ab-btn solid">Send an enquiry</Link>
            <a
              href="https://wa.me/918147394287"
              target="_blank"
              rel="noopener noreferrer"
              className="ab-btn line"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}