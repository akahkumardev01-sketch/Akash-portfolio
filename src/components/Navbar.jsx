import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Shared active/inactive styles for desktop and mobile links.
  const getNavLinkClass = ({ isActive }) =>
    [
      "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
      "hover:bg-slate-800 hover:text-cyan-300",
      isActive ? "bg-cyan-400/10 text-cyan-300" : "text-slate-300",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-wide text-white transition-colors duration-300 hover:text-cyan-300"
          onClick={() => setIsMenuOpen(false)}
        >
          Akash Kumar
        </NavLink>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-slate-700 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl leading-none">{isMenuOpen ? "X" : "="}</span>
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={getNavLinkClass}
              end={item.path === "/"}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={getNavLinkClass}
                end={item.path === "/"}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
