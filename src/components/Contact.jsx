import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'fallback' | null
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject line';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters)';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Realistic submission simulation with client validation + mailto fallback hook
    setTimeout(() => {
      setSubmitting(false);
      setSubmitStatus('success');

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#06b6d4', '#10b981', '#6366f1']
        });
      } catch (err) {
        // ignore if canvas not supported
      }
    }, 600);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  // Generate direct pre-filled mailto URI
  const mailtoUri = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    formData.subject || 'Data Analyst Opportunity'
  )}&body=${encodeURIComponent(
    `Hello Shubham,\n\nName: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\nMessage:\n${formData.message || ''}`
  )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 inline-flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" /> Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let&apos;s Turn Opportunities Into Insights.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            I&apos;m looking forward to connecting with teams and professionals who value data-driven thinking, business intelligence, and continuous learning.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Direct Access Information (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
              // Direct Access Details
            </div>

            {/* Email Card */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Mobile / WhatsApp</div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">LinkedIn</div>
                  <div className="text-[10px] text-slate-400 font-mono">Connect Profile</div>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-xl border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">GitHub</div>
                  <div className="text-[10px] text-slate-400 font-mono">Shubham-6280</div>
                </div>
              </a>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/30 text-xs text-slate-300 space-y-1">
              <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Availability for Roles
              </div>
              <p className="font-light text-slate-400 text-[11px] leading-relaxed">
                Currently open for Data Analyst internships, trainee programs, and entry-level positions where practical SQL, Excel, and Power BI skills can deliver business value.
              </p>
            </div>
          </div>

          {/* Working Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-bold text-white">Send a Message</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">Validated Input Form</span>
              </div>

              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Prepared Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>! Since this is a static frontend deployment, your message details have been validated. You can launch your mail client now with one click:
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={mailtoUri}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-emerald-400 to-teal-400 hover:opacity-95 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Open Pre-filled Email</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitStatus(null);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-300 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                          errors.name ? 'border-rose-500/60' : 'border-white/10'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priya@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                          errors.email ? 'border-rose-500/60' : 'border-white/10'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[10px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Data Analyst Internship / Project Inquiry"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors ${
                        errors.subject ? 'border-rose-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-[10px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your team, your open opportunities, or your data requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-black/40 border text-xs text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors resize-none ${
                        errors.message ? 'border-rose-500/60' : 'border-white/10'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[10px] text-rose-400 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button & Direct Mailto Trigger */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-slate-900 bg-gradient-to-r from-cyan-400 to-sky-400 hover:opacity-95 transition-all shadow-md shadow-cyan-500/25 active:scale-95 disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{submitting ? 'Validating...' : 'Submit Message'}</span>
                    </button>

                    <a
                      href={mailtoUri}
                      className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors flex items-center gap-1"
                    >
                      Or open directly in mail client <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
