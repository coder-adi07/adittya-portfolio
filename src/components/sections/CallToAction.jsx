import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { ArrowRight, Sparkles, Linkedin } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative subtle texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <Container className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-mono uppercase tracking-wider">
          <Sparkles size={12} />
          <span>Currently Accepting New Clients</span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Ready to Build a High-Performing Web Application?
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Let’s discuss your requirements, timeline, and budget. Whether starting from a blank canvas or refining an existing codebase, you’ll get clean architecture and responsive delivery.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="#contact" variant="primary" size="lg">
            <span>Let's Discuss Your Project</span>
            <ArrowRight size={16} />
          </Button>
          <Button
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
            className="bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-700"
          >
            <Linkedin size={16} className="text-blue-400" />
            <span>Message on LinkedIn</span>
          </Button>
        </div>
      </Container>
    </section>
  );
};
