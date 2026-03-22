import { motion } from "framer-motion";

function Card({
  children,
  className = "",
  as: Component = "article",
  ...props
}) {
  const MotionComponent = motion(Component);

  const classes = [
    "rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-950/30 transition duration-300 hover:border-cyan-300/60 hover:shadow-[0_14px_36px_rgba(34,211,238,0.18)]",
    className,
  ].join(" ");

  return (
    <MotionComponent
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={classes}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}

export default Card;
