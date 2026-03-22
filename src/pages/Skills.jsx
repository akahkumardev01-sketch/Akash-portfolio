const skills = [
  "MERN Stack",
  "Basic DSA",
  "Graphic Designing",
  "UI/UX Designing",
];

function Skills() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">Skills</h1>
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <article
            key={skill}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:text-cyan-200"
          >
            {skill}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
