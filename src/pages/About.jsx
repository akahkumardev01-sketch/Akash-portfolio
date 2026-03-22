const skillHighlights = [
  {
    title: "MERN Stack",
    description:
      "Building scalable full-stack web applications with clean architecture and strong UX focus.",
  },
  {
    title: "Basic DSA",
    description:
      "Improving problem-solving skills through consistent practice and structured logic thinking.",
  },
  {
    title: "Graphic Designing",
    description:
      "Creating visual assets, layouts, and brand-friendly designs with a modern aesthetic.",
  },
  {
    title: "UI/UX Designing",
    description:
      "Designing intuitive interfaces that balance usability, accessibility, and visual clarity.",
  },
];

function About() {
  return (
    <section className="relative space-y-8 pb-8 sm:space-y-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_65%)]" />

      <header className="opacity-0 motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Know Akash
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          I am Akash Kumar, a BTech student and aspiring full-stack developer passionate
          about building modern, high-performance web applications. I enjoy turning ideas
          into polished products through code, design thinking, and continuous learning.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 opacity-0 shadow-lg shadow-slate-950/30 motion-safe:animate-[fadeUp_0.8s_ease-out_0.1s_forwards]">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M4 7.5 12 3l8 4.5-8 4.5L4 7.5Z" stroke="currentColor" strokeWidth="1.6" />
              <path d="M6 10.5V15c0 2.2 2.7 4 6 4s6-1.8 6-4v-4.5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Education</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/50 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                BTech
              </p>
              <p className="mt-2 text-base font-medium text-slate-100">
                Global Group of Institute
              </p>
              <p className="mt-1 text-sm text-slate-400">Expected Graduation: 2028</p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 opacity-0 shadow-lg shadow-slate-950/30 motion-safe:animate-[fadeUp_0.8s_ease-out_0.18s_forwards]">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Journey</h2>
          <p className="mt-4 text-slate-300">
            My coding journey started with curiosity about how websites work behind the
            scenes. Over time, that curiosity turned into a deep interest in MERN stack
            development, UI/UX design, and solving real-world problems through thoughtful
            digital experiences.
          </p>
        </article>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 opacity-0 shadow-lg shadow-slate-950/30 motion-safe:animate-[fadeUp_0.85s_ease-out_0.26s_forwards]">
        <div className="mb-5 flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
              <path d="M4 19h16M7 16V8m5 8V5m5 11v-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white">Skills Highlights</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {skillHighlights.map((skill) => (
            <article
              key={skill.title}
              className="rounded-xl border border-slate-800 bg-slate-950/50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50"
            >
              <h3 className="text-base font-semibold text-slate-100">{skill.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 opacity-0 shadow-lg shadow-slate-950/30 motion-safe:animate-[fadeUp_0.9s_ease-out_0.34s_forwards]">
        <h2 className="text-xl font-semibold text-white">Mindset & Goals</h2>
        <p className="mt-3 text-slate-300">
          I believe great products come from a balance of logic, creativity, and empathy.
          My goal is to grow into a developer-designer who builds impactful solutions,
          contributes to meaningful projects, and keeps learning every day.
        </p>
      </section>

      {/* Local animation keeps this component self-contained for this project part. */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(14px);
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

export default About;
