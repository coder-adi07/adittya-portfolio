import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { AvailabilityBadge } from "@/components/common/AvailabilityBadge";
import { ArrowRight, Code2, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { FiverrIcon, UpworkIcon } from "@/components/common/BrandIcons";
import { motion } from "framer-motion";
import profilePhoto from "@/assets/adittya-hero.webp";
import { Hero3DTechCanvas } from "@/components/common/Hero3DTechCanvas";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-neutral-200/80 dark:border-neutral-800/80">
      {/* Three.js Interactive 3D Tech Scene */}
      <Hero3DTechCanvas />

      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <AvailabilityBadge />
              <span className="hidden sm:inline-block text-xs font-mono text-neutral-500">
                • {siteConfig.location}
              </span>
            </div>

            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-amber-600 dark:text-amber-400 uppercase">
                {siteConfig.name} — {siteConfig.title}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.12]">
                Building Modern, <br className="hidden sm:inline" />
                <span className="text-amber-500 dark:text-amber-400">
                  Conversion-Focused
                </span>{" "}
                Web Applications.
              </h1>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
              I partner with US, UK, and international startup founders, agencies, and businesses to engineer fast, responsive, and user-centric React and MERN stack applications that deliver tangible business results.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="#projects" variant="primary" size="lg">
                <span>View My Work</span>
                <ArrowRight size={16} />
              </Button>
              <Button href="#contact" variant="secondary" size="lg">
                <span>Let's Work Together</span>
              </Button>
            </div>

            {/* Trust and Hire options */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800/80">
              <p className="text-xs text-neutral-500 uppercase tracking-wider mb-2.5 font-mono">
                Direct Contracts &amp; Freelance Platforms:
              </p>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 font-medium">
                  <CheckCircle2 size={13} className="text-emerald-500" /> Direct Client Invoicing
                </span>
                <a
                  href={siteConfig.socialLinks.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-emerald-500/60 transition-colors font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <UpworkIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Upwork Ready</span>
                </a>
                <a
                  href={siteConfig.socialLinks.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 hover:border-green-500/60 transition-colors font-medium text-neutral-700 dark:text-neutral-300"
                >
                  <FiverrIcon className="w-3.5 h-3.5 shrink-0" />
                  <span>Fiverr Ready</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card with Adittya's Profile Photo & Tech Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl p-2">
                <div className="aspect-[4/4.5] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={profilePhoto}
                    alt="Adittya Rahman - Full Stack Developer"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Editorial mini badge */}
                <div className="p-4 bg-white dark:bg-neutral-900 flex items-center justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-sm text-neutral-900 dark:text-white">
                      Adittya Rahman
                    </h3>
                    <p className="text-xs text-neutral-500 font-mono">
                      Full Stack MERN Engineer
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold">
                    <Sparkles size={13} />
                    <span>Top Rated UX</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Stack Card */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700/80 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md shadow-xl">
                <div className="p-2.5 rounded-lg bg-amber-500 text-neutral-950">
                  <Code2 size={20} />
                </div>
                <div>
                  <div className="text-xs font-bold text-neutral-900 dark:text-white">
                    Production MERN Stack
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    React • Node • Express • MongoDB
                  </div>
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-neutral-200 text-xs font-mono shadow-lg">
                <Terminal size={12} className="text-emerald-400" />
                <span>npm run deploy:success</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
