import "./FloatingActions.css";

const WHATSAPP_URL =
  "https://wa.me/918147394287?text=" +
  encodeURIComponent(
    "Hello Roottoo Innovation, I'd like to know more about your accounting and tax compliance services."
  );

export default function FloatingActions() {
  return (
    <>
      {/* Vertical Contact tab — left edge */}
      <a
        href="#contact"
        className="float-contact"
        aria-label="Contact Us"
      >
        <span className="float-contact__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 5a2 2 0 012-2h2.5a1 1 0 01.95.68l1.2 3.5a1 1 0 01-.27 1.05L8.4 9.9a12 12 0 005.7 5.7l1.67-1.98a1 1 0 011.05-.27l3.5 1.2a1 1 0 01.68.95V18a2 2 0 01-2 2A16 16 0 014 5z"
              fill="currentColor"
            />
          </svg>
        </span>
        <span className="float-contact__label">Contact Us</span>
      </a>

      {/* WhatsApp floating button — bottom right */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="float-wa"
        aria-label="Chat on WhatsApp"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.1-1.1l-.3-.2-2.8.8.8-2.8-.2-.3A8 8 0 1112 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1a6.5 6.5 0 01-1.9-1.2 7.2 7.2 0 01-1.3-1.7c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.2-.5 0-.2 0-.4 0-.5 0-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3A2.8 2.8 0 006.5 8c0 1.6 1.2 3.2 1.3 3.4.2.2 2.3 3.5 5.6 4.9.8.3 1.4.5 1.9.6.8.2 1.5.2 2 0 .6-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.2-.3-.2-.5-.3z"
            fill="currentColor"
          />
        </svg>
        <span className="float-wa__pulse" aria-hidden="true" />
      </a>
    </>
  );
}
