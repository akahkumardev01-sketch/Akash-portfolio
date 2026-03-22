import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/95">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <section>
          <h2 className="text-xl font-semibold text-white">Akash Kumar</h2>
          <p className="mt-3 text-sm text-slate-400">
            MERN Stack Developer | UI/UX Designer
          </p>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
            Quick Links
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300">
            Social
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 transition-colors duration-300 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-slate-800/80">
        <p className="mx-auto w-full max-w-6xl px-4 py-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8 lg:text-left">
          © 2026 Akash Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
