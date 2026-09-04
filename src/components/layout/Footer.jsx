import { siteConfig } from "@/data/siteConfig";
import { Github, Linkedin, Facebook, Instagram, ArrowUp, Mail } from "lucide-react";
import { Container } from "@/components/common/Container";
import { BrandLogo } from "@/components/common/BrandLogo";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-950/60 pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-200 dark:border-neutral-800/80">
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" aria-label={`${siteConfig.name} - Home`} className="inline-block">
              <BrandLogo />
            </a>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md leading-relaxed">
              Full Stack Web Developer specializing in custom React interfaces, robust MERN architectures, and conversion-focused web engineering for startups, agencies, and businesses worldwide.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Based in {siteConfig.timezone} • Remote Worldwide</span>
              </span>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="inline-flex items-center gap-1.5 hover:text-amber-500 transition-colors text-neutral-600 dark:text-neutral-400 font-sans font-medium"
              >
                <Mail size={13} className="text-amber-500" />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Social & Platforms */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-900 dark:text-neutral-200">
              Verified Profiles
            </h3>
            <div className="flex flex-col gap-2.5 text-sm">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                <Github size={16} />
                <span>GitHub (@coder-adi07)</span>
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={16} />
                <span>LinkedIn (@adittyarahmanad)</span>
              </a>
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 transition-colors"
              >
                <Facebook size={16} />
                <span>Facebook (@Adittya Rahman)</span>
              </a>
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-pink-500 transition-colors"
              >
                <Instagram size={16} />
                <span>Instagram (@coderx_dev)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Sub-footer bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {siteConfig.name} ({siteConfig.brand}). Built with React &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-200 transition-colors py-1 px-2 rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
};
