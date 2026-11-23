import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { contactContent, socialLinks, personalInfo } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-indigo/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          tag="Get In Touch"
          title={contactContent.heading}
          subtitle={contactContent.description}
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Primary Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <ScrollReveal delay={0.05}>
              <GlassCard padding="p-6" className="h-full">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3.5 rounded-xl bg-accent-indigo/10 text-accent-indigo border border-accent-indigo/20 group-hover:bg-accent-indigo/20 group-hover:text-accent-cyan transition-all">
                    <Mail size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Direct Email</p>
                    <p className="text-white font-semibold text-sm sm:text-base break-all group-hover:text-accent-cyan transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
              </GlassCard>
            </ScrollReveal>

            {/* Phone */}
            <ScrollReveal delay={0.1}>
              <GlassCard padding="p-6" className="h-full">
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3.5 rounded-xl bg-accent-violet/10 text-accent-violet border border-accent-violet/20 group-hover:bg-accent-violet/20 group-hover:text-accent-cyan transition-all">
                    <Phone size={22} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">Phone / WhatsApp</p>
                    <p className="text-white font-semibold text-sm sm:text-base group-hover:text-accent-violet transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>
              </GlassCard>
            </ScrollReveal>
          </div>

          {/* Location & Details */}
          <ScrollReveal delay={0.15}>
            <GlassCard padding="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20 flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-0.5">Location</p>
                  <p className="text-white font-semibold text-sm sm:text-base">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Professional Profiles */}
          <ScrollReveal delay={0.2}>
            <GlassCard padding="p-6">
              <p className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">
                Professional Profiles
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-accent-indigo/40 hover:text-white text-slate-300 transition-all duration-300 group"
                >
                  <Linkedin size={18} className="text-accent-indigo group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LinkedIn</span>
                  <ExternalLink size={13} className="ml-auto opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-accent-indigo/40 hover:text-white text-slate-300 transition-all duration-300 group"
                >
                  <Github size={18} className="text-accent-indigo group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">GitHub</span>
                  <ExternalLink size={13} className="ml-auto opacity-40 group-hover:opacity-100" />
                </a>

                <a
                  href={socialLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-accent-indigo/40 hover:text-white text-slate-300 transition-all duration-300 group"
                >
                  <ExternalLink size={18} className="text-accent-indigo group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">LeetCode</span>
                  <ExternalLink size={13} className="ml-auto opacity-40 group-hover:opacity-100" />
                </a>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Resume Download CTA */}
          <ScrollReveal delay={0.25}>
            <div className="pt-2">
              <Button
                href={personalInfo.resumeUrl}
                variant="primary"
                size="lg"
                className="w-full shadow-lg shadow-accent-indigo/25 hover:shadow-accent-indigo/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={18} />
                Download Verified Resume (PDF)
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
