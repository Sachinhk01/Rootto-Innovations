import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import { services } from "../data/services";

/* ── Extra words people may type for each service ───────────── */
const serviceWords = {
  "staffing-recruitment": ["recruit", "recruitment", "hire", "hiring", "staffing", "talent", "candidate", "rpo", "executive search", "bulk hiring", "contract staffing"],
  "workforce-consulting": ["workforce", "manpower", "team planning"],
  "it-consulting": ["it consulting", "it consultant", "technology consulting", "it strategy"],
  "web-mobile-development": ["website", "web development", "app development", "mobile app", "web app", "develop", "software development"],
  "managed-it-services": ["managed it", "it support", "it services", "it infrastructure", "helpdesk"],
  "business-automation": ["automation", "automate", "workflow", "crm"],
  "accounting-bookkeeping": ["accounting", "bookkeeping", "books", "accounts", "reconciliation"],
  "gst-tax-support": ["gst", "tax", "itr", "tds", "income tax", "filing"],
  "payroll-outsourcing": ["payroll", "salary", "salaries", "payslip"],
  "hr-operations": ["hr", "human resource", "onboarding", "attendance", "leave"],
  "statutory-compliance": ["compliance", "statutory", "labour", "labor", "pf", "esi", "licence", "license"],
  "business-registration-setup": ["registration", "register", "incorporate", "incorporation", "company setup", "business setup", "startup", "start a company"],
  "back-office-outsourcing": ["back office", "back-office", "data entry", "data processing", "outsource", "outsourcing"],
  "customer-sales-support": ["customer support", "sales support", "customer service", "call center"],
  "training-development": ["training", "upskill", "skill development", "course"],
  "business-consulting": ["business consulting", "consultant", "consulting", "advice", "advisory"],
};

/* ── Simple keyword matching ────────────────────────────────── */
function has(text, key) {
  if (key.length <= 3) return new RegExp(`\\b${key}\\b`).test(text);
  return text.includes(key);
}
function score(text, keys) {
  return keys.reduce((n, k) => (has(text, k) ? n + k.split(" ").length * 2 + 1 : n), 0);
}

const contact = siteConfig.contact;
const whatsapp = siteConfig.socials.whatsapp;

const intents = [
  {
    keys: ["hi", "hello", "hey", "namaste", "good morning", "good afternoon", "good evening"],
    reply: () => ({ text: "Hello! I'm the Roottoo assistant. Ask me about our services, hiring, pricing or how to reach us." }),
  },
  {
    keys: ["thanks", "thank you", "thx", "bye", "goodbye"],
    reply: () => ({ text: "You're welcome! If you need anything else, I'm right here." }),
  },
  {
    keys: ["service", "services", "what do you do", "what you do", "offer", "provide", "solutions", "help with"],
    reply: () => ({
      text: `We offer ${siteConfig.serviceDropdownGroups.length} kinds of business support:\n` +
        siteConfig.serviceDropdownGroups.map((g) => `• ${g.label}`).join("\n"),
      links: [{ label: "See all services", to: "/services" }],
    }),
  },
  {
    keys: ["contact", "phone", "call", "email", "mail", "reach", "number", "talk to", "speak", "whatsapp", "get in touch"],
    reply: () => ({
      text: `You can reach us at:\n📞 ${contact.phone}\n✉️ ${contact.email}\n📍 ${contact.location}`,
      links: [
        { label: "Contact page", to: "/contact" },
        { label: "WhatsApp us", href: whatsapp },
      ],
    }),
  },
  {
    keys: ["address", "location", "where", "office", "bengaluru", "bangalore", "map", "visit"],
    reply: () => ({
      text: `We're based in ${siteConfig.business.hq} and serve businesses across India.`,
      links: [{ label: "View on map", href: siteConfig.socials.maps }],
    }),
  },
  {
    keys: ["price", "pricing", "cost", "fee", "fees", "charges", "quote", "how much", "rate", "budget"],
    reply: () => ({
      text: "Pricing is enquiry-based and depends on the scope of work. Share your requirement and our team will get back to you with next steps.",
      links: [{ label: "Get a quote", to: "/contact" }],
    }),
  },
  {
    keys: ["career", "careers", "job", "jobs", "resume", "cv", "apply", "vacancy", "vacancies", "opening", "openings", "looking for work"],
    reply: () => ({
      text: "Looking for an opportunity? Submit your resume on our Careers page and our team will match you with relevant openings.",
      links: [{ label: "Careers", to: "/careers" }],
    }),
  },
  {
    keys: ["industry", "industries", "sector", "sectors", "domain"],
    reply: () => ({
      text: "We support businesses across:\n" + siteConfig.industries.slice(0, 8).map((i) => `• ${i.name}`).join("\n") + "\n…and more.",
      links: [{ label: "All industries", to: "/industries" }],
    }),
  },
  {
    keys: ["about", "who are you", "company", "founded", "since", "roottoo", "tell me about"],
    reply: () => ({
      text: `${siteConfig.business.name} is a ${siteConfig.business.hq.split(",")[0]}-based ${siteConfig.business.descriptor.toLowerCase()} company, founded in ${siteConfig.business.founded}. ${siteConfig.business.tagline}.`,
      links: [{ label: "About us", to: "/about" }],
    }),
  },
  {
    keys: ["package", "packages", "bundle", "combo", "plan", "plans"],
    reply: () => ({
      text: "We can bundle services into one plan around your business:\n" + siteConfig.packages.map((p) => `• ${p.title}`).join("\n"),
      links: [{ label: "Talk to us", to: "/contact" }],
    }),
  },
  {
    keys: ["engagement", "model", "models", "retainer", "project based", "dedicated team", "managed service", "flexible"],
    reply: () => ({
      text: "You can engage us in four ways:\n" + siteConfig.engagementModels.map((m) => `• ${m.tag[0]}${m.tag.slice(1).toLowerCase()}: ${m.title.toLowerCase()}`).join("\n"),
      links: [{ label: "Discuss your needs", to: "/contact" }],
    }),
  },
  {
    keys: ["start", "begin", "get started", "enquiry", "inquiry", "consultation", "requirement"],
    reply: () => ({
      text: "Just share your requirement using the enquiry form. Our team will review the scope and contact you with next steps.",
      links: [{ label: "Start a conversation", to: "/contact" }],
    }),
  },
  {
    keys: ["startup", "startups", "small business", "sme", "enterprise"],
    reply: () => ({
      text: "Yes, our services are built for startups, SMEs and enterprises at different stages, and we can combine several services into one plan.",
      links: [{ label: "Explore services", to: "/services" }],
    }),
  },
];

/* One intent per service, built from the services data */
services.forEach((s) => {
  const keys = [s.title.toLowerCase(), ...(serviceWords[s.slug] || [])];
  intents.push({
    keys,
    weight: 2,
    reply: () => ({
      text: `${s.title}: ${s.value}`,
      links: [
        { label: "Learn more", to: `/services/${s.slug}` },
        { label: "Enquire", to: "/contact" },
      ],
    }),
  });
});

function getReply(input) {
  const text = input.toLowerCase().replace(/[^a-z0-9\s&+-]/g, " ").replace(/\s+/g, " ").trim();
  let best = null;
  let bestScore = 0;
  intents.forEach((intent) => {
    const s = score(text, intent.keys) * (intent.weight || 1);
    if (s > bestScore) {
      best = intent;
      bestScore = s;
    }
  });
  if (best) return best.reply();
  return {
    text: "I'm not sure about that one. Our team can answer it directly. Please contact us and we'll get back to you.",
    links: [
      { label: "Contact us", to: "/contact" },
      { label: "WhatsApp us", href: whatsapp },
    ],
  };
}

const quickReplies = ["Our services", "Hire talent", "Get a quote", "Careers", "Contact us"];

const greeting = {
  from: "bot",
  text: "Hi! 👋 I'm the Roottoo assistant. How can I help you today?",
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([greeting]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (raw) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { from: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", ...getReply(text) }]);
      setTyping(false);
    }, 550);
  };

  const closeOnNavigate = () => setOpen(false);

  return (
    <div className="chatbot">
      {open && (
        <section className="chatbot__panel" role="dialog" aria-label="Chat with Roottoo Innovation">
          <header className="chatbot__head">
            <img src="/favicon-512.png" alt="" className="chatbot__avatar" />
            <div className="chatbot__head-text">
              <strong>Roottoo Assistant</strong>
              <span><i className="chatbot__online" /> Online</span>
            </div>
            <button className="chatbot__close" onClick={() => setOpen(false)} aria-label="Close chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </header>

          <div className="chatbot__body" ref={bodyRef} aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={`chatbot__msg chatbot__msg--${m.from}`}>
                <div className="chatbot__bubble">{m.text}</div>
                {m.links && (
                  <div className="chatbot__links">
                    {m.links.map((l) =>
                      l.to ? (
                        <Link key={l.label} to={l.to} className="chatbot__link" onClick={closeOnNavigate}>
                          {l.label}
                        </Link>
                      ) : (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="chatbot__link">
                          {l.label}
                        </a>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chatbot__msg chatbot__msg--bot">
                <div className="chatbot__bubble chatbot__typing" aria-label="Typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>

          <div className="chatbot__chips">
            {quickReplies.map((q) => (
              <button key={q} className="chatbot__chip" onClick={() => send(q)}>{q}</button>
            ))}
          </div>

          <div className="chatbot__form">
            <input
              ref={inputRef}
              className="chatbot__input"
              type="text"
              value={input}
              placeholder="Type your question…"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send(input)}
              aria-label="Type your message"
            />
            <button className="chatbot__send" onClick={() => send(input)} aria-label="Send message" disabled={!input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 12l16-8-6 16-3-7-7-1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>
      )}

      <button
        className={`chatbot__launcher ${open ? "is-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
      >
        {open ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </div>
  );
}