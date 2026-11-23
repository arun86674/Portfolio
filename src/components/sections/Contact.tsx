import { useState, type FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ScrollReveal from '../ui/ScrollReveal';
import Button from '../ui/Button';
import { contactContent, socialLinks, personalInfo } from '../../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, integrate EmailJS, Formspree, or your backend endpoint.
    // For now, construct a mailto link so the user can send immediately via their email client:
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry from ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputClasses =
    'w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:border-accent-indigo/50 focus:bg-white/[0.05] focus:outline-none focus:ring-1 focus:ring-accent-indigo/40 transition-all duration-300 text-sm';

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent-indigo/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionHeading
          title={contactContent.heading}
          subtitle={contactContent.description}
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">
          {/* Left: Contact Form */}
          <ScrollReveal className="lg:col-span-3">
            <GlassCard padding="p-6 sm:p-8" hover={false}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Recruiter / Collaborator"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={inputClasses}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={inputClasses}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Job Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => handleChange('subject', e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Hi Arun, I'd like to discuss an opportunity..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`${inputClasses} resize-none`}
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send size={16} />
                    Send Message
                  </Button>
                  {submitted && (
                    <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={14} />
                      Email composer opened!
                    </span>
                  )}
                </div>
              </form>
            </GlassCard>
          </ScrollReveal>

          {/* Right: Contact Information Cards */}
          <ScrollReveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {/* Email */}
              <GlassCard padding="p-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent-indigo/10 text-accent-indigo group-hover:bg-accent-indigo/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Direct Email</p>
                    <p className="text-white font-semibold text-sm truncate group-hover:text-accent-indigo transition-colors">
                      {personalInfo.email}
                    </p>
                  </div>
                </a>
              </GlassCard>

              {/* Phone */}
              <GlassCard padding="p-5">
                <a
                  href={`tel:${personalInfo.phoneRaw}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-accent-violet/10 text-accent-violet group-hover:bg-accent-violet/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Phone / WhatsApp</p>
                    <p className="text-white font-semibold text-sm group-hover:text-accent-violet transition-colors">
                      {personalInfo.phone}
                    </p>
                  </div>
                </a>
              </GlassCard>

              {/* Location */}
              <GlassCard padding="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent-blue/10 text-accent-blue">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white font-semibold text-sm">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </GlassCard>

              {/* Social Profiles */}
              <GlassCard padding="p-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Professional Profiles</p>
                <div className="space-y-2.5">
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-accent-indigo transition-colors"
                  >
                    <Linkedin size={17} className="text-accent-indigo" />
                    <span>LinkedIn Profile</span>
                    <ExternalLink size={13} className="ml-auto opacity-50" />
                  </a>
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-accent-indigo transition-colors"
                  >
                    <Github size={17} className="text-accent-indigo" />
                    <span>GitHub Profile</span>
                    <ExternalLink size={13} className="ml-auto opacity-50" />
                  </a>
                  <a
                    href={socialLinks.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-accent-indigo transition-colors"
                  >
                    <ExternalLink size={17} className="text-accent-indigo" />
                    <span>LeetCode Profile</span>
                    <ExternalLink size={13} className="ml-auto opacity-50" />
                  </a>
                </div>
              </GlassCard>

              {/* Resume download */}
              <Button
                href={personalInfo.resumeUrl}
                variant="primary"
                size="lg"
                className="w-full"
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
