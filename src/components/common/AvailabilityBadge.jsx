export const AvailabilityBadge = ({ label = "Available for New Projects", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-xs font-medium tracking-wide ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span>{label}</span>
    </div>
  );
};
