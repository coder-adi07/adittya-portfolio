import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { GraduationCap, Briefcase, Code2, Globe, ArrowUpRight } from "lucide-react";
import aboutPhoto from "@/assets/adittya-about.webp";

export const About = () => {
  return (
    <section id="about" className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <Container>
        <SectionHeading
          eyebrow="Background & Philosophy"
          title="Meet Adittya Rahman"
          description="A pragmatic full-stack developer committed to crafting fast, intuitive software with clean code and thoughtful design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo & Credentials Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg p-2">
              <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={aboutPhoto}
                  alt="Adittya Rahman working on code"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-white dark:bg-neutral-900 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Developer Profile</span>
                  <span className="text-amber-600 dark:text-amber-400 font-semibold">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <GraduationCap size={15} className="text-amber-500" />
                  <span>B.Sc. in CSE • Daffodil International University</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                  <Globe size={15} className="text-emerald-500" />
                  <span>Timezone overlap for US (EST/PST) &amp; UK (GMT)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                I am a <strong className="text-neutral-900 dark:text-white font-semibold">Full Stack Web Developer</strong> with over 4 years of hands-on experience building, debugging, and deploying web applications with <strong className="text-neutral-900 dark:text-white font-semibold">React.js, Node.js, Express, MongoDB, and Tailwind CSS</strong>.
              </p>
              <p>
                My philosophy is straightforward: <strong className="text-neutral-900 dark:text-white font-semibold">software should drive business goals</strong>. It’s not enough for an application to look good or run on a local machine — it must load instantly, rank well on search engines, guide users naturally toward conversion, and maintain clean architecture that other engineers can scale.
              </p>
              <p>
                I regularly work with international founders, agency directors, and solo entrepreneurs who need a dependable technical partner. Whether taking a project from an initial Figma mockup to production or stepping in to rescue a stalled React codebase, I prioritize clear expectations and timely execution.
              </p>
            </div>

            {/* Quick Principles Badges */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-3">
                Core Development Principles:
              </h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Component Modularity</Badge>
                <Badge variant="default">Sub-Second Page Loads</Badge>
                <Badge variant="default">100% Mobile Responsiveness</Badge>
                <Badge variant="default">Zero Vendor Lock-in</Badge>
                <Badge variant="default">Clean REST API Contracts</Badge>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white"
              >
                <span>Explore GitHub Activity</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
