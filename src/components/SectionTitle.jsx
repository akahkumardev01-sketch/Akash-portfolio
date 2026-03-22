function SectionTitle({ badge, title, subtitle, className = "" }) {
  return (
    <header className={["space-y-3", className].join(" ")}>
      {badge && (
        <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
          {badge}
        </p>
      )}

      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {title}
      </h1>

      {subtitle && (
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export default SectionTitle;
