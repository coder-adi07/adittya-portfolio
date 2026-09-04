import { techStackData } from "@/data/techStackData";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/common/Container";
import { CheckCircle2 } from "lucide-react";

export const TechStack = () => {
  return (
    <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/40 dark:bg-neutral-900/20">
      <Container>
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-neutral-200 dark:border-neutral-800">
          {siteConfig.stats.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-200">
                {item.label}
              </div>
              <div className="text-xs text-neutral-500 leading-snug">
                {item.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Categorized Grid */}
        <div className="pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Technology Stack
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white mt-2">
              Modern Tooling for Scalable, Secure Applications
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Tested production stacks built for high speed, search engine visibility, and seamless maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {techStackData.map((cat) => (
              <div
                key={cat.category}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-sm"
              >
                <h3 className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-bold mb-4 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-[10px] text-neutral-400 font-normal">
                    {cat.skills.length} tools
                  </span>
                </h3>

                <ul className="space-y-3">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-start justify-between text-sm pb-2.5 border-b border-neutral-100 dark:border-neutral-800/60 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          size={14}
                          className={
                            skill.highlight
                              ? "text-amber-500"
                              : "text-neutral-400"
                          }
                        />
                        <span className="font-medium text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-neutral-500 font-mono">
                        {skill.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
