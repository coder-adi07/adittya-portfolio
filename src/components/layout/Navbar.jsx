import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { useTheme } from "@/context/useTheme";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/common/BrandLogo";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Background blur threshold
          setScrolled(currentScrollY > 20);

          // Auto-hide when scrolling down, show when scrolling up
          if (currentScrollY <= 20) {
            setVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 60) {
            // Scrolling DOWN -> hide navbar
            setVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling UP -> reveal navbar
            setVisible(true);
          }

          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out will-change-transform ${
        visible || mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-white/85 dark:bg-[#09090b]/85 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <a href="#" aria-label={`${siteConfig.name} - Home`}>
            <BrandLogo />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-100/70 dark:bg-neutral-900/60 p-1.5 rounded-full border border-neutral-200/70 dark:border-neutral-800">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white rounded-full transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              {theme === "dark" ? (
                <Sun size={17} className="text-amber-400" />
              ) : (
                <Moon size={17} className="text-neutral-700" />
              )}
            </button>

            {/* Direct Hire Me CTA */}
            <Button href="#contact" variant="primary" size="sm">
              Let's Talk <ArrowUpRight size={14} />
            </Button>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle visual theme"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-amber-400" />
              ) : (
                <Moon size={18} className="text-neutral-700" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open main navigation menu"
              className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl px-6 py-5 overflow-hidden"
          >
            <nav className="flex flex-col gap-3">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 border-b border-neutral-100 dark:border-neutral-900 text-neutral-700 dark:text-neutral-300"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Start a Project
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
