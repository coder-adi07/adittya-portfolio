import { servicesData } from "@/data/servicesData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import {
  Code2,
  Layers,
  Zap,
  Layout,
  Smartphone,
  Bug,
  Gauge,
  BarChart3,
  ArrowRight,
  Check,
} from "lucide-react";

const iconMap = {
  Code2,
  Layers,
  Zap,
  Layout,
  Smartphone,
  Bug,
  Gauge,
  BarChart3,
};

export const Services = () => {
  return (
    <section id="services" className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <Container>
        <SectionHeading
          eyebrow="Client-Focused Solutions"
          title="What Problems Can I Solve For Your Business?"
          description="I don't just write code — I build high-performing digital tools engineered to eliminate bottlenecks, increase conversion rates, and help your business scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName] || Code2;

            return (
              <div
                key={service.id}
                className="group p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs text-amber-600 dark:text-amber-400 font-bold bg-amber-500/10 px-2 py-1 rounded">
                      {service.number}
                    </span>
                    <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 group-hover:text-amber-500 transition-colors">
                      <Icon size={20} />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                    {service.shortTag}
                  </span>
                  <h3 className="font-heading text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                    {service.problemSolved}
                  </p>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2.5">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-neutral-700 dark:text-neutral-300"
                        >
                          <Check size={13} className="text-amber-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-neutral-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
