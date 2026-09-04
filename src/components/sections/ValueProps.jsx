import { valuePropositions } from "@/data/processData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TrendingUp, ShieldCheck, Clock, Zap } from "lucide-react";

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Clock,
  Zap,
};

export const ValueProps = () => {
  return (
    <section className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-900/10">
      <Container>
        <SectionHeading
          eyebrow="The Competitive Advantage"
          title="Why Work With Me?"
          description="Hiring the wrong developer leads to delayed deadlines, communication friction, and buggy code. Here is how I protect your time, budget, and product quality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuePropositions.map((prop) => {
            const Icon = iconMap[prop.icon] || ShieldCheck;

            return (
              <div
                key={prop.title}
                className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm"
              >
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white mb-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
