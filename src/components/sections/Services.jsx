import Reveal from "../ui/Reveal";
import "./Services.css";

const SERVICES = [
  {
    title: "GST Services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16v6H4zM4 14h16v6H4z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8" cy="7" r="1.3" fill="currentColor" />
        <circle cx="8" cy="17" r="1.3" fill="currentColor" />
      </svg>
    ),
    items: [
      "GST Registration",
      "Monthly/Quarterly GST Return Filing",
      "GST Reconciliation & Compliance",
      "24-Hour SLA Turnaround",
    ],
  },
  {
    title: "Income Tax Filing (ITR)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 2h9l5 5v15H6z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 14h6M9 18h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
    items: [
      "Filing for Salaried Individuals",
      "Business Tax Structuring",
      "Freelancer Tax Advisory",
      "Maximum Legal Refund Optimization",
    ],
  },
  {
    title: "FSSAI Services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C8 7 6 10 6 14a6 6 0 0012 0c0-4-2-7-6-11z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="14" r="2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    items: [
      "New FSSAI Registration",
      "License Renewal Management",
      "Compliance Audits for Food Businesses",
      "Document & Verification Support",
    ],
  },
  {
    title: "MSME / Udyam Registration",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 21h18M5 21V10l7-5 7 5v11" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
    items: [
      "Udyam Registration Processing",
      "Subsidy & Scheme Advisory",
      "Zero-Paperwork Digital Processing",
      "Enterprise Classification Support",
    ],
  },
  {
    title: "Labour License Services",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M14 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M5 21v-1a5 5 0 0110 0v1M16 11l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    items: [
      "Contract Labour Licensing",
      "Labour Law Compliance Mapping",
      "Organizational Policy Documentation Support",
      "Statutory Compliance Advisory",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <Reveal className="section__head services__head">
          <span className="eyebrow eyebrow--center" style={{ color: "var(--orange-300)" }}>
            Our Services
          </span>
          <h2 className="section__title services__title">
            Comprehensive Tax &amp; Compliance Services
          </h2>
          <p className="section__subtitle services__subtitle">
            Empowering Business Owners, Freelancers, and Salaried Professionals with Expert
            Compliance Solutions.
          </p>
        </Reveal>

        <div className="services__grid">
          {SERVICES.map((service, idx) => (
            <Reveal
              key={service.title}
              delay={idx * 110}
              className="service-card"
            >
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <ul className="service-card__list">
                {service.items.map((item) => (
                  <li key={item} className="service-card__item">
                    <span className="service-card__check" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5 9-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="service-card__link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
