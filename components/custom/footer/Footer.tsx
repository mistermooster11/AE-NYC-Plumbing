import Image from "next/image";
import Link from "next/link";
import { quickLinks, servicesLinks } from "@/data/nav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <Link href="/">
            <Image
              src="/images/logo-dark-bg.png"
              alt="A&E NYC Plumbing"
              width={200}
              height={50}
              className="footer__logo"
              style={{ height: "auto" }}
            />
          </Link>
          <p className="footer__desc">
            <strong>A&amp;E NYC Plumbing</strong> — licensed and insured plumbing contractors
            serving Manhattan and all NYC boroughs. 40 Fulton St., New York, NY 10038.
          </p>
          <p className="footer__desc">
            <a href="tel:+16463927164">(646) 392-7164</a> &nbsp;|&nbsp;{" "}
            <a href="mailto:support@topplumbernyc.com">support@topplumbernyc.com</a>
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <div className="footer__divider" />
          <ul className="footer__links">
            {servicesLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer__link">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">Copyright 2025 A&amp;E NYC Plumbing. All rights reserved.</p>
        <div className="footer__legal">
          <Link href="/privacy-policy" className="footer__legal-link">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
