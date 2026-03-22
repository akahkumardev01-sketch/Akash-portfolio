import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function Home() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.1),transparent_25%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div variants={container}>
          <motion.p variants={item} className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Portfolio 2026
          </motion.p>

          <motion.h1 variants={item} className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <span className="ml-2 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Akash Kumar
            </span>
          </motion.h1>

          <motion.p variants={item} className="mt-5 text-base font-medium text-slate-300 sm:text-lg">
            MERN Stack Developer | UI/UX Designer
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            I love building modern web applications that feel fast, clean, and intuitive.
            My focus is on creating meaningful digital experiences with solid frontend
            craft and practical full-stack problem solving.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18 }}>
              <Link
                to="/projects"
                className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:bg-cyan-200 hover:shadow-cyan-400/35"
              >
                View Projects
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18 }}>
              <Link
                to="/contact"
                className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-5 text-sm text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-300 hover:text-cyan-300"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div variants={item} className="mx-auto w-full max-w-sm">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm"
          >
            <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-sky-500/10 to-transparent blur-lg" />
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Akash Kumar portrait"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={item}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 sm:flex"
      >
        <span>Scroll</span>
        <span className="inline-block h-4 w-2 rounded-full border border-slate-500/70 p-[2px]">
          <span className="block h-1 w-1 animate-bounce rounded-full bg-slate-400" />
        </span>
      </motion.div>
    </motion.section>
  );
}

export default Home;
