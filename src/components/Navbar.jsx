import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(value > 12);
  });

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-slate-700/80 bg-slate-950/85 shadow-lg shadow-slate-950/40 backdrop-blur-xl"
          : "border-slate-800/80 bg-slate-950/65 backdrop-blur-md",
      ].join(" ")}
    >
      <motion.div
        className="absolute left-0 top-0 h-[2px] origin-left bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400"
        style={{ scaleX: scrollYProgress }}
      />

      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <NavLink
            to="/"
            className="text-lg font-semibold tracking-wide text-white transition-colors duration-300 hover:text-cyan-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Akash Kumar
          </NavLink>
        </motion.div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
          type="button"
          className="inline-flex items-center rounded-md border border-slate-700 p-2 text-slate-200 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          <span className="text-xl leading-none">{isMenuOpen ? "X" : "="}</span>
        </motion.button>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="group relative px-1 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-200"
              end={item.path === "/"}
            >
              {({ isActive }) => (
                <span className={["relative inline-flex items-center", isActive ? "text-cyan-300" : ""].join(" ")}>
                  {item.name}
                  <span
                    className={[
                      "pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-cyan-300 transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    ].join(" ")}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 md:hidden"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-cyan-300"
                  end={item.path === "/"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
