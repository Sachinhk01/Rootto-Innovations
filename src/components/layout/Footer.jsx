import Logo from "../ui/Logo";
import Reveal from "../ui/Reveal";
import "./Footer.css";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#who-we-are", label: "Who We Are" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

const SERVICE_LINKS = [
  { href: "#services", label: "GST Services" },
  { href: "#services", label: "Income Tax Filing" },
  { href: "#services", label: "FSSAI Services" },
  { href: "#services", label: "MSME/Udyam" },
  { href: "#services", label: "Labour License" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Logo variant="light" />
            <p className="footer__desc">
              RI ACC &amp; TAX — trusted accounting, tax, and business-compliance consultancy
              in Bengaluru. We value your demand.
            </p>
            <div className="footer__socials">
            
              <a href="https://www.instagram.com/riaudithub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/roottoo-innovation/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://wa.me/918147394287" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3a9 9 0 00-7.8 13.5L3 21l4.6-1.2A9 9 0 1012 3z" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M8.5 8.7c.2-.5.4-.5.6-.5h.5c.15 0 .35 0 .5.4.2.5.7 1.7.75 1.85.05.15.1.3 0 .5-.1.2-.15.3-.3.45-.15.15-.3.35-.45.45-.15.15-.3.3-.15.6.15.3.7 1.15 1.5 1.85 1 .9 1.85 1.15 2.15 1.3.3.15.5.15.65-.1.2-.25.7-.85.9-1.15.2-.3.4-.25.65-.15.25.1 1.6.75 1.9.9.3.15.5.2.55.35.05.15.05.85-.2 1.65-.25.8-1.5 1.5-2.1 1.6-.55.1-1.2.15-3.85-.8-3.25-1.2-5.3-4.5-5.5-4.75-.15-.2-1.3-1.75-1.3-3.3 0-1.55.8-2.3 1.1-2.6z" fill="currentColor" />
                </svg>
              </a>
              <a href="https://www.google.com/maps/place/Roottoo+innovation/@13.1167707,77.4801212,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae234f17c04705:0x8306a37b78a1ca14!8m2!3d13.1167707!4d77.4826961!16s%2Fg%2F11qpdnflzj?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Location" className="footer__social">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__heading">Services</h4>
            <ul className="footer__links">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="footer__col">
            <h4 className="footer__heading">Get in Touch</h4>
            <address className="footer__address">
              02, Behind Karnataka Bank Road, Hurulichikanahalli, Bengaluru, Karnataka – 560088
            </address>
            <ul className="footer__contact">
              <li>
                <a href="tel:+918147394287">+91 8147394287</a>
              </li>
              <li>
                <a href="mailto:hr@roottooinnovation.com">hr@roottooinnovation.com</a>
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Roottoo Innovation. All rights reserved.</p>
          <p className="footer__tagline">We value your demand.</p>
        </div>
      </div>
    </footer>
  );
}