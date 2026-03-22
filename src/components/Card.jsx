function Card({
  children,
  className = "",
  as: Component = "article",
  ...props
}) {
  const classes = [
    "rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30 transition duration-300",
    className,
  ].join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

export default Card;
