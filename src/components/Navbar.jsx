import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../data/siteData";
import logoNavy from "../assets/roottoo-logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__utility">
        <div className="container navbar__utility-inner">
          <div className="navbar__utility-left">
            <span className="navbar__util-item">Helping businesses grow across India</span>
          </div>
          <div className="navbar__utility-right">
            <a href={siteConfig.contact.emailHref} className="navbar__util-item">
              {siteConfig.contact.email}
            </a>
            <a href={siteConfig.contact.phoneHref} className="navbar__util-item">
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar__main" aria-label="Primary">
        <div className="container navbar__main-inner">
          <Link to="/" className="logo" aria-label={siteConfig.business.name}>
            <img src={logoNavy} alt="Roottoo Innovation" className="logo__img" />
          </Link>

          <ul className="navbar__links">
            {siteConfig.navLinks.map((link) =>
              link.hasDropdown ? (
                <li
                  key={link.href}
                  className={`navbar__dropdown ${dropdownOpen ? "is-open" : ""}`}
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `navbar__link navbar__dropdown-trigger ${isActive ? "is-active" : ""}`
                    }
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </NavLink>
                  <div className="navbar__dropdown-menu">
                    {siteConfig.serviceDropdownGroups.map((group) => (
                      <div key={group.label}>
                        <span className="navbar__dropdown-group-label">{group.label}</span>
                        {group.items.map((item) => (
                          <Link
                            key={item.slug}
                            to={`/services/${item.slug}`}
                            className="navbar__dropdown-link"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `navbar__link ${isActive ? "is-active" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>

          <Link to="/contact" className="btn btn--primary navbar__cta-desktop">
            Let's Talk
          </Link>

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

      <div
        className={`navbar__mobile ${menuOpen ? "is-open" : ""}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setMenuOpen(false);
        }}
      >
        <div className="navbar__mobile-panel">
          <div className="navbar__mobile-head">
            <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
              <img src={logoNavy} alt="Roottoo Innovation" className="logo__img" />
            </Link>
            <button
              className="navbar__mobile-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <ul className="navbar__mobile-links">
            {siteConfig.navLinks.map((link) =>
              link.hasDropdown ? (
                <li key={link.href}>
                  <button
                    className="navbar__mobile-accordion-trigger"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                  >
                    {link.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "none", transition: "transform .3s" }}>
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <div className={`navbar__mobile-accordion-panel ${mobileServicesOpen ? "is-open" : ""}`}>
                    {siteConfig.serviceDropdownGroups.map((group) => (
                      <div key={group.label}>
                        <span style={{ fontSize: ".72rem", fontWeight: 700, textTransform: "uppercase", color: "var(--green-700)", padding: "8px 12px 4px" }}>{group.label}</span>
                        {group.items.map((item) => (
                          <Link key={item.slug} to={`/services/${item.slug}`} onClick={() => setMenuOpen(false)}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link to={link.href} className="navbar__mobile-link" onClick={() => setMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Link to="/contact" className="btn btn--primary navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
            Let's Talk
          </Link>
          <div className="navbar__mobile-contact">
            <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
          </div>
        </div>
      </div>
    </header>
  );
}
