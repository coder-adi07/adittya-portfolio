import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Star, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";

export const SocialProof = () => {
  return (
    <section className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/40 dark:bg-neutral-900/20">
      <Container>
        <SectionHeading
          eyebrow="Trust & Standards"
          title="Commitment to Quality & Client Satisfaction"
          description="Every contract and collaboration is backed by standard professional guarantees to ensure your investment delivers real results."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Commitment Card 1 */}
          <div className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
              100% On-Time Milestones
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Every sprint is planned with clear completion dates. You receive regular demos so you can track progress in real time with zero surprise delays.
            </p>
          </div>

          {/* Commitment Card 2 */}
          <div className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-4">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
              <ShieldCheck size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
              Full Code Ownership &amp; IP
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              You own 100% of the intellectual property, repository, assets, and documentation. No locked proprietary tools, no ongoing developer ransom.
            </p>
          </div>

          {/* Commitment Card 3 */}
          <div className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-4">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 w-fit">
              <MessageSquare size={20} />
            </div>
            <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
              Post-Launch Support
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Deployment isn't the end of our relationship. I provide post-launch bug fixing, handover assistance, and deployment verification to ensure a smooth transition.
            </p>
          </div>
        </div>

        {/* Verification Guarantee Strip */}
        <div className="p-6 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2 font-mono">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <span>Ready for contracts via Direct Escrow, Upwork, or Fiverr</span>
          </div>
          <span className="font-mono text-neutral-500">
            Client reviews &amp; platform ratings are verified upon contract completion.
          </span>
        </div>
      </Container>
    </section>
  );
};
