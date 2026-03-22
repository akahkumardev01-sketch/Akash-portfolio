import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const projectData = [
  {
    title: "Todo App",
    description: "Task management app with CRUD functionality.",
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Add tasks", "Delete tasks", "Update tasks"],
    category: "fullstack",
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Calculator",
    description: "Basic calculator for arithmetic operations.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: ["Addition", "Subtraction", "Multiplication / Division"],
    category: "frontend",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Blog Website",
    description: "Full-stack blog platform.",
    tech: ["MERN Stack"],
    features: ["Create posts", "Edit posts", "Delete posts"],
    category: "fullstack",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Full Stack", value: "fullstack" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function ProjectCard({ project }) {
  return (
    <motion.article
      variants={item}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg shadow-slate-950/30 transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_16px_38px_rgba(34,211,238,0.2)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
        {project.featured && (
          <span className="absolute left-3 top-3 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-200">
            Featured
          </span>
        )}
      </div>

      <div className="space-y-4 p-5 sm:p-6">
        <h2 className="text-xl font-semibold text-white">{project.title}</h2>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((entry) => (
            <span
              key={entry}
              className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {entry}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 text-sm text-slate-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-cyan-400/35"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projectData;
    }

    return projectData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative space-y-8 pb-8 sm:space-y-10"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-56 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_65%)]" />

      <motion.header variants={item}>
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          Portfolio Work
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Selected projects that reflect my full-stack development skills, UI focus,
          and practical problem-solving approach.
        </p>
      </motion.header>

      <motion.div variants={item} className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.value;

          return (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={[
                "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
                isActive
                  ? "border-cyan-300/60 bg-cyan-300/15 text-cyan-200"
                  : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-200",
              ].join(" ")}
            >
              {filter.label}
            </button>
          );
        })}
      </motion.div>

      <motion.div variants={container} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;
