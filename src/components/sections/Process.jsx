import { processSteps } from "@/data/processData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Check } from "lucide-react";

export const Process = () => {
  return (
    <section id="process" className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <Container>
        <SectionHeading
          eyebrow="Workflow & Delivery"
          title="How I Work With Remote Clients"
          description="A structured, zero-headache development process designed for founders and teams seeking reliable milestones, clear communication, and predictable delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100">
                    PHASE {step.step}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-amber-600 dark:text-amber-400 mb-4">
                  {step.subtitle}
                </p>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                  Milestone Deliverables:
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 text-xs text-neutral-700 dark:text-neutral-300"
                    >
                      <Check size={12} className="text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
