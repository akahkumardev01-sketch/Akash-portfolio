const variantClasses = {
  primary:
    "bg-cyan-300 text-slate-950 hover:-translate-y-0.5 hover:bg-cyan-200 shadow-lg shadow-cyan-500/20",
  outline:
    "border border-slate-700 bg-slate-900/70 text-slate-100 hover:-translate-y-0.5 hover:border-cyan-300/70 hover:text-cyan-200",
};

function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition duration-300",
    variantClasses[variant] || variantClasses.primary,
    className,
  ].join(" ");

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
