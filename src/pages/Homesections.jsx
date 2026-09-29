import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import useScrollReveal from "../hooks/useScrollReveal";
import "./HomeSections.css";

const serviceCards = [
  {
    title: "Technology solutions",
    detail: "Web · Mobile · Managed IT",
    href: "/services/it-consulting",
    number: "02",
  },
  {
    title: "Accounting and tax",
    detail: "GST · ITR · Bookkeeping",
    href: "/services/accounting-bookkeeping",
    number: "03",
  },
  {
    title: "Payroll and HR",
    detail: "Payroll · Onboarding · Records",
    href: "/services/payroll-outsourcing",
    number: "04",
  },
];

const stages = [
  { label: "Sourced", width: "48%" },
  { label: "Screened", width: "66%" },
  { label: "Shortlisted", width: "82%" },
  { label: "Joined", width: "100%" },
];

const processSteps = [
  { number: "01", title: "Understand", detail: "We learn your goals, context, and what a good outcome looks like." },
  { number: "02", title: "Plan", detail: "Together, we shape the right scope, timeline, and team." },
  { number: "03", title: "Deliver", detail: "Our specialists put the plan into action and keep you informed." },
  { number: "04", title: "Improve", detail: "We review the results and adapt as your business changes." },
];

function HiringPipeline() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div className={`home-sections__pipeline ${isVisible ? "is-visible" : ""}`} ref={ref} aria-label="Hiring pipeline: sourced, screened, shortlisted, joined">
      <div className="home-sections__pipeline-head">
        <span>Talent pipeline</span>
        <span className="home-sections__pipeline-live"><i /> In progress</span>
      </div>
      <div className="home-sections__pipeline-steps">
        {stages.map((stage, index) => (
          <div className="home-sections__pipeline-step" key={stage.label}>
            <div className="home-sections__pipeline-label">
              <span>{stage.label}</span>
              <span>0{index + 1}</span>
            </div>
            <div className="home-sections__pipeline-track">
              <span style={{ "--pipeline-width": stage.width, "--pipeline-delay": `${index * 160}ms` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="home-sections__pipeline-foot">
        <span>Clear progress at every stage</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </div>
    </div>
  );
}

export default function HomeSections() {
  return (
    <>
      <section className="home-sections__services" aria-labelledby="home-services-title">
        <div className="container">
          <div className="home-sections__heading home-sections__heading--dark">
            <span className="home-sections__eyebrow">People. Technology. Progress.</span>
            <h2 id="home-services-title">The right support, all in one place.</h2>
            <p>Specialist teams and practical solutions, shaped around the way your business works.</p>
          </div>

          <article className="home-sections__feature">
            <div className="home-sections__feature-copy">
              <span className="home-sections__service-number">01 / PEOPLE</span>
              <h3>Staffing and recruitment</h3>
              <p>Find the people who move your business forward, with hands-on support from first brief to first day.</p>
              <div className="home-sections__tags">
                <span>Permanent</span><span>Contract</span><span>Bulk hiring</span>
              </div>
              <Link to="/services/staffing-recruitment" className="home-sections__text-link">
                Explore recruitment <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <HiringPipeline />
          </article>

          <div className="home-sections__service-grid">
            {serviceCards.map((service) => (
              <Link to={service.href} className="home-sections__service-card" key={service.title}>
                <span className="home-sections__service-number">{service.number} / SOLUTIONS</span>
                <span className="home-sections__service-title">{service.title}</span>
                <span className="home-sections__service-detail">{service.detail}</span>
                <span className="home-sections__service-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-sections__process" aria-labelledby="home-process-title">
        <div className="container">
          <div className="home-sections__process-intro">
            <span className="home-sections__eyebrow">A clear way forward</span>
            <h2 id="home-process-title">From first conversation to real progress.</h2>
          </div>
          <ol className="home-sections__steps">
            {processSteps.map((step) => (
              <li className="home-sections__step" key={step.number}>
                <span className="home-sections__step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-sections__closing" aria-labelledby="home-closing-title">
        <div className="container home-sections__closing-inner">
          <div>
            <span className="home-sections__eyebrow">Ready when you are</span>
            <h2 id="home-closing-title">Start a conversation.</h2>
            <p>Tell us where you want to go. We’ll help you work out the next step.</p>
          </div>
          <div className="home-sections__closing-actions">
            <Link to="/contact" className="home-sections__button home-sections__button--light">
              Start a conversation <span aria-hidden="true">↗</span>
            </Link>
            <a href={siteConfig.socials.whatsapp} className="home-sections__button home-sections__button--outline" target="_blank" rel="noreferrer">
              Chat on WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}import { useEffect, useRef, useState } from "react";
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
              <article key={t} className="hm-card">
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