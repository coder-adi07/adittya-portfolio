import { cn } from "@/lib/utils";

export const Badge = ({ children, variant = "default", className = "" }) => {
  const variants = {
    default: "bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-700/60",
    accent: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    outline: "border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border transition-colors",
        variants[variant] || variants.default,
        className
      )}
    >
      {children}
    </span>
  );
};
