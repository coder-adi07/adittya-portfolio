import { cn } from "@/lib/utils";

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
