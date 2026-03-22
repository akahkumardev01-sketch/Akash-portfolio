const projects = [
  { title: "Todo App", description: "Task management app with CRUD operations." },
  { title: "Calculator", description: "A responsive calculator for daily usage." },
  { title: "Blog Website", description: "A content-driven blog platform with clean layout." },
];

function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Projects</h1>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:border-cyan-300/50"
          >
            <h2 className="text-xl font-semibold text-white">{project.title}</h2>
            <p className="mt-2 text-slate-300">{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
