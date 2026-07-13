import { useEffect, useState } from "react";
import Logo from "./Logo";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Top utility bar */}
      <div className="navbar__utility">
        <div className="container navbar__utility-inner">
          <div className="navbar__utility-left">
            <span className="navbar__util-item navbar__util-loc" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
              </svg>
              Hurulichikanahalli, Bengaluru
            </span>
          </div>
          <div className="navbar__utility-right">
            <a href="mailto:hr@roottooinnovation.com" className="navbar__util-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" fill="none" />
                <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" fill="none" />
              </svg>
              hr@roottooinnovation.com
            </a>
            <a href="tel:+918147394287" className="navbar__util-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.24 1L6.6 10.8z" fill="currentColor" />
              </svg>
              +91 8147394287
            </a>
            <span className="navbar__socials" aria-label="Social links">

  <a href="https://www.instagram.com/riaudithub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="navbar__social">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  </a>
  <a href="https://www.linkedin.com/company/roottoo-innovation/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="navbar__social">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9z" fill="currentColor" />
    </svg>
  </a>
  <a href="https://wa.me/918147394287" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="navbar__social">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
      <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8.5 8.7c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.7 1.7.75 1.85.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1 .9 1.85 1.15 2.15 1.3.3.15.5.15.65-.1.2-.25.7-.85.9-1.15.2-.3.4-.25.65-.15.25.1 1.6.75 1.9.9.3.15.5.2.55.35.05.15.05.85-.2 1.65-.25.8-1.5 1.5-2.1 1.6-.55.1-1.2.15-3.85-.8-3.25-1.2-5.3-4.5-5.5-4.75-.15-.2-1.3-1.75-1.3-3.3 0-1.55.8-2.3 1.1-2.6z" fill="currentColor" />
    </svg>
  </a>
  <a href="https://www.google.com/maps/place/Roottoo+innovation/@13.1167707,77.4801212,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae234f17c04705:0x8306a37b78a1ca14!8m2!3d13.1167707!4d77.4826961!16s%2Fg%2F11qpdnflzj?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Location" className="navbar__social">
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
  </svg>
</a>
</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="navbar__main" aria-label="Primary">
        <div className="container navbar__main-inner">
          <Logo variant="dark" />

          <ul className="navbar__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--primary navbar__cta">
            Get Free Consultation
          </a>

          <button
            className={`navbar__hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
      >
        <div className="navbar__mobile-panel">
          <div className="navbar__mobile-head">
            <Logo variant="dark" />
            <button
              className="navbar__mobile-close"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="navbar__mobile-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="navbar__mobile-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn--primary navbar__mobile-cta" onClick={closeMenu}>
            Get Free Consultation
          </a>
          <div className="navbar__mobile-contact">
            <a href="tel:+918147394287">+91 8147394287</a>
            <a href="mailto:hr@roottooinnovation.com">hr@roottooinnovation.com</a>
          </div>
        </div>
      </div>
    </header>
  );
}
