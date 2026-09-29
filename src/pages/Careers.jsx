import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Careers.css";

const MODES = {
  employer: {
    tab: "I'm hiring",
    title: "Tell us who you need",
    blurb:
      "Share the role and we'll come back with screened candidates, not a pile of CVs.",
    steps: [
      ["You send the requirement", "Takes about two minutes."],
      ["We shortlist", "Sourced and assessed against your brief."],
      ["You interview, we onboard", "Offer, joining and paperwork handled."],
    ],
    cta: "Send hiring requirement",
    doneTitle: "Requirement received",
    doneText: "Our team will call or email you shortly to confirm the details.",
    templateEnv: "VITE_EMAILJS_TEMPLATE_ID_EMPLOYER",
    fields: [
      { name: "company", label: "Company name", half: true, req: true },
      { name: "contact_person", label: "Contact person", half: true, req: true },
      { name: "from_email", label: "Email", type: "email", half: true, req: true },
      { name: "phone", label: "Phone", type: "tel", half: true, req: true },
      { name: "role", label: "Role to fill", half: true, req: true },
      { name: "positions", label: "Number of positions", type: "number", half: true, min: 1 },
      { name: "location", label: "Job location", half: true },
      {
        name: "hiring_type", label: "Hiring type", type: "select", half: true,
        options: ["Permanent", "Contract", "Contract-to-hire", "Internship"],
      },
      { name: "message", label: "Details about the role", type: "textarea" },
    ],
  },
  seeker: {
    tab: "I'm job hunting",
    title: "Show us what you do best",
    blurb:
      "Upload your resume once. We match you with openings that fit your skills and location.",
    steps: [
      ["You share your resume", "PDF or Word, up to 2 MB."],
      ["We review your profile", "Matched with roles that fit you."],
      ["We connect you", "You hear from us when there's a match."],
    ],
    cta: "Submit resume",
    doneTitle: "Resume received",
    doneText: "We'll reach out when we find a role that fits your profile.",
    templateEnv: "VITE_EMAILJS_TEMPLATE_ID_SEEKER",
    fields: [
      { name: "from_name", label: "Full name", req: true },
      { name: "from_email", label: "Email", type: "email", half: true, req: true },
      { name: "phone", label: "Phone", type: "tel", half: true, req: true },
      { name: "location", label: "Current location", half: true },
      { name: "skills", label: "Skills / role", half: true, req: true },
      { name: "resume", label: "Resume", type: "file", req: true },
      { name: "message", label: "Tell us about your experience", type: "textarea" },
    ],
  },
};

function FileDrop({ field }) {
  const [file, setFile] = useState(null);
  const [over, setOver] = useState(false);
  const inputRef = useRef(null);

  const pick = (f) => {
    if (!f) return;
    if (f.size > 2 * 1024 * 1024) {
      inputRef.current.value = "";
      setFile(null);
      inputRef.current.setCustomValidity("File must be under 2 MB");
      inputRef.current.reportValidity();
      return;
    }
    inputRef.current.setCustomValidity("");
    setFile(f);
  };

  return (
    <label
      className={`cr-drop ${over ? "is-over" : ""} ${file ? "has-file" : ""}`}
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        const f = e.dataTransfer.files[0];
        if (f) {
          const dt = new DataTransfer();
          dt.items.add(f);
          inputRef.current.files = dt.files;
          pick(f);
          inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        name={field.name}
        accept=".pdf,.doc,.docx"
        required={field.req}
        onChange={(e) => pick(e.target.files[0])}
      />
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {file ? <path d="M5 13l4 4L19 7" /> : <path d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />}
      </svg>
      <span className="cr-drop-text">
        <strong>{file ? file.name : "Drop your resume here"}</strong>
        <small>{file ? "Click to replace" : "or click to browse (PDF, DOC, DOCX)"}</small>
      </span>
    </label>
  );
}

function Field({ f }) {
  if (f.type === "file") return <div className="cr-f full"><FileDrop field={f} /></div>;
  const cls = `cr-f ${f.half ? "half" : "full"}`;
  const common = { id: f.name, name: f.name, required: f.req, placeholder: " " };

  return (
    <div className={cls}>
      {f.type === "select" ? (
        <select {...common} defaultValue="" className="is-select">
          <option value="" disabled hidden></option>
          {f.options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : f.type === "textarea" ? (
        <textarea {...common} rows={4} />
      ) : (
        <input {...common} type={f.type || "text"} min={f.min} />
      )}
      <label htmlFor={f.name}>{f.label}</label>
    </div>
  );
}

export default function Careers() {
  const [mode, setMode] = useState("employer");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const formRef = useRef(null);
  const m = MODES[mode];

  const switchMode = (next) => {
    if (next === mode) return;
    setMode(next);
    setProgress(0);
    setStatus("idle");
  };

  const updateProgress = () => {
    const els = [...formRef.current.elements].filter((el) => el.required);
    const filled = els.filter((el) => (el.type === "file" ? el.files.length : el.value.trim())).length;
    setProgress(els.length ? Math.round((filled / els.length) * 100) : 0);
  };

  const submit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env[m.templateEnv] || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => setStatus("done"))
      .catch(() => setStatus("error"));
  };

  return (
    <section className="cr">
      <header className="cr-head">
        <h1>Hire well. Get hired well.</h1>
        <p>Whichever side of the table you're on, we'll take it from here.</p>

        <div className="cr-switch" role="tablist" aria-label="Choose your path">
          <span className="cr-thumb" style={{ transform: `translateX(${mode === "employer" ? 0 : 100}%)` }} />
          {Object.entries(MODES).map(([key, v]) => (
            <button
              key={key}
              role="tab"
              aria-selected={mode === key}
              className={mode === key ? "on" : ""}
              onClick={() => switchMode(key)}
              type="button"
            >
              {v.tab}
            </button>
          ))}
        </div>
      </header>

      <div className="cr-card">
        <aside className="cr-side">
          <div key={mode} className="cr-swap">
            <h2>{m.title}</h2>
            <p>{m.blurb}</p>

            <ol className="cr-rail" style={{ "--p": `${status === "done" ? 100 : progress}%` }}>
              {m.steps.map(([t, d]) => (
                <li key={t}>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="cr-247">
            <i aria-hidden="true" />
            Reach us anytime on <a href="tel:+918147394287">+91 81473 94287</a>
          </div>
        </aside>

        <div className="cr-main">
          <div className="cr-bar" aria-hidden="true"><i style={{ width: `${status === "done" ? 100 : progress}%` }} /></div>

          {status === "done" ? (
            <div className="cr-done">
              <svg viewBox="0 0 52 52" width="72" height="72" aria-hidden="true">
                <circle cx="26" cy="26" r="24" />
                <path d="M15 27l8 8 14-16" />
              </svg>
              <h3>{m.doneTitle}</h3>
              <p>{m.doneText}</p>
              <button type="button" className="cr-btn ghost" onClick={() => { setStatus("idle"); setProgress(0); }}>
                Send another
              </button>
            </div>
          ) : (
            <form key={mode} ref={formRef} className="cr-form cr-swap" onSubmit={submit} onChange={updateProgress}>
              <input type="hidden" name="form_type" value={mode === "employer" ? "Hiring requirement" : "Job application"} />
              <div className="cr-grid">
                {m.fields.map((f) => <Field key={f.name} f={f} />)}
              </div>

              {status === "error" && (
                <p className="cr-error" role="alert">
                  Couldn't send that. Check your connection and try again, or email hr@roottooinnovation.com.
                </p>
              )}

              <button className="cr-btn" type="submit" disabled={status === "sending"}>
                <span>{status === "sending" ? "Sending…" : m.cta}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}