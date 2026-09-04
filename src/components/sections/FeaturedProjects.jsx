import { projectsData } from "@/data/projectsData";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Badge } from "@/components/common/Badge";
import { ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-100/30 dark:bg-neutral-900/10">
      <Container>
        <SectionHeading
          eyebrow="Portfolio & Proof"
          title="Featured Web Development Projects"
          description="A curated selection of web applications and digital products engineered with clean architecture, responsive UX, and scalable code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Large Project Image Preview with Browser Chrome Bar */}
                <div className="relative border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
                  {/* Subtle top browser bar decoration */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-200/50 dark:bg-neutral-900/90 border-b border-neutral-200/60 dark:border-neutral-800 text-[11px] font-mono text-neutral-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                    </div>
                    <span className="truncate max-w-[200px]">
                      {project.id}.production.app
                    </span>
                    <Badge variant="accent" className="text-[10px] py-0 px-2">
                      {project.badge}
                    </Badge>
                  </div>

                  {/* Image Viewport */}
                  <div className="aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Features */}
                  <div className="pt-2">
                    <p className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-500 mb-2">
                      Core Implementation:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.keyFeatures.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-1.5 text-xs text-neutral-700 dark:text-neutral-300"
                        >
                          <CheckCircle2 size={13} className="text-amber-500 mt-0.5 shrink-0" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="default" className="font-mono text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-100 dark:border-neutral-800/80 mt-4">
                <div className="flex items-center gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-neutral-900 text-white dark:bg-neutral-800/90 dark:text-neutral-100 border border-neutral-800 dark:border-neutral-700 hover:bg-amber-500 hover:text-neutral-950 dark:hover:bg-amber-500 dark:hover:text-neutral-950 hover:border-amber-400 dark:hover:border-amber-400 hover:shadow-[0_0_18px_rgba(245,158,11,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                  >
                    <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors"
                  >
                    <Github size={14} />
                    <span>View Code</span>
                  </a>
                </div>

                {project.isPlaceholderLink && (
                  <span className="text-[11px] font-mono text-neutral-400">
                    Live Demo Link Pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
