import { useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const CATS = ["All", "Technology", "Talent", "Finance & compliance", "Workspace"];

const SERVICES = [
  {
    name: "IT services and consulting", cat: "Technology",
    summary: "Practical technology advice and delivery, so your systems support the business instead of slowing it down.",
    gets: ["Technology assessment and roadmap", "Solution design and implementation", "Ongoing support and improvement"],
    fit: "Growing businesses modernising their tools and processes",
  },
  {
    name: "Technical training", cat: "Technology",
    summary: "Hands-on training that gets teams and new hires productive on the tools they'll actually use.",
    gets: ["Role-based training programmes", "Practical, project-style learning", "Progress checks for managers"],
    fit: "Teams onboarding freshers or adopting new technology",
  },
  {
    name: "Managed business solutions", cat: "Technology",
    summary: "We run defined business functions for you, with clear ownership and regular reporting.",
    gets: ["Dedicated delivery coordination", "Agreed service levels and reporting", "Scale up or down as needed"],
    fit: "Companies that want to focus on core work",
  },
  {
    name: "Staffing and recruitment", cat: "Talent",
    summary: "Skilled professionals sourced, screened and presented against your brief. Permanent or contract.",
    gets: ["Structured sourcing and screening", "Shortlists matched to your requirement", "Support through offer and joining"],
    fit: "Teams hiring across technology and business roles",
  },
  {
    name: "Workforce consulting", cat: "Talent",
    summary: "Advice on team structure, hiring plans and capacity, so you hire for what the business needs next.",
    gets: ["Workforce planning support", "Role and skills mapping", "Hiring model recommendations"],
    fit: "Leaders planning growth or restructuring",
  },
  {
    name: "HR operations", cat: "Talent",
    summary: "The day-to-day HR work handled consistently, from onboarding to records and policies.",
    gets: ["Onboarding and documentation", "Employee records and policy support", "Process set-up and upkeep"],
    fit: "Small and mid-sized teams without a full HR department",
  },
  {
    name: "Accounting and taxation", cat: "Finance & compliance",
    summary: "Accurate books and timely tax filings, explained in plain language.",
    gets: ["Bookkeeping and reporting", "Tax planning and filing", "Clear, regular updates"],
    fit: "Businesses that want their finances in order",
  },
  {
    name: "Payroll outsourcing", cat: "Finance & compliance",
    summary: "On-time, accurate payroll with statutory deductions handled for you.",
    gets: ["Monthly payroll processing", "Statutory deductions and filings", "Payslips and employee queries"],
    fit: "Companies tired of running payroll in-house",
  },
  {
    name: "Compliance support", cat: "Finance & compliance",
    summary: "Stay on top of the filings and deadlines that apply to your business.",
    gets: ["Compliance calendar and reminders", "Filing preparation and support", "Documentation kept ready"],
    fit: "Businesses that can't afford to miss a deadline",
  },
  {
    name: "Co-working space", cat: "Workspace",
    summary: "Flexible workspace in Bengaluru for teams and independent professionals.",
    gets: ["Flexible seating options", "Meeting and collaboration space", "A professional business address"],
    fit: "Startups and small teams who don't want a long lease",
  },
];

export default function Services() {
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState(SERVICES[0].name);

  const list = SERVICES.filter((s) => cat === "All" || s.cat === cat);
  const active = list.find((s) => s.name === sel) || list[0];
  const wa = `https://wa.me/918147394287?text=${encodeURIComponent(
    `Hi Roottoo, I'd like to know more about ${active.name}.`
  )}`;

  return (
    <main className="sv">
      <section className="sv-hero">
        <div className="sv-wrap">
          <h1>One partner for technology, talent and the back office.</h1>
          <p>Pick a service to see what's included and who it suits.</p>
          <div className="sv-chips" role="group" aria-label="Filter services">
            {CATS.map((c) => (
              <button
                key={c}
                type="button"
                className={cat === c ? "on" : ""}
                aria-pressed={cat === c}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="sv-wrap sv-body">
        <ul className="sv-list">
          {list.map((s) => (
            <li key={s.name}>
              <button
                type="button"
                className={s.name === active.name ? "on" : ""}
                aria-current={s.name === active.name}
                onClick={() => setSel(s.name)}
              >
                <span>{s.name}</span>
                <small>{s.cat}</small>
              </button>
            </li>
          ))}
        </ul>

        <article key={active.name} className="sv-detail">
          <span className="sv-tag">{active.cat}</span>
          <h2>{active.name}</h2>
          <p className="sv-sum">{active.summary}</p>

          <h3>What you get</h3>
          <ul>
            {active.gets.map((g) => <li key={g}>{g}</li>)}
          </ul>

          <p className="sv-fit"><strong>Works well for:</strong> {active.fit}</p>

          <div className="sv-btns">
            <Link to="/contact" className="sv-btn solid">Send an enquiry</Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="sv-btn line">Ask on WhatsApp</a>
          </div>
        </article>
      </section>
    </main>
  );
}