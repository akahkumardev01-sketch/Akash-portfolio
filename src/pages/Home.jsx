import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.12),transparent_28%),radial-gradient(circle_at_50%_90%,rgba(34,211,238,0.1),transparent_25%)]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="opacity-0 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards]">
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
            Portfolio 2026
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m
            <span className="ml-2 bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">
              Akash Kumar
            </span>
          </h1>

          <p className="mt-5 text-base font-medium text-slate-300 sm:text-lg">
            MERN Stack Developer | UI/UX Designer
          </p>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            I love building modern web applications that feel fast, clean, and intuitive.
            My focus is on creating meaningful digital experiences with solid frontend
            craft and practical full-stack problem solving.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-xl bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-5 text-sm text-slate-400">
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
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm opacity-0 motion-safe:animate-[fadeUp_1s_ease-out_0.15s_forwards]">
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
            <div className="absolute -inset-px -z-10 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-sky-500/10 to-transparent blur-lg" />
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Akash Kumar portrait"
              className="aspect-[4/5] w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 sm:flex">
        <span>Scroll</span>
        <span className="inline-block h-4 w-2 rounded-full border border-slate-500/70 p-[2px]">
          <span className="block h-1 w-1 animate-bounce rounded-full bg-slate-400" />
        </span>
      </div>

      {/* Simple load animation keyframes kept local to this file as requested. */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(18px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
