import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import {
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Facebook,
  Github,
  Instagram,
  ArrowUpRight,
  Briefcase,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { FiverrIcon, UpworkIcon } from "@/components/common/BrandIcons";
import { toast } from "sonner";

const projectTypes = [
  "Custom React Website",
  "Full Stack MERN Application",
  "Landing Page & CRO",
  "Figma to React Conversion",
  "Bug Fixing / Code Refactoring",
  "Other / Retainer",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $3,000",
  "$3,000 - $5,000",
  "$5,000+",
  "Hourly / Not Sure Yet",
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: projectTypes[0],
    budgetRange: budgetRanges[1],
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in your name, email, and project message.");
      return;
    }

    setSubmitting(true);

    // Architectural placeholder ready for EmailJS / Formspree / backend endpoint integration
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Thank you! Your project inquiry has been received.", {
        description: "Adittya will respond via email within 24 hours.",
      });
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectType: projectTypes[0],
      budgetRange: budgetRanges[1],
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let’s Discuss Your Next Project"
          description="Have a new web application in mind, need Figma converted into clean React code, or seeking a dedicated developer? Send a message and let's get started."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm space-y-6">
              <h3 className="font-heading text-lg font-bold text-neutral-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 mt-0.5">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="font-medium text-neutral-900 dark:text-white hover:text-amber-500 transition-colors"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Response Time
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      Guaranteed within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mt-0.5">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-neutral-500 block uppercase">
                      Location &amp; Working Hours
                    </span>
                    <span className="font-medium text-neutral-900 dark:text-white">
                      {siteConfig.timezone} • Remote Worldwide
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Profile Links */}
              <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Direct Messages &amp; Platforms:
                </h4>
                <div className="flex flex-col gap-2 text-xs">
                  <a
                    href={siteConfig.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/40 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <div className="flex items-center gap-2">
                      <Linkedin size={15} className="text-blue-500" />
                      <span>Message on LinkedIn</span>
                    </div>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </a>

                  <a
                    href={siteConfig.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-600/40 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <div className="flex items-center gap-2">
                      <Facebook size={15} className="text-blue-600" />
                      <span>Connect on Facebook</span>
                    </div>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </a>

                  <a
                    href={siteConfig.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <div className="flex items-center gap-2">
                      <Github size={15} />
                      <span>Review Code on GitHub</span>
                    </div>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </a>

                  <a
                    href={siteConfig.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-pink-500/40 transition-colors text-neutral-700 dark:text-neutral-300"
                  >
                    <div className="flex items-center gap-2">
                      <Instagram size={15} className="text-pink-500" />
                      <span>Follow on Instagram (@coderx_dev)</span>
                    </div>
                    <ArrowUpRight size={13} className="text-neutral-400" />
                  </a>
                </div>
              </div>

              {/* Prominent Hire Me On Freelance Platforms Section */}
              <div className="pt-5 border-t border-neutral-200 dark:border-neutral-800 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Briefcase size={14} />
                    </span>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                      Hire Me On Freelance Platforms
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    Escrow Protected
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 leading-snug">
                  Prefer ordering via third-party escrow with verified milestone safety? Hire me directly on Fiverr or Upwork:
                </p>

                <div className="space-y-2.5">
                  {/* Fiverr Card */}
                  <a
                    href={siteConfig.socialLinks.fiverr}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-3.5 rounded-xl border-2 border-[#1dbf73]/40 bg-[#1dbf73]/5 dark:bg-[#1dbf73]/10 hover:border-[#1dbf73] hover:bg-[#1dbf73]/15 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <FiverrIcon className="w-8 h-8 rounded-lg shadow-sm shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#1dbf73] transition-colors">
                            Hire on Fiverr
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#1dbf73]/20 text-[#1dbf73]">
                            Verified Seller
                          </span>
                        </div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 block leading-tight mt-0.5">
                          Custom web gigs, fast delivery &amp; 100% buyer protection
                        </span>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#1dbf73]/10 text-[#1dbf73] group-hover:bg-[#1dbf73] group-hover:text-white transition-all shrink-0 ml-2">
                      <ArrowUpRight size={15} />
                    </div>
                  </a>

                  {/* Upwork Card */}
                  <a
                    href={siteConfig.socialLinks.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-between p-3.5 rounded-xl border-2 border-[#14a800]/40 bg-[#14a800]/5 dark:bg-[#14a800]/10 hover:border-[#14a800] hover:bg-[#14a800]/15 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <UpworkIcon className="w-8 h-8 rounded-lg shadow-sm shrink-0" />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-[#14a800] transition-colors">
                            Hire on Upwork
                          </span>
                          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-[#14a800]/20 text-[#14a800]">
                            Verified Talent
                          </span>
                        </div>
                        <span className="text-xs text-neutral-600 dark:text-neutral-400 block leading-tight mt-0.5">
                          Hourly contracts, fixed-price milestones &amp; escrow security
                        </span>
                      </div>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#14a800]/10 text-[#14a800] group-hover:bg-[#14a800] group-hover:text-white transition-all shrink-0 ml-2">
                      <ArrowUpRight size={15} />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-neutral-900 dark:text-white">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-neutral-900 dark:text-white">{formData.name}</strong>. Adittya has received your project details and will review your specifications before reaching out at <strong className="text-neutral-900 dark:text-white">{formData.email}</strong>.
                  </p>
                  <div className="pt-4">
                    <Button variant="secondary" onClick={handleReset}>
                      Send Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide block"
                      >
                        Your Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Miller"
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide block"
                      >
                        Your Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@company.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="projectType"
                      className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide block"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="budgetRange"
                      className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide block"
                    >
                      Estimated Budget (USD)
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
                    >
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 uppercase tracking-wide block"
                    >
                      Project Overview &amp; Goals <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your product, what you need built, existing Figma links, or any upcoming deadlines..."
                      className="w-full px-4 py-2.5 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 text-sm text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={submitting}
                    className="w-full justify-center"
                  >
                    {submitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Project Inquiry</span>
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-center text-neutral-500 font-mono">
                    Zero spam. Your project information remains strictly confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
