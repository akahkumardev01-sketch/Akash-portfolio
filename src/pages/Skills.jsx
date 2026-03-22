const categories = [
  {
    title: "Frontend",
    description: "Crafting clean, responsive, and user-focused interfaces.",
    skills: [
      { name: "React.js", level: 88, icon: "react" },
      { name: "HTML", level: 92, icon: "html" },
      { name: "CSS", level: 89, icon: "css" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind" },
      { name: "JavaScript", level: 85, icon: "javascript" },
    ],
  },
  {
    title: "Backend",
    description: "Building reliable APIs and data-driven server-side solutions.",
    skills: [
      { name: "Node.js", level: 82, icon: "node" },
      { name: "Express.js", level: 80, icon: "express" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
    ],
  },
  {
    title: "Other Skills",
    description: "Combining logic, creativity, and design thinking.",
    skills: [
      { name: "Data Structures & Algorithms (Basic)", level: 72, icon: "dsa" },
      { name: "UI/UX Design", level: 84, icon: "uiux" },
      { name: "Graphic Designing", level: 81, icon: "design" },
    ],
  },
];

function SkillIcon({ type }) {
  const iconClass = "h-5 w-5";

  if (type === "react") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="1.9" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="8.3" ry="3.4" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="8.3" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="8.3" ry="3.4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  if (type === "html") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M4 3h16l-1.5 15.8L12 21l-6.5-2.2L4 3Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m8 8 2 2-2 2m8-4-2 2 2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "css") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M4 3h16l-1.5 15.8L12 21l-6.5-2.2L4 3Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8h8M8.5 12h7M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tailwind") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M6 10c1.1-2 2.4-2.8 4-2.5 1 .2 1.7.8 2.4 1.4.9.7 1.8 1.3 3.2 1 1.2-.3 2.1-1.1 2.8-2.4-.4 2.3-1.6 3.9-3.6 4.7-1.2.5-2.3.4-3.4-.1-.8-.3-1.4-.9-2.1-1.4-.8-.6-1.8-.7-2.8-.2-.8.4-1.5 1-2 2 .2-1 .5-1.8 1.5-2.5Z" fill="currentColor" />
        <path d="M4.5 15.5c1.1-2 2.4-2.8 4-2.5 1 .2 1.7.8 2.4 1.4.9.7 1.8 1.3 3.2 1 1.2-.3 2.1-1.1 2.8-2.4-.4 2.3-1.6 3.9-3.6 4.7-1.2.5-2.3.4-3.4-.1-.8-.3-1.4-.9-2.1-1.4-.8-.6-1.8-.7-2.8-.2-.8.4-1.5 1-2 2 .2-1 .5-1.8 1.5-2.5Z" fill="currentColor" />
      </svg>
    );
  }

  if (type === "javascript") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 9v6c0 1-.8 1.8-1.8 1.8H8m7-8v5.2c0 1.5-1.1 2.8-2.6 2.8-1.4 0-2.4-.8-2.8-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "node") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M12 3 19 7v10l-7 4-7-4V7l7-4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.2 9.5v5m5.6-5v5m-5.6-2.5h5.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "express") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M4 7h16M4 12h10M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "mongodb") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <path d="M12 3c2 2.3 3.1 4.9 3.1 7.8 0 4-1.8 7.3-3.1 10.2-1.3-2.9-3.1-6.2-3.1-10.2 0-2.9 1.1-5.5 3.1-7.8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "dsa") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 7.3 10.7 16.6m5.8-9.3-3.2 9.3M8 6h8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "uiux") {
    return (
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
        <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 9h16M9 5v14" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={iconClass} fill="none" aria-hidden="true">
      <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function Skills() {
  return (
    <section className="relative space-y-8 pb-8 sm:space-y-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_65%)]" />

      <header className="opacity-0 motion-safe:animate-[fadeUp_0.7s_ease-out_forwards]">
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Skillset
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Skills
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          A blend of development and design capabilities that help me build complete,
          user-centered digital products.
        </p>
      </header>

      <div className="space-y-6 sm:space-y-8">
        {categories.map((category, categoryIndex) => (
          <section
            key={category.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 opacity-0 shadow-lg shadow-slate-950/30 sm:p-6 motion-safe:animate-[fadeUp_0.8s_ease-out_forwards]"
            style={{ animationDelay: `${0.1 + categoryIndex * 0.08}s` }}
          >
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{category.title}</h2>
            <p className="mt-2 text-sm text-slate-400 sm:text-base">{category.description}</p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill, skillIndex) => (
                <article
                  key={skill.name}
                  className="group rounded-xl border border-slate-800 bg-slate-950/55 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)]"
                  style={{ animationDelay: `${0.18 + skillIndex * 0.04}s` }}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-300/20">
                      <SkillIcon type={skill.icon} />
                    </span>
                    <h3 className="text-sm font-semibold text-slate-100 sm:text-base">{skill.name}</h3>
                  </div>

                  {/* Progress indicator for quick skill-level scanning. */}
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between text-xs text-slate-400">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Local keyframes keep animation setup scoped to this file. */}
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

export default Skills;
