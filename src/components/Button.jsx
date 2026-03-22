import { motion } from "framer-motion";

const variantClasses = {
  primary:
    "bg-cyan-300 text-slate-950 hover:bg-cyan-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/35",
  outline:
    "border border-slate-700 bg-slate-900/70 text-slate-100 hover:border-cyan-300/70 hover:text-cyan-200 hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]",
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
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
