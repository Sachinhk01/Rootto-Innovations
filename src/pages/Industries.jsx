import { Link } from "react-router-dom";
import "./Industries.css";

const INDUSTRIES = [
  {
    name: "Information technology",
    line: "Developers, testers, analysts and IT project teams, hired fast and screened for real skills.",
    tags: ["Software engineering", "QA and testing", "Data and analytics", "IT support"],
    size: "lead",
  },
  {
    name: "Manufacturing and engineering",
    line: "Skilled and supervisory talent for plants and production teams.",
    tags: ["Production", "Quality", "Maintenance"],
  },
  {
    name: "Healthcare and life sciences",
    line: "Administrative and support teams for clinics, labs and healthcare providers.",
    tags: ["Operations", "Admin", "Support"],
  },
  {
    name: "Banking, finance and insurance",
    line: "Finance, operations and compliance professionals, plus payroll and accounting support.",
    tags: ["Accounts", "Compliance", "Operations", "Payroll"],
    size: "wide",
  },
  { name: "Retail and e-commerce", line: "Store, sales and back-office teams.", tags: ["Sales", "Operations"] },
  { name: "Education and training", line: "Trainers, coordinators and admin staff.", tags: ["Training", "Admin"] },
  { name: "Logistics and supply chain", line: "Coordination and operations talent.", tags: ["Operations", "Planning"] },
  { name: "Startups and SMEs", line: "Flexible hiring, HR and accounts without the overhead.", tags: ["Hiring", "HR", "Accounts"] },
];

const APPROACH = [
  ["Sector-aware screening", "We assess candidates against what your industry actually needs, not a generic checklist."],
  ["One partner, many functions", "Hiring, payroll, HR and compliance can sit with the same team."],
  ["Flexible engagement", "Permanent, contract or project-based, whichever fits the work."],
];

export default function Industries() {
  const names = INDUSTRIES.map((i) => i.name);

  return (
    <main className="in">
      <section className="in-hero">
        <div className="in-wrap">
          <h1>Different industries. The same standard of delivery.</h1>
          <p>We support businesses across sectors with talent, technology and back-office services.</p>
        </div>

        <div className="in-marquee" aria-hidden="true">
          <div>
            {[...names, ...names].map((n, i) => <span key={i}>{n}</span>)}
          </div>
        </div>
      </section>

      <section className="in-wrap in-grid-sec">
        <h2 className="in-h2">Where we work</h2>
        <div className="in-grid">
          {INDUSTRIES.map((x, i) => (
            <article key={x.name} className={`in-tile ${x.size || ""} t${i % 4}`}>
              <h3>{x.name}</h3>
              <p>{x.line}</p>
              <ul>
                {x.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="in-note">
          Don't see your industry? <Link to="/contact">Tell us what you need.</Link> We work with businesses of all kinds.
        </p>
      </section>

      <section className="in-wrap in-approach">
        <h2 className="in-h2">What stays the same in every sector</h2>
        <div>
          {APPROACH.map(([t, d]) => (
            <div key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="in-wrap">
        <div className="in-cta">
          <h2>Hiring or outsourcing in your sector?</h2>
          <div>
            <Link to="/contact" className="in-btn solid">Send an enquiry</Link>
            <a href="https://wa.me/918147394287" target="_blank" rel="noopener noreferrer" className="in-btn line">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}