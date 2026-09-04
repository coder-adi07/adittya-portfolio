export const BrandLogo = ({ className = "" }) => {
  return (
    <div className={`group flex items-center gap-3 cursor-pointer select-none transition-transform duration-200 ${className}`}>
      {/* Animated Emblem / Tech Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm group-hover:border-amber-500/50 dark:group-hover:border-amber-400/50 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.25)] transition-all duration-300 group-hover:scale-105 overflow-hidden">
        {/* Subtle breathing ambient background sweep */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-emerald-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Code Tech Emblem: < X /> */}
        <div className="relative flex items-center font-mono text-sm font-black tracking-tighter">
          <span className="text-amber-600 dark:text-amber-400 transition-transform duration-200 group-hover:-translate-x-0.5">
            &lt;
          </span>
          <span className="text-neutral-900 dark:text-white font-extrabold mx-[1.5px] group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
            X
          </span>
          <span className="text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </div>

        {/* Live micro status dot (emerald online pulse) */}
        <span className="absolute bottom-1 right-1 flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
      </div>

      {/* Name and CoderX_Dev Identity */}
      <div className="flex flex-col text-left">
        {/* Name: Adittya Rahman */}
        <span className="font-heading text-[16px] sm:text-[17px] font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-200 leading-tight">
          Adittya Rahman
        </span>

        {/* CoderX_Dev Animated Sub-Logo */}
        <div className="flex items-center gap-1.5 leading-none mt-0.5">
          <div className="inline-flex items-center px-1.5 py-0.5 rounded-md bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800/80 font-mono text-[11px] font-medium tracking-wide shadow-[0_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none group-hover:border-amber-500/30 transition-colors">
            <span className="text-neutral-700 dark:text-neutral-300 font-semibold">
              Coder
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-black tracking-tight">
              X
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              _Dev
            </span>
            {/* Pulsing blinking terminal cursor */}
            <span className="inline-block w-1.5 h-2.5 ml-1 bg-amber-500 dark:bg-amber-400 animate-pulse rounded-[1px]"></span>
          </div>

          <span className="text-[9px] font-mono font-medium text-neutral-400 dark:text-neutral-500 tracking-wider uppercase hidden sm:inline-block">
            Full Stack
          </span>
        </div>
      </div>
    </div>
  );
};
